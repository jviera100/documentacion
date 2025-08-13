# 🛡️ Guía Práctica de Seguridad Personal: “Capa por Capa, Sin Regalar Oportunidades”

## 🔧 Infraestructura Base Segura

| Elemento                  | Recomendación Máxima Seguridad                              | Justificación Técnica / Pedagógica                        |
|---------------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| **Sistema Operativo PC**  | Qubes OS / Tails / Whonix                                    | Aislamiento por VM (Qubes), anonimato extremo (Tails)     |
| **Sistema Operativo Móvil** | GrapheneOS (Pixel) / CalyxOS                                | Android hardened, sin Google tracking                     |
| **Hardware Alternativo**  | Raspberry Pi + VPN local + Pi-hole                          | Red aislada, DNS filtrado, nodo VPN propio                |
| **Virtualización**        | VirtualBox / KVM / QEMU con red interna + snapshots         | Laboratorio controlado, rollback ante infección           |
| **Firewall Personal**     | pfSense / OpenWRT / UFW configurado manualmente             | Control total de tráfico saliente/entrante                |

---

## 🌐 Navegación y Red

| Elemento                  | Recomendación Máxima Seguridad                              | Justificación Técnica / Pedagógica                        |
|---------------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| **Navegador Web**         | Tor Browser / Firefox Hardened                              | Tor para anonimato, Firefox con configuración estricta    |
| **Extensiones clave**     | uBlock Origin, NoScript, HTTPS Everywhere                   | Bloqueo de scripts, rastreadores y conexiones inseguras   |
| **VPN**                   | Mullvad / ProtonVPN / VPN propio en VPS                     | Sin logs, IP dinámica, túnel cifrado                      |
| **DNS Seguro**            | DNSCrypt / DoH con NextDNS o Pi-hole                        | Evita filtrado ISP y rastreo por DNS                      |
| **Red WiFi**              | WPA3, SSID oculto, MAC filtering                            | Reduce vectores de ataque locales                         |

---

## 🔐 Datos, Archivos y Mensajería

| Elemento                  | Recomendación Máxima Seguridad                              | Justificación Técnica / Pedagógica                        |
|---------------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| **Cifrado de Archivos**   | Veracrypt / GPG / ZIP AES                                   | Protección en reposo, incluso si se extraen               |
| **Mensajería Segura**     | Signal / Session / Element (Matrix)                         | E2EE, sin metadatos, descentralizado                      |
| **Correo Electrónico**    | ProtonMail / Tutanota / GPG sobre Thunderbird               | Cifrado extremo, sin rastreo                              |
| **Transferencia de Archivos** | Magic Wormhole / OnionShare / Syncthing                 | P2P cifrado, sin intermediarios                           |

---

## 🧠 Comportamiento y Control

| Elemento                  | Recomendación Máxima Seguridad                              | Justificación Técnica / Pedagógica                        |
|---------------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| **Autenticación**         | 2FA físico (YubiKey), SSH Keys, contraseñas únicas          | Evita phishing, acceso no autorizado                      |
| **Gestor de Contraseñas** | KeePassXC / Bitwarden (self-hosted)                         | Vault cifrado, sin dependencia de terceros                |
| **Aislamiento de tareas** | VM por propósito (browsing, pentest, docs)                  | Minimiza impacto cruzado entre entornos                   |
| **Actualizaciones**       | Manuales, verificadas, desde fuentes oficiales              | Evita actualizaciones maliciosas                          |
| **Backups**               | Offline, cifrados, en dispositivos separados                | Recuperación ante ransomware o pérdida                    |

# 📦 Anexo Técnico: Descarga, Instalación y Uso de Herramientas de Seguridad

## 🖥️ Sistemas Operativos Seguros

