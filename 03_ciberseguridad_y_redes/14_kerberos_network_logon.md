# 🧠 Kerberos en Active Directory – TL;DR técnico

## 🔐 ¿Qué hace Kerberos con tus credenciales?

| Paso | Acción |
|------|--------|
| 1️⃣ | Usuario escribe usuario + contraseña |
| 2️⃣ | El sistema **no envía la contraseña** al servidor |
| 3️⃣ | Cifra un timestamp con la clave derivada de la contraseña |
| 4️⃣ | El KDC verifica ese cifrado y **emite un TGT** |
| ✅ | Si todo cuadra, se acepta la sesión y se puede acceder a servicios |

---

## 🧠 ¿Qué es la cuenta `krbtgt`?

| Elemento | Función |
|----------|---------|
| `krbtgt` | Cuenta especial en Active Directory |
| ¿Qué hace? | Firma y cifra todos los TGT (tickets de autenticación) |
| ¿Quién la usa? | Solo el KDC, nunca el usuario directamente |
| ¿Por qué importa? | Si se compromete, se pueden falsificar tickets (Golden Ticket) |

---

## 🛡️ ¿Cómo se protege Kerberos?

| Acción | Propósito |
|--------|-----------|
| Cambiar la contraseña de `krbtgt` 2 veces | Invalida tickets falsos si hubo ataque |
| Monitorear logs de autenticación | Detecta uso indebido de tickets |
| Deshabilitar inicio de sesión en `krbtgt` | Evita que se use como cuenta normal |
| Usar contraseñas fuertes y GPOs | Refuerza seguridad general del dominio |

---

## 💣 ¿Cómo se vulnera?

| Ataque | Qué hace |
|--------|----------|
| **Golden Ticket** | Usa el hash de `krbtgt` para crear tickets falsos |
| **Kerberoasting** | Extrae tickets de servicios y crackea contraseñas offline |
| **Pass-the-Ticket** | Reutiliza tickets robados para acceder sin credenciales |

---

## 🧪 ¿Cómo se usa desde terminal?

```bash
# Autenticarse con Kerberos
kinit usuario@DOMINIO.COM

# Ver los tickets activos
klist

# Obtener ticket para un servicio
kvno servicio/host@DOMINIO.COM


## 🔗 Network Logon – TL;DR técnico

### 🧠 ¿Qué es?

| Elemento | Descripción |
|---------|-------------|
| Network Logon | Tipo de inicio de sesión sin interacción directa (ej. acceso a recursos compartidos) |
| ¿Dónde ocurre? | Desde otro equipo en la red hacia un servidor o recurso |
| ¿Usa Kerberos? | Sí, si está disponible; si no, cae en NTLM |
| ¿Logon Type? | Tipo 3 en los eventos de seguridad de Windows |

---

### ⚙️ ¿Cómo se instala o habilita?

| Acción | Resultado |
|--------|----------|
| Unir equipos al dominio | Habilita Network Logon automáticamente |
| Configurar recursos compartidos | Permite acceso remoto con autenticación |
| Activar servicios como SMB, RDP, IIS | Usan Network Logon para validar usuarios |

---

### 🛡️ ¿Cómo se protege?

| Acción | Propósito |
|--------|-----------|
| Usar Kerberos en vez de NTLM | Evita ataques de relay y hash |
| Auditar eventos 4624/4625 con Logon Type 3 | Detecta accesos sospechosos |
| Aplicar GPOs restrictivas | Limita quién puede usar Network Logon |
| Actualizar controladores de dominio | Evita vulnerabilidades como Zerologon |

---

### 💣 ¿Cómo se vulnera?

| Ataque | Qué hace |
|--------|----------|
| **Zerologon (CVE-2020-1472)** | Permite acceso total al dominio si Netlogon está mal configurado |
| **Pass-the-Hash / Relay** | Reutiliza credenciales para acceder vía Network Logon |
| **RPC abuse** | Llamadas maliciosas al canal seguro de Netlogon para escalar privilegios |

---

### 📋 Eventos clave en logs

| Evento | Significado |
|--------|-------------|
| 4624 | Inicio de sesión exitoso |
| 4625 | Fallo de inicio de sesión |
| Logon Type 3 | Network Logon (sin sesión interactiva) |
| Proceso: Kerberos o NTLM | Indica el protocolo usado |

---

### 🧪 Comando útil para auditar (PowerShell)

```powershell
# Filtrar eventos de Network Logon con Kerberos
Get-WinEvent -FilterHashtable @{
  LogName='Security';
  ID=4624
} | Where-Object {
  $_.Properties[8].Value -eq 'Kerberos' -and
  $_.Properties[10].Value -eq 3
}

## 🔥 Kerberoasting – TL;DR técnico

### 🧠 ¿Qué es?

