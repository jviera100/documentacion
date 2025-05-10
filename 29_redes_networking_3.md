### Conversión de Decimal a Binario: Valor 192

La tabla ilustra el proceso de conversión del número decimal 192 a su equivalente binario de 8 bits.

*   **Valor decimal:** El número a convertir (en este caso, 192).
*   **Base:** La base del sistema numérico binario (2).
*   **Exponente:** El exponente de la base 2 para cada posición del bit.
*   **Posición:** El valor posicional de cada bit (128, 64, 32, 16, 8, 4, 2, 1).
*   **Bit:** El valor binario (0 o 1) que indica si la posición correspondiente contribuye al valor decimal.

**Tabla de Conversión (Horizontal):**

| **Valor Decimal** | 192 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |

**Resultado Binario:** 11000000

**Explicación:**

Para obtener 192 en decimal, necesitamos los siguientes valores posicionales:

*   128 (2^7)
*   64 (2^6)

128 + 64 = 192. Por lo tanto, los bits correspondientes a esas posiciones son 1, y los demás son 0. El resultado binario se lee de izquierda a derecha dentro de la tabla, correspondiente al orden de los exponentes y posiciones.

# convirtiendo desde tabla de conversion con calculos de decimal a hexadecimal y viceversa

**1. Tabla de Conversión (Decimal <-> Hexadecimal) - Horizontal:**

| Decimal: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hexadecimal: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |

**2. Resumen del Cálculo:**

*   **Decimal -> Hexadecimal (División):**
    *   Divide sucesivamente por 16.
    *   El cociente y el residuo de cada división se convierten a hexadecimal usando la tabla de conversión (arriba).  **Ejemplo:** 202 / 16 = 12 (C) residuo 10 (A) => CA
*   **Hexadecimal -> Decimal (Multiplicación):**
    *   Cada dígito hexadecimal se convierte a decimal usando la tabla de conversión (arriba).
    *   Cada dígito decimal se multiplica por 16 elevado a la potencia de su posición (de derecha a izquierda, comenzando con 0).
    *   Los resultados se suman. **Ejemplo:** 7D = (7 * 16^1) + (13 * 16^0) = 112 + 13 = 125

# convirtiendo desde tabla de posicion y tabla conversion de decimal a binario a hexadecimal

**Tabla de Conversión (decimal a Binario):**

| **Valor decimal** | 197 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

128 + 64 + 4 + 1 = 197

**Tabla de Conversión (Binario a hexadecimal):**

| **Valor Binario** | 11000101 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

el primero suma 8 + 4 = 12 = c (tabla conversion) y la otra mitad suma 4 + 1 = 5

# convirtiendo desde tabla de posicion y tabla conversion de hexadecimal a binario a decimal

**Tabla de Conversión (hexadecimal a Binario):**

| **Valor Hexadecimal** | 9F |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

el primero suma 8 + 1 = 9 y la otra mitad suma 8 + 4+ 2 + 1 = 15 (porque F=15)

**Tabla de Conversión (Binario a decimal):**

| **Valor Binario** | 10011111 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

128 + 16 + 8 +4 +2 +1 = 159



---------------------------------------------------------------
# **NetGamesLatam_Cisco_Fundamentos de Redes:**

## Fundamentos de Direccionamiento IP y Conexión a Internet: Una Guía Rápida

### 1. Anatomía de una Dirección IP en tu Red Local (LAN)

Toda dirección IP en tu red local (como la de tu PC o teléfono) tiene dos componentes principales, definidos por su **máscara de subred**. La máscara se expresa comúnmente en **Notación CIDR** (ej: `/24`).

| Componente       | Descripción                                                                 | Ejemplo (`192.168.1.45/24`)         |
|------------------|------------------------------------------------------------------------------|-----------------------------------|
| **Parte de Red** | Identifica la "calle" o subred a la que pertenece el dispositivo. Es común a todos los dispositivos en la misma subred. | `192.168.1` (primeros 24 bits)      |
| **Parte de Host**| Identifica el "número de casa" o dispositivo específico dentro de esa subred. Varía para cada dispositivo.  | `.45` (últimos 8 bits)              |

Dentro de tu subred local (ej: `192.168.1.0/24`), existen tres tipos de direcciones IP importantes:

| Tipo de IP en la Subred     | ¿Qué es?                                                                | Ejemplo (`192.168.1.0/24`)         |
|-----------------------------|-------------------------------------------------------------------------|----------------------------------|
| **Dirección de Red**            | Identifica a toda la subred. No se asigna a dispositivos.              | `192.168.1.0`                      |
| **Direcciones de Host Usables** | Rango de IPs que pueden tener tus dispositivos (PCs, móviles, etc.).                        | `192.168.1.1` a `192.168.1.254`      |
| **Dirección de Broadcast**      | Envía un mensaje a *todos* los dispositivos de esa subred simultáneamente.               | `192.168.1.255`                    |

**Bits y Dispositivos**:
La "Parte de Host" de la IP determina cuántos dispositivos pueden conectarse.
Con `/24`, hay 8 bits para hosts (2⁸ = 256 combinaciones).
Restando la Dirección de Red y la de Broadcast, quedan **254 IPs usables**.