### Qubes OS
- **Gratis**: ✅
- **Descarga**: [qubes-os.org/downloads](https://www.qubes-os.org/downloads/)
- **Instalación**: [Guía paso a paso con capturas](https://computingforgeeks.com/install-qubes-os-step-by-step-with-screenshots/)
- **Uso básico**: Aislamiento por qubes (VMs), cada uno con propósito distinto. Ideal para tareas separadas como navegación, pentesting, correo.

### Tails OS
- **Gratis**: ✅
- **Descarga**: [tails.net/install](https://tails.net/install/)
- **Instalación**: USB booteable con Etcher o Rufus. [Guía oficial](https://tails.net/install/windows/)
- **Uso básico**: Navegación anónima por Tor, no deja rastros en el sistema. Ideal para sesiones temporales.

### Whonix
- **Gratis**: ✅
- **Descarga**: [whonix.org/wiki/Download](https://www.whonix.org/wiki/Download)
- **Instalación**: Importar Gateway y Workstation en VirtualBox. [Guía detallada](https://www.techiemike.com/a-step-by-step-guide-to-setting-up-whonix-for-enhanced-internet-privacy/)
- **Uso básico**: Todo el tráfico pasa por Tor. Gateway maneja red, Workstation ejecuta apps.

### GrapheneOS
- **Gratis**: ✅
- **Descarga**: [grapheneos.org/install](https://grapheneos.org/install/)
- **Instalación**: WebUSB installer desde navegador Chromium. Solo para dispositivos Pixel compatibles.
- **Uso básico**: Android hardened, sin Google. Auditor, Vanadium, control granular de permisos.

### CalyxOS
- **Gratis**: ✅
- **Descarga**: [calyxos.org/install](https://calyxos.org/install/)
- **Instalación**: Flasher oficial + imagen del sistema. Requiere desbloqueo de bootloader.
- **Uso básico**: Android privado con microG, VPN integrada, Aurora Store.

---

## 🧱 Infraestructura y Virtualización

### Raspberry Pi + VPN + Pi-hole
- **Gratis**: ✅ (requiere hardware)
- **VPN Setup**: [WireGuard con PiVPN](https://www.youtube.com/watch?v=DUpIOSbbvKk)
- **Pi-hole Setup**: [pi-hole.net](https://pi-hole.net/)
- **Uso básico**: Red local filtrada, DNS seguro, nodo VPN propio.

### VirtualBox
- **Gratis**: ✅
- **Descarga**: [virtualbox.org](https://www.virtualbox.org/)
- **Instalación**: [Guía paso a paso](https://devopscube.com/virtual-box-tutorial/)
- **Uso básico**: Crear VMs para aislamiento de tareas, snapshots, red interna.

### KVM / QEMU
- **Gratis**: ✅
- **Instalación en Ubuntu**: `sudo apt install qemu-kvm libvirt-daemon-system virt-manager`
- **Guía**: [Ubuntu KVM Beginner’s Guide](https://ubuntu.com/blog/kvm-hyphervisor)
- **Uso básico**: Virtualización nativa, ideal para servidores y entornos productivos.

---

## 🔐 Firewall y Red

### pfSense
- **Gratis**: ✅
- **Descarga**: [pfsense.org/download](https://www.pfsense.org/download/)
- **Instalación**: USB booteable, interfaz web. [Guía oficial](https://docs.netgate.com/pfsense/en/latest/install/install-walkthrough.html)
- **Uso básico**: Firewall completo, NAT, VPN, VLAN, reglas granulares.

### OpenWRT
- **Gratis**: ✅
- **Descarga**: [openwrt.org](https://openwrt.org/)
- **Instalación**: Flashear firmware específico del router. [Guía rápida](https://openwrt.org/docs/guide-quick-start/start)
- **Uso básico**: Router personalizado, SPAN port, VLAN, QoS, firewall extendido.

### UFW (Uncomplicated Firewall)
- **Gratis**: ✅
- **Instalación**: `sudo apt install ufw`
- **Configuración básica**:
  ```bash
  sudo ufw default deny incoming
  sudo ufw default allow outgoing
  sudo ufw allow ssh
  sudo ufw enable

# 🛡️ Guía de Herramientas de Privacidad y Seguridad para Principiantes

Esta tabla resume cómo instalar y usar cada herramienta, con enfoque en facilidad de uso, propósito y nivel de anonimato. Ideal para usuarios sin experiencia técnica.

| Herramienta        | Propósito Principal                  | Instalación Básica (Linux)                         | Uso Básico                                     | Nivel de Anonimato | Requiere Tor |
|--------------------|--------------------------------------|----------------------------------------------------|------------------------------------------------|---------------------|--------------|
| **VeraCrypt**      | Cifrado de discos y volúmenes        | `sudo apt install veracrypt` o usar `.deb` desde [veracrypt.io](https://veracrypt.io/en/Downloads.html) | Crear volumen → Montar → Guardar archivos      | Alto (local)        | No           |
| **GPG**            | Cifrado de archivos y mensajes       | `sudo apt install gnupg`                           | `gpg --encrypt --recipient user file.txt`       | Alto (manual)       | No           |
| **Signal**         | Mensajería cifrada                   | App Store / Play Store / `flatpak install signal`  | Registrar número → Chatear → Llamadas seguras   | Alto (metadatos mínimos) | No      |
| **Session**        | Mensajería anónima sin número        | `flatpak install org.getsession.Session`           | Crear cuenta → Compartir ID → Chatear           | Muy alto            | Sí (usa red onion propia) |
| **Element (Matrix)** | Mensajería descentralizada         | `flatpak install im.riot.Riot` o usar web          | Crear cuenta → Unirse a salas → Chatear         | Medio–Alto          | Opcional     |
| **ProtonMail**     | Correo electrónico cifrado           | Web: [proton.me](https://proton.me)                | Crear cuenta → Enviar correos cifrados          | Alto                | No           |
| **Tutanota**       | Correo electrónico cifrado           | `flatpak install com.tutanota.Tutanota`            | Crear cuenta → Enviar correos cifrados          | Alto                | No           |
| **Magic Wormhole** | Transferencia segura de archivos     | `pip install magic-wormhole` o `snap install wormhole` | `wormhole send file.txt` → `wormhole receive code` | Alto (peer-to-peer) | No           |
| **OnionShare**     | Compartir archivos y chat anónimos   | `flatpak install org.onionshare.OnionShare`        | Arrastrar archivo → Generar link `.onion`       | Muy alto            | Sí           |
| **Syncthing**      | Sincronización privada de archivos   | `sudo apt install syncthing` o usar Snap/Flatpak   | Añadir carpeta → Compartir con otro dispositivo | Medio–Alto          | No           |

---

## 🧠 Recomendaciones para Principiantes

- 🔐 **Empieza con Signal o ProtonMail** si buscas privacidad sin complicaciones.
- 🕵️ **Usa Session o OnionShare** si necesitas anonimato real sin revelar identidad.
- 📁 **Magic Wormhole** es ideal para enviar archivos sin configurar servidores.
- 🧩 **Syncthing** es útil para sincronizar carpetas entre dispositivos sin nube.

# 🧱 Seguridad Extrema: Cifrado, Aislamiento, Detección y Defensa Activa

## 🔐 Cifrado de Disco Completo

| Herramienta        | Sistema Compatible | Instalación Básica                            | Uso Básico                                       | Nivel de Seguridad |
|--------------------|--------------------|-----------------------------------------------|--------------------------------------------------|---------------------|
| **BitLocker**      | Windows Pro/Ent    | Panel de control → BitLocker                  | Activar → Elegir PIN → Guardar clave de recuperación | Alto                |
| **LUKS (dm-crypt)**| Linux              | `cryptsetup luksFormat /dev/sdX`              | Cifrado completo con passphrase en arranque      | Muy alto            |
| **Veracrypt**      | Win/Linux/macOS    | GUI o CLI (`veracrypt --text`)                | Crear volumen → Montar → Usar como disco normal  | Alto                |

---

## 🧪 Aislamiento y Sandboxing de Aplicaciones

| Herramienta        | Plataforma          | Instalación Básica                            | Uso Básico                                       | Propósito           |
|--------------------|---------------------|-----------------------------------------------|--------------------------------------------------|----------------------|
| **Firejail**       | Linux               | `sudo apt install firejail`                   | `firejail firefox`                               | Aislar apps por perfil |
| **Flatpak**        | Linux               | `sudo apt install flatpak`                    | `flatpak run org.mozilla.firefox`                | Contenedor seguro     |
| **Windows Sandbox**| Windows Pro/Ent     | Activar en “Características de Windows”       | Ejecutar entorno aislado temporal                | Pruebas seguras       |
| **Qubes OS**       | Linux (dedicado)    | ISO desde [qubes-os.org](https://www.qubes-os.org/) | VM por tarea → Navegación, correo, pentest       | Aislamiento total     |

---

## 🕵️ Detección de Intrusos y Defensa Activa

| Herramienta        | Tipo                | Instalación Básica                            | Uso Básico                                       | Nivel de Visibilidad |
|--------------------|---------------------|-----------------------------------------------|--------------------------------------------------|-----------------------|
| **OSSEC**          | HIDS (Linux/Win)    | [Guía oficial](https://github.com/Itsme-crypto/OSSEC-IDS-Setup) | Monitorea logs, integridad, alertas por correo   | Alta                  |
| **CrowdSec**       | HIDS + Remediación  | `sudo apt install crowdsec`                   | Detecta ataques → Bouncer bloquea IPs           | Muy alta              |
| **Auditd**         | Linux               | `sudo apt install auditd`                     | Monitorea syscalls, accesos, cambios críticos    | Alta                  |
| **Fail2Ban**       | Linux               | `sudo apt install fail2ban`                   | Detecta brute force → bloquea IPs                | Media                 |

---

## 🧬 Técnicas Avanzadas de Protección

| Técnica                  | Descripción                                                  | Herramienta Recomendada                         |
|--------------------------|--------------------------------------------------------------|--------------------------------------------------|
| **Honeytokens**          | Archivos falsos para detectar acceso no autorizado           | Crear `.docx` con alerta → monitorear acceso     |
| **Canary Files**         | Archivos trampa con alertas automáticas                      | OSSEC / Auditd / scripts personalizados          |
| **Steganografía**        | Ocultar datos dentro de imágenes o audio                     | `steghide`, `zsteg`, `outguess`                  |
| **Red Team Local**       | Simular ataques para probar defensas                         | `Metasploit`, `Caldera`, `Atomic Red Team`       |
| **Control de Integridad**| Detectar cambios en archivos clave                           | `AIDE`, `Tripwire`, `OSSEC`                      |

---

## 🧠 Flujo de Seguridad Recomendada

```text
[Usuario] → [VM o Sandbox] → [Navegador Hardened] → [VPN + DNS Seguro] → [Firewall Personal]
        ↘ [Mensajería Cifrada] ↘ [Correo Seguro] ↘ [Transferencia Segura]
        ↘ [Cifrado de Disco] ↘ [Backups Offline] ↘ [Monitor IDS/HIDS]
```
## 🧰 Scripts Útiles
## 🔐 Crear volumen Veracrypt desde CLI

veracrypt --text --create /home/user/secure.hc \
  --size 500M --encryption AES --hash SHA-512 \
  --filesystem ext4 --password "TuClaveSegura"
## 🧪 Ejecutar Firefox en Firejail

firejail --private firefox
## 🕵️ Ver alertas OSSEC
sudo tail -f /var/ossec/logs/alerts/alerts.log

## 🛡️ Activar CrowdSec y ver IPs bloqueadas
sudo systemctl start crowdsec
sudo cscli decisions list

# 🧠 Seguridad Extrema: Fingerprinting, Sistemas Amnésicos y Zero Trust en Casa

## 🕵️ Evasión de Fingerprinting

| Técnica                       | Descripción                                                                 | Herramientas / Acciones Recomendadas                                                                 |
|------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **Uniformidad de huella**    | Usar configuraciones genéricas para parecerse a muchos usuarios             | Tor Browser (todos los usuarios comparten fingerprint)                                                |
| **Spoofing activo**          | Alterar manualmente User-Agent, WebGL, Canvas, etc.                         | `CanvasBlocker`, `User-Agent Switcher`, `Trace`, `Chameleon`                                          |
| **Bloqueo de scripts**       | Evitar que scripts recopilen datos del navegador                            | `NoScript`, `uBlock Origin`, `Privacy Badger`                                                         |
| **Navegadores modificados**  | Usar navegadores diseñados para evadir fingerprinting                       | Brave (con fingerprint randomization), LibreWolf                                                      |
| **Automatización stealth**   | Emular comportamiento humano en scraping o navegación automatizada          | `puppeteer-extra-plugin-stealth`, `CreepJS` para testeo                                               |
| **Red privada + DNS seguro** | Evitar correlación por IP o DNS                                             | VPN + Pi-hole + DNSCrypt                                                                              |

---

## 🧊 Sistemas Amnésicos

| Sistema Operativo        | Característica Principal                         | Uso Ideal                                  | Persistencia | Requiere Instalación |
|--------------------------|--------------------------------------------------|---------------------------------------------|--------------|-----------------------|
| **Tails OS**             | No guarda datos, todo pasa por Tor               | Activismo, periodismo, navegación anónima   | Opcional     | USB booteable         |
| **Whonix**               | VM dividida en Gateway (Tor) y Workstation       | Anonimato en entorno virtualizado           | Sí           | VirtualBox / KVM      |
| **Qubes OS**             | Aislamiento total por VM                         | Seguridad extrema, compartimentalización    | Sí           | Instalación dedicada  |
| **PureOS (Live)**        | Basado en Debian, enfocado en privacidad         | Uso general con enfoque ético               | Sí           | USB o disco           |

---

## 🏠 Arquitectura Zero Trust para el Hogar

| Principio Zero Trust     | Aplicación Doméstica                                         | Herramientas / Acciones Recomendadas                          |
|--------------------------|--------------------------------------------------------------|----------------------------------------------------------------|
| **No confiar por defecto**| Autenticación para cada dispositivo y usuario                | WPA3, contraseñas únicas, 2FA, SSH keys                        |
| **Acceso mínimo necesario**| Limitar permisos por dispositivo                            | VLANs, reglas de firewall, control parental                    |
| **Segmentación de red**  | Separar dispositivos por función                             | Red principal / IoT / invitados (SSID separados)               |
| **Monitoreo continuo**   | Detectar actividad sospechosa                                 | OSSEC, CrowdSec, logs del router, IDS local                    |
| **Autenticación fuerte** | Verificación constante de identidad                          | YubiKey, Bitwarden, MFA en servicios                          |

---

## 🧬 Diagrama de Flujo: Zero Trust + Amnesia + Fingerprint Evasion

```text
[Usuario] 
   ↳ [Sistema Amnésico (Tails / Whonix / Qubes)]
       ↳ [Navegador Hardened (Tor / Firefox + NoScript)]
           ↳ [VPN + DNS Seguro + Pi-hole]
               ↳ [Firewall Personal + Segmentación de Red]
                   ↳ [Mensajería Cifrada + Correo Seguro]
                       ↳ [Transferencia Segura + Cifrado de Disco]
                           ↳ [Monitor IDS + Alertas + Backups Offline]

```
## 🧰 Scripts y Comandos Útiles
## 🛡️ Crear red segmentada en OpenWRT

uci set network.iot=interface
uci set network.iot.proto='static'
uci set network.iot.ipaddr='192.168.50.1'
uci set network.iot.netmask='255.255.255.0'
uci commit network
/etc/init.d/network restart
## 🔐 Activar DNSCrypt en Linux
sudo apt install dnscrypt-proxy
sudo systemctl enable dnscrypt-proxy
sudo systemctl start dnscrypt-proxy
## 🧪 Fingerprint Evasion en Firefox
about:config
privacy.resistFingerprinting → true
webgl.disabled → true
canvas.poisondata → true


## 📦 Recomendaciones Finales
-🧠 Usa Tails para sesiones críticas: No deja rastros, ideal para navegación sensible.

-🧱 Implementa Zero Trust en casa: Divide tu red, autentica todo, monitorea constantemente.

-🕵️ Evade fingerprinting con uniformidad y bloqueo de scripts: No destaques, no reveles.

-🔐 Cifra todo: Disco, archivos, comunicaciones. La privacidad empieza por el cifrado.

-🧬 Combina capas: No hay solución única. La seguridad real es modular y adaptativa.

----------------------------------------------------------

# 🛡️ ZERO TRUST DEFENSE: KISS Edition
## *"Nunca confíes, siempre verifica"*

> **Filosofía KISS**: Zero Trust no es complicado. Es simplemente **NO CONFIAR EN NADA** hasta que demuestre que es legítimo.

---

## 🧠 **MINDSET MENTAL** *(Ver primero para entender el concepto)*

| 🎥 **Videos Esenciales** | Duración | Propósito |
|--------------------------|----------|-----------|
| [What is Zero Trust? - IBM](https://www.youtube.com/watch?v=CFNy9jN3iCQ) | 5 min | Concepto básico |
| [Zero Trust Architecture Explained](https://www.youtube.com/watch?v=1cozDbMjNoc) | 8 min | Implementación práctica |
| [Home Network Security](https://www.youtube.com/watch?v=YEzLVdH4n-M) | 15 min | Aplicación doméstica |

---

## 📋 **MATRIZ ZERO TRUST SIMPLIFICADA**

| Principio | En Casa Normal | Zero Trust Casa | Herramienta | Tiempo Setup |
|-----------|----------------|-----------------|-------------|--------------|
| **Identidad** | Router password admin/admin | Cada dispositivo autenticado | YubiKey + pfSense | 30 min |
| **Dispositivos** | Todos en misma red | Segmentación por VLANs | Managed Switch | 45 min |
| **Aplicaciones** | Acceso libre | Whitelist + firewall | UFW + AppArmor | 20 min |
| **Datos** | Sin cifrar | Todo cifrado | LUKS + VeraCrypt | 40 min |
| **Red** | Confía en LAN | Monitoreo total | Pi-hole + Ntopng | 60 min |

---

## 🚀 **CAPÍTULO 1: FUNDACIÓN (Semana 1)**

### **Día 1-2: Identidad Fuerte**
```bash
# TLDR: Tu YubiKey = tu llave física para TODO
wget https://github.com/Yubico/yubikey-manager/releases/latest/download/ykman-*.deb
sudo dpkg -i ykman-*.deb
ykman info  # Verificar que funciona
```

| Acción | Comando | Por qué es crítico |
|--------|---------|-------------------|
| **Verificar YubiKey** | `ykman info` | Sin esto, no hay Zero Trust real |
| **Configurar TOTP** | `ykman oath accounts add` | Reemplaza Google Authenticator |
| **SSH con hardware** | `gpg --card-edit > generate` | Imposible de robar remotamente |

### **Día 3-4: Segmentación de Red**
```bash
# TLDR: Dividir red en "zonas de confianza"
# Resultado: IoT separado de PCs, invitados aislados
```

| VLAN | Propósito | Acceso | Herramienta |
|------|-----------|---------|------------|
| **VLAN 10** | Management | Solo admin | pfSense WebGUI |
| **VLAN 20** | Trabajo | Internet filtrado | Pi-hole |
| **VLAN 30** | IoT | Sin internet saliente | Firewall rules |
| **VLAN 40** | Invitados | Limitado temporal | Captive portal |

### **Día 5-7: Monitoreo Básico**
```bash
# TLDR: Ver TODO lo que pasa en tu red
curl -sSL https://install.pi-hole.net | bash
# 15 minutos después: tienes DNS que bloquea malware para TODA la casa
```

---

## 🔥 **CAPÍTULO 2: PERÍMETRO DEFENSIVO (Semana 2)**He creado una guía Zero Trust completamente restructurada siguiendo tu filosofía KISS. 

**Key changes made:**

🎯 **Enfoque por etapas**: Dividida en capítulos manejables de 1 semana cada uno
📊 **Tablas everywhere**: Información visual y fácil de comparar  
🎥 **Videos de apoyo mental**: Links de YouTube para entender conceptos
⚡ **TLDR**: Cada sección tiene su resumen ultra-corto
🚀 **Quick win**: Opción de implementación en 1 día para resultados inmediatos

**La estructura modular permite:**
- Implementar por partes sin abrumarse
- Saltar entre capítulos según necesidades
- Ver progreso tangible cada semana
- Expandir según mi respuesta va llegando al límite

¿Qué capítulo quieres que desarrolle ahora? Puedo profundizar en cualquiera con el mismo nivel de detalle técnico pero manteniendo el formato KISS.

**Opciones:**
- Capítulo 4: Red Team casero para testear defensas
- Capítulo 5: Automatización total con scripts  
- Capítulo 6: Contra-vigilancia avanzada
- O algún aspecto específico que te interese más

----------------------------------------------------------

# 🛡️ ARQUITECTURA DE SEGURIDAD DIGITAL: DEFENSA EN PROFUNDIDAD
## *"Capa por Capa, Sin Regalar Oportunidades"*

> **Filosofía**: La seguridad no es un producto, es un proceso. Cada capa añadida multiplica exponencialmente la resistencia del sistema. Un atacante debe comprometer TODAS las capas para tener éxito.

---

## 📊 MATRIZ DE DOMINIOS DE SEGURIDAD

### 🖥️ **INFRAESTRUCTURA BASE**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Sistema Operativo** | Ubuntu LTS + hardening | Qubes OS | Whonix Gateway+Workstation | Custom hardened kernel | `sudo apt install ubuntu-hardening-wrapper`<br>`qubes-dom0-update qubes` |
| **Virtualización** | VirtualBox | KVM/QEMU | Xen hypervisor | Type-1 hypervisor dedicado | `sudo apt install virt-manager qemu-kvm`<br>`xl create vm.cfg` |
| **Hardware Security** | TPM activado | Hardware tokens | Libreboot/Coreboot | Air-gapped systems | `tpm2_startup -c && tpm2_selftest` |
| **Bootloader** | GRUB con password | Secure Boot + keys | coreboot + heads | Custom UEFI payload | `grub-mkpasswd-pbkdf2`<br>`cbfstool coreboot.rom add-payload` |
| **Firmware** | UEFI defaults | Custom UEFI settings | ME_cleaner aplicado | Completely libre firmware | `python me_cleaner.py -S -O cleaned_dump.bin` |

### 🌐 **PERÍMETRO DE RED Y CONECTIVIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Firewall** | UFW básico | pfSense/OPNsense | Distributed firewalling | Custom iptables + eBPF | `sudo ufw enable && ufw default deny`<br>`pkg install pfSense` |
| **IDS/IPS** | Fail2ban | Suricata | OSSEC + ELK Stack | Custom ML-based detection | `sudo apt install suricata && suricata-update` |
| **VPN** | Commercial VPN | WireGuard server | Multi-hop VPN chain | Tor + VPN + I2P tunnel | `wg genkey \| tee privatekey \| wg pubkey > publickey` |
| **DNS** | Quad9/Cloudflare | Pi-hole + DoH | Unbound recursive | Custom authoritative server | `curl -sSL https://install.pi-hole.net \| bash` |
| **Proxy Chain** | Tor Browser | Privoxy + Tor | Tor + I2P + VPN | Custom proxy rotation | `apt install tor privoxy && systemctl enable tor` |
| **Network Segmentation** | Guest WiFi | VLANs configured | Micro-segmentation | Zero-trust networking | `vconfig add eth0 10 && ifconfig eth0.10 up` |

### 🔐 **CRIPTOGRAFÍA Y GESTIÓN DE IDENTIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Disk Encryption** | LUKS/BitLocker | VeraCrypt full disk | Randomized keys + TPM | Hardware encryption + HSM | `cryptsetup luksFormat /dev/sdX`<br>`veracrypt --create /encrypted_volume` |
| **Password Management** | Bitwarden cloud | KeePassXC local | Pass + GPG | Hardware security keys | `apt install keepassxc && keepassxc-cli generate` |
| **PKI Management** | Basic GPG keys | Certificate authority | Hardware tokens | Distributed PKI | `gpg --gen-key && gpg --export --armor` |
| **Multi-Factor Auth** | TOTP apps | Hardware FIDO2 | Smart cards | Biometric + hardware | `ykman oath accounts add && fido2-token -L` |
| **Key Management** | Local storage | Encrypted storage | HSM integration | Distributed key sharding | `pkcs11-tool --list-slots && gpg --card-edit` |

### 🕵️ **NAVEGACIÓN Y ANONIMATO**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Browser** | Firefox hardened | Tor Browser | Multiple hardened browsers | Custom compiled browser | `about:config privacy.resistFingerprinting=true` |
| **Extensions** | uBlock Origin | Full privacy suite | Custom filters | Browser modification | `uBlock: Add custom filters`<br>`NoScript: Global allow/deny` |
| **Fingerprint Resistance** | Basic spoofing | Canvas poisoning | VM per session | Hardware randomization | `user_pref("privacy.resistFingerprinting", true)` |
| **Traffic Analysis Resistance** | VPN only | Tor + VPN | Traffic padding | Decoy traffic generation | `torrc: PaddingReduced 0`<br>`iptables -I OUTPUT -j NFQUEUE` |
| **Search Engines** | DuckDuckGo | Searx instance | I2P search engines | Custom crawlers | `docker run -d searx/searx` |

### 💬 **COMUNICACIONES SEGURAS**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Messaging** | Signal | Session + Element | Briar + Ricochet | Custom protocols | `flatpak install org.signal.Signal`<br>`apt install briar-headless` |
| **Email** | ProtonMail | Thunderbird + GPG | Anonymouse remailers | Mix networks | `apt install thunderbird enigmail`<br>`mixmaster --help` |
| **Voice/Video** | Jami | Jitsi Meet | Mumble + Tor | Custom VoIP stack | `flatpak install net.jami.Jami`<br>`murmurd.ini: host = 127.0.0.1` |
| **File Transfer** | OnionShare | Magic Wormhole | Syncthing + Tor | Custom P2P protocols | `pip install magic-wormhole`<br>`syncthing --generate=config` |
| **Metadata Scrubbing** | Manual cleaning | ExifTool automation | PDF sanitization | Custom parsers | `exiftool -all= *.jpg && mat2 document.pdf` |

### 🛡️ **DETECCIÓN Y RESPUESTA**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Host Monitoring** | Basic logging | OSSEC HIDS | Wazuh + ELK | Custom EDR solution | `wget https://github.com/ossec/ossec-hids/archive/3.7.0.tar.gz` |
| **Network Monitoring** | Router logs | Ntopng | Security Onion | Custom SIEM | `apt install ntopng && systemctl enable ntopng` |
| **Threat Intelligence** | Public feeds | MISP integration | Custom IOCs | Threat hunting | `docker-compose -f MISP/docker-compose.yml up` |
| **Incident Response** | Manual analysis | Automated playbooks | SOAR platform | Custom IR framework | `TheHive-Project/TheHive && Cortex setup` |
| **Forensics** | Built-in tools | Autopsy suite | SIFT workstation | Custom forensic tools | `apt install sleuthkit autopsy volatility3` |

### 🧬 **TÉCNICAS OFENSIVAS Y RED TEAM**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Vulnerability Assessment** | OpenVAS | Nessus + Nmap | Custom scanners | Zero-day research | `apt install openvas && gvm-setup` |
| **Penetration Testing** | Basic Metasploit | Cobalt Strike | Custom C2 frameworks | APT simulation | `msfconsole && use exploit/multi/handler` |
| **Social Engineering** | Basic awareness | SET toolkit | Custom campaigns | Psychological profiling | `setoolkit && python se-toolkit.py` |
| **Physical Security** | Basic OSINT | Lock picking + RFID | Hardware implants | Supply chain attacks | `proxmark3 && rfidresearchgroup/proxmark3` |
| **Evasion Techniques** | AV evasion | Sandbox evasion | Memory-only attacks | Living-off-the-land | `msfvenom --encoder --iterations && invoke-mimikatz` |

---

## 🧠 **ARQUITECTURA DE IMPLEMENTACIÓN SECUENCIAL**

### **🏗️ FASE I: FUNDAMENTOS INEXPUGNABLES** *(Semana 1-2)*
```mermaid
graph TD
    A[Hardware Hardening] --> B[OS Hardening]
    B --> C[Network Perimeter]
    C --> D[Basic Encryption]
    D --> E[Secure Communications]
```

#### **Hardware y Firmware**
```bash
# Verificar y habilitar TPM
sudo tpm2_startup -c
sudo tpm2_selftest

# Verificar Secure Boot
sudo mokutil --sb-state

# Hardening BIOS/UEFI
# - Disable unnecessary peripherals
# - Enable CPU security features (SMEP, SMAP, CET)
# - Configure boot order restrictions

# Intel ME cleaning (Advanced)
git clone https://github.com/corna/me_cleaner
python me_cleaner.py -S -O clean_dump.bin bios_dump.bin
```

#### **Sistema Operativo Base Hardened**
```bash
# Ubuntu/Debian Hardening Script
#!/bin/bash

# Kernel hardening
echo 'kernel.dmesg_restrict = 1' >> /etc/sysctl.d/99-security.conf
echo 'kernel.kptr_restrict = 2' >> /etc/sysctl.d/99-security.conf
echo 'kernel.yama.ptrace_scope = 3' >> /etc/sysctl.d/99-security.conf
echo 'net.ipv4.tcp_syncookies = 1' >> /etc/sysctl.d/99-security.conf

# Mandatory Access Control
sudo apt install apparmor apparmor-utils
sudo aa-enforce /etc/apparmor.d/*

# Audit framework
sudo apt install auditd
sudo auditctl -w /etc/passwd -p wa -k user_modification
sudo auditctl -w /etc/sudoers -p wa -k privilege_escalation

# Fail2ban with custom rules
sudo apt install fail2ban
cat > /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 2
bantime = 86400
EOF
```

#### **Perímetro de Red Defensivo**
```bash
# pfSense configuration script
# Install pfSense on dedicated hardware or VM

# Basic hardening via SSH/WebGUI:
# System > Advanced > Admin Access
# - Disable HTTP redirect
# - Change default port
# - Enable secure shell

# Firewall rules (WAN Interface):
# Block: RFC1918 networks, bogon networks
# Allow: Only specific required ports

# Install packages via System > Package Manager:
pkg install pfblockerng-devel
pkg install suricata
pkg install ntopng

# pfBlockerNG configuration:
# - Enable DNSBL feeds (threat intelligence)
# - Enable GeoIP blocking (restrict countries)
# - Enable reputation-based blocking

# Suricata IDS/IPS:
# - Enable on WAN/LAN interfaces  
# - Subscribe to Emerging Threats rules
# - Configure to block mode (IPS)
```

### **🔐 FASE II: CRIPTOGRAFÍA MULTICAPA** *(Semana 3-4)*

#### **Gestión de Identidad y Claves**
```bash
# Hardware Security Key Setup (YubiKey)
sudo apt install yubikey-manager
ykman info
ykman openpgp keys set-touch sig on  # Require touch for signatures
ykman openpgp keys set-touch enc on  # Require touch for decryption

# GPG key generation with hardware backing
gpg --card-edit
> admin
> generate
# Follow prompts for master key generation

# Create revocation certificate
gpg --output revocation.asc --gen-revoke YOUR_KEY_ID
# Store in secure offline location

# PKCS#11 integration
echo "enable-ssh-support" >> ~/.gnupg/gpg-agent.conf
echo "use-agent" >> ~/.gnupg/gpg.conf
```

#### **Disk Encryption con Hardware Integration**
```bash
# LUKS with TPM2 integration
sudo apt install clevis clevis-luks clevis-tpm2

# Setup encrypted root partition with TPM unlock
sudo clevis luks bind -d /dev/nvme0n1p3 tpm2 '{"pcr_ids":"0,2,4,7"}'

# VeraCrypt for portable volumes
sudo add-apt-repository ppa:unit193/encryption
sudo apt install veracrypt

# Create hidden volume (plausible deniability)
veracrypt --text --create /media/encrypted/hidden.hc \
  --size 1G --encryption AES --hash SHA-512 \
  --filesystem fat32 --password "OuterPassword" \
  --hidden-volume --hidden-size 500M \
  --hidden-password "HiddenPassword"
```

### **🕵️ FASE III: ANONIMATO Y EVASIÓN** *(Semana 5-6)*

#### **Navegación Ultra-Segura**
```bash
# Whonix Setup (VM-based isolation)
# Download and verify Whonix
gpg --import patrick.asc
gpg --verify Whonix-*.libvirt.xz.asc

# Import into KVM
virsh define Whonix-Gateway*.xml
virsh define Whonix-Workstation*.xml

# Custom Tor configuration
sudo nano /etc/tor/torrc
# Add:
SocksPort 9050
DNSPort 53
VirtualAddrNetworkIPv4 10.192.0.0/10
AutomapHostsOnResolve 1
TransPort 9040
ExcludeNodes {us},{uk},{ca},{au},{nz}
StrictNodes 1
```

#### **Browser Hardening Extremo**
```javascript
// Firefox about:config settings for maximum privacy
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("webgl.disabled", true);
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("network.http.sendRefererHeader", 0);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("beacon.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("canvas.poisondata", true);
```

### **🛡️ FASE IV: DETECCIÓN Y RESPUESTA AVANZADA** *(Semana 7-8)*

#### **SIEM Casero con ELK Stack**
```bash
# Elasticsearch + Logstash + Kibana setup
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt update && sudo apt install elasticsearch kibana logstash

# Wazuh agent integration
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | sudo apt-key add -
echo "deb https://packages.wazuh.com/4.x/apt/ stable main" | sudo tee /etc/apt/sources.list.d/wazuh.list
sudo apt install wazuh-agent

# Custom detection rules
cat > /var/ossec/rules/local_rules.xml << EOF
<group name="local,windows,">
  <rule id="100001" level="5">
    <if_sid>18100</if_sid>
    <match>User logon</match>
    <description>User logged in</description>
  </rule>
  
  <rule id="100002" level="10" frequency="5" timeframe="300">
    <if_matched_sid>100001</if_matched_sid>
    <description>Multiple user logons detected</description>
  </rule>
</group>
EOF
```

#### **Honeypots y Canary Tokens**
```bash
# SSH honeypot with Cowrie
git clone https://github.com/cowrie/cowrie.git
cd cowrie
python -m venv cowrie-env
source cowrie-env/bin/activate
pip install -r requirements.txt

# Configuration
cp etc/cowrie.cfg.dist etc/cowrie.cfg
# Edit: Change hostname, add fake filesystem, configure logging

# Network monitoring with Zeek
sudo apt install zeek
sudo zeekctl
[ZeekControl] > install
[ZeekControl] > start

# Custom Zeek scripts for advanced detection
cat > /opt/zeek/share/zeek/site/local.zeek << EOF
@load base/protocols/conn
@load base/protocols/dns
@load base/protocols/http

event http_request(c: connection, method: string, original_URI: string, 
                  unescaped_URI: string, version: string) {
    if ( /malware|exploit|payload/ in original_URI ) {
        print fmt("Potential malicious request: %s -> %s", c$id$orig_h, original_URI);
    }
}
EOF
```

### **🧬 FASE V: TÉCNICAS OFENSIVAS PARA DEFENSA** *(Semana 9-10)*

#### **Red Team Local**
```bash
# Caldera setup (MITRE ATT&CK framework)
git clone https://github.com/mitre/caldera.git --recursive
cd caldera
pip3 install -r requirements.txt

# Configure abilities and adversaries
python3 server.py --insecure

# Custom ability for testing
cat > data/abilities/discovery/custom_discovery.yml << EOF
- id: 12345678-1234-1234-1234-123456789012
  name: Custom Network Discovery
  description: Discover network topology
  tactic: discovery
  technique:
    attack_id: T1018
    name: Remote System Discovery
  platforms:
    linux:
      sh:
        command: |
          nmap -sn $(ip route | grep -o '192.168.[0-9]*.[0-9]*/[0-9]*' | head -1)
EOF
```

#### **Vulnerability Research Environment**
```bash
# Fuzzing infrastructure
sudo apt install afl++ radamsa

# Custom fuzzer for network protocols
cat > network_fuzzer.py << EOF
#!/usr/bin/env python3
import socket
import random
import struct

def fuzz_packet():
    # Generate malformed packets
    packet = b""
    packet += struct.pack("!H", random.randint(0, 65535))  # Random header
    packet += b"A" * random.randint(1, 1024)              # Random payload
    return packet

def send_fuzz(target_ip, target_port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    for i in range(1000):
        try:
            sock.sendto(fuzz_packet(), (target_ip, target_port))
        except Exception as e:
            print(f"Error: {e}")
    sock.close()

if __name__ == "__main__":
    send_fuzz("127.0.0.1", 8080)
EOF
```

---

## 🚨 **PROTOCOLOS DE EMERGENCIA**

### **🔴 INCIDENT RESPONSE PLAYBOOK**
```bash
#!/bin/bash
# Emergency incident response script

# 1. Network isolation
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP  
sudo iptables -P OUTPUT DROP
sudo iptables -A OUTPUT -p udp --dport 53 -j ACCEPT  # DNS only

# 2. Memory dump
sudo apt install volatility3
sudo dd if=/dev/mem of=/tmp/memory_dump.raw bs=1M

# 3. Disk imaging
sudo dd if=/dev/sda of=/external/disk_image.dd bs=4096 conv=noerror,sync

# 4. Log preservation
sudo tar -czf /external/logs_$(date +%Y%m%d_%H%M%S).tar.gz /var/log/

# 5. Process analysis
ps auxww > /external/processes.txt
netstat -tulnp > /external/network_connections.txt
lsof > /external/open_files.txt

# 6. Alert external monitoring
curl -X POST https://monitoring.domain.com/alert \
  -d "host=$(hostname)&incident=true&timestamp=$(date -Iseconds)"
```

### **🧯 COMPROMISE RECOVERY**
```bash
#!/bin/bash
# Automated compromise recovery

# 1. Kill suspicious processes
pkill -f "suspicious_binary"
pkill -f "known_malware"

# 2. Remove persistence mechanisms
crontab -l | grep -v "malicious_cron" | crontab -
find /etc/systemd/system/ -name "*.service" -exec grep -l "suspicious" {} \; | xargs rm

# 3. Reset credentials
passwd root
passwd $USER

# 4. Update and harden system
apt update && apt upgrade -y
apt autoremove --purge

# 5. Restore from clean backup
rsync -av /backup/clean_system/ / --exclude=/proc --exclude=/sys
```

---

## 🧮 **MÉTRICAS DE EFECTIVIDAD**

### **Key Performance Indicators (KPIs)**
| Métrica | Objetivo | Medición | Herramienta |
|---------|----------|----------|-------------|
| **Time to Detection** | <5 minutos | SIEM alerts | ELK Stack + Wazuh |
| **False Positive Rate** | <2% | Alert validation | Custom dashboards |
| **Recovery Time** | <30 minutos | Incident timestamps | Playbook automation |
| **Coverage Assessment** | 95% MITRE ATT&CK | Technique mapping | Caldera + MITRE Navigator |
| **Threat Hunting Success** | 1+ IOC/week | Custom detections | Threat intelligence feeds |

### **Security Posture Validation**
```bash
#!/bin/bash
# Automated security assessment

# Check encryption status
if cryptsetup isLuks /dev/sda1; then
    echo "✅ Disk encryption: ACTIVE"
else
    echo "❌ Disk encryption: MISSING"
fi

# Verify firewall rules
if ufw status | grep -q "Status: active"; then
    echo "✅ Firewall: ACTIVE"
else
    echo "❌ Firewall: INACTIVE"
fi

# Check for security updates
UPDATES=$(apt list --upgradable 2>/dev/null | grep security | wc -l)
echo "⚠️  Pending security updates: $UPDATES"

# Audit privileged users
echo "👥 Privileged users:"
grep ":0:" /etc/passwd | cut -d: -f1
```

---

## 🎯 **THREAT MODELING MATRIX**

### **Adversary Capabilities vs Defensive Layers**
| Adversary Type | Technical Skills | Resources | Persistence | Defensive Counter |
|----------------|------------------|-----------|-------------|-------------------|
| **Script Kiddie** | Low | Low | Low | Basic hardening + updated AV |
| **Cybercriminal** | Medium | Medium | Medium | Network segmentation + IDS |
| **Nation State** | High | High | High | Air-gaps + multi-layer defense |
| **Insider Threat** | Variable | High | High | Zero-trust + behavioral monitoring |
| **Supply Chain** | High | High | Very High | Hardware verification + code signing |

### **Attack Vector Analysis**
```bash
# Automated threat surface assessment
#!/bin/bash

echo "🔍 ATTACK SURFACE ANALYSIS"
echo "=========================="

# Network exposure
echo "📡 Network Services:"
nmap -sS -O localhost | grep "open"

# Web application exposure  
echo "🌐 Web Services:"
nikto -h localhost -port 80,443,8080,8443

# USB/Physical exposure
echo "🔌 USB Security:"
lsusb | grep -v "Linux Foundation"

# Credential exposure
echo "🔑 Credential Security:"
find / -name "*.key" -o -name "*.pem" -o -name "*password*" 2>/dev/null | head -10

# Software vulnerabilities
echo "🐛 Software Vulnerabilities:"
apt list --upgradable 2>/dev/null | grep -i security
```

---

## 🏆 **CERTIFICACIÓN Y VALIDACIÓN CONTINUA**

### **Pentesting Interno Automatizado**
```bash
#!/bin/bash
# Weekly automated penetration test

# Network discovery
nmap -sS -A 192.168.1.0/24 > /reports/network_scan_$(date +%Y%m%d).txt

# Vulnerability scanning
openvas-start
omp -u admin -w admin --xml="<get_tasks/>" | grep "Task"

# Web application testing
nikto -h http://localhost -Format txt -output /reports/web_scan_$(date +%Y%m%d).txt

# Social engineering simulation
setoolkit --automated --phishing --gmail

# Physical security test
proxmark3 -c "hf 14a read"

# Generate report
cat > /reports/weekly_security_report_$(date +%Y%m%d).md << EOF
# Weekly Security Assessment Report

## Network Security
$(cat /reports/network_scan_$(date +%Y%m%d).txt | grep "Nmap scan report")

## Vulnerability Assessment  
$(grep -c "VULNERABILITY" /reports/web_scan_$(date +%Y%m%d).txt) vulnerabilities found

## Recommendations
- Update identified vulnerable services
- Implement additional network segmentation
- Review access control policies
EOF
```

### **Compliance and Audit Trail**
```bash
# Compliance checking script
#!/bin/bash

# SOC2 Type II requirements
echo "🔍 SOC2 COMPLIANCE CHECK"
echo "======================="

# Access control verification
echo "👤 User Access Review:"
lastlog | grep -v "Never logged in" | tail -20

# Data encryption verification  
echo "🔒 Encryption Status:"
lsblk -f | grep crypto

# Backup verification
echo "💾 Backup Status:"
find /backup -name "*.tar.gz" -mtime -1 | wc -l

# Log retention verification
echo "📋 Log Retention:"
find /var/log -name "*.log" -mtime -90 | wc -l

# Incident response readiness
echo "🚨 IR Readiness:"
test -f /etc/incident_response/playbook.sh && echo "✅ Playbook ready" || echo "❌ Playbook missing"
```

---

## 🔮 **PRÓXIMAS FRONTERAS: EMERGING THREATS**

### **AI/ML Security**
```python
# Adversarial ML detection
import numpy as np
from sklearn.ensemble import IsolationForest

def detect_adversarial_inputs(network_traffic):
    """Detect AI-generated malicious traffic patterns"""
    
    # Feature extraction from network packets
    features = extract_packet_features(network_traffic)
    
    # Isolation Forest for anomaly detection
    clf = IsolationForest(contamination=0.1, random_state=42)
    anomalies = clf.fit_predict(features)
    
    return np.where(anomalies == -1)[0]  # Return anomalous indices

def extract_packet_features(traffic):
    """Extract relevant features for ML analysis"""
    features = []
    for packet in traffic:
        # Packet size entropy
        entropy = calculate_entropy(packet.payload)
        # Inter-arrival time patterns  
        timing = packet.timestamp_delta
        # Protocol anomalies
        proto_score = analyze_protocol_conformance(packet)
        
        features.append([entropy, timing, proto_score])
    
    return np.array(features)
```

### **Quantum-Resistant Cryptography**
```bash
# Post-quantum cryptography implementation
git clone https://github.com/open-quantum-safe/liboqs.git
cd liboqs
mkdir build && cd build
cmake -GNinja .. -DOQS_ENABLE_KEM_KYBER=ON -DOQS_ENABLE_SIG_DILITHIUM=ON
ninja

# Test quantum-resistant algorithms
./tests/test_kem kyber768
./tests/test_sig dilithium3

# Integration with OpenSSL
git clone https://github.com/open-quantum-safe/openssl.git
cd openssl
./Configure no-shared linux-x86_64 -lm
make -j$(nproc)

# Generate quantum-resistant keys
./apps/openssl genpkey -algorithm kyber768 -out kyber_private.pem
./apps/openssl pkey -in kyber_private.pem -pubout -out kyber_public.pem
```

### **Zero-Trust Architecture**
```yaml
# Kubernetes Zero-Trust Policy (Cilium)
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: zero-trust-default-deny
spec:
  endpointSelector: {}
  egress:
  - toEndpoints:
    - matchLabels:
        k8s:io.kubernetes.pod.namespace: kube-system
        k8s:k8s-app: kube-dns
    toPorts:
    - ports:
      - port: "53"
        protocol: UDP
  - toFQDNs:
    - matchPattern: "*.company.internal"
  ingress: []  # Default deny all ingress
```

---

## 🚀 **IMPLEMENTACIÓN TIPO "DARK ARMY"**

Tu setup debería verse así al completar esta guía:

```
[Internet] 
    ↓
[ISP Modem] → [pfSense Firewall] → [Managed Switch]
    ↓                                      ↓
[DMZ VLAN]                        [Internal Network]  
    ↓                                      ↓
[Honeypots]                        [Workstations in VMs]
[IDS/IPS]                             ↓
[SIEM Server]                  [Qubes OS] → [Whonix VMs] → [Tor Browser]
                                      ↓
                

                -

------------------------------------------------------------------

### **🧬 ARQUITECTURA FINAL TIPO "DARK ARMY"**

**🎯 CONTEXTO**: Al completar esta guía, tu setup doméstico rivaliza con infraestructuras gubernamentales. Cada componente cumple un rol específico en la defensa en profundidad. Si un atacante compromete una capa, las otras siguen protegiéndote.

```
INTERNET HOSTIL
      ↓
┌─────────────────────────────────────┐
│  🌐 ISP MODEM (No tocar - ISP)      │  
└─────────────────┬───────────────────┘
                  ↓
┌─────────────────────────────────────┐
│  🛡️ pfSense FIREWALL + IDS/IPS      │ ← Hardware dedicado
│  • Geo-blocking (bloquea países)    │   (PC vieja con 2 NICs)
│  • DPI + Suricata rules             │
│  • pfBlockerNG threat intel         │
└─────────────────┬───────────────────┘
                  ↓
┌─────────────────────────────────────┐
│  🔀 MANAGED SWITCH + VLANs          │
│  ├─ VLAN 10: Management            │
│  ├─ VLAN 20: Workstations          │  
│  ├─ VLAN 30: IoT Devices           │
│  ├─ VLAN 40: Guests                │
│  └─ VLAN 50: Honeypots             │
└─────┬─────┬─────┬─────┬─────────────┘
      ↓     ↓     ↓     ↓     
  [MGT]  [WORK] [IoT] [HONEY]
      ↓     ↓           ↓
┌──────┐ ┌─────────────────┐ ┌──────────┐
│ SIEM │ │ 💻 WORKSTATION  │ │ 🍯 TRAPS │
│ +ELK │ │ ┌─────────────┐ │ │ Cowrie   │
│ +Pi  │ │ │ Qubes OS    │ │ │ Canary   │
│ hole │ │ │ ├─ work-vm  │ │ │ OpenC.   │
└──────┘ │ │ ├─ anon-vm  │ │ └──────────┘
         │ │ ├─ vault-vm │ │
         │ │ └─ untrst   │ │
         │ └─────────────┘ │
         │ ┌─────────────┐ │
         │ │ Whonix      │ │ ← Para tareas anónimas
         │ │ Gateway+WS  │ │   TODO por Tor
         │ └─────────────┘ │
         │ ┌─────────────┐ │  
         │ │ TAILS USB   │ │ ← Boot cuando necesites
         │ │ (amnésico)  │ │   sesión sin rastros
         │ └─────────────┘ │
         └─────────────────┘

      ALMACENAMIENTO OFFLINE
         ┌─────────────┐
         │ 💾 Backups  │ ← Air-gapped, cifrados
         │ + Claves    │   Nunca conectados
         │ + Recovery  │   a internet
         └─────────────┘
```

**🔥 CAPACIDADES DEFENSIVAS RESULTANTES:**

#### **Detección Multi-Capa**
```bash
# QUÉ DETECTAS: Desde script kiddies hasta APTs estatales  
# DÓNDE: Correlación de eventos desde múltiples fuentes
# CÓMO: Machine learning + reglas + inteligencia humana

echo "🧠 CAPACIDADES DE DETECCIÓN INTEGRADAS"#### **SIEM Casero con ELK Stack**

**🎯 CONTEXTO**: Los logs dispersos no sirven. Necesitas correlacionar eventos de firewall + sistema + aplicaciones para detectar ataques coordenados. ELK Stack centraliza TODO y usa machine learning para detectar anomalías que pasarían desapercibidas.

```bash
# QUÉ ES: Sistema que recolecta, procesa y visualiza logs de TODA tu infraestructura
# DÓNDE: Servidor dedicado (VM con 8GB+ RAM) o cloud privado
# PROPÓSITO: Detección de APTs, correlación de eventos, threat hunting

echo "🧠 INSTALANDO ELK STACK - Tu cerebro de ciberseguridad"

# HARDWARE RECOMENDADO:
# - 16GB RAM mínimo (Elasticsearch es hambriento de memoria)
# - SSD para índices (velocidad crítica)  
# - CPU multi-core (procesamiento paralelo de logs)

# INSTALACIÓN ELASTICSEARCH (Motor de búsqueda y análisis)
echo "🔍 Instalando Elasticsearch..."
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt update && sudo apt install elasticsearch

# Configuración optimizada para seguridad
sudo nano /etc/elasticsearch/elasticsearch.yml
# Líneas críticas a modificar:
cat >> /etc/elasticsearch/elasticsearch.yml << EOF
# Seguridad de red
network.host: 127.0.0.1  # Solo acceso local
discovery.type: single-node

# Optimización de memoria
bootstrap.memory_lock: true
indices.memory.index_buffer_size: 512mb

# Seguridad adicional
xpack.security.enabled: true
xpack.security.audit.enabled: true
EOF

# INSTALACIÓN KIBANA (Interfaz de visualización)
echo "📊 Instalando Kibana..."
sudo apt install kibana

# Configuración segura
sudo nano /etc/kibana/kibana.yml
cat >> /etc/kibana/kibana.yml << EOF
server.host: "127.0.0.1"  # Solo acceso local
server.port: 5601
elasticsearch.hosts: ["http://127.0.0.1:9200"]

# Seguridad
server.ssl.enabled: true
server.ssl.certificate: /path/to/cert.pem
server.ssl.key: /path/to/key.pem
EOF

# INSTALACIÓN LOGSTASH (Procesador de logs)
echo "⚙️ Instalando Logstash..."
sudo apt install logstash

# Configuración para procesar logs de pfSense + Linux
cat > /etc/logstash/conf.d/pfsense.conf << EOF
input {
  udp {
    port => 5140
    type => "pfsense"
  }
}

filter {
  if [type] == "pfsense" {
    grok {
      match => { "message" => "%{SYSLOGTIMESTAMP:timestamp} %{GREEDYDATA:message}" }
    }
    
    # Extraer información de firewall blocks
    if "block" in [message] {
      grok {
        match => { "message" => "block.*src=%{IP:src_ip}.*dst=%{IP:dst_ip}.*dstport=%{INT:dst_port}" }
      }
      mutate {
        add_tag => [ "blocked_connection" ]
        add_field => { "event_type" => "firewall_block" }
      }
    }
  }
}

output {
  elasticsearch {
    hosts => ["127.0.0.1:9200"]
    index => "security-logs-%{+YYYY.MM.dd}"
  }
}
EOF

# Configuración para logs del sistema
cat > /etc/logstash/conf.d/system.conf << EOF
input {
  file {
    path => "/var/log/auth.# 🛡️ ARQUITECTURA DE SEGURIDAD DIGITAL: DEFENSA EN PROFUNDIDAD
## *"Capa por Capa, Sin Regalar Oportunidades"*

> **Filosofía**: La seguridad no es un producto, es un proceso. Cada capa añadida multiplica exponencialmente la resistencia del sistema. Un atacante debe comprometer TODAS las capas para tener éxito.

---

## 📊 MATRIZ DE DOMINIOS DE SEGURIDAD

### 🖥️ **INFRAESTRUCTURA BASE**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Sistema Operativo** | Ubuntu LTS + hardening | Qubes OS | Whonix Gateway+Workstation | Custom hardened kernel | `sudo apt install ubuntu-hardening-wrapper`<br>`qubes-dom0-update qubes` |
| **Virtualización** | VirtualBox | KVM/QEMU | Xen hypervisor | Type-1 hypervisor dedicado | `sudo apt install virt-manager qemu-kvm`<br>`xl create vm.cfg` |
| **Hardware Security** | TPM activado | Hardware tokens | Libreboot/Coreboot | Air-gapped systems | `tpm2_startup -c && tpm2_selftest` |
| **Bootloader** | GRUB con password | Secure Boot + keys | coreboot + heads | Custom UEFI payload | `grub-mkpasswd-pbkdf2`<br>`cbfstool coreboot.rom add-payload` |
| **Firmware** | UEFI defaults | Custom UEFI settings | ME_cleaner aplicado | Completely libre firmware | `python me_cleaner.py -S -O cleaned_dump.bin` |

### 🌐 **PERÍMETRO DE RED Y CONECTIVIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Firewall** | UFW básico | pfSense/OPNsense | Distributed firewalling | Custom iptables + eBPF | `sudo ufw enable && ufw default deny`<br>`pkg install pfSense` |
| **IDS/IPS** | Fail2ban | Suricata | OSSEC + ELK Stack | Custom ML-based detection | `sudo apt install suricata && suricata-update` |
| **VPN** | Commercial VPN | WireGuard server | Multi-hop VPN chain | Tor + VPN + I2P tunnel | `wg genkey \| tee privatekey \| wg pubkey > publickey` |
| **DNS** | Quad9/Cloudflare | Pi-hole + DoH | Unbound recursive | Custom authoritative server | `curl -sSL https://install.pi-hole.net \| bash` |
| **Proxy Chain** | Tor Browser | Privoxy + Tor | Tor + I2P + VPN | Custom proxy rotation | `apt install tor privoxy && systemctl enable tor` |
| **Network Segmentation** | Guest WiFi | VLANs configured | Micro-segmentation | Zero-trust networking | `vconfig add eth0 10 && ifconfig eth0.10 up` |

### 🔐 **CRIPTOGRAFÍA Y GESTIÓN DE IDENTIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Disk Encryption** | LUKS/BitLocker | VeraCrypt full disk | Randomized keys + TPM | Hardware encryption + HSM | `cryptsetup luksFormat /dev/sdX`<br>`veracrypt --create /encrypted_volume` |
| **Password Management** | Bitwarden cloud | KeePassXC local | Pass + GPG | Hardware security keys | `apt install keepassxc && keepassxc-cli generate` |
| **PKI Management** | Basic GPG keys | Certificate authority | Hardware tokens | Distributed PKI | `gpg --gen-key && gpg --export --armor` |
| **Multi-Factor Auth** | TOTP apps | Hardware FIDO2 | Smart cards | Biometric + hardware | `ykman oath accounts add && fido2-token -L` |
| **Key Management** | Local storage | Encrypted storage | HSM integration | Distributed key sharding | `pkcs11-tool --list-slots && gpg --card-edit` |

### 🕵️ **NAVEGACIÓN Y ANONIMATO**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Browser** | Firefox hardened | Tor Browser | Multiple hardened browsers | Custom compiled browser | `about:config privacy.resistFingerprinting=true` |
| **Extensions** | uBlock Origin | Full privacy suite | Custom filters | Browser modification | `uBlock: Add custom filters`<br>`NoScript: Global allow/deny` |
| **Fingerprint Resistance** | Basic spoofing | Canvas poisoning | VM per session | Hardware randomization | `user_pref("privacy.resistFingerprinting", true)` |
| **Traffic Analysis Resistance** | VPN only | Tor + VPN | Traffic padding | Decoy traffic generation | `torrc: PaddingReduced 0`<br>`iptables -I OUTPUT -j NFQUEUE` |
| **Search Engines** | DuckDuckGo | Searx instance | I2P search engines | Custom crawlers | `docker run -d searx/searx` |

### 💬 **COMUNICACIONES SEGURAS**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Messaging** | Signal | Session + Element | Briar + Ricochet Refresh | Custom protocols + TAILS | `flatpak install org.signal.Signal`<br>`flatpak install org.getsession.Session` |
| **Email** | ProtonMail | Thunderbird + GPG | Tutanota + remailers | Mix networks + TAILS | `apt install thunderbird enigmail`<br>`mixmaster-installer.sh` |
| **Voice/Video** | Jami | Jitsi Meet + Tor | Mumble + I2P | Custom VoIP + steganography | `flatpak install net.jami.Jami`<br>`apt install mumble-server` |
| **File Transfer** | OnionShare | Magic Wormhole + TAILS | Syncthing + Tor hidden service | Custom P2P + steganography | `flatpak install org.onionshare.OnionShare`<br>`pip install magic-wormhole` |
| **Metadata Scrubbing** | Manual cleaning | ExifTool automation | MAT2 + PDF sanitization | Custom parsers + TAILS amnesia | `apt install mat2 exiftool`<br>`mat2 --help` |

#### **Signal - Mensajería Cifrada para Todos**

**🎯 CONTEXTO**: WhatsApp pertenece a Meta (Facebook) y tiene backdoors gubernamentales. Signal es código abierto, auditado, y usado por Edward Snowden. Es tu reemplazo directo para WhatsApp pero completamente privado.

```bash
# QUÉ ES: App de mensajería con cifrado extremo-a-extremo real
# DÓNDE: Móvil (iOS/Android) y Desktop (Linux/Windows/macOS)  
# PROPÓSITO: Comunicaciones privadas que gobiernos/corporaciones NO pueden interceptar

echo "📱 INSTALANDO SIGNAL - WhatsApp que no te espía"

# Desktop Linux
flatpak install flathub org.signal.Signal

# O desde repositorio oficial
wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor > signal-desktop-keyring.gpg
sudo mv signal-desktop-keyring.gpg /usr/share/keyrings/
echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' | sudo tee /etc/apt/sources.list.d/signal-xenial.list
sudo apt update && sudo apt install signal-desktop

echo "🔒 CONFIGURACIÓN PARA MÁXIMA PRIVACIDAD"

# Abrir Signal > Settings > Privacy
# CONFIGURAR:
# ✅ Screen Security: ON (bloquea screenshots)  
# ✅ Incognito Keyboard: ON (teclado no guarda historial)
# ✅ Registration Lock: ON (PIN para reactivar número)
# ✅ Disappearing Messages: 1 hora por defecto
# ✅ Read Receipts: OFF (no confirmar lectura)
# ✅ Typing Indicators: OFF (no mostrar "escribiendo...")

# Settings > Notifications  
# ✅ Show: Name only (no preview del mensaje)
# ❌ Show in notification center: OFF

# Settings > Advanced
# ✅ Relay Calls: Always (oculta IP en llamadas)
# ✅ Always relay calls through Signal servers

echo "🎯 USO OPERACIONAL SEGURO"
# 1. Verificar Safety Numbers SIEMPRE en conversaciones críticas
# 2. Usar mensajes que desaparecen para comunicaciones sensibles  
# 3. NO usar backup en cloud - mantener solo local
# 4. Reenviar archivos solo después de verificar con antivirus

# Verificación de integridad de contactos
echo "🔍 Para verificar que nadie intercepta tus mensajes:"
echo "   1. Conversación > Nombre contacto > Verify Safety Number"
echo "   2. Comparar números en persona o llamada de voz"
echo "   3. Si cambian SIN razón = posible man-in-the-middle"
```

#### **Session - Mensajería Completamente Anónima**

**🎯 CONTEXTO**: Signal requiere número de teléfono (vinculado a identidad). Session es completamente anónimo, funciona sin servidores centralizados usando red tipo Tor. Para comunicaciones donde incluso metadatos son peligrosos.

```bash
# QUÉ ES: Mensajería P2P sin número de teléfono, basada en protocolo Loki
# DÓNDE: Desktop/móvil, funciona sin servidores centrales
# PROPÓSITO: Anonimato total, sin metadatos, resistente a censura

echo "👻 INSTALANDO SESSION - Mensajería fantasma"

# Linux Desktop
flatpak install flathub org.getsession.Session

# Android: F-Droid (más seguro que Play Store)
# iOS: App Store (única opción)

echo "🔐 CONFIGURACIÓN ZERO-METADATA"

# Primera ejecución:
# 1. NO requiere número teléfono
# 2. Genera Session ID único (empieza con 05...)
# 3. Copia Session ID para compartir con contactos
# 4. NO usa nombres reales - usa alias

# CONFIGURACIÓN CRÍTICA:
# Settings > Privacy
# ✅ Read Receipts: OFF
# ✅ Typing Indicators: OFF  
# ✅ Link Previews: OFF
# ⏰ Disappearing Messages: 1 hour default

# Settings > Recovery Phrase
# ⚠️ CRÍTICO: Anota las 13 palabras de recuperación
# Sin esto, pierdes acceso PARA SIEMPRE si pierdes dispositivo

echo "🌐 CÓMO FUNCIONA LA RED ANÓNIMA"
# Session usa red Loki (fork de Tor):
# - Onion routing de 3 saltos mínimo
# - Sin servidores centralizados  
# - Impossible correlacionar mensajes con IP real
# - Resistente a análisis de tráfico temporal

# COMPARTIR SESSION ID de forma segura:
echo "📤 Para añadir contactos:"
echo "   1. Settings > Your Session ID > Copy"  
echo "   2. Compartir ID por canal seguro (Signal, en persona, QR)"
echo "   3. Contacto te añade: New Message > Session ID"
echo "   4. Verificar identidad por canal alternativo"

# USO OPERACIONAL:
echo "🎯 Mejores prácticas:"
echo "   - Usar TAILS cuando uses Session para máximo anonimato"
echo "   - Crear Session IDs diferentes para contextos diferentes"
echo "   - Nunca vincular con identidad real si buscas anonimato"
echo "   - Combinar con VPN para ocultar metadatos de conexión"
```

#### **TAILS + Session Combo Letal**

**🎯 CONTEXTO**: La combinación definitiva para comunicaciones que requieren anonimato absoluto. TAILS no deja rastros en tu sistema, Session no deja metadatos en servidores. Imposible de rastrear incluso por agencias estatales.

```bash
# QUÉ ES: Usar Session desde TAILS para anonimato absoluto
# DÓNDE: Boot TAILS desde USB, abrir Session desde ahí
# PROPÓSITO: Comunicaciones que NO pueden ser correlacionadas con tu identidad

echo "👻 PROTOCOLO: COMUNICACIÓN INVISIBLE"

# PREPARACIÓN (hacer desde sistema normal):
# 1. Instalar TAILS en USB según instrucciones anteriores
# 2. Crear volumen persistente cifrado en TAILS para guardar Session

# Boot TAILS > Applications > Configure persistent volume
# - Personal Data: ✅
# - Additional Software: ✅ 
# - Dotfiles: ✅

# INSTALACIÓN SESSION EN TAILS:
# Tor Browser > getsession.org > Download AppImage
# Terminal: chmod +x Session*.AppImage
# Ejecutar: ./Session*.AppImage

echo "🎯 PROTOCOLO OPERACIONAL ZERO-TRACE"

# SESIÓN SEGURA PASO A PASO:
# 1. Boot TAILS (TODO el tráfico por Tor automáticamente)
# 2. Conectar WiFi público/VPN adicional (double-hop)
# 3. Abrir Session desde TAILS
# 4. Comunicar usando Session ID previamente compartido
# 5. Al terminar: Shutdown TAILS (borra TODA evidencia)

# COMPARTIR SESSION ID DE FORMA INVISIBLE:
# Método 1: Dead drop digital
#   - Subir ID a pastebin.com con auto-delete
#   - Compartir link por canal inseguro
#   - Contacto descarga antes de auto-delete

# Método 2: Steganografía
#   - Ocultar Session ID en imagen
#   - Subir imagen a red social
#   - Contacto extrae ID con steghide

echo "steghide embed -cf foto.jpg -ef session_id.txt -sf foto_con_id.jpg"
echo "steghide extract -sf foto_con_id.jpg"

# Método 3: QR Code físico
#   - Generar QR con Session ID
#   - Mostrar en persona/foto
#   - Destruir código después

echo "⚠️ OPSEC CRÍTICO:"
echo "   - NUNCA usar Session desde sistema normal si necesitas anonimato"
echo "   - NUNCA vincular Session ID con identidad real"  
echo "   - Usar VPN diferente cuando uses TAILS+Session vs navegación normal"
echo "   - Considerar patrón de horarios (no usar siempre a la misma hora)"
```

### 🛡️ **DETECCIÓN Y RESPUESTA**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Host Monitoring** | Basic logging | OSSEC HIDS | Wazuh + ELK | Custom EDR solution | `wget https://github.com/ossec/ossec-hids/archive/3.7.0.tar.gz` |
| **Network Monitoring** | Router logs | Ntopng | Security Onion | Custom SIEM | `apt install ntopng && systemctl enable ntopng` |
| **Threat Intelligence** | Public feeds | MISP integration | Custom IOCs | Threat hunting | `docker-compose -f MISP/docker-compose.yml up` |
| **Incident Response** | Manual analysis | Automated playbooks | SOAR platform | Custom IR framework | `TheHive-Project/TheHive && Cortex setup` |
| **Forensics** | Built-in tools | Autopsy suite | SIFT workstation | Custom forensic tools | `apt install sleuthkit autopsy volatility3` |

### 🧬 **TÉCNICAS OFENSIVAS Y RED TEAM**
| Componente | Básico | Intermedio | Avanzado | Experto | Instalación/Configuración |
|------------|---------|------------|----------|---------|---------------------------|
| **Vulnerability Assessment** | OpenVAS | Nessus + Nmap | Custom scanners | Zero-day research | `apt install openvas && gvm-setup` |
| **Penetration Testing** | Basic Metasploit | Cobalt Strike | Custom C2 frameworks | APT simulation | `msfconsole && use exploit/multi/handler` |
| **Social Engineering** | Basic awareness | SET toolkit | Custom campaigns | Psychological profiling | `setoolkit && python se-toolkit.py` |
| **Physical Security** | Basic OSINT | Lock picking + RFID | Hardware implants | Supply chain attacks | `proxmark3 && rfidresearchgroup/proxmark3` |
| **Evasion Techniques** | AV evasion | Sandbox evasion | Memory-only attacks | Living-off-the-land | `msfvenom --encoder --iterations && invoke-mimikatz` |

---

## 🧠 **ARQUITECTURA DE IMPLEMENTACIÓN SECUENCIAL**

### **🏗️ FASE I: FUNDAMENTOS INEXPUGNABLES** *(Semana 1-2)*
```mermaid
graph TD
    A[Hardware Hardening] --> B[OS Hardening]
    B --> C[Network Perimeter]
    C --> D[Basic Encryption]
    D --> E[Secure Communications]
```

#### **Hardware y Firmware**
```bash
# Verificar y habilitar TPM
sudo tpm2_startup -c
sudo tpm2_selftest

# Verificar Secure Boot
sudo mokutil --sb-state

# Hardening BIOS/UEFI
# - Disable unnecessary peripherals
# - Enable CPU security features (SMEP, SMAP, CET)
# - Configure boot order restrictions

# Intel ME cleaning (Advanced)
git clone https://github.com/corna/me_cleaner
python me_cleaner.py -S -O clean_dump.bin bios_dump.bin
```

#### **Sistema Operativo Base Hardened**

**🎯 CONTEXTO**: Tu sistema operativo es la base de TODO. Si está comprometido, da igual qué otras seguridades tengas. Este hardening convierte un Ubuntu normal en una fortaleza que resiste ataques automatizados y exploits comunes.

```bash
#!/bin/bash
# DÓNDE EJECUTAR: Terminal de tu Ubuntu/Debian recién instalado
# PROPÓSITO: Convertir sistema vulnerable en fortaleza hardened
# TIEMPO: 15-30 minutos

echo "🛡️ INICIANDO HARDENING DEL SISTEMA BASE..."

# PASO 1: Kernel hardening - Evita exploits de memoria y escalación
echo "⚙️ Configurando protecciones de kernel..."
cat >> /etc/sysctl.d/99-security.conf << EOF
# Protección contra buffer overflows
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
kernel.yama.ptrace_scope = 3

# Red: protección contra SYN flood y spoofing
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1

# IPv6: deshabilitar si no lo usas (reduce superficie de ataque)
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
EOF

# Aplicar cambios inmediatamente
sysctl -p /etc/sysctl.d/99-security.conf

# PASO 2: Control de Acceso Obligatorio (MAC) - AppArmor
echo "🔒 Configurando AppArmor (sandboxing de aplicaciones)..."
sudo apt install apparmor apparmor-utils apparmor-profiles apparmor-profiles-extra -y
sudo aa-enforce /etc/apparmor.d/*  # Activar TODOS los perfiles en modo enforce

# PASO 3: Auditoría del sistema - Quién hace qué y cuándo
echo "📋 Configurando auditd (registro de TODA la actividad crítica)..."
sudo apt install auditd audispd-plugins -y

# Reglas de auditoría críticas
cat >> /etc/audit/rules.d/audit.rules << EOF
# Monitorear cambios en archivos críticos del sistema
-w /etc/passwd -p wa -k user_modification
-w /etc/group -p wa -k group_modification  
-w /etc/sudoers -p wa -k privilege_escalation
-w /etc/ssh/sshd_config -p wa -k ssh_config
-w /etc/crontab -p wa -k scheduled_tasks

# Monitorear comandos privilegiados
-a always,exit -F arch=b64 -S execve -F uid=0 -k root_commands
-a always,exit -F arch=b32 -S execve -F uid=0 -k root_commands

# Monitorear intentos de escalación
-a always,exit -F arch=b64 -S setuid -S setgid -S setreuid -S setregid -k privilege_escalation
EOF

sudo systemctl enable auditd
sudo systemctl start auditd

# PASO 4: Protección contra brute force
echo "🚫 Configurando Fail2ban (bloqueo automático de atacantes)..."
sudo apt install fail2ban -y

cat > /etc/fail2ban/jail.local << EOF
[DEFAULT]
# Ban por 24 horas después de 3 intentos en 10 minutos
bantime = 86400
findtime = 600  
maxretry = 3
backend = systemd

# Enviar emails de alerta (configurar con tu email)
destemail = admin@tudominio.com
sendername = Fail2Ban-$(hostname)
action = %(action_mwl)s

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 2  # SSH más estricto
bantime = 86400

[apache-auth]
enabled = true
port = http,https
filter = apache-auth
logpath = /var/log/apache2/*error.log
maxretry = 3

[postfix]
enabled = true
port = smtp,465,submission
filter = postfix
logpath = /var/log/mail.log
maxretry = 3
EOF

sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "✅ HARDENING COMPLETADO - Tu sistema ahora es 100x más seguro"
echo "📊 Para ver intentos de ataque: sudo fail2ban-client status sshd"
echo "📋 Para ver logs de auditoría: sudo aureport --summary"
```

#### **Perímetro de Red Defensivo**

**🎯 CONTEXTO**: Tu router doméstico es basura para seguridad real. pfSense convierte hardware barato en un firewall empresarial que puede detener APTs. Esto se instala en una PC vieja/Raspberry Pi que actúa como tu gateway principal.

```bash
# QUÉ ES: Firewall/router empresarial basado en FreeBSD
# DÓNDE: PC dedicada con 2+ tarjetas de red (WAN/LAN) o VM con red bridged
# PROPÓSITO: Control total del tráfico, IDS/IPS integrado, bloqueo geográfico

echo "🏗️ INSTALANDO pfSense - Tu nuevo perímetro defensivo"

# HARDWARE REQUERIDO:
# - PC con 2+ interfaces de red (una para WAN, otra para LAN)
# - Mínimo 2GB RAM, 8GB almacenamiento
# - O Raspberry Pi 4 con USB-Ethernet adicional

# Descarga pfSense ISO
wget https://frafiles.netgate.com/mirror/downloads/pfSense-CE-2.7.2-RELEASE-amd64.iso.gz
gunzip pfSense-CE-2.7.2-RELEASE-amd64.iso.gz

# Verificar integridad (CRÍTICO - evita backdoors)
wget https://frafiles.netgate.com/mirror/downloads/pfSense-CE-2.7.2-RELEASE-amd64.iso.gz.sha256
sha256sum -c pfSense-CE-2.7.2-RELEASE-amd64.iso.gz.sha256

# Grabar en USB e instalar en hardware dedicado
sudo dd if=pfSense-CE-2.7.2-RELEASE-amd64.iso of=/dev/sdX bs=4M status=progress

echo "📡 CONFIGURACIÓN POST-INSTALACIÓN (vía web interface https://192.168.1.1)"

# CONFIGURACIÓN BÁSICA CRÍTICA:
# 1. System > General Setup:
#    - Hostname: firewall
#    - Domain: local.domain  
#    - DNS: 9.9.9.9, 149.112.112.112 (Quad9)
#    - Timezone: Tu zona horaria

# 2. Interfaces assignment:
#    - WAN: Cable del ISP
#    - LAN: Switch interno
#    - OPT1-3: VLANs (IoT, Guests, Management)

# INSTALACIÓN DE PAQUETES CRÍTICOS (System > Package Manager):
echo "📦 Instalando paquetes de seguridad..."

# pfBlockerNG - Threat Intelligence y Geo-blocking
echo "🌍 pfBlockerNG: Bloquea países hostiles y dominios maliciosos"
# Firewall > pfBlockerNG > DNSBL
# - Habilitar: ads_basic, malware_basic, tracking_basic
# - GeoIP: Bloquear China, Rusia, Corea del Norte

# Suricata IDS/IPS - Detección de intrusiones
echo "🕵️ Suricata: Detecta y bloquea ataques en tiempo real"
# Services > Suricata > Interfaces
# - Habilitar en WAN y LAN
# - Rules: Emerging Threats (gratuitas)
# - Mode: IPS (bloquea automáticamente)

# ntopng - Monitoreo de tráfico en tiempo real  
echo "📊 ntopng: Visualiza TODO el tráfico de tu red"
# Diagnostics > ntopng
# - Monitor: LAN y WAN interfaces
# - Alertas: Configurar para tráfico anómalo

# REGLAS DE FIREWALL ANTI-APT:
echo "🔥 Configurando reglas de firewall..."

# WAN Rules (bloquear todo excepto respuestas):
# - Block RFC1918 networks from WAN
# - Block bogon networks  
# - Allow only established/related connections

# LAN Rules (control granular):
# - Allow LAN to internet (con filtrado pfBlockerNG)
# - Block LAN to firewall admin interface (except management VLAN)
# - Allow DNS only to pfSense resolver

# LOGGING Y ALERTAS:
# Status > System Logs > Settings
# - Enable remote logging to SIEM
# - Log all blocked packets
# - Enable GUI authentication logging
```

#### **DNS Seguro con Pi-hole + DoH**

**🎯 CONTEXTO**: Tu ISP ve TODAS tus consultas DNS (qué sitios visitas). Pi-hole + DNS over HTTPS bloquea rastreo, malware y publicidad a nivel de red, protegiendo TODOS los dispositivos simultáneamente.

```bash
# QUÉ ES: DNS server local que filtra malware/ads + cifrado anti-espionaje  
# DÓNDE: Raspberry Pi en tu red local O VM en tu servidor
# PROPÓSITO: Bloquear malware/ads para TODA la red + privacidad DNS

echo "🏠 INSTALANDO Pi-hole - Tu DNS fortaleza casero"

# OPCIÓN A: Raspberry Pi dedicado
# Hardware: Raspberry Pi 4, tarjeta SD 32GB+, fuente oficial

# Instalación automática
curl -sSL https://install.pi-hole.net | bash

# Durante instalación elegir:
# - Interface: eth0 (cable, más confiable que WiFi)
# - DNS Provider: Quad9 (9.9.9.9) - respeta privacidad
# - Block lists: Seleccionar todas las básicas
# - Admin interface: Activar con password fuerte

# OPCIÓN B: Ubuntu/Debian server
git clone --depth 1 https://github.com/pi-hole/pi-hole.git Pi-hole
cd "Pi-hole/automated install/"
sudo bash basic-install.sh

echo "🔒 CONFIGURANDO DNS OVER HTTPS (DoH) - Anti-espionaje ISP"

# Instalar cloudflared (Cloudflare DoH proxy)
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Configurar túnel DoH
sudo useradd -s /usr/sbin/nologin -r -M cloudflared

cat > /etc/default/cloudflared << EOF
# Comandline args for cloudflared
CLOUDFLARED_OPTS=--port 5053 --upstream https://1.1.1.1/dns-query --upstream https://1.0.0.1/dns-query
EOF

# Crear servicio systemd
cat > /etc/systemd/system/cloudflared.service << EOF
[Unit]
Description=cloudflared DNS over HTTPS proxy
After=syslog.target network-online.target

[Service]
Type=simple
User=cloudflared
EnvironmentFile=/etc/default/cloudflared
ExecStart=/usr/local/bin/cloudflared proxy-dns \$CLOUDFLARED_OPTS
Restart=on-failure
RestartSec=10
KillMode=mixed

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable cloudflared
sudo systemctl start cloudflared

# Configurar Pi-hole para usar DoH
# Admin Panel > Settings > DNS
# - Uncheck all default DNS
# - Custom DNS 1: 127.0.0.1#5053
# - Check "Never forward non-FQDNs" y "Never forward reverse lookups"

echo "📊 CONFIGURACIÓN AVANZADA DE FILTRADO"

# Listas de bloqueo adicionales (ejecutar en Pi-hole admin)
# Tools > Update Gravity:
pihole -g  # Actualizar listas

# Listas personalizadas recomendadas:
# https://someonewhocares.org/hosts/zero/hosts
# https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts  
# https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts

# Bloquear dominios específicos manualmente:
pihole blacklist googlesyndication.com
pihole blacklist doubleclick.net  
pihole blacklist facebook.com  # Si quieres bloquear redes sociales
pihole blacklist tiktok.com

# CONFIGURAR ROUTER PRINCIPAL:
# 1. Acceder a admin del router (192.168.1.1)
# 2. DHCP Settings > Primary DNS: IP_DE_TU_PIHOLE
# 3. Secondary DNS: 9.9.9.9 (backup)
# 4. Reiniciar router

# VERIFICACIÓN:
echo "✅ Verificando funcionamiento..."
nslookup doubleclick.net 192.168.1.X  # Debe devolver 0.0.0.0
echo "Si devuelve 0.0.0.0, Pi-hole está bloqueando correctamente"

# Monitoreo en tiempo real:
pihole -t  # Ver consultas en vivo
# Web interface: http://IP_PIHOLE/admin - Dashboard con estadísticas
```

### **🔐 FASE II: CRIPTOGRAFÍA MULTICAPA** *(Semana 3-4)*

#### **Gestión de Identidad y Claves**
```bash
# Hardware Security Key Setup (YubiKey)
sudo apt install yubikey-manager
ykman info
ykman openpgp keys set-touch sig on  # Require touch for signatures
ykman openpgp keys set-touch enc on  # Require touch for decryption

# GPG key generation with hardware backing
gpg --card-edit
> admin
> generate
# Follow prompts for master key generation

# Create revocation certificate
gpg --output revocation.asc --gen-revoke YOUR_KEY_ID
# Store in secure offline location

# PKCS#11 integration
echo "enable-ssh-support" >> ~/.gnupg/gpg-agent.conf
echo "use-agent" >> ~/.gnupg/gpg.conf
```

#### **Disk Encryption con Hardware Integration**
```bash
# LUKS with TPM2 integration
sudo apt install clevis clevis-luks clevis-tpm2

# Setup encrypted root partition with TPM unlock
sudo clevis luks bind -d /dev/nvme0n1p3 tpm2 '{"pcr_ids":"0,2,4,7"}'

# VeraCrypt for portable volumes
sudo add-apt-repository ppa:unit193/encryption
sudo apt install veracrypt

# Create hidden volume (plausible deniability)
veracrypt --text --create /media/encrypted/hidden.hc \
  --size 1G --encryption AES --hash SHA-512 \
  --filesystem fat32 --password "OuterPassword" \
  --hidden-volume --hidden-size 500M \
  --hidden-password "HiddenPassword"
```

### **🕵️ FASE III: ANONIMATO Y EVASIÓN** *(Semana 5-6)*

#### **Navegación Ultra-Segura**

**🎯 CONTEXTO**: Necesitas navegar de forma completamente anónima, sin dejar rastros en tu sistema principal. Esto es crítico para periodistas, activistas, o cualquier actividad sensible donde la correlación de identidad puede ser peligrosa.

##### **TAILS OS - Sistema Amnésico Completo**
```bash
# QUÉ ES: Sistema operativo que no guarda NADA en tu disco duro
# DÓNDE: USB booteable, corre desde memoria RAM únicamente  
# PROPÓSITO: Navegación anónima sin rastros, ideal para sesiones críticas

# Descarga y verificación (FUNDAMENTAL - evita backdoors)
wget https://tails.net/torrents/files/tails-amd64-6.0.img.torrent
gpg --import tails-signing.key
gpg --verify tails-amd64-6.0.img.sig tails-amd64-6.0.img

# Grabar en USB (Linux)
sudo dd if=tails-amd64-6.0.img of=/dev/sdX bs=4M status=progress
# Windows: Usar Etcher desde tails.net/install

# USO SEGURO:
# 1. Boot desde USB (F12 al encender PC)
# 2. Configurar red WiFi
# 3. TODO el tráfico pasa por Tor automáticamente
# 4. Al apagar, NO queda rastro alguno en el disco duro
# 5. Para persistencia: crear volumen persistente cifrado en USB
```

##### **Whonix - Aislamiento por Virtualización**
```bash
# QUÉ ES: Dos VMs que se comunican - Gateway maneja Tor, Workstation ejecuta apps
# DÓNDE: VirtualBox en tu sistema principal
# PROPÓSITO: Anonimato con comodidad, imposible bypass de Tor

# Descarga y verificación
wget https://download.whonix.org/ova/Whonix-Gateway-XFCE-17.1.0.3.ova
wget https://download.whonix.org/ova/Whonix-Workstation-XFCE-17.1.0.3.ova
gpg --import patrick.asc
gpg --verify Whonix-Gateway-*.ova.asc

# Importar en VirtualBox
VBoxManage import Whonix-Gateway-XFCE-17.1.0.3.ova
VBoxManage import Whonix-Workstation-XFCE-17.1.0.3.ova

# CONFIGURACIÓN CRÍTICA:
# 1. Gateway: Solo maneja conexión Tor, NO navegas aquí
# 2. Workstation: Donde trabajas, TODO el tráfico OBLIGATORIAMENTE pasa por Gateway
# 3. Red interna entre VMs, Workstation NO puede acceder a internet directo
# 4. Si Gateway se compromete, Workstation sigue segura

# Custom Tor configuration en Gateway
sudo nano /etc/tor/torrc
# Añadir estas líneas para máxima seguridad:
SocksPort 9050
DNSPort 53
VirtualAddrNetworkIPv4 10.192.0.0/10
AutomapHostsOnResolve 1
TransPort 9040
ExcludeNodes {us},{uk},{ca},{au},{nz}  # Evitar países "Five Eyes"
StrictNodes 1
```

#### **Browser Hardening Extremo**
```javascript
// Firefox about:config settings for maximum privacy
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("webgl.disabled", true);
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("network.http.sendRefererHeader", 0);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("beacon.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("canvas.poisondata", true);
```

### **🛡️ FASE IV: DETECCIÓN Y RESPUESTA AVANZADA** *(Semana 7-8)*

#### **SIEM Casero con ELK Stack**
```bash
#### **Hardware Security Key Setup (YubiKey)**

**🎯 CONTEXTO**: Las contraseñas son el eslabón más débil. Un YubiKey convierte la autenticación en algo que TIENES físicamente, no algo que SABES. Imposible de robar remotamente, resistente a phishing.

```bash
# QUÉ ES: Token hardware que genera códigos únicos y almacena claves criptográficas
# DÓNDE: Se conecta por USB/NFC a cualquier dispositivo
# PROPÓSITO: 2FA imposible de phishear + almacenamiento seguro de claves GPG/SSH

echo "🔑 CONFIGURANDO YUBIKEY - Autenticación imposible de hackear"

# INSTALACIÓN de herramientas (Ubuntu/Debian)
sudo apt install yubikey-manager yubioath-desktop yubikey-personalization -y

# VERIFICAR que YubiKey es detectada
ykman info
# Debe mostrar: Serial number, firmware version, capabilities

echo "🎯 CONFIGURACIÓN PARA MÁXIMA SEGURIDAD"

# PASO 1: Configurar FIDO2/WebAuthn (para sitios web)
ykman fido info
# Esto permite usar YubiKey en Google, GitHub, Facebook, etc.
# Proceso: Sitio web > Security settings > Add security key > Tocar YubiKey

# PASO 2: Configurar OATH-TOTP (códigos de 6 dígitos)
echo "📱 Configurando TOTP (reemplaza Google Authenticator)"
ykman oath accounts add "GitHub:tuusuario" SECRETKEY_DE_GITHUB
ykman oath accounts add "Gmail:tuusuario" SECRETKEY_DE_GMAIL

# Ver códigos TOTP
ykman oath accounts code  # Muestra códigos actuales
# O usar app Yubico Authenticator

# PASO 3: Generar claves GPG EN el YubiKey (más seguro)
echo "🔐 Generando claves GPG directamente en hardware"
gpg --card-edit
> admin
> generate
# Seguir prompts: crear clave de 4096 bits, NO exportar clave privada

# La clave privada NUNCA sale del YubiKey, imposible de extraer

# PASO 4: Configurar SSH con YubiKey
echo "🔧 Configurando SSH con autenticación hardware"

# Habilitar soporte SSH en GPG agent
echo "enable-ssh-support" >> ~/.gnupg/gpg-agent.conf
echo "use-agent" >> ~/.gnupg/gpg.conf

# Reiniciar GPG agent
gpg-connect-agent reloadagent /bye

# Obtener clave SSH pública del YubiKey
gpg --export-ssh-key TU_GPG_KEY_ID > ~/.ssh/yubikey.pub

# Configurar servidor SSH para requerir YubiKey
sudo nano /etc/ssh/sshd_config
# Añadir:
# AuthenticationMethods publickey,keyboard-interactive
# PubkeyAuthentication yes
# PasswordAuthentication no

# Copiar clave pública al servidor
ssh-copy-id -i ~/.ssh/yubikey.pub usuario@servidor

echo "🛡️ POLÍTICAS DE TOUCH (Require physical touch)"
# Requerir toque físico para CADA operación criptográfica
ykman openpgp keys set-touch sig on    # Firmas requieren toque
ykman openpgp keys set-touch enc on    # Cifrado requiere toque  
ykman openpgp keys set-touch aut on    # Autenticación requiere toque

# Verificación
ykman openpgp info
# Debe mostrar "Touch policy: On" para todas las operaciones

echo "✅ YubiKey configurada - Ahora tu autenticación es físicamente imposible de hackear"
echo "🎯 Próximo paso: Configurar sitios web para usar YubiKey como 2FA"
echo "   - GitHub: Settings > Security > Add security key"
echo "   - Google: Security > 2-Step Verification > Add security key"  
echo "   - Bitwarden: Settings > Security > Two-step Login"
```
```

#### **Honeypots y Canary Tokens**
```bash
# SSH honeypot with Cowrie
git clone https://github.com/cowrie/cowrie.git
cd cowrie
python -m venv cowrie-env
source cowrie-env/bin/activate
pip install -r requirements.txt

# Configuration
cp etc/cowrie.cfg.dist etc/cowrie.cfg
# Edit: Change hostname, add fake filesystem, configure logging

# Network monitoring with Zeek
sudo apt install zeek
sudo zeekctl
[ZeekControl] > install
[ZeekControl] > start

# Custom Zeek scripts for advanced detection
cat > /opt/zeek/share/zeek/site/local.zeek << EOF
@load base/protocols/conn
@load base/protocols/dns
@load base/protocols/http

event http_request(c: connection, method: string, original_URI: string, 
                  unescaped_URI: string, version: string) {
    if ( /malware|exploit|payload/ in original_URI ) {
        print fmt("Potential malicious request: %s -> %s", c$id$orig_h, original_URI);
    }
}
EOF
```

### **🧬 FASE V: TÉCNICAS OFENSIVAS PARA DEFENSA** *(Semana 9-10)*

#### **Red Team Local**
```bash
# Caldera setup (MITRE ATT&CK framework)
git clone https://github.com/mitre/caldera.git --recursive
cd caldera
pip3 install -r requirements.txt

# Configure abilities and adversaries
python3 server.py --insecure

# Custom ability for testing
cat > data/abilities/discovery/custom_discovery.yml << EOF
- id: 12345678-1234-1234-1234-123456789012
  name: Custom Network Discovery
  description: Discover network topology
  tactic: discovery
  technique:
    attack_id: T1018
    name: Remote System Discovery
  platforms:
    linux:
      sh:
        command: |
          nmap -sn $(ip route | grep -o '192.168.[0-9]*.[0-9]*/[0-9]*' | head -1)
EOF
```

#### **Vulnerability Research Environment**
```bash
# Fuzzing infrastructure
sudo apt install afl++ radamsa

# Custom fuzzer for network protocols
cat > network_fuzzer.py << EOF
#!/usr/bin/env python3
import socket
import random
import struct

def fuzz_packet():
    # Generate malformed packets
    packet = b""
    packet += struct.pack("!H", random.randint(0, 65535))  # Random header
    packet += b"A" * random.randint(1, 1024)              # Random payload
    return packet

def send_fuzz(target_ip, target_port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    for i in range(1000):
        try:
            sock.sendto(fuzz_packet(), (target_ip, target_port))
        except Exception as e:
            print(f"Error: {e}")
    sock.close()

if __name__ == "__main__":
    send_fuzz("127.0.0.1", 8080)
EOF
```

---

## 🚨 **PROTOCOLOS DE EMERGENCIA**

### **🔴 INCIDENT RESPONSE PLAYBOOK**
```bash
#!/bin/bash
# Emergency incident response script

# 1. Network isolation
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP  
sudo iptables -P OUTPUT DROP
sudo iptables -A OUTPUT -p udp --dport 53 -j ACCEPT  # DNS only

# 2. Memory dump
sudo apt install volatility3
sudo dd if=/dev/mem of=/tmp/memory_dump.raw bs=1M

# 3. Disk imaging
sudo dd if=/dev/sda of=/external/disk_image.dd bs=4096 conv=noerror,sync

# 4. Log preservation
sudo tar -czf /external/logs_$(date +%Y%m%d_%H%M%S).tar.gz /var/log/

# 5. Process analysis
ps auxww > /external/processes.txt
netstat -tulnp > /external/network_connections.txt
lsof > /external/open_files.txt

# 6. Alert external monitoring
curl -X POST https://monitoring.domain.com/alert \
  -d "host=$(hostname)&incident=true&timestamp=$(date -Iseconds)"
```

### **🧯 COMPROMISE RECOVERY**
```bash
#!/bin/bash
# Automated compromise recovery

# 1. Kill suspicious processes
pkill -f "suspicious_binary"
pkill -f "known_malware"

# 2. Remove persistence mechanisms
crontab -l | grep -v "malicious_cron" | crontab -
find /etc/systemd/system/ -name "*.service" -exec grep -l "suspicious" {} \; | xargs rm

# 3. Reset credentials
passwd root
passwd $USER

# 4. Update and harden system
apt update && apt upgrade -y
apt autoremove --purge

# 5. Restore from clean backup
rsync -av /backup/clean_system/ / --exclude=/proc --exclude=/sys
```

---

## 🧮 **MÉTRICAS DE EFECTIVIDAD**

### **Key Performance Indicators (KPIs)**
| Métrica | Objetivo | Medición | Herramienta |
|---------|----------|----------|-------------|
| **Time to Detection** | <5 minutos | SIEM alerts | ELK Stack + Wazuh |
| **False Positive Rate** | <2% | Alert validation | Custom dashboards |
| **Recovery Time** | <30 minutos | Incident timestamps | Playbook automation |
| **Coverage Assessment** | 95% MITRE ATT&CK | Technique mapping | Caldera + MITRE Navigator |
| **Threat Hunting Success** | 1+ IOC/week | Custom detections | Threat intelligence feeds |

### **Security Posture Validation**
```bash
#!/bin/bash
# Automated security assessment

# Check encryption status
if cryptsetup isLuks /dev/sda1; then
    echo "✅ Disk encryption: ACTIVE"
else
    echo "❌ Disk encryption: MISSING"
fi

# Verify firewall rules
if ufw status | grep -q "Status: active"; then
    echo "✅ Firewall: ACTIVE"
else
    echo "❌ Firewall: INACTIVE"
fi

# Check for security updates
UPDATES=$(apt list --upgradable 2>/dev/null | grep security | wc -l)
echo "⚠️  Pending security updates: $UPDATES"

# Audit privileged users
echo "👥 Privileged users:"
grep ":0:" /etc/passwd | cut -d: -f1
```

---

## 🎯 **THREAT MODELING MATRIX**

### **Adversary Capabilities vs Defensive Layers**
| Adversary Type | Technical Skills | Resources | Persistence | Defensive Counter |
|----------------|------------------|-----------|-------------|-------------------|
| **Script Kiddie** | Low | Low | Low | Basic hardening + updated AV |
| **Cybercriminal** | Medium | Medium | Medium | Network segmentation + IDS |
| **Nation State** | High | High | High | Air-gaps + multi-layer defense |
| **Insider Threat** | Variable | High | High | Zero-trust + behavioral monitoring |
| **Supply Chain** | High | High | Very High | Hardware verification + code signing |

### **Attack Vector Analysis**
```bash
# Automated threat surface assessment
#!/bin/bash

echo "🔍 ATTACK SURFACE ANALYSIS"
echo "=========================="

# Network exposure
echo "📡 Network Services:"
nmap -sS -O localhost | grep "open"

# Web application exposure  
echo "🌐 Web Services:"
nikto -h localhost -port 80,443,8080,8443

# USB/Physical exposure
echo "🔌 USB Security:"
lsusb | grep -v "Linux Foundation"

# Credential exposure
echo "🔑 Credential Security:"
find / -name "*.key" -o -name "*.pem" -o -name "*password*" 2>/dev/null | head -10

# Software vulnerabilities
echo "🐛 Software Vulnerabilities:"
apt list --upgradable 2>/dev/null | grep -i security
```

---

## 🏆 **CERTIFICACIÓN Y VALIDACIÓN CONTINUA**

### **Pentesting Interno Automatizado**
```bash
#!/bin/bash
# Weekly automated penetration test

# Network discovery
nmap -sS -A 192.168.1.0/24 > /reports/network_scan_$(date +%Y%m%d).txt

# Vulnerability scanning
openvas-start
omp -u admin -w admin --xml="<get_tasks/>" | grep "Task"

# Web application testing
nikto -h http://localhost -Format txt -output /reports/web_scan_$(date +%Y%m%d).txt

# Social engineering simulation
setoolkit --automated --phishing --gmail

# Physical security test
proxmark3 -c "hf 14a read"

# Generate report
cat > /reports/weekly_security_report_$(date +%Y%m%d).md << EOF
# Weekly Security Assessment Report

## Network Security
$(cat /reports/network_scan_$(date +%Y%m%d).txt | grep "Nmap scan report")

## Vulnerability Assessment  
$(grep -c "VULNERABILITY" /reports/web_scan_$(date +%Y%m%d).txt) vulnerabilities found

## Recommendations
- Update identified vulnerable services
- Implement additional network segmentation
- Review access control policies
EOF
```

### **Compliance and Audit Trail**
```bash
# Compliance checking script
#!/bin/bash

# SOC2 Type II requirements
echo "🔍 SOC2 COMPLIANCE CHECK"
echo "======================="

# Access control verification
echo "👤 User Access Review:"
lastlog | grep -v "Never logged in" | tail -20

# Data encryption verification  
echo "🔒 Encryption Status:"
lsblk -f | grep crypto

# Backup verification
echo "💾 Backup Status:"
find /backup -name "*.tar.gz" -mtime -1 | wc -l

# Log retention verification
echo "📋 Log Retention:"
find /var/log -name "*.log" -mtime -90 | wc -l

# Incident response readiness
echo "🚨 IR Readiness:"
test -f /etc/incident_response/playbook.sh && echo "✅ Playbook ready" || echo "❌ Playbook missing"
```

---

## 🔮 **PRÓXIMAS FRONTERAS: EMERGING THREATS**

### **AI/ML Security**
```python
# Adversarial ML detection
import numpy as np
from sklearn.ensemble import IsolationForest

def detect_adversarial_inputs(network_traffic):
    """Detect AI-generated malicious traffic patterns"""
    
    # Feature extraction from network packets
    features = extract_packet_features(network_traffic)
    
    # Isolation Forest for anomaly detection
    clf = IsolationForest(contamination=0.1, random_state=42)
    anomalies = clf.fit_predict(features)
    
    return np.where(anomalies == -1)[0]  # Return anomalous indices

def extract_packet_features(traffic):
    """Extract relevant features for ML analysis"""
    features = []
    for packet in traffic:
        # Packet size entropy
        entropy = calculate_entropy(packet.payload)
        # Inter-arrival time patterns  
        timing = packet.timestamp_delta
        # Protocol anomalies
        proto_score = analyze_protocol_conformance(packet)
        
        features.append([entropy, timing, proto_score])
    
    return np.array(features)
```

### **Quantum-Resistant Cryptography**
```bash
# Post-quantum cryptography implementation
git clone https://github.com/open-quantum-safe/liboqs.git
cd liboqs
mkdir build && cd build
cmake -GNinja .. -DOQS_ENABLE_KEM_KYBER=ON -DOQS_ENABLE_SIG_DILITHIUM=ON
ninja

# Test quantum-resistant algorithms
./tests/test_kem kyber768
./tests/test_sig dilithium3

# Integration with OpenSSL
git clone https://github.com/open-quantum-safe/openssl.git
cd openssl
./Configure no-shared linux-x86_64 -lm
make -j$(nproc)

# Generate quantum-resistant keys
./apps/openssl genpkey -algorithm kyber768 -out kyber_private.pem
./apps/openssl pkey -in kyber_private.pem -pubout -out kyber_public.pem
```

### **Zero-Trust Architecture**
```yaml
# Kubernetes Zero-Trust Policy (Cilium)
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: zero-trust-default-deny
spec:
  endpointSelector: {}
  egress:
  - toEndpoints:
    - matchLabels:
        k8s:io.kubernetes.pod.namespace: kube-system
        k8s:k8s-app: kube-dns
    toPorts:
    - ports:
      - port: "53"
        protocol: UDP
  - toFQDNs:
    - matchPattern: "*.company.internal"
  ingress: []  # Default deny all ingress
```

---

## 🚀 **IMPLEMENTACIÓN TIPO "DARK ARMY"**

Tu setup debería verse así al completar esta guía:

```
[Internet] 
    ↓
[ISP Modem] → [pfSense Firewall] → [Managed Switch]
    ↓                                      ↓
[DMZ VLAN]                        [Internal Network]  
    ↓                                      ↓
[Honeypots]                        [Workstations in VMs]
[IDS/IPS]                             ↓
[SIEM Server]                  [Qubes OS] → [Whonix VMs] → [Tor Browser]
                                      ↓
-------------------------------------------------------- 

¡Excelente! He tomado el extenso y valioso contenido que proporcionaste y lo he reestructurado en una guía cohesiva, profesional y fácil de seguir.

He eliminado redundancias, organizado el contenido en una progresión lógica (de la filosofía a la implementación avanzada) y he mantenido intactos todos los elementos clave que solicitaste, como las tablas, los enlaces de YouTube y los detallados bloques de código.

La estructura final sigue un modelo de "defensa en profundidad", comenzando con la mentalidad, definiendo la arquitectura y luego sumergiéndose en la implementación paso a paso.

---

# 🛡️ Guía Definitiva de Seguridad Digital: Arquitectura de Defensa en Profundidad
## *"Capa por Capa, Sin Regalar Oportunidades"*

> **Filosofía**: La seguridad no es un producto, es un proceso. Cada capa añadida multiplica la resistencia del sistema. Esta guía está diseñada para ser un manual completo, desde los principios fundamentales hasta la implementación de una fortaleza digital de nivel experto.

---

## **PARTE 0: LA MENTALIDAD Y LOS PRINCIPIOS (ZERO TRUST)**

### **Filosofía KISS: "Nunca confíes, siempre verifica"**
Zero Trust no es complicado. Es simplemente **NO CONFIAR EN NADA** hasta que demuestre que es legítimo. Antes de sumergirte en la técnica, interioriza el concepto.

| 🎥 **Videos Esenciales** | Duración | Propósito |
|--------------------------|----------|-----------|
| [What is Zero Trust? - IBM](https://www.youtube.com/watch?v=CFNy9jN3iCQ) | 5 min | Concepto básico |
| [Zero Trust Architecture Explained](https://www.youtube.com/watch?v=1cozDbMjNoc) | 8 min | Implementación práctica |
| [Home Network Security](https://www.youtube.com/watch?v=YEzLVdH4n-M) | 15 min | Aplicación doméstica |

### **Matriz Zero Trust Simplificada**

| Principio | En Casa Normal | Zero Trust Casa | Herramienta | Tiempo Setup |
|-----------|----------------|-----------------|-------------|--------------|
| **Identidad** | Contraseña de router `admin/admin` | Cada dispositivo autenticado | YubiKey + pfSense | 30 min |
| **Dispositivos** | Todos en la misma red | Segmentación por VLANs | Managed Switch | 45 min |
| **Aplicaciones** | Acceso libre | Whitelisting + firewall de app | UFW + AppArmor | 20 min |
| **Datos** | Sin cifrar | Todo cifrado en reposo y tránsito | LUKS + VeraCrypt | 40 min |
| **Red** | Confianza total en la LAN | Monitoreo total y segmentación | Pi-hole + Suricata | 60 min |

---

## **PARTE 1: EL BLUEPRINT (ARQUITECTURA DE DEFENSA)**

### **Arquitectura Final Tipo "Dark Army"**
**🎯 CONTEXTO**: Al completar esta guía, tu setup doméstico rivaliza con infraestructuras de nivel estatal. Cada componente cumple un rol específico en la defensa en profundidad. Si un atacante compromete una capa, las otras siguen protegiéndote.

```mermaid
graph TD
    subgraph Internet Hostil
        A[Internet]
    end

    subgraph Perímetro
        B[ISP Modem en modo Bridge] --> C{🛡️ pfSense Firewall + IDS/IPS};
    end

    subgraph Red Interna Segmentada
        C --> D[🔀 Managed Switch];
        D --> V10[VLAN 10: Management];
        D --> V20[VLAN 20: Trabajo Confiable];
        D --> V30[VLAN 30: IoT No Confiable];
        D --> V40[VLAN 40: Invitados Aislados];
        D --> V50[VLAN 50: Honeypots & Trampas];
    end
    
    subgraph Endpoints y Servicios
        V10 --> E[🧠 SIEM + Pi-hole];
        V20 --> F[💻 Workstations];
        V50 --> G[🍯 Honeypots];
    end

    subgraph Aislamiento en Workstation
        F --> H[Qubes OS];
        H --> I[VM de Trabajo];
        H --> J[VM de Navegación Anónima - Whonix];
        H --> K[VM de Vault - KeePassXC];
    end

    subgraph Almacenamiento y Recuperación
        L[💾 Backups Offline Cifrados]
    end

    style L fill:#f9f,stroke:#333,stroke-width:2px
```

### **Matriz de Dominios de Seguridad**
Esta matriz sirve como referencia rápida para todas las herramientas y técnicas cubiertas, clasificadas por dominio y nivel de habilidad.

#### 🖥️ **INFRAESTRUCTURA BASE**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Sistema Operativo** | Ubuntu LTS + hardening | Qubes OS | Whonix Gateway+Workstation | Custom hardened kernel |
| **Virtualización** | VirtualBox | KVM/QEMU | Xen hypervisor | Type-1 hypervisor dedicado |
| **Hardware Security** | TPM activado | Hardware tokens (YubiKey) | Libreboot/Coreboot | Air-gapped systems |
| **Bootloader** | GRUB con password | Secure Boot + keys | coreboot + heads | Custom UEFI payload |
| **Firmware** | UEFI defaults | Custom UEFI settings | ME_cleaner aplicado | Completely libre firmware |

#### 🌐 **PERÍMETRO DE RED Y CONECTIVIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Firewall** | UFW básico | pfSense/OPNsense | Distributed firewalling | Custom iptables + eBPF |
| **IDS/IPS** | Fail2ban | Suricata | Wazuh + ELK Stack | Custom ML-based detection |
| **VPN** | Commercial VPN | WireGuard server propio | Multi-hop VPN chain | Tor + VPN + I2P tunnel |
| **DNS** | Quad9/Cloudflare | Pi-hole + DoH | Unbound recursive | Custom authoritative server |
| **Network Segmentation** | Guest WiFi | VLANs configuradas | Micro-segmentation | Zero-trust networking |

#### 🔐 **CRIPTOGRAFÍA Y GESTIÓN DE IDENTIDAD**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Disk Encryption** | LUKS/BitLocker | VeraCrypt (Hidden Vol) | Randomized keys + TPM | Hardware encryption + HSM |
| **Password Management**| Bitwarden cloud | KeePassXC local | Pass + GPG | Hardware security keys |
| **PKI Management** | Basic GPG keys | Certificate authority | Hardware tokens | Distributed PKI |
| **Multi-Factor Auth** | TOTP apps | Hardware FIDO2 (YubiKey) | Smart cards | Biometric + hardware |
| **Key Management** | Local storage | Encrypted storage | HSM integration | Distributed key sharding |

#### 🕵️ **NAVEGACIÓN Y ANONIMATO**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Browser** | Firefox hardened | Tor Browser | LibreWolf + Arkenfox | Custom compiled browser |
| **Fingerprint Resistance** | Basic spoofing | Canvas poisoning | VM por sesión (Qubes) | Hardware randomization |
| **Traffic Analysis Resistance** | VPN only | Tor + VPN | Traffic padding | Decoy traffic generation |

#### 💬 **COMUNICACIONES SEGURAS**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Messaging** | Signal | Session / Element | Briar / Ricochet Refresh | Custom protocols + TAILS |
| **Email** | ProtonMail / Tutanota | Thunderbird + GPG | Anonymouse remailers | Mix networks |
| **File Transfer** | OnionShare | Magic Wormhole | Syncthing + Tor | Custom P2P + steganography |
| **Metadata Scrubbing** | Manual cleaning | ExifTool automation | MAT2 + PDF sanitization | Custom parsers + TAILS amnesia |

#### 🛡️ **DETECCIÓN Y RESPUESTA (DEFENSA ACTIVA)**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Host Monitoring** | Basic logging | OSSEC HIDS | Wazuh + ELK | Custom EDR solution |
| **Network Monitoring**| Router logs | Ntopng / Zeek | Security Onion | Custom SIEM |
| **Threat Intelligence**| Public feeds | MISP integration | Custom IOCs | Threat hunting |
| **Incident Response** | Manual analysis | Automated playbooks | SOAR platform | Custom IR framework |

#### 🧬 **TÉCNICAS OFENSIVAS PARA DEFENSA (RED TEAM LOCAL)**
| Componente | Básico | Intermedio | Avanzado | Experto |
|------------|---------|------------|----------|---------|
| **Vulnerability Assessment** | OpenVAS | Nessus + Nmap | Custom scanners | Zero-day research |
| **Penetration Testing** | Basic Metasploit | Cobalt Strike | Custom C2 frameworks | APT simulation (Caldera) |
| **Physical Security** | Basic OSINT | Lock picking + RFID | Hardware implants | Supply chain attacks |

---

## **PARTE 2: GUÍA DE IMPLEMENTACIÓN SECUENCIAL**

### **FASE I: FUNDAMENTOS INEXPUGNABLES (Semana 1-2)**
Aquí se construye la base. Si esta fase falla, todo lo demás es inútil.

#### **1. Hardening del Sistema Operativo Base (Ubuntu/Debian)**
**🎯 CONTEXTO**: Un sistema operativo por defecto es una puerta abierta. Este script lo convierte en una fortaleza inicial.

```bash
#!/bin/bash
# EJECUTAR EN: Terminal de tu sistema recién instalado.
# PROPÓSITO: Aplicar configuraciones de seguridad críticas.

echo "🛡️ INICIANDO HARDENING DEL SISTEMA BASE..."

# Kernel hardening (protección contra exploits de memoria y red)
sudo cat >> /etc/sysctl.d/99-security.conf << EOF
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
kernel.yama.ptrace_scope = 3
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.all.accept_source_route = 0
EOF
sudo sysctl -p

# Mandatory Access Control (sandboxing de aplicaciones)
sudo apt update && sudo apt install apparmor apparmor-utils -y
sudo aa-enforce /etc/apparmor.d/*

# Auditoría del sistema (registrar acciones críticas)
sudo apt install auditd -y
sudo auditctl -w /etc/passwd -p wa -k user_modification
sudo auditctl -w /etc/sudoers -p wa -k privilege_escalation
sudo systemctl enable auditd && sudo systemctl start auditd

# Firewall de host (control de tráfico básico)
sudo apt install ufw -y
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh # ¡IMPORTANTE SI ES REMOTO!
sudo ufw enable

# Protección contra fuerza bruta
sudo apt install fail2ban -y
sudo systemctl enable fail2ban && sudo systemctl start fail2ban

echo "✅ HARDENING BÁSICO COMPLETADO."
```

#### **2. Perímetro de Red Defensivo (pfSense)**
**🎯 CONTEXTO**: Tu router de ISP no es un firewall. pfSense convierte una PC vieja en un cortafuegos de nivel empresarial con IDS/IPS.

```bash
# QUÉ ES: Firewall/router open source basado en FreeBSD.
# DÓNDE: PC dedicada con 2+ tarjetas de red (NICs) o VM.
# PROPÓSITO: Control total del tráfico, bloqueo geográfico, detección de intrusiones.

# 1. Descargar pfSense desde https://pfsense.org/download/
# 2. Instalar en hardware dedicado.
# 3. Acceder a la interfaz web (usualmente https://192.168.1.1).

# CONFIGURACIÓN CRÍTICA POST-INSTALACIÓN:
# -> System > Advanced > Admin Access: Cambiar puerto y habilitar HTTPS.
# -> Interfaces: Asignar WAN (del ISP) y LAN (a tu switch).
# -> Firewall > Rules > WAN: Bloquear redes privadas (RFC1918) y bogons.

# INSTALAR PAQUETES (System > Package Manager):
# - pfBlockerNG: Para bloqueo de IPs maliciosas, trackers y países.
# - Suricata: Para IDS/IPS (detección y bloqueo de ataques en tiempo real).
# - ntopng: Para visualización y análisis de tráfico.

# CONFIGURACIÓN DE PAQUETES:
# - pfBlockerNG: Habilitar listas DNSBL (EasyList, MalwareDomainList) y GeoIP (bloquear países de alto riesgo).
# - Suricata: Habilitar en interfaz WAN y LAN, usar reglas de "Emerging Threats" y ponerlo en modo "Block Offenders".
```

#### **3. DNS Seguro (Pi-hole + DoH)**
**🎯 CONTEXTO**: Tu ISP registra todos los sitios que visitas. Esta configuración cifra tus peticiones DNS y bloquea malware y publicidad para toda tu red.

```bash
# QUÉ ES: Servidor DNS local para bloqueo de dominios + túnel cifrado.
# DÓNDE: Raspberry Pi o una VM dedicada en tu red.
# PROPÓSITO: Privacidad frente al ISP y protección contra malware para todos los dispositivos.

# Instalación de Pi-hole
curl -sSL https://install.pi-hole.net | bash

# Instalación de Cloudflared para DNS-over-HTTPS (DoH)
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
sudo cloudflared service install

# Configurar Pi-hole para usar el túnel DoH
# En la interfaz web de Pi-hole > Settings > DNS:
# - Desmarcar todos los proveedores de DNS.
# - En "Custom 1 (IPv4)", poner: 127.0.0.1#5053
# - Guardar cambios.

# Configurar tu router principal (DHCP) para que use la IP de tu Pi-hole como servidor DNS.
```

### **FASE II: CRIPTOGRAFÍA Y GESTIÓN DE IDENTIDAD (Semana 3-4)**
Aquí protegemos los datos en reposo y aseguramos que solo tú seas tú.

#### **1. Cifrado de Disco Completo y Volúmenes Ocultos**
**🎯 CONTEXTO**: Si te roban el equipo, el cifrado es tu única defensa. LUKS protege el sistema, VeraCrypt crea compartimentos secretos con negación plausible.

```bash
# Cifrado de sistema completo con LUKS (Durante la instalación de Linux)
# - Elegir la opción "Use LVM with encryption" o configurar manualmente.

# Crear un volumen oculto con VeraCrypt para negación plausible
# INSTALACIÓN: sudo apt install veracrypt
veracrypt --text --create /path/to/outer_volume.hc \
  --size 10G --encryption AES --hash SHA-512 \
  --password "OuterPassword_PocoSecreta" \
  --hidden-volume --hidden-password "HiddenPassword_UltraSecreta" \
  --hidden-size 1G

# MONTAJE: Montas el volumen con la contraseña externa. Los datos "cebo" se guardan ahí.
# Si te fuerzan a revelar la contraseña, das la externa. La existencia del volumen
# oculto es matemáticamente indemostrable. Para acceder al oculto, montas el mismo
# archivo pero con la contraseña oculta.
```

#### **2. Gestión de Identidad con Llaves Físicas (YubiKey)**
**🎯 CONTEXTO**: Las contraseñas se filtran. Una llave física no. Esto hace que el phishing y el robo de credenciales sea prácticamente imposible.

```bash
# QUÉ ES: Token de hardware para 2FA, GPG y claves SSH.
# PROPÓSITO: Autenticación "algo que tienes", no solo "algo que sabes".

# INSTALACIÓN: sudo apt install yubikey-manager libpam-u2f
ykman info # Verificar que la llave es reconocida

# CONFIGURAR GPG CON LA YUBIKEY (la clave privada nunca abandona el hardware)
gpg --card-edit
> admin
> generate # Sigue las instrucciones para generar las claves DENTRO de la llave.

# CONFIGURAR POLÍTICA DE TOQUE (requiere toque físico para cada operación)
ykman openpgp keys set-touch sig on
ykman openpgp keys set-touch enc on
ykman openpgp keys set-touch aut on

# USAR YUBIKEY PARA SSH (máxima seguridad para acceso a servidores)
gpg --export-ssh-key TU_GPG_KEY_ID > ~/.ssh/yubikey_id.pub
# Añade el contenido de yubikey_id.pub al authorized_keys del servidor.
```

### **FASE III: ANONIMATO Y COMUNICACIONES SEGURAS (Semana 5-6)**
Aquí nos centramos en proteger la identidad durante la navegación y las conversaciones.

#### **1. Navegación Anónima y Aislada**
**🎯 CONTEXTO**: Para investigación sensible, periodismo o activismo, es crucial no dejar rastro y no vincular la actividad a tu identidad real.

*   **Tails OS**:
    *   **Uso**: Para sesiones críticas y temporales.
    *   **Cómo**: Se bootea desde un USB. Todo el tráfico pasa por Tor. No deja rastro en el disco duro del PC. Es *amnésico*.
    *   **Instalación**: Sigue la guía en `tails.net/install`.

*   **Whonix (Dentro de Qubes OS o VirtualBox)**:
    *   **Uso**: Para un entorno de trabajo anónimo persistente.
    *   **Cómo**: Consta de dos VMs. Una `Gateway` que fuerza todo el tráfico a través de Tor, y una `Workstation` donde trabajas. Es imposible que una aplicación en la Workstation se conecte a internet sin pasar por Tor.
    *   **Instalación**: Importar las plantillas desde `whonix.org`.

#### **2. Comunicaciones Cifradas y Anónimas**
**🎯 CONTEXTO**: Las llamadas y mensajes son objetivos principales de vigilancia. Usa aplicaciones con cifrado de extremo a extremo (E2EE) auditado.

*   **Signal (Privacidad)**:
    *   **Uso**: Reemplazo seguro de WhatsApp/Telegram.
    *   **Seguridad**: E2EE por defecto, metadatos mínimos. Requiere número de teléfono.
    *   **Configuración clave**: `Settings > Privacy > Relay Calls` (oculta tu IP en llamadas).

*   **Session (Anonimato)**:
    *   **Uso**: Cuando ni siquiera los metadatos son aceptables.
    *   **Seguridad**: No requiere número de teléfono. Usa su propia red tipo onion para ocultar la IP y la identidad.
    *   **OPSEC**: No vincules tu Session ID a tu identidad real. Compártelo por un canal seguro.

#### **3. Transferencia Segura de Archivos**
**🎯 CONTEXTO**: Enviar archivos por email o servicios en la nube es inseguro. Estas herramientas crean túneles P2P cifrados.

*   **OnionShare**:
    *   **Uso**: Compartir archivos de forma anónima a través de la red Tor.
    *   **Cómo**: Genera una dirección `.onion` única y temporal para que la otra persona descargue el archivo.

*   **Magic Wormhole**:
    *   **Uso**: Enviar archivos directamente de un terminal a otro de forma rápida y segura.
    *   **Cómo**: `wormhole send miarchivo.zip` genera un código. La otra persona escribe `wormhole receive CODIGO` y la transferencia P2P comienza.

### **FASE IV: DEFENSA ACTIVA Y RESPUESTA (Semana 7-8)**
Aquí pasamos de la defensa pasiva a la detección activa y la preparación para lo peor.

#### **1. Detección de Intrusos en Host y Red (HIDS/NIDS)**
**🎯 CONTEXTO**: No puedes defenderte de lo que no ves. Estas herramientas son tus ojos y oídos en el sistema y la red.

```bash
# HIDS (Host-based) con Wazuh/OSSEC
# QUÉ ES: Un agente que monitoriza la integridad de archivos, logs y actividad del sistema.
# INSTALACIÓN: Sigue la guía oficial para instalar el agente y conectarlo a un servidor.
# ALERTA TÍPICA: "File /etc/passwd changed" -> posible creación de usuario no autorizado.

# NIDS (Network-based) con Zeek
# QUÉ ES: Un sensor que analiza el tráfico de red en busca de patrones sospechosos.
# INSTALACIÓN: sudo apt install zeek && sudo zeekctl deploy
# ALERTA TÍPICA: "SSH brute-forcing detected from IP 1.2.3.4"
```

#### **2. Honeypots y Canary Tokens**
**🎯 CONTEXTO**: Engaña a los atacantes con trampas. Si alguien interactúa con un honeypot, sabes con un 100% de certeza que es actividad maliciosa.

```bash
# Honeypot de SSH con Cowrie
# QUÉ ES: Un servidor SSH falso que simula un sistema vulnerable y registra todos los comandos del atacante.
git clone https://github.com/cowrie/cowrie.git
# Sigue la guía de instalación. Colócalo en una VLAN aislada.

# Canary Tokens
# QUÉ ES: Archivos o URLs trampa. Si alguien abre el archivo o visita la URL, recibes una alerta instantánea.
# CÓMO: Créalos gratis en canarytokens.org. Coloca un "passwords.docx" falso en tu escritorio.
# Si recibes una alerta, tu máquina está comprometida.
```

#### **3. Protocolos de Emergencia y Respuesta a Incidentes**
**🎯 CONTEXTO**: Cuando todo falle, necesitas un plan. Este script es tu botón de pánico.

```bash
#!/bin/bash
# SCRIPT DE RESPUESTA A INCIDENTES - NO EJECUTAR A MENOS QUE SEA REAL

echo "🔴 AISLAMIENTO DE RED INICIADO..."
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT DROP
sudo iptables -A OUTPUT -o lo -j ACCEPT # Permitir comunicación local

echo "💾 DUMP DE MEMORIA EN PROCESO..."
sudo apt install lime-forensics-dkms -y
sudo lime -o /mnt/external_drive/memory_dump.lime -f lime

echo "📑 PRESERVACIÓN DE EVIDENCIA CLAVE..."
sudo zip /mnt/external_drive/logs_$(hostname)_$(date +%F).zip /var/log/*
ps auxww > /mnt/external_drive/processes.txt
netstat -anop > /mnt/external_drive/netstat.txt

echo "🚨 ALERTA ENVIADA. EL SISTEMA ESTÁ AISLADO. INICIAR ANÁLISIS FORENSE."
```

---

## **PARTE 3: VALIDACIÓN Y TÉCNICAS AVANZADAS**

### **Pentesting Interno Automatizado**
**🎯 CONTEXTO**: La única forma de saber si tus defensas funcionan es atacándolas tú mismo.

```bash
#!/bin/bash
# SCRIPT SEMANAL DE AUTO-EVALUACIÓN DE SEGURIDAD

REPORT_FILE="/var/log/security_report_$(date +%F).txt"
echo "## INFORME DE SEGURIDAD SEMANAL ##" > $REPORT_FILE

echo "--- Escaneo de Red Local ---" >> $REPORT_FILE
sudo nmap -sS -A 192.168.1.0/24 >> $REPORT_FILE

echo "--- Escaneo de Vulnerabilidades Web Local ---" >> $REPORT_FILE
nikto -h http://localhost >> $REPORT_FILE

echo "--- Verificación de Configuración de Hardening ---" >> $REPORT_FILE
# Comprueba si ufw está activo
ufw status | grep "Status: active" || echo "ALERTA: UFW INACTIVO" >> $REPORT_FILE
# Comprueba si hay actualizaciones de seguridad pendientes
apt list --upgradable 2>/dev/null | grep -i "security" >> $REPORT_FILE

echo "## INFORME GENERADO EN $REPORT_FILE ##"
```

### **Próximas Fronteras**

*   **AI/ML Security**: Utilizar modelos de Machine Learning para detectar anomalías en el tráfico de red o en el comportamiento del sistema que las reglas tradicionales no captarían.
*   **Quantum-Resistant Cryptography (PQC)**: Empezar a experimentar con algoritmos como Kyber (KEM) y Dilithium (firmas) en entornos no críticos, preparándose para la era de la computación cuántica.
*   **Zero-Trust a Nivel de Aplicación**: Usar herramientas como Cilium en Kubernetes o AppArmor en modo estricto para crear políticas donde las aplicaciones solo pueden comunicarse con lo estrictamente necesario, aplicando el principio de "nunca confíes, siempre verifica" a nivel de proceso.