| Elemento       | Descripción |
|----------------|-------------|
| Kerberoasting  | Ataque que explota Kerberos para obtener contraseñas de cuentas de servicio |
| Objetivo       | Crackear offline los hashes de tickets TGS (Service Tickets) |
| Requisitos     | Acceso a una cuenta de dominio (no necesita privilegios elevados) |
| ¿Por qué funciona? | Los TGS están cifrados con el hash de la contraseña del servicio (SPN) |

---

### ⚙️ ¿Cómo se realiza?

```plaintext
1. El atacante solicita un TGS para una cuenta con SPN
2. El KDC entrega el ticket cifrado con el hash de la contraseña del servicio
3. El atacante extrae el ticket (TGS) y lo guarda
4. Usa herramientas como Hashcat para crackear el hash offline

## 🛡️ ¿Cómo se protege Kerberos del Kerberoasting?

| Acción                                      | Propósito                                      |
|--------------------------------------------|------------------------------------------------|
| Contraseñas fuertes en cuentas de servicio | Dificulta el cracking offline                  |
| Usar cuentas gMSA (Managed Service Accounts)| Evita contraseñas estáticas                    |
| Limitar SPNs innecesarios                  | Reduce superficie de ataque                    |
| Monitorear eventos 4769                    | Detecta solicitudes sospechosas de TGS         |
| Aplicar GPOs para delegación               | Controla qué cuentas pueden solicitar tickets  |

---

## 💣 Herramientas comunes para Kerberoasting

| Herramienta         | Uso principal                          |
|---------------------|----------------------------------------|
| **Rubeus**          | Solicitar y extraer TGS                |
| **Impacket**        | Enumerar SPNs y obtener tickets        |
| **Hashcat**         | Crackear hashes de tickets             |
| **John the Ripper** | Alternativa para cracking offline      |

---

## 📋 Eventos clave en logs (Windows)

| Evento     | Descripción                                               |
|------------|-----------------------------------------------------------|
| **4769**   | Solicitud de TGS (Service Ticket)                         |
| **SPN sospechoso** | Cuentas con privilegios elevados o contraseñas débiles |

---

## 🧪 Comando útil (PowerShell)

```powershell
# Detectar solicitudes de TGS (eventos 4769)
Get-WinEvent -FilterHashtable @{
  LogName='Security';
  ID=4769
} | Where-Object {
  $_.Properties[5].Value -like '*@DOMINIO.LOCAL'
}

## 🧠 DCSync – TL;DR técnico

### 🔍 ¿Qué es?

| Elemento         | Descripción                                                                 |
|------------------|------------------------------------------------------------------------------|
| DCSync           | Técnica que simula ser un controlador de dominio (DC) para pedir replicación de datos |
| Objetivo         | Obtener hashes de contraseñas de cualquier cuenta, incluyendo `krbtgt`       |
| Protocolo        | Usa DRSUAPI (Directory Replication Service Remote Protocol)                  |
| Herramienta común| Mimikatz (`lsadump::dcsync`)                                                 |

---

### ⚙️ ¿Cómo se realiza?

```plaintext
1. El atacante obtiene privilegios elevados (ej. Domain Admin)
2. Usa DRSUAPI para pedir replicación de objetos del dominio
3. El DC responde con datos sensibles (ej. hashes NTLM, Kerberos)
4. El atacante puede usar los hashes para ataques como Golden Ticket

## 🛡️ ¿Cómo se protege DCSync?

| Acción                                                  | Propósito                                                   |
|----------------------------------------------------------|--------------------------------------------------------------|
| Restringir permisos de replicación (`DS-Replication-Get-Changes-All`) | Evita que cuentas no autorizadas usen DCSync                |
| Auditar uso de `lsadump::dcsync` en logs                 | Detecta actividad sospechosa                                 |
| Usar Microsoft Defender for Identity                     | Detecta y alerta sobre DCSync desde equipos no autorizados   |
| Revisar membresía de grupos privilegiados                | Evita que cuentas innecesarias tengan permisos de replicación|

---

## 💣 ¿Por qué es crítico?

| Riesgo                        | Impacto                                                  |
|------------------------------|-----------------------------------------------------------|
| Robo de hash de `krbtgt`     | Permite forjar Golden Tickets y persistencia total       |
| No requiere acceso físico    | Puede ejecutarse desde cualquier equipo con permisos     |
| Difícil de detectar          | No genera eventos típicos de inicio de sesión            |

---

## 📋 Eventos y detección

| Indicador                          | Descripción                                             |
|-----------------------------------|---------------------------------------------------------|
| Replicación desde equipo que no es DC | Señal clara de DCSync                                 |
| Actividad de `lsadump::dcsync`    | Comando usado en Mimikatz                              |
| Defender for Identity             | Detecta y clasifica cuentas con permisos DCSync        |

---

## 🧪 Comando en Mimikatz

```plaintext
lsadump::dcsync /domain:DOMINIO.LOCAL /user:krbtgt