---
### 2. Conexión al Mundo Exterior: El Router, NAT y Visibilidad de IPs

Para que tus dispositivos con IPs privadas (en tu LAN) puedan acceder a Internet (que usa IPs públicas), tu router es el intermediario esencial. Utiliza una técnica llamada **NAT (Network Address Translation)**.

| Componente / Concepto          | Descripción                                                                                                                              | Tu PC (Host Privado) | Router (Interfaz LAN)         | Router (Interfaz WAN) | Internet (Servidor Externo) |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------------------|-----------------------|-----------------------------|
| **Tipo de IP**                 | Indica si la IP es para uso interno (Privada) o visible en Internet (Pública).                                                             | Privada              | Privada                       | Pública               | Pública                     |
| **Ejemplo de IP**              | Dirección numérica que identifica al dispositivo.                                                                                          | `192.168.1.45/24`    | `192.168.1.1/24`              | `181.160.25.12`       | `142.250.184.174` (Google)  |
| **Visible para...**            | Quién puede "ver" directamente esta dirección IP.                                                                                        | Solo dentro de tu LAN | Solo dentro de tu LAN        | Todo Internet         | Todo Internet               |
| **Función Principal**          | El rol que juega cada elemento.                                                                                                          | Usar servicios de red | **Puerta de Enlace (Gateway)** para la LAN, Servidor DHCP, Realizar **NAT** | Conectar a Internet   | Proveer servicios           |
| **Interfaz LAN del Router**    | Conecta el router a tu red local (LAN). Tiene una IP privada que es la puerta de enlace para tus dispositivos.                              |                      | `192.168.1.1`                  |                       |                             |
| **Interfaz WAN del Router**    | Conecta el router a Internet (a través de tu ISP). Tiene la IP pública que te representa en Internet.                                      |                      |                               | `181.160.25.12`       |                             |
| **NAT (Network Address Translation)** | **Mecanismo de Traducción:** <br>1. **Salida:** Tu PC (`192.168.1.45`) envía datos al router (Gateway). <br>2. **Traducción:** El router cambia la IP de origen privada por su IP pública (`181.160.25.12`) y la envía a Internet, registrando la conexión. <br>3. **Retorno:** La respuesta llega a la IP pública del router. Éste consulta su registro y reenvía la respuesta al PC original. |                      | Es realizado por el router    | Implica esta IP       |                             |
| **Efecto Principal de NAT**    | Permite que múltiples dispositivos con IPs privadas compartan una única IP pública para acceder a Internet, **ocultando las IPs privadas** de la red interna del mundo exterior. |                      |                               |                       |                             |

**En resumen, gracias a NAT:**
*   Tu **IP privada** (`192.168.1.45`) solo es visible dentro de tu red local.
*   El **mundo exterior** (como Google) solo ve la **IP pública** de tu router (`181.160.25.12`).
*   El router actúa como un "traductor" y "guardia de seguridad", manejando el flujo de datos entre tu red privada e Internet.
  
### 4. Definiciones Esenciales

| Concepto                         | ¿Qué es?                                                                 |
|----------------------------------|--------------------------------------------------------------------------|
| **Enrutador (Router)**           | Dispositivo que conecta redes distintas (ej: tu LAN con Internet) y dirige el tráfico entre ellas. |
| **Interfaz**                     | Punto de conexión (físico o lógico) en un dispositivo de red. El router tiene al menos dos: una LAN (interna) y una WAN (externa). |
| **Puerta de Enlace (Gateway)**   | La dirección IP de la interfaz LAN del router. Es la "salida" de tu red local hacia otras redes. Los dispositivos de tu LAN la usan para comunicarse con el exterior. |
| **NAT (Network Address Translation)** | Técnica usada por el router para permitir que múltiples dispositivos con IPs privadas compartan una única IP pública para acceder a Internet, traduciendo las direcciones en el proceso. |
| **Cliente DHCP**                 | Dispositivo (como un PC) que solicita automáticamente su configuración de red (IP, máscara, gateway, DNS). |
| **Servidor DHCP**                | Servidor (a menudo el router) que asigna y administra la configuración de red a los clientes DHCP. |

---

### 5. Rangos Comunes de IP Privada (RFC 1918)

Estos rangos de IP están reservados para redes privadas y no son visibles directamente en Internet. Tu router usa NAT para permitir la comunicación.

| Rango de IP Privada             | Máscara de Subred (Bloque Completo) | Uso Típico / Implementación Común                                                                                                |
|---------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `10.0.0.0` – `10.255.255.255`   | `255.0.0.0` (`/8`)                  | Empresas grandes (el bloque `/8` se subdivide en múltiples subredes más pequeñas).                                                  |
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` (`/12`)                 | Empresas medianas (el bloque `/12` se subdivide en subredes).                                                                    |
| `192.168.0.0` – `192.168.255.255`| `255.255.0.0` (`/16`)                 | **Hogares / Pequeñas Empresas:** Comúnmente se utiliza una subred `/24` de este bloque (ej: `192.168.1.0/24`, con 254 hosts usables). |

*Nota: En cada subred creada, 2 IPs no son usables por hosts: la Dirección de Red y la Dirección de Broadcast.*

---

