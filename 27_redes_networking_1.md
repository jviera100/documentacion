# 🌐 Guía de Estudio de Networking: Del Modelo OSI a la Práctica <a name="guia-networking-main-title"></a>

<p align="center">
  Una guía completa para entender los fundamentos de las redes de computadoras, desde los modelos teóricos hasta los protocolos y herramientas prácticas.
</p>  

---
## 📌 Índice de Contenidos

<details>
  <summary>Ver/Ocultar Índice</summary>

- [🌐 Guía de Estudio de Networking: Del Modelo OSI a la Práctica](#guia-networking-main-title) <!-- Ancla para el título principal -->
  - [1. Introducción a las Redes](#introduccion-redes)
    - [1.1. ¿Qué es Internet y Cómo se Organiza la Comunicación?](#que-es-internet)
    - [1.2. Modelos de Referencia: TCP/IP y OSI](#modelos-referencia)
  - [2. Principios Fundamentales del Diseño de Redes](#principios-diseno)
    - [2.1. Pilares de una Red Confiable](#pilares-red)
  - [3. Capa 1 OSI: Física – La Transmisión de Bits](#capa1-fisica)
    - [3.1. Función Principal y PDU (Capa 1)](#capa1-funcion-pdu)
    - [3.2. Medios de Red](#capa1-medios)
    - [3.3. Multiplexación](#capa1-multiplexacion)
    - [3.4. Otros Conceptos y Dispositivos de Capa 1](#capa1-otros)
  - [4. Capa 2 OSI: Enlace de Datos – Comunicación en la Red Local](#capa2-enlace)
    - [4.1. Función Principal y PDU (Capa 2)](#capa2-funcion-pdu)
    - [4.2. Organizaciones y Estándares Clave (Capa 2)](#capa2-estandares)
    - [4.3. Tarjeta de Interfaz de Red (NIC)](#capa2-nic)
    - [4.4. Ethernet: La Tecnología LAN Predominante](#capa2-ethernet)
      - [4.4.1. Historia y Evolución de Ethernet](#capa2-ethernet-historia)
      - [4.4.2. Subcapas de Enlace de Datos en Ethernet (LLC y MAC)](#capa2-ethernet-subcapas)
    - [4.5. Direcciones MAC: Identidad Física en la Red Local](#capa2-mac)
      - [4.5.1. ¿Qué es una Dirección MAC?](#capa2-mac-que-es)
      - [4.5.2. Estructura de una Dirección MAC (OUI e Identificador)](#capa2-mac-estructura)
      - [4.5.3. Un Dispositivo, Múltiples Direcciones MAC](#capa2-mac-multiples)
      - [4.5.4. Uso Práctico del OUI](#capa2-mac-oui-uso)
      - [4.5.5. Tipos de Direcciones MAC y su Uso en Ethernet](#capa2-mac-tipos)
    - [4.6. La Trama Ethernet: Estructura y Encapsulación](#capa2-trama)
      - [4.6.1. Proceso de Comunicación y Encapsulación en Capa 2](#capa2-trama-proceso)
      - [4.6.2. Anatomía de una Trama Ethernet II](#capa2-trama-anatomia)
    - [4.7. Funcionamiento de los Switches Ethernet](#capa2-switches)
      - [4.7.1. Fundamentos del Switch de Capa 2](#capa2-switches-fundamentos)
      - [4.7.2. Proceso de Aprendizaje y Reenvío del Switch](#capa2-switches-aprendizaje-reenvio)
      - [4.7.3. Consideraciones Adicionales sobre Switches](#capa2-switches-consideraciones)
    - [4.8. Conceptos Adicionales de Capa 2](#capa2-conceptos-adicionales)
      - [4.8.1. Dispositivos Primarios de Capa 2](#capa2-dispositivos)
      - [4.8.2. Tipos de Redes por Alcance](#capa2-tipos-redes)
      - [4.8.3. Segmentación en Capa 2: VLANs y Dominios de Difusión](#capa2-segmentacion)
      - [4.8.4. VLAN vs SSID Adicional](#capa2-vlan-vs-ssid) <!-- Ancla específica para esta comparación -->
    - [4.9. De la Trama a los Bits: Interacción con la Capa Física](#capa2-interaccion-capa1)
  - [5. Capa 3 OSI: Red – Direccionamiento Lógico y Enrutamiento Global](#capa3-red)
    - [5.1. Función Principal y PDU (Capa 3)](#capa3-funcion-pdu)
    - [5.2. Direccionamiento IP](#capa3-direccionamiento-ip)
        - [5.2.1. Dirección IPv4 (32 bits)](#capa3-ipv4)
        - [5.2.2. Desglosando una Dirección IP con su Máscara de Subred](#capa3-desglose-ip-mascara)
        - [5.2.3. Conversión CIDR a Máscara de Subred (IPv4)](#capa3-cidr-mascara)
        - [5.2.4. Máscara de Subred vs. Dirección MAC](#capa3-mascara-vs-mac)
        - [5.2.5. Direcciones IPv4 Públicas vs. Privadas](#capa3-ipv4-publica-privada)
        - [5.2.6. Rangos Comunes de IP Privada (RFC 1918)](#capa3-ip-privada-rangos)
    - [5.3. Conexión al Mundo Exterior: Router y NAT](#capa3-router-nat)
    - [5.4. Direcciones IPv4 Especiales](#capa3-ipv4-especiales)
    - [5.5. Clases de Direcciones IPv4 (Histórico)](#capa3-ipv4-clases)
    - [5.6. Asignación de Direcciones IP (IANA, RIRs, ISPs)](#capa3-asignacion-ip)
    - [5.7. Dirección IPv6 (128 bits)](#capa3-ipv6)
    - [5.8. Dispositivos de Capa 3: Routers](#capa3-routers-dispositivos)
    - [5.9. Tabla de Enrutamiento](#capa3-tabla-enrutamiento)
        - [5.9.1. Ejemplo de Tabla de Enrutamiento](#capa3-tabla-ejemplo)
    - [5.10. Diseño de Red Jerárquico](#capa3-diseno-jerarquico)
    - [5.11. ARP y NDP: Resolución de Direcciones IP a MAC](#capa3-arp-ndp)
    - [5.12. ARP Spoofing/Poisoning Seguridad](#capa3-arp-spoofing-poisoning-security)
  - [6. Capa 4 OSI: Transporte – Comunicación Extremo a Extremo](#capa4-transporte)
    - [6.1. Función Principal y PDU (Capa 4)](#capa4-funcion-pdu)
    - [6.2. TCP vs. UDP](#capa4-tcp-udp-detallado)
    - [6.3. Sockets y Pares de Sockets](#capa4-sockets-pares)
      - [6.3.1. ¿Qué es un Socket?](#capa4-socket-que-es)
      - [6.3.2. El Par de Sockets: La Conexión Única](#capa4-par-sockets)
  - [7. Capas 5, 6 y 7 OSI: Sesión, Presentación y Aplicación](#capas567-aplicacion)
    - [7.1. Funciones Generales (Capas 5, 6, 7 OSI y Aplicación TCP/IP)](#capas567-funciones)
        - [7.1.1. Capa 5 (Sesión OSI)](#capas567-sesion)
        - [7.1.2. Capa 6 (Presentación OSI)](#capas567-presentacion)
        - [7.1.3. Capa 7 (Aplicación OSI) / Capa de Aplicación (TCP/IP)](#capas567-aplicacion-tcpip)
    - [7.2. Capa de Aplicación: Protocolos, Puertos y Servicios Esenciales](#capas567-protocolos-puertos)
    - [7.3. Tecnologías Relacionadas con Servicios de Aplicación](#capas567-tecnologias-relacionadas)
    - [7.4. Herramientas para Pruebas y Análisis de Protocolos (Aplicación)](#capas567-herramientas-analisis)
    - [7.5. Configuración de Direcciones IP: Estática vs. Dinámica (DHCP)](#capas567-dhcp)
    - [7.6. Tipos de Conexión a Internet (Servicios)](#capas567-conexion-internet)
    - [7.7. Identificadores de Red Comunes (Configuración de Usuario)](#capas567-identificadores-usuario)
    - [7.8. Caso de Uso: Servicios en la Nube](#capas567-cloud)
  - [8. Herramientas de Solución de Problemas de Red (CLI)](#herramientas-cli)
    - [8.1. Comandos de Configuración IP (`ipconfig`, `ifconfig`, `ip`)](#cli-ipconfig)
    - [8.2. `ping` (Diagnóstico de Conectividad)](#cli-ping)
      - [8.2.1. Opciones Comunes de `ping`](#cli-ping-opciones)
      - [8.2.2. Ejemplos de Uso (`ping`)](#cli-ping-ejemplos)
    - [8.3. `tracert` / `traceroute` (Trazado de Ruta)](#cli-traceroute)
      - [8.3.1. Opciones Comunes de `tracert`/`traceroute`](#cli-traceroute-opciones)
      - [8.3.2. Ejemplos de Uso (`tracert`/`traceroute`)](#cli-traceroute-ejemplos)
    - [8.4. `netstat` / `ss` (Monitoreo de Conexiones Activas)](#cli-netstat-ss)
    - [8.5. `nslookup` (Consulta a DNS)](#cli-nslookup)
  - [9. Fundamentos de Sistemas Numéricos](#sistemas-numericos)
    - [9.1. Tipos de Sistemas Numéricos (Decimal, Binario, Hexadecimal)](#sistemas-numericos-tipos)
    - [9.2. Métodos de Conversión entre Sistemas Numéricos](#sistemas-numericos-conversion)
      - [9.2.1. Conversión de Decimal a Binario](#sistemas-numericos-dec-bin)
      - [9.2.2. Decimal a Hexadecimal y Hexadecimal a Decimal](#sistemas-numericos-dec-hex-y-hex-dex)
      - [9.2.3. Conversión de Decimal > Binario > Hexadecimal](#sistemas-numericos-dec-bin-hex)
      - [9.2.4. Conversión de Hexadecimal > Binario > Decimal](#sistemas-numericos-hex-bin-dec)
  - [10. Interfaz de Línea de Comandos (CLI) del IOS de Cisco: Configuración de Routers y Switches](#cisco-ios-cli-configuracion)
    - [10.1. Contexto y Fundamentos de la CLI del IOS de Cisco](#ios-cli-contexto)
    - [10.2. Modos de Comando del IOS](#ios-cli-modos)
    - [10.3. Navegación entre los Modos del IOS](#ios-cli-navegacion)
    - [10.4. Estructura de los Comandos del IOS](#ios-cli-estructura-comandos)
    - [10.5. Funciones de Ayuda y Atajos en la CLI](#ios-cli-ayuda-atajos)
    - [10.6. Visualización de Información del Dispositivo con Comandos `show`](#ios-cli-comandos-show)
    - [10.7. Nota sobre Herramientas de Simulación (Packet Tracer, etc.)](#ios-cli-simulacion)
</details>

---

## 1. Introducción a las Redes <a name="introduccion-redes"></a>
<details>
  <summary>Ver/Ocultar capa 1</summary>

### 1.1. ¿Qué es Internet y Cómo se Organiza la Comunicación? <a name="que-es-internet"></a>

**Internet** es una "red de redes" (internetwork) global que interconecta millones de dispositivos (computadoras, servidores, móviles) mediante tecnologías cableadas e inalámbricas, permitiendo el intercambio de información a escala mundial.

**Analogía del Viaje de Datos:**
Cuando los datos viajan por la red, es como una persona en un viaje internacional:
*   **Identificación:** Necesita identificadores (direcciones MAC y IP).
*   **Origen y Destino:** Requiere una dirección de partida y una de llegada.
*   **Permanencia:** Las conexiones tienen una duración.
   
### 1.2. Modelos de Referencia: TCP/IP y OSI <a name="modelos-referencia"></a>

Para entender este complejo proceso, se utilizan modelos de referencia:

1.  **Modelo TCP/IP (Transmission Control Protocol/Internet Protocol):**
    *   Un modelo práctico y el estándar de facto en Internet. Se organiza en capas:
        *   **Acceso a la Red (Network Access):** Cómo los datos se mueven por el medio físico y la red local.
        *   **Internet:** Direccionamiento lógico y enrutamiento global (principal protocolo: **IP - Internet Protocol**).
        *   **Transporte (Transport):** Comunicación extremo a extremo, confiable o rápida (principales protocolos: **TCP - Transmission Control Protocol**, **UDP - User Datagram Protocol**).
        *   **Aplicación (Application):** Interfaz para aplicaciones de usuario y servicios de red (Ej: HTTP).

2.  **Modelo OSI (Open Systems Interconnection):**
    *   Un modelo conceptual de 7 capas, más detallado, que ayuda a entender cada paso de la comunicación.

* **Tabla Comparativa de Capas TCP/IP vs. OSI:**

| **Nº** | **Capa TCP/IP** | **Capa OSI** | **Función Principal** | **Detalles Clave y Ejemplos Prácticos** | **¿Cómo Recordarlo Fácil?** |
|---|---|---|---|---|---|
| 7 | Aplicación | Aplicación | **(Usuario y Servicios)**: Proporciona la interfaz para que las aplicaciones de red interactúen con el usuario y ofrezcan servicios. | * Define la forma en que las aplicaciones acceden a la red. Incluye protocolos para correo electrónico (SMTP, POP3, IMAP), web (HTTP, HTTPS), transferencia de archivos (FTP), acceso remoto (SSH), nombres de dominio (DNS), etc. * **Ejemplo:** Usar Outlook para enviar un correo (la aplicación interactúa con los protocolos SMTP para enviar y POP3/IMAP para recibir). | **El programa que usas:** ¡El navegador, el correo, el juego en línea! |
| 6 | Aplicación | Presentación | **(Formato y Cifrado)**: Garantiza que los datos sean presentados de manera comprensible para la aplicación receptora, manejando formatos, cifrado y compresión. | * Convierte los datos a un formato común, cifra datos sensibles para seguridad (SSL/TLS), y comprime para eficiencia. * **Ejemplo:** Un navegador web entendiendo una imagen JPEG (formato) o una página web segura con HTTPS (cifrado). | **Traduce y Protege:** ¡Como un intérprete y guardaespaldas de la información! |
| 5 | Aplicación | Sesión | **(Conexiones y Diálogos)**: Establece, gestiona y finaliza las conexiones (sesiones) entre aplicaciones. | * Define cómo comenzar, controlar y terminar "conversaciones" entre aplicaciones. Sincroniza la comunicación y maneja interrupciones. * **Ejemplo:** Mantener una sesión activa en un juego en línea o una videoconferencia sin que se interrumpa constantemente. | **La Conversación Continua:** ¡Asegura que no te corten la llamada a mitad de la frase! |
| 4 | Transporte | Transporte | **(Comunicación Confiable o Rápida)**: Proporciona una comunicación confiable (TCP) o rápida (UDP) entre aplicaciones, segmentando datos y controlando el flujo. | * **TCP:** Orientado a conexión, entrega confiable, control de flujo, reordenamiento de paquetes, corrección de errores. Confirma la recepción de datos mediante **ACK (acuse de recibo)** para verificar la entrega o, en caso de error, puede enviar un **NACK (acuse de no recibo o recibo mal)** para solicitar la retransmisión. * **UDP:** Sin conexión, más rápido, sin garantías de entrega. * **Ejemplo:** Descargar un archivo grande (TCP) para asegurar que no se corrompa vs. ver una transmisión en vivo (UDP) donde perder algunos paquetes es aceptable. | **Elige el Mensajero:** ¡Confianza (TCP) o Velocidad (UDP)! |
| 3 | Internet | Red | **(Enrutamiento Global)**: Enruta los paquetes de datos entre diferentes redes, definiendo el direccionamiento IP y encontrando la mejor ruta. | * Define el direccionamiento lógico (IP) para identificar dispositivos en la red. Enruta paquetes a través de múltiples redes hasta su destino final. * **Ejemplo:** Un paquete de datos viajando desde tu casa a un servidor en otro país, pasando por múltiples routers. | **El Mapa de la Red:** ¡Encuentra el camino a casa! |
| 2 | Acceso a la Red | Enlace de Datos | **(Enlace Local y Direccionamiento Físico)**: Transfiere datos entre dos nodos directamente conectados, definiendo el formato de las **tramas** y las direcciones MAC. | * **Creación de Tramas:** Los datos de la capa de Red se encapsulan en tramas en esta capa. Si faltan datos para completar la trama, se puede usar padding. * Controla el acceso al medio (MAC), maneja notificación de errores, la topología de red, control de flujo y direccionamiento físico (MAC). *Tu computadora, Tablet, PS5 comunicándose directamente con tu router a través de Ethernet o Wi-Fi gracias a su NIC inalámbrica con dirección MAC*. * **Ejemplo:** Switches y bridges conectando dispositivos en una red local. * **Subcapas (clave):** MAC (Media Access Control) y LLC (Logical Link Control). * **Ejemplo:** Tu computadora comunicándose directamente con tu router a través de Ethernet o Wi-Fi. * **Protocolos/Tecnologías:** CSMA/CD (en redes Ethernet antiguas, detección de colisión). | **La Calle Local:** ¡Entre tu casa y la avenida principal! |
| 1 | Acceso a la Red | Física | **(Transmisión Física de Bits)**: Transmite los datos brutos (bits) a través del medio físico, definiendo voltajes, tasas de datos y conectores. | * Implementación en hardware, codificación de canal, representación de bits, voltaje, frecuencia, sincronización, conectores físicos, distancias y cableado. Medios de transmisión: Cables (Ethernet, UTP, FTP, SFTP), Radiofrecuencias (Wi-Fi, Bluetooth, ZigBee) *Ejemplo: Redes Wi-Fi unificadas que operan en 2.4 GHz y 5 GHz*, F.O. (Fibra Óptica), AP (Puntos de Acceso), Hubs. La capa física define las características de la transmisión, incluyendo el tipo de antena (direccional, omnidireccional, sectorial) Transmisión Simplex, Half-Duplex, Full-Duplex. * **Tecnologías:** SONET (con WDM "espacio" y TDMA "tiempo"), Ethernet, Wi-Fi, Bluetooth, ZigBee, USB. * **Componentes:** Activos (amplificadores, repetidores), Pasivos (cables, conectores). **Verifica la cantidad de bits, no la calidad.** * **Ejemplo:** Un cable Ethernet conectando tu computadora al router o las ondas de radio transmitiendo datos Wi-Fi. | **El Cable y las Ondas:** ¡La autopista de los bits! |

*Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.*

## 2. Principios Fundamentales del Diseño de Redes <a name="principios-diseno"></a>

Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.

### 2.1. Pilares de una Red Confiable <a name="pilares-red"></a>
Una arquitectura de red bien diseñada se esfuerza por cumplir con cuatro pilares esenciales:

1.  **Tolerancia a Fallas (Fault Tolerance):**
    *   **Objetivo:** Asegurar la continuidad del servicio y la conectividad incluso si ocurren fallos en componentes de la red.
    *   **Cómo se logra:** Mediante la redundancia (múltiples rutas, fuentes de alimentación redundantes, etc.).

2.  **Escalabilidad (Scalability):**
    *   **Objetivo:** Diseñar la red para que pueda crecer y adaptarse fácilmente a futuras demandas sin rediseños completos ni degradación del rendimiento.
    *   **Cómo se logra:** Diseño modular, jerárquico, equipos con capacidad de crecimiento.

3.  **Calidad de Servicio (QoS - Quality of Service):**
    *   **Objetivo:** Priorizar diferentes tipos de tráfico para asegurar que las aplicaciones críticas o sensibles al tiempo (voz, video) funcionen óptimamente.
    *   **Cómo se logra:** Mecanismos de clasificación, marcado, colas y gestión de ancho de banda.

4.  **Seguridad (Security):**
    *   **Objetivo:** Proteger la infraestructura y la información contra accesos no autorizados, modificaciones o denegación de servicio.
    *   **Componentes Clave:** Confidencialidad, Integridad, Disponibilidad.
    *   **Cómo se logra:** Firewalls, IDS/IPS, ACLs, VPNs, autenticación.

*A continuación, exploraremos los conceptos de red siguiendo la estructura del Modelo OSI.*

## 3. Capa 1 OSI: Física – La Transmisión de Bits <a name="capa1-fisica"></a>

### 3.1. Función Principal y PDU (Capa 1) <a name="capa1-funcion-pdu"></a>

*   **Función Principal (OSI):** Transmitir el flujo de bits (0s y 1s) a través del medio físico. Define características eléctricas, mecánicas y funcionales (voltajes, tasas de bits, conectores, tipos de cable, radiofrecuencias).
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Bits.

### 3.2. Medios de Red <a name="capa1-medios"></a>

El "camino" físico por el que viajan los datos.

| Medio                               | Tipo de Datos         | Distancia Máxima                          | Ancho de Banda/Velocidad | Funcionalidad                                                                            | Ejemplo de Uso                                                                     |
|-------------------------------------|-----------------------|-------------------------------------------|--------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Par Trenzado (Cat5/5e/6/6a)**     | Impulsos Eléctricos   | Hasta 100 metros (Ethernet)               | Moderado a Alto          | Conexión de dispositivos en redes Ethernet (LAN). Base de la mayoría de redes locales.     | Conectar una PC a un router en casa o en la oficina.                                 |
| **Coaxial**                         | Impulsos Eléctricos   | Media (depende de la frecuencia)          | Moderado                 | Transmisión de señales de TV, conexión satelital. Como cables de cobre de compañías de TV. | Conexión de un televisor a un servicio de cable, conexión satelital.                 |
| **Fibra Óptica**                    | Pulsos de Luz         | Varios kilómetros o más                   | Muy Alto                 | Transmisión de datos a alta velocidad, inmune a interferencia.                             | Redes troncales, conexión de ciudades, centros de datos, compañías telefónicas.      |
| **Inalámbrico**                     | Ondas Electromagnéticas | Variable (depende del estándar y entorno) | Bajo a Moderado          | Conexión de dispositivos sin cables mediante modulación de frecuencias.                    | Conexión de laptops, smartphones, tablets a redes Wi-Fi; Bluetooth; redes celulares. |

*(EMI: Interferencia Electromagnética, RFI: Interferencia de Radiofrecuencia)*

### 3.3. Multiplexación <a name="capa1-multiplexacion"></a>

Técnica para combinar múltiples flujos de datos en un único canal de comunicación compartido.

| Tipo          | Explicación Simple                                                    | Ejemplo Práctico                                     |
| :------------ | :-------------------------------------------------------------------- | :--------------------------------------------------- |
| **FDM** (Frecuencia) | Cada señal viaja por una "banda" de frecuencia diferente dentro del canal. | Radio FM/AM, TV analógica por cable                |
| **TDM** (Tiempo)    | Cada señal usa todo el ancho de banda del canal, pero en pequeños turnos de tiempo asignados. | Telefonía digital (líneas T1/E1), algunas redes SONET/SDH |
| **WDM** (Long. de onda) | Específico para fibra óptica; múltiples señales viajan como diferentes "colores" (longitudes de onda) de luz. | Internet por fibra óptica de alta capacidad (DWDM, CWDM) |
| **CDM** (Código)    | Cada señal se mezcla con un código único que permite separarlas en el receptor aunque usen la misma frecuencia/tiempo. | Redes celulares (CDMA, WCDMA), GPS                |
| **SDM** (Espacial)  | Utiliza diferentes rutas físicas o antenas para transmitir señales separadas simultáneamente. | Antenas MIMO en Wi-Fi y 4G/5G, sistemas de fibra óptica paralela |

### 3.4. Otros Conceptos y Dispositivos de Capa 1 <a name="capa1-otros"></a>

*   **Codificación y Sincronización de Bits.**
*   **Dispositivos de Capa 1:**
    *   **Hubs (Concentradores):** Obsoletos. Repiten la señal a todos los puertos.
    *   **Repetidores:** Regeneran la señal para extender la distancia.
    *   **Transceptores (Transceivers):** Convierten señales entre tipos de medios.
    *   **Cables y Conectores:** (RJ45, Fibra LC/SC, etc.).
    *   **Componente Físico de la NIC:** La parte de la tarjeta de red que se conecta al medio.
*   **Dispositivos Finales:** (PCs, servidores, impresoras, teléfonos IP, etc.) se conectan físicamente en esta capa, aunque su operación completa abarca capas superiores.
</details>

## 4. Capa 2 OSI: Enlace de Datos – Comunicación en la Red Local <a name="capa2-enlace"></a>

<details>
  <summary>Ver/Ocultar Detalles de Capa 2: Enlace de Datos</summary>

### 4.1. Función Principal y PDU <a name="capa2-funcion-pdu"></a>  

*   **Función Principal (OSI):** La Capa de Enlace de Datos es responsable de la **transferencia fiable de datos (en forma de tramas)** entre dos nodos (dispositivos) directamente conectados en la *misma red local física (segmento de red)*. Se encarga del direccionamiento físico (usando direcciones MAC), de controlar el acceso al medio de transmisión compartido, y de la detección básica de errores ocurridos durante la transmisión física.
*   **Equivalente TCP/IP:** Las funciones de la Capa de Enlace de Datos (y también de la Capa Física) se agrupan en la capa de **Acceso a la Red** del modelo TCP/IP.
*   **PDU (Protocol Data Unit):** En esta capa, la unidad de datos se denomina **Trama (Frame)**.

### 4.2. Organizaciones y Estándares Clave <a name="capa2-estandares"></a>
Varias organizaciones juegan un papel crucial en la definición de los estándares que permiten la interoperabilidad en la Capa de Enlace de Datos y otras capas:
*   **IEEE (Institute of Electrical and Electronics Engineers):** Una organización profesional clave que desarrolla y mantiene muchos estándares de red, especialmente conocidos son los estándares del grupo **IEEE 802**, que incluyen:
    *   **IEEE 802.3:** Define el estándar para **Ethernet**, la tecnología predominante para redes LAN cableadas.
    *   **IEEE 802.11:** Define los estándares para **Redes de Área Local Inalámbricas (WLAN)**, comúnmente conocidas como Wi-Fi.
    *   **IEEE 802.2:** Definía la subcapa LLC (Logical Link Control), que proporcionaba una interfaz a las capas superiores.
*   **IANA (Internet Assigned Numbers Authority):** Responsable de la coordinación global de la raíz DNS, el direccionamiento IP y otros recursos numéricos de protocolos de Internet. Aunque su rol principal es en capas superiores (IP, puertos), su gestión de identificadores es fundamental.
*   **IETF (Internet Engineering Task Force):** Desarrolla y promueve estándares de Internet voluntarios, especialmente los estándares que componen la suite de protocolos TCP/IP, a través de documentos **RFC (Request for Comments)**.
*   **ISO (International Organization for Standardization):** Desarrolló el modelo de referencia OSI.

### 4.3. Tarjeta de Interfaz de Red (NIC) <a name="capa2-nic"></a>
La **Tarjeta de Interfaz de Red (NIC)**, también conocida como adaptador de red o tarjeta de red, es el componente de hardware que permite a un dispositivo (como una computadora, servidor o impresora) conectarse físicamente a una red.
*   **Función en Capa 2 (y Capa 1):**
    *   Implementa los protocolos de la Capa de Enlace de Datos y la Capa Física.
    *   **Contiene la dirección MAC única** asignada por el fabricante, que se utiliza para el direccionamiento en la Capa 2.
    *   Participa activamente en la **creación de tramas** (encapsulación) antes de la transmisión y en el **procesamiento de tramas** recibidas (desencapsulación).
    *   Maneja la interfaz con el medio físico de la red.
*   **Tipos Comunes:**
    *   **NIC Ethernet:** Para conexiones cableadas usando cables de par trenzado (con conectores RJ45) o fibra óptica.
    *   **NIC Wi-Fi (Inalámbrica):** Para conexiones a redes inalámbricas.
    *   **NIC Virtual (vNIC):** Creadas por software para máquinas virtuales (VMs) o contenedores, permitiéndoles tener su propia identidad de red (incluyendo una MAC virtual).
*   **Analogía:** La NIC es como el **carnet de identificación físico** del dispositivo para la red local, conteniendo su "número de serie" (la dirección MAC).

### 4.4. Ethernet: La Tecnología LAN Predominante <a name="capa2-ethernet"></a>
Ethernet es, con diferencia, la tecnología más extendida para las redes de área local (LAN) cableadas.

#### 4.4.1. Historia y Evolución de Ethernet <a name="capa2-ethernet-historia"></a>
*   **El Problema Original (Años 70):** En los inicios de las redes, la comunicación entre equipos de diferentes fabricantes era un gran desafío debido a la multitud de protocolos propietarios incompatibles (desarrollados por IBM, Xerox, HP, etc.). Esta falta de interoperabilidad limitaba enormemente la expansión y la flexibilidad de las redes.
*   **La Solución: Estándares y el Triunfo de Ethernet:** Surgió una clara necesidad de estándares abiertos. Ethernet, inventado originalmente por Xerox en el Palo Alto Research Center (PARC) en 1973, fue posteriormente desarrollado y estandarizado, principalmente bajo la especificación **IEEE 802.3**. Su éxito masivo se debe a una combinación de factores:
    *   **Robustez y Fiabilidad.**
    *   **Costo relativamente bajo** de implementación.
    *   **Simplicidad** en comparación con otras tecnologías LAN de la época.
    *   Crucialmente, su **capacidad de evolucionar** para soportar velocidades cada vez mayores.

    **Escala de Tiempo Simplificada de la Evolución de Ethernet:**

    | Año/Periodo      | Estándar/Hito Clave                               | Descripción Breve / Velocidad / Medio Principal          |
    | :--------------- | :------------------------------------------------ | :------------------------------------------------------- |
    | Años 70          | Protocolos Propietarios                           | Incompatibilidad entre fabricantes.                      |
    | 1973             | Invención de Ethernet (Xerox)                     | Concepto inicial, red experimental a ~3 Mbps.            |
    | 1980             | DIX Standard (Ethernet II - DEC, Intel, Xerox)    | 10 Mbps sobre cable coaxial grueso. Precursor del estándar IEEE. |
    | 1983             | **IEEE 802.3 (10BASE5 "Thick Ethernet")**         | Estandarización formal. 10 Mbps sobre cable coaxial grueso. |
    | 1985             | IEEE 802.3a (10BASE2 "Thin Ethernet" o "Cheapernet")| 10 Mbps sobre cable coaxial delgado, más económico y flexible. |
    | 1990             | **IEEE 802.3i (10BASE-T)**                        | **10 Mbps sobre par trenzado no blindado (UTP)**. ¡Este fue un punto de inflexión para la adopción masiva de Ethernet en oficinas debido a su costo y facilidad de cableado estructurado! |
    | 1995             | IEEE 802.3u (Fast Ethernet: 100BASE-TX, 100BASE-FX) | **100 Mbps** sobre par trenzado (Cat5) y fibra óptica.   |
    | 1998-1999        | IEEE 802.3z/ab (Gigabit Ethernet: 1000BASE-X/T)   | **1 Gbps (1000 Mbps)** sobre fibra óptica y par trenzado (Cat5e/Cat6). |
    | 2002 en adelante | IEEE 802.3ae/an/etc.                              | **10 Gbps (10GBASE-T/SR/LR...), 40 Gbps, 100 Gbps y más** sobre fibra y par trenzado mejorado (Cat6a/Cat7). También se introdujo **PoE (Power over Ethernet)** en estándares como IEEE 802.3af y 802.3at. |
    | 2016 - Presente  | IEEE 802.3bz (NBASE-T: 2.5GBASE-T, 5GBASE-T)      | Velocidades intermedias de 2.5 Gbps y 5 Gbps diseñadas para operar sobre cableado de par trenzado Cat5e/Cat6 existente, facilitando actualizaciones. |

#### 4.4.2. Subcapas de Enlace de Datos en Ethernet (LLC y MAC) <a name="capa2-ethernet-subcapas"></a>
Como se mencionó, la Capa de Enlace de Datos, según el modelo IEEE 802, se divide en dos subcapas para organizar sus funciones:

*   **Subcapa LLC (Logical Link Control - Control de Enlace Lógico - IEEE 802.2):**
    *   **Función Principal:** Actúa como una interfaz entre los protocolos de la capa de red (Capa 3, ej: IP, IPX) y la subcapa MAC. Es responsable de identificar el protocolo de capa de red que se está utilizando para una trama y puede proporcionar servicios de control de flujo y errores opcionales (aunque en Ethernet moderno, la fiabilidad se delega principalmente a TCP en Capa 4).
    *   **Identificación del Protocolo de Capa Superior:** La LLC utiliza un campo en la trama (en las tramas Ethernet II, este es el campo **EtherType**) para indicar qué protocolo de Capa 3 está encapsulado dentro de la trama. Esto es crucial porque permite que múltiples protocolos de Capa 3 (como IPv4, ARP, IPv6) compartan la misma interfaz de red y el mismo medio físico.
    *   **Implementación:** Generalmente se implementa en **software**, a menudo como parte del controlador (driver) de la tarjeta de red.

*   **Subcapa MAC (Media Access Control - Control de Acceso al Medio - IEEE 802.3 para Ethernet):**
    *   **Funciones Principales:**
        1.  **Encapsulación de Datos:** Es responsable de construir la **trama Ethernet**. Esto incluye añadir el encabezado MAC (que contiene las **direcciones MAC de destino y origen**) y el tráiler (que incluye la **Secuencia de Verificación de Trama - FCS** para la detección de errores).
        2.  **Control de Acceso al Medio:** Define el método por el cual múltiples dispositivos comparten el acceso al medio físico de transmisión.
            *   **Ethernet Heredado (Half-Duplex, usando hubs o topología de bus):** Utilizaba **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**. Los dispositivos "escuchaban" el medio antes de transmitir; si dos transmitían a la vez, ocurría una colisión, y ambos esperaban un tiempo aleatorio antes de reintentar.
            *   **Ethernet Moderno (Full-Duplex, usando switches):** En conexiones punto a punto entre un dispositivo y un puerto de switch, o entre switches, se opera en modo full-duplex, donde la transmisión y recepción pueden ocurrir simultáneamente. En este modo, CSMA/CD no es necesario y se deshabilita.
    *   **Direccionamiento Físico:** Gestiona el uso de las direcciones MAC de 48 bits.
    *   **Implementación:** Se implementa principalmente en **hardware**, directamente en la circuitería de la Tarjeta de Interfaz de Red (NIC).
    *   *Nota: Aunque aquí nos centramos en IEEE 802.3 (Ethernet), existen otros estándares MAC para diferentes tecnologías, como IEEE 802.11 (WLAN/Wi-Fi) y IEEE 802.15 (WPAN/Bluetooth, Zigbee), cada uno con sus propios mecanismos de acceso al medio y formatos de trama.*

### 4.5. Direcciones MAC: Identidad Física en la Red Local <a name="capa2-mac"></a>
Para comprender las direcciones MAC, es fundamental recordar los sistemas numéricos:
*   **Binario (Base 2):** El lenguaje fundamental de las computadoras, usando solo 0 y 1. Las direcciones MAC son, en su núcleo, secuencias binarias.
*   **Hexadecimal (Base 16):** Usa dígitos 0-9 y letras A-F. Proporciona una representación compacta y legible por humanos de largas cadenas binarias. Un dígito hexadecimal representa 4 bits binarios.

#### 4.5.1. ¿Qué es una Dirección MAC? <a name="capa2-mac-que-es"></a>
*   **Identificador Único:** Una dirección MAC (Media Access Control) es un identificador único asignado a la mayoría de las interfaces de red (NIC - Network Interface Card) para comunicaciones dentro de un segmento de red local.
*   **Formato Fundamental:** Es un valor **binario de 48 bits**.
*   **Representación Común (Hexadecimal):** Para facilitar su lectura y manejo, estos 48 bits se expresan comúnmente como **12 dígitos hexadecimales**.
    *   **Ejemplos de formato:** `00:07:E9:63:CE:53`, `00-07-E9-63-CE:53`, o `0007.E963.CE53`.
    *   Cada par de dígitos hexadecimales representa 8 bits (1 byte). Por ejemplo, `E9` (Hex) corresponde a `11101001` (Binario).
*   **Otros Nombres:** También se conoce como dirección física, dirección Ethernet, o BIA (Burned-In Address).
*   **Analogía:** Como el número de serie de un dispositivo o el *RUT/DNI* impreso en un carnet, utilizado para la entrega "local".

#### 4.5.2. Estructura de una Dirección MAC (OUI e Identificador) <a name="capa2-mac-estructura"></a>
Una dirección MAC de 48 bits se divide lógicamente en dos partes principales, como se ilustra en la siguiente tabla. Los primeros 24 bits (3 bytes) constituyen el **OUI (Organizationally Unique Identifier - Identificador Único Organizacional)**, un código que el IEEE (Institute of Electrical and Electronics Engineers) asigna de forma única a cada fabricante de hardware de red. Este OUI funciona como un prefijo que identifica a la compañía que manufacturó la tarjeta de red (NIC). Los últimos 24 bits (3 bytes) son el **Identificador Único de Interfaz**, asignado por el propio fabricante a esa tarjeta específica dentro de su OUI.

**Descomposición de una Dirección MAC (Ej: `D4-BE-D9-13-63-00`):**

| Parte de la MAC                                       | Bytes Hexadecimales | Longitud | Descripción                                                                     | Responsable de Asignación |
| :---------------------------------------------------- | :------------------ | :------- | :------------------------------------------------------------------------------ | :------------------------ |
| **OUI** (Identificador Único Organizacional)          | `D4-BE-D9`          | 24 bits (3 bytes) | Identifican al **fabricante** de la tarjeta de red (NIC).                     | IEEE                      |
| **Identificador Único de Interfaz** (ID de Dispositivo) | `13-63-00`          | 24 bits (3 bytes) | Asignados por el **fabricante** a esa tarjeta específica, asegurando unicidad bajo su OUI. | Fabricante                |

La combinación del OUI (asignado centralmente por el IEEE al fabricante) y el identificador único de interfaz (asignado por el fabricante a cada una de sus tarjetas bajo ese OUI) asegura que cada dirección MAC sea, en teoría, globalmente única en el mundo.

#### 4.5.3. Un Dispositivo, Múltiples Direcciones MAC <a name="capa2-mac-multiples"></a>
Un dispositivo (como una PC, laptop, smartphone) no tiene "una" dirección MAC. **Cada interfaz de red física o virtual** en ese dispositivo tiene su propia dirección MAC.
*   **Ejemplos comunes:**
    *   Tu **tarjeta Ethernet cableada** (para el conector RJ45) tiene una MAC.
    *   Tu **tarjeta Wi-Fi** (inalámbrica) tiene *otra* MAC diferente.
    *   Si usas un **adaptador Bluetooth**, este también tiene su propia MAC.
    *   Interfaces de red virtual creadas por software de virtualización (como VMware o VirtualBox) o por VPNs también tendrán sus propias MACs.
*   Por esto, al ejecutar `ipconfig /all` (en Windows) o `ifconfig` / `ip a` (en Linux/macOS), puedes ver varias "Direcciones físicas" listadas, cada una correspondiente a una interfaz de red distinta.

#### 4.5.4. Uso Práctico del OUI <a name="capa2-mac-oui-uso"></a>
Conociendo los primeros 3 bytes (el OUI) de una dirección MAC, puedes identificar al fabricante del dispositivo de red.
*   Herramientas online como la de Wireshark (`https://www.wireshark.org/tools/oui-lookup.html`) permiten ingresar el OUI y obtener el nombre del fabricante registrado.
*   Esto es útil para: Identificar el hardware, diagnósticos de red e inventario.

#### 4.5.5. Tipos de Direcciones MAC y su Uso en Ethernet <a name="capa2-mac-tipos"></a>
En las redes Ethernet, las direcciones MAC de destino en una trama pueden ser de tres tipos principales, cada uno con un propósito específico para la comunicación en la Capa 2. La dirección MAC de origen, sin embargo, siempre será una dirección de unidifusión.

| Tipo de Dirección MAC | MAC Destino Ejemplo                  | Dirigido a...                                     | Propósito Principal y Características                                                                                                                                                                                             | Comportamiento del Switch (Por Defecto)                                                                | Límite del Router (Por Defecto)     |
| :-------------------- | :----------------------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :---------------------------------- |
| **Unidifusión (Unicast)** | `00:1A:2B:3C:4D:5E` (única)        | Una única NIC específica en la LAN.               | Enviar una trama desde un origen a un único destino específico. Es la dirección "grabada" en la NIC. Para comunicaciones IP, se usa ARP (IPv4) o ND (IPv6) para resolver la IP destino a su MAC correspondiente en la red local. | Reenvía la trama solo al puerto asociado con la MAC destino (si está en la tabla MAC), o la inunda si es desconocida. | No aplica directamente (opera con IPs). |
| **Difusión (Broadcast)**| `FF:FF:FF:FF:FF:FF` (todos unos)   | **Todas** las NICs en el mismo dominio de difusión. | Enviar una trama a todos los dispositivos en el segmento de red local. Usado por protocolos como DHCP (Discover) y ARP (Request).                                                                                             | **Inunda** la trama por todos los puertos, excepto el puerto de origen.                                  | **No reenvía** broadcasts.          |
| **Multidifusión (Multicast)**| `01:00:5E:xx:xx:xx` (para IPv4)<br>`33:33:xx:xx:xx:xx` (para IPv6) | Un **grupo específico** de NICs en la LAN que se han unido a un grupo de multidifusión. | Enviar una trama a múltiples destinos interesados simultáneamente, sin inundar a todos. Usado para streaming de video, juegos en red, protocolos de enrutamiento. Las MACs de multidifusión IP se derivan de la dirección IP de multidifusión. Existen otras MACs de multidifusión para protocolos no IP (STP, LLDP). | **Inunda** la trama por todos los puertos (excepto el origen), a menos que tenga "snooping de multidifusión" configurado para ser más selectivo. | **No reenvía** multicast, a menos que esté configurado para enrutamiento multicast. |

*   **Puntos Importantes sobre los Tipos de Direcciones MAC:**
    *   La **dirección MAC de origen** en cualquier trama Ethernet siempre es una dirección de **unidifusión**, identificando al remitente individual.
    *   Los **routers no reenvían tramas de difusión (broadcast)** por defecto, lo que ayuda a contener el tráfico de difusión dentro de una LAN y define los límites de un dominio de difusión.
    *   El manejo eficiente del tráfico de **multidifusión** a menudo requiere switches con capacidades avanzadas como IGMP Snooping.

### 4.6. La Trama Ethernet: Estructura y Encapsulación <a name="capa2-trama"></a>

#### 4.6.1. Proceso de Comunicación y Encapsulación en Capa 2 <a name="capa2-trama-proceso"></a>

Para que los dispositivos se comuniquen en una red, siguen reglas estrictas llamadas **protocolos de red**. Un concepto fundamental en estos protocolos es la **encapsulación**:

1.  **Protocolos de Red (Fundamentos para Capa 2):**
    *   **Definición:** Un conjunto de reglas y convenciones que los dispositivos deben seguir para intercambiar información de manera correcta y comprensible. Definen el formato, tamaño, temporización (sincronización), codificación (conversión a bits), encapsulación y secuencia de los mensajes.
    *   **Objetivo:** Facilitar la comunicación estructurada y ordenada.

2.  **Encapsulación en Capa 2:**
    *   **Proceso:** Cuando los datos de una capa superior (Capa 3 - Red, típicamente un paquete IP) deben transmitirse a través de la red local, la Capa 2 (Enlace de Datos) "envuelve" estos datos. Esto implica añadir información de control específica de la Capa 2, formando una unidad de datos llamada **trama**.
    *   **Analogía:** Poner una carta (el paquete IP) dentro de un sobre (la trama Ethernet). El sobre tiene sus propias direcciones (MAC de origen y destino) y un sello (FCS).

3.  **La Trama Ethernet: El "Sobre" de la Capa 2**
    *   Cuando un paquete IP necesita ser enviado a través de una red local Ethernet, la subcapa MAC de la Capa 2 lo encapsula dentro de una **Trama Ethernet**.
    *   Esta trama es la PDU que realmente viaja por el cable o el aire en la red local.
    *   **Función Clave:** La trama Ethernet asegura que el paquete IP llegue al dispositivo correcto *dentro de la misma red local*, utilizando las direcciones MAC.

#### 4.6.2. Anatomía de una Trama Ethernet II <a name="capa2-trama-anatomia"></a>
La estructura de una trama Ethernet II (el formato más común hoy en día) es la siguiente:

*   **Tamaño Estándar:**
    *   **Mínimo:** 64 bytes (desde Dirección MAC de Destino hasta FCS).
    *   **Máximo:** 1518 bytes (desde Dirección MAC de Destino hasta FCS).
    *   *Tramas con menos de 64 bytes ("runt frames") suelen ser descartadas.*
    *   *Tramas con más de 1500 bytes de datos (excluyendo encabezados/tráiler) se denominan "Jumbo frames" y requieren soporte en todos los dispositivos de la ruta.*

*   **Componentes de una Trama Ethernet II:**

    | Campo                     | Longitud (Bytes) | Descripción y Función Clave                                                                                                                             |
    | :------------------------ | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Preámbulo**             | 7                | Patrón alternante de 1s y 0s (`10101010...`) usado por la NIC receptora para **sincronizar su reloj** con la señal entrante. No se incluye en el cálculo del FCS. |
    | **SFD (Start Frame Delimiter - Delimitador de Inicio de Trama)** | 1                | Patrón `10101011`. Los dos últimos bits `11` indican al receptor que la sincronización ha terminado y que el siguiente campo es la Dirección MAC de Destino. No se incluye en el cálculo del FCS. |
    | **Dirección MAC de Destino** | 6                | Dirección MAC de 48 bits de la NIC del dispositivo receptor en la LAN.                                                                                   |
    | **Dirección MAC de Origen**  | 6                | Dirección MAC de 48 bits de la NIC del dispositivo emisor en la LAN.                                                                                     |
    | **Tipo/Longitud (EtherType)** | 2                | Para tramas Ethernet II (DIX Ethernet), este campo es el **EtherType**. Si su valor es ≥ 1536 (0x0600), indica el protocolo de Capa 3 encapsulado (ej: `0x0800`=IPv4, `0x0806`=ARP, `0x86DD`=IPv6). Este campo es utilizado por la subcapa LLC (o su funcionalidad) para pasar los datos al protocolo correcto de capa superior. En el estándar IEEE 802.3 original, si el valor era ≤ 1500, indicaba la longitud del campo de datos. |
    | **Datos (y Relleno/Pad)**   | 46 - 1500        | Contiene la PDU de la capa superior (ej., un paquete IP). Si el paquete de Capa 3 es menor de 46 bytes, se añade **relleno (padding)** con ceros para asegurar que la trama (desde MAC Destino hasta FCS) alcance el tamaño mínimo de 64 bytes. Este tamaño mínimo fue históricamente importante para el correcto funcionamiento de CSMA/CD. |
    | **FCS (Frame Check Sequence - Secuencia de Verificación de Trama)** | 4                | Es el **tráiler** de la trama. Contiene un valor de **CRC (Cyclic Redundancy Check)** de 32 bits calculado por el emisor sobre los campos desde la MAC de Destino hasta el final del campo de Datos (sin incluir el relleno si este no forma parte de los datos originales que el FCS debe cubrir). El receptor realiza el mismo cálculo sobre la trama recibida; si los valores del FCS no coinciden, la trama se considera corrupta y se descarta. **El FCS solo detecta errores, no los corrige.** |

    *   **Rol del Paquete IP dentro de la Trama:** Mientras la Trama Ethernet (con sus direcciones MAC) se encarga de la entrega local en el segmento de red, el paquete IP (contenido en el campo "Datos" de la trama) lleva las direcciones IP de origen y destino finales. Estas direcciones IP son utilizadas por los routers para el enrutamiento del paquete a través de múltiples redes (internetworking) hasta su destino final.

### 4.7. Funcionamiento de los Switches Ethernet <a name="capa2-switches"></a>
Los switches Ethernet de Capa 2 son dispositivos centrales en las LAN modernas, reemplazando en gran medida a los antiguos hubs. Utilizan las direcciones MAC para reenviar tramas de manera inteligente y eficiente.

#### 4.7.1. Fundamentos del Switch de Capa 2 <a name="capa2-switches-fundamentos"></a>
*   **Toma de Decisiones en Capa 2:** Un switch opera en la Capa de Enlace de Datos. Sus decisiones de reenvío se basan **exclusivamente en las direcciones MAC Ethernet** de las tramas.
*   **Indiferencia al Protocolo de Capa Superior:** El switch es "agnóstico" a los datos (protocolo) que se transportan en la porción de datos de la trama, como un paquete IPv4, un mensaje ARP o un paquete IPv6 ND.
*   **La Tabla de Direcciones MAC (Tabla MAC o Tabla CAM):**
    *   Es la base de la inteligencia del switch. También se conoce como tabla CAM (Content Addressable Memory).
    *   Se construye y mantiene **dinámicamente**.
    *   Almacena asociaciones entre:
        *   Direcciones MAC de los dispositivos.
        *   Los puertos del switch a través de los cuales se puede alcanzar cada dirección MAC.
        *   (Opcionalmente) El VLAN ID al que pertenece la entrada.
    *   Cuando un switch se enciende por primera vez, su tabla de direcciones MAC está vacía.

#### 4.7.2. Proceso de Aprendizaje y Reenvío del Switch <a name="capa2-switches-aprendizaje-reenvio"></a>
Un switch realiza dos operaciones principales con cada trama que recibe:

*   **A. Aprendizaje (Construcción de la Tabla de Direcciones MAC):**
    *   **Examinar la Dirección MAC de Origen:** Cuando una trama ingresa a un puerto del switch, este examina la **dirección MAC de origen** de la trama y el **número de puerto** por el que ingresó.
    *   **Poblar/Actualizar la Tabla:**
        1.  Si la dirección MAC de origen **no existe** en la tabla MAC, el switch la **agrega**, asociándola con el número del puerto de entrada.
        2.  Si la dirección MAC de origen **ya existe** en la tabla y está asociada al mismo puerto, el switch **actualiza el temporizador de envejecimiento** de esa entrada (por defecto, la mayoría de los switches Ethernet guardan una entrada en la tabla durante 5 minutos de inactividad antes de eliminarla, para asegurar que la tabla refleje la topología actual de la red).
        3.  Si la dirección MAC de origen ya existe en la tabla, pero está registrada en un **puerto diferente**, el switch actualiza la entrada, reemplazando el puerto antiguo con el nuevo puerto de entrada. Esto maneja el caso en que un dispositivo se mueve de un puerto a otro del switch.

*   **B. Reenvío/Filtrado (Toma de Decisiones Basada en la Dirección MAC de Destino):**
    Después de procesar la MAC de origen, el switch examina la **dirección MAC de destino** de la trama para decidir cómo reenviarla:

    1.  **Destino Unicast Conocido (Filtrado de Tramas):**
        *   Si la dirección MAC de destino es una dirección de **unidifusión** y el switch **encuentra una entrada coincidente** para esa MAC en su tabla, **reenvía la trama únicamente por el puerto especificado** en la tabla MAC. Esto se conoce como **filtrado de tramas**, ya que la trama no se envía a puertos innecesarios, reduciendo la congestión y mejorando la eficiencia.

    2.  **Destino Unicast Desconocido (Inundación o "Flooding"):**
        *   Si la dirección MAC de destino es una dirección de **unidifusión** pero **NO existe una entrada** para esa MAC en la tabla (se denomina "unidifusión desconocida"), el switch no sabe por qué puerto específico enviar la trama.
        *   En este caso, el switch **inunda ("floods") la trama, reenviándola por todos los puertos activos, excepto por el puerto por el cual ingresó la trama original.** Se espera que el dispositivo destino reciba la trama y, cuando responda, el switch aprenderá su ubicación (MAC y puerto) a través de la MAC de origen de esa trama de respuesta.

    3.  **Destino Broadcast o Multicast:**
        *   Si la dirección MAC de destino es una dirección de **difusión (Broadcast)** (`FF:FF:FF:FF:FF:FF`) o una dirección de **multidifusión (Multicast)** (ej: `01:00:5E:...` o `33:33:...`), el switch, por defecto, **inunda la trama por todos los puertos activos, excepto por el puerto de entrada.**
            *   *Nota sobre Multicast:* Switches más avanzados pueden utilizar técnicas como "IGMP Snooping" para aprender qué puertos tienen dispositivos interesados en recibir tráfico de un grupo multicast particular. En tales casos, el switch solo reenviará el tráfico multicast a esos puertos específicos, en lugar de inundarlo innecesariamente.

    4.  **Destino en el Mismo Puerto de Origen (Descarte Silencioso):**
        *   Si el switch, basándose en su tabla MAC, determina que la dirección MAC de destino está accesible a través del **mismo puerto por el cual ingresó la trama**, el switch **descarta la trama silenciosamente**. Esto evita que la trama se reenvíe innecesariamente de vuelta al segmento de red del que provino. Esto es común si hay un hub conectado a un puerto del switch y dos dispositivos en ese hub se comunican; el hub ya habrá propagado la trama.

#### 4.7.3. Consideraciones Adicionales sobre Switches <a name="capa2-switches-consideraciones"></a>
*   **Switches Conectados:** Un solo puerto de un switch puede tener muchas direcciones MAC asociadas si ese puerto está conectado a otro switch (o a un hub con múltiples dispositivos). El primer switch aprenderá las MACs de los dispositivos conectados al segundo switch (o hub) a través de las tramas que pasen por el enlace entre ellos. Cada switch mantiene su propia tabla MAC de forma independiente.

*   **Envío a la Puerta de Enlace Predeterminada (Gateway):**
    *   Cuando un dispositivo necesita enviar datos a una dirección IP ubicada en una **red remota** (es decir, una red diferente a la suya, fuera de su subred local), la trama Ethernet no se puede enviar directamente al dispositivo de destino final usando su MAC.
    *   En su lugar, el dispositivo de origen encapsulará el paquete IP (que tiene la IP de origen del dispositivo y la IP de destino del host remoto) dentro de una trama Ethernet.
    *   La **dirección MAC de destino de esta trama Ethernet será la dirección MAC de su puerta de enlace predeterminada** (generalmente la interfaz del router en su red local).
    *   El switch local, al recibir esta trama, buscará la MAC del router en su tabla MAC y reenviará la trama al puerto donde está conectado el router. El router luego se encargará de desencapsular el paquete IP, consultar su propia tabla de enrutamiento y reenrutar el paquete IP hacia la red de destino, creando una nueva trama de Capa 2 para el siguiente salto si es necesario.

### 4.8. Conceptos Adicionales de Capa 2 <a name="capa2-conceptos-adicionales"></a>

#### 4.8.1. Dispositivos Primarios de Capa 2 <a name="capa2-dispositivos"></a>
*   ***Switches (Conmutadores)***: Como se describió anteriormente, son el pilar de las LAN modernas. Toman decisiones de reenvío inteligentes basadas en direcciones MAC, crean una tabla MAC, y cada puerto es un dominio de colisión separado. Por defecto, un switch forma un único dominio de difusión.
*   **Puntos de Acceso Inalámbricos (WAP o AP - Wireless Access Point):** Permiten a los dispositivos Wi-Fi (IEEE 802.11) conectarse a una red cableada Ethernet. Actúan funcionalmente como un "bridge" (puente) entre el medio inalámbrico y el medio cableado, traduciendo entre los formatos de trama 802.11 y 802.3.
*   **Bridges (Puentes):** Dispositivos más antiguos, predecesores de los switches. Conectaban dos o más segmentos de red LAN y tomaban decisiones de reenvío basadas en direcciones MAC. Tenían menos puertos y eran menos eficientes que los switches modernos.
*   **Tarjetas de Red (NIC):** Esenciales para cada dispositivo que se conecta a la red, implementando la Capa 2 y Capa 1.
*   *Nota sobre Routers:* Aunque los routers son dispositivos de Capa 3, sus interfaces (puertos) tienen componentes de Capa 2 (como una dirección MAC si es una interfaz Ethernet) para conectarse a los segmentos LAN. Los routers son cruciales para conectar diferentes dominios de difusión de Capa 2.

#### 4.8.2. Tipos de Redes por Alcance (Predominantemente Capa 1 y 2 para el acceso) <a name="capa2-tipos-redes"></a>

| Tipo de Red (General)        | Descripción                                                                    | Cobertura Típica      | Ejemplo                                               | Tecnologías Comunes de Acceso (L1/L2) |
| :--------------------------- | :----------------------------------------------------------------------------- | :-------------------- | :---------------------------------------------------- | :------------------------------------ |
| **PAN (Personal Area Network)** | Conexión de dispositivos personales muy cercanos.                              | Pocos metros          | Auriculares Bluetooth con teléfono (WPAN)             | Bluetooth, Zigbee (WPAN)              |
| **LAN (Local Area Network)**   | Red en un área geográfica limitada (casa, oficina, edificio único o campus pequeño). | Edificio/Campus       | Red de oficina con cables Ethernet (LAN) o Wi-Fi (WLAN) | Ethernet, Wi-Fi (WLAN)                |
| **MAN (Metropolitan Area Network)** | Interconecta LANs dentro de una ciudad o área metropolitana.                 | Ciudad                | Red municipal conectando edificios universitarios     | Fibra óptica, Metro Ethernet, WiMAX (WMAN) |
| **WAN (Wide Area Network)**    | Cubre áreas geográficas extensas (países, continentes). Internet es el ejemplo más grande de una WAN. | País, Mundo           | Red corporativa global, Internet                      | MPLS, Frame Relay (legado), Satélite, Líneas dedicadas (T1/E1), 4G/5G (WWAN) |

*   La letra **W** delante de PAN, LAN, MAN, WAN (ej: **WLAN**) generalmente indica que la tecnología de acceso principal es inalámbrica (Wireless).
*   Las MAN y WAN, aunque utilizan tecnologías de Capa 1 y 2 para los enlaces físicos entre sitios, dependen fundamentalmente del enrutamiento de Capa 3 para interconectar las diferentes redes que las componen.

#### 4.8.3. Segmentación en Capa 2: VLANs y Dominios de Difusión <a name="capa2-segmentacion"></a>
*   **Dominio de Difusión (Broadcast Domain):** Es el área lógica de una red donde cualquier trama de difusión (broadcast) enviada por un dispositivo es recibida por todos los demás dispositivos en ese mismo dominio.
    *   Por defecto, un **switch (conmutador)** forma un único dominio de difusión grande; es decir, si un dispositivo conectado a un puerto envía una trama de broadcast, el switch la reenviará a todos los demás puertos.
    *   Los **routers**, en cambio, no reenvían tramas de broadcast de un interfaz a otro por defecto, por lo que cada interfaz de un router típicamente define el límite de un dominio de difusión.
*   **Problemas con Dominios de Difusión Grandes:** En redes grandes, un volumen excesivo de tráfico de broadcast (generado por ARP, DHCP, y otros protocolos) puede consumir un ancho de banda significativo y la capacidad de procesamiento de todos los dispositivos, degradando el rendimiento general de la red.
*   **VLANs (Virtual LANs - LANs Virtuales):**
    *   Son un método para **segmentar lógicamente una red física (como un único switch o un grupo de switches interconectados) en múltiples dominios de difusión independientes**.
    *   Los dispositivos en una VLAN solo pueden comunicarse directamente (a nivel de Capa 2) con otros dispositivos en la misma VLAN.
    *   **Para que el tráfico pase entre VLANs diferentes, se requiere un dispositivo de Capa 3 (un router o un switch multicapa configurado para enrutamiento inter-VLAN).**
    *   **Beneficios:**
        *   **Seguridad Mejorada:** Aísla grupos de usuarios o tipos de tráfico.
        *   **Organización:** Agrupa dispositivos por función o departamento, independientemente de su ubicación física.
        *   **Gestión del Tráfico:** Reduce el tamaño de los dominios de difusión, mejorando el rendimiento.
        *   **Flexibilidad:** Facilita movimientos, adiciones y cambios de dispositivos.
    *   **Etiquetado de Tramas (IEEE 802.1Q):** Para que los switches puedan identificar a qué VLAN pertenece una trama cuando esta atraviesa enlaces troncales (trunks) entre switches, se utiliza el estándar IEEE 802.1Q. Este estándar añade una "etiqueta" de 4 bytes a la trama Ethernet original, que contiene el VLAN ID.

*  #### 4.8.4. VLAN vs SSID Adicional (en un Punto de Acceso Wi-Fi):** <a name="capa2-vlan-vs-ssid"></a> 
    Es común confundir la creación de múltiples SSIDs (nombres de red Wi-Fi) en un punto de acceso con la creación de VLANs. Si bien ambos pueden dar la apariencia de redes separadas, son fundamentalmente diferentes:

    | Característica             | SSID Adicional (sin VLAN asociada)                      | VLAN (Virtual LAN)                                                              |
    |---------------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------|
    | **Nivel Técnico**         | Simplemente un nombre diferente para la red Wi-Fi visible. Los dispositivos se conectan al mismo segmento de red subyacente. | Crea una red lógica separada a nivel de Capa 2, con su propio dominio de difusión. |
    | **Aislamiento Real**      | Mínimo o nulo por defecto. Todos los dispositivos (independientemente del SSID) suelen estar en la misma subred IP y pueden verse entre sí. (Algunos routers/APs domésticos pueden ofrecer "aislamiento de cliente" básico). | Aislamiento fuerte a nivel de Capa 2. Los dispositivos en diferentes VLANs no pueden comunicarse directamente sin enrutamiento de Capa 3. |
    | **Tráfico Separado**      | Comparten la misma red IP, la misma puerta de enlace y, crucialmente, el mismo **dominio de difusión y ancho de banda del switch/router**. | Pueden (y suelen) tener **subredes IP diferentes, puertas de enlace distintas, políticas de seguridad y QoS separadas, y dominios de difusión aislados**. |
    | **Visibilidad de Equipos**| Generalmente, los dispositivos conectados a diferentes SSIDs (pero en la misma LAN/VLAN subyacente) pueden verse entre sí. | Los dispositivos en diferentes VLANs no se ven entre sí a nivel de Capa 2. La comunicación requiere un router. |
    | **Control de Tráfico (QoS)**| Limitado o nulo a nivel de SSID individual.                | Permite aplicar políticas de QoS por VLAN (ej: priorizar tráfico de voz en una VLAN específica). |
    | **Propósito Típico**      | Ofrecer redes Wi-Fi con diferentes nombres (ej: "Hogar", "Invitados") por conveniencia o con diferentes configuraciones de seguridad Wi-Fi (WPA2/3). | Separar tráfico por razones de seguridad (ej: invitados vs. corporativo), departamentales (ej: ventas vs. ingeniería), por tipo de dispositivo (ej: PCs vs. teléfonos VoIP vs. cámaras IoT), o para controlar el tráfico de difusión. |
    | **Hardware Especial**     | No (cualquier AP moderno soporta múltiples SSIDs).         | Sí, se requieren **switches y routers (o APs empresariales) que soporten el estándar IEEE 802.1Q (etiquetado VLAN)**. |

    ✅ **Conclusión:** Un SSID adicional sin una VLAN subyacente es principalmente una conveniencia de nombres. Una **VLAN** proporciona una segmentación de red lógica real y robusta con aislamiento y control de tráfico significativamente mayores. Muchos APs empresariales permiten mapear diferentes SSIDs a diferentes VLANs.

### 4.9. De la Trama a los Bits: Interacción con la Capa Física <a name="capa2-interaccion-capa1"></a>
Una vez que la Capa de Enlace de Datos (específicamente la subcapa MAC) ha ensamblado completamente la trama Ethernet (con su preámbulo, SFD, direcciones MAC, EtherType, datos y FCS), esta secuencia de bits lógicos debe ser convertida en señales físicas para su transmisión a través del medio de red (cable de cobre, fibra óptica, aire). Esta es la función principal de la **Capa 1 (Física)**.

*   **Bits:** La trama completa se considera una secuencia de unidades de datos binarias, los bits (0s y 1s).
*   **Codificación de Línea (Line Coding):** Para que el dispositivo receptor pueda:
    1.  Distinguir correctamente entre un bit '0' y un bit '1' representado por la señal física.
    2.  Mantener la sincronización del reloj entre el transmisor y el receptor (saber cuándo comienza y termina cada bit).
    Se utilizan diversos **esquemas de codificación de línea**. Estos esquemas son especificados por los estándares IEEE 802.3 para cada tipo y velocidad de Ethernet.
    *   **Propósito:** Convertir los bits lógicos en señales físicas (eléctricas, ópticas) que sean robustas, interpretables por el receptor y que faciliten la sincronización.
    *   **Ejemplos de Esquemas de Codificación:**
        *   **En Cobre (Par Trenzado):**
            *   **Manchester Coding (utilizado en 10BASE-T Ethernet):** Cada bit tiene una transición de voltaje en el medio de su período. Por ejemplo, un '0' podría ser una transición de bajo a alto voltaje, y un '1' una transición de alto a bajo (o viceversa). Esta transición constante ayuda enormemente a la recuperación del reloj y la sincronización en el receptor.
            *   **MLT-3 (Multi-Level Transmit, 3 niveles - usado en 100BASE-TX "Fast Ethernet"):** Utiliza tres niveles de voltaje para representar los datos, lo que permite reducir la frecuencia de la señal necesaria en el cable en comparación con esquemas más simples para la misma tasa de bits.
            *   **PAM (Pulse Amplitude Modulation - ej: PAM-5 para Gigabit Ethernet 1000BASE-T, PAM-16 para 10GBASE-T y superiores):** Utiliza múltiples niveles de amplitud de pulso para codificar varios bits en cada cambio de señal (símbolo). Por ejemplo, PAM-5 usa cinco niveles de voltaje para codificar datos, permitiendo transmitir más bits por símbolo y alcanzar mayores velocidades sobre el mismo tipo de cableado de par trenzado.
        *   **En Fibra Óptica:** Los esquemas implican modular la luz. A menudo se usan esquemas de codificación como **NRZ (Non-Return to Zero)** donde la presencia o ausencia de luz (o diferentes niveles de intensidad/fase) representan los bits, o esquemas más complejos como **8B/10B** (donde 8 bits de datos se codifican en un símbolo de 10 bits para asegurar suficientes transiciones para la sincronización y balance DC) o **64B/66B** para velocidades más altas.
*   **Sincronización del Reloj:**
    *   El **Preámbulo** (7 bytes de `10101010...`) al inicio de la trama Ethernet es crucial. Esta secuencia predecible de bits alternantes permite al circuito receptor "enganchar" su reloj (PLL - Phase-Locked Loop) al ritmo de la señal entrante.
    *   El **SFD (Start Frame Delimiter)** (`10101011`) inmediatamente después del preámbulo, con su patrón final `11`, le indica al receptor que la fase de sincronización ha concluido y que los siguientes bits corresponden al inicio de la dirección MAC de destino, marcando el comienzo de la trama útil.

</details>

## 5. Capa 3 OSI: Red – Direccionamiento Lógico y Enrutamiento Global <a name="capa3-red"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 3: Red</summary>

### 5.1. Función Principal y PDU (Capa 3) <a name="capa3-funcion-pdu"></a>
*   **Función Principal (OSI):** Proporcionar direccionamiento lógico único (principalmente *IP - Internet Protocol*) a los dispositivos en la internetwork y determinar la mejor ruta (**enrutamiento**) para los **paquetes** de datos a través de múltiples redes interconectadas. ***La capa de red logra esto mediante cuatro operaciones básicas: direccionamiento de dispositivos finales, encapsulación de datos de la capa de transporte en paquetes IP, enrutamiento de estos paquetes a través de las redes, y desencapsulación en el host destino.***
*   **Equivalente TCP/IP:** Capa de Internet.
*   **PDU (Protocol Data Unit):** Paquetes.

***El Protocolo de Internet (IP) es el pilar de esta capa y opera con las siguientes características fundamentales:***
    *   ***Sin Conexión: No establece una sesión previa; cada paquete es independiente.***
    *   ***Mejor Esfuerzo: No garantiza la entrega, el orden, ni la ausencia de errores en los paquetes IP. La fiabilidad es tarea de capas superiores (ej. TCP).***
    *   ***Independiente de los Medios: Funciona sobre diversas tecnologías de Capa 2/1. Debe considerar la Unidad Máxima de Transmisión (MTU) del enlace, lo que puede llevar a la fragmentación de paquetes IPv4 por routers intermedios (los routers no fragmentan IPv6; el origen o los encabezados de extensión lo manejan).***

### 5.2. Direccionamiento IP <a name="capa3-direccionamiento-ip"></a>
*(Introducción)*
#### 5.2.1. Dirección IPv4 (32 bits) <a name="capa3-ipv4"></a>
*(Contenido)*
Una **Dirección IP (Internet Protocol)** es una etiqueta numérica única asignada a cada *dispositivo (host)*. En su versión 4 (IPv4):
*   Es una dirección lógica de 32 bits, agrupada en cuatro octetos (bloques de 8 bits).
*   Cada paquete IP contiene una dirección IP de origen y una de destino. ***Dentro del encabezado IPv4, el campo "Protocolo" (ej: 6 para TCP, 17 para UDP) es crucial para indicar a qué servicio de capa superior entregar los datos en el destino, y el campo "Tiempo de Vida" (TTL) previene bucles de enrutamiento.***

*   Usualmente se representa en notación decimal separada por puntos.
*   **Ejemplo:** 
*   - Binario: `11010001101001011100100000000001`
*   - Octetos: `11010001.10100101.11001000.00000001`
*   - Decimal con puntos: `209.165.200.1`

#### 5.2.2. Desglosando una Dirección IP con su Máscara de Subred <a name="capa3-desglose-ip-mascara"></a>

Para entender cómo una dirección *IP (Internet Protocol)* individual se relaciona con su red local (LAN) y cómo se identifican los *dispositivos (hosts)* dentro de ella, utilizamos la **máscara de subred**.

Una **Máscara de Subred** es un número de 32 bits, expresado comúnmente en notación decimal con puntos (igual que una IPv4) o en notación CIDR (ej: `/24`). Su función es dividir una dirección IP en dos partes fundamentales: la **porción de RED** (que identifica la subred) y la **porción de HOST** (que identifica a un *dispositivo (host)* específico dentro de esa subred).

***Técnicamente, para que un dispositivo determine su propia dirección de red, realiza una operación lógica booleana llamada AND bit a bit entre su dirección IP y su máscara de subred. El resultado de esta operación AND es la dirección de red. (Recordatorio: 1 AND 1 = 1; 1 AND 0 = 0; 0 AND 1 = 0; 0 AND 0 = 0).***

**Principios Clave de la Máscara de Subred:**

*   La **máscara de subred** (`255.255.255.0` o `/24`) es crucial:
    *   `255` indica que el octeto correspondiente de la IP es parte de la **porción de RED**.
    *   `0` indica que el octeto correspondiente de la IP es parte de la **porción de HOST**.
*   Los dispositivos con la misma **Porción de Red** (y por lo tanto, la misma **Dirección de Red**) pertenecen a la misma subred y pueden comunicarse directamente.
*   En cualquier subred, la **Dirección de Red** y la **Dirección de Broadcast** son reservadas y no se pueden asignar a dispositivos individuales.

#### 5.2.3. Conversión CIDR a Máscara de Subred (IPv4) <a name="capa3-cidr-mascara"></a>

La notación CIDR indica **cuántos bits están en "1"** desde la izquierda. Eso define la máscara.

| CIDR | Máscara Decimal       | Bits para Hosts | Nº de Hosts (usables) |
|------|-----------------------|------------------|------------------------|
| /8   | 255.0.0.0             | 24               | 16.777.214             |
| /16  | 255.255.0.0           | 16               | 65.534                 |
| /24  | 255.255.255.0         | 8                | 254                    |
| /25  | 255.255.255.128       | 7                | 126                    |
| /26  | 255.255.255.192       | 6                | 62                     |
| /27  | 255.255.255.224       | 5                | 30                     |
| /28  | 255.255.255.240       | 4                | 14                     |
| /29  | 255.255.255.248       | 3                | 6                      |
| /30  | 255.255.255.252       | 2                | 2                      |

#### 5.2.4. Máscara de Subred vs. Dirección MAC <a name="capa3-mascara-vs-mac"></a>
Ambas son identificadores, pero operan en capas diferentes y tienen propósitos distintos:

| Elemento               | Dirección MAC (Media Access Control)        | Máscara de Subred                  |
|------------------------|---------------------------------------------|------------------------------------|
| **Qué es**             | Identificador físico único de la *tarjeta de red (NIC)*. | Patrón de bits que diferencia la porción de Red de la porción de Host en una dirección IP. |
| **Longitud**           | 48 bits (6 octetos, usualmente en hexadecimal). | 32 bits (4 octetos, usualmente en decimal para IPv4). |
| **Ejemplo**            | `A4:5E:60:7B:9D:FA`                         | `255.255.255.0`                    |
| **Nivel Modelo OSI**   | Capa 2 (Enlace de Datos).                   | Capa 3 (Red), intrínsecamente ligada a la IP. |
| **Asignación**         | Quemada en fábrica por el manufacturador (basado en OUI asignado por IEEE). | Configurada manual o automáticamente (ej. por DHCP) como parte de la configuración IP de un host. |
| **Cambia**             | Generalmente no (considerada permanente), aunque puede ser falseada (spoofing). | Sí, cambia según el diseño de la subred a la que pertenece el host. |
| **Visibilidad**        | Local, solo relevante dentro de la misma subred física (segmento LAN). | Relevante para el enrutamiento IP entre diferentes subredes. |
| **Propósito Principal**| Identificar un dispositivo de forma única en una red local para la entrega de tramas. | Ayudar a los dispositivos y routers a determinar si una IP de destino está en la misma red local o en una red remota. |

🔎 **En resumen:**
*   **NIC (Network Interface Card)** Hardware **Analogía:** Como un *carnet de identificación*.
*   **Dirección MAC (Media Access Control)** **Analogía:** Como el número de *RUT/DNI* impreso en tu *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* asignado por el fabricante.   
*   **Máscara de Subred** es una "regla lógica" que se aplica a una Dirección IP para entender su estructura de red y host, crucial para el enrutamiento.
*   **No tienen relación directa funcional:** La máscara de subred no interactúa con la MAC, ni viceversa. Ambas son necesarias, pero para funciones diferentes en capas distintas.

**Ejemplo Práctico:**

*   **IP del Dispositivo:** `192.168.1.50`
*   **Máscara de Subred:** `255.255.255.0` (Notación CIDR: `/24`)

| Concepto Derivado de la IP y Máscara | Cómo se Determina / Identifica                                   | Ejemplo con `192.168.1.50/24` | Descripción y Propósito                                                                                                                              |
| :------------------------------------ | :----------------------------------------------------------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Porción de Red de la IP**           | Parte de la IP que corresponde a los `255` en la máscara.           | `192.168.1`                    | Identifica la "calle" o subred específica a la que pertenece el dispositivo. (Para /24, son los primeros 24 bits de la IP).                               |
| **Porción de Host de la IP**          | Parte de la IP que corresponde a los `0` en la máscara.              | `.50`                          | Identifica el "número de casa" o dispositivo único dentro de esa subred. (Para /24, son los últimos 8 bits de la IP).                                 |
| **Dirección de Red (o Subred)**     | Tomar la "Porción de Red" de la IP y poner a cero la "Porción de Host". | `192.168.1.0/24`               | Es la identidad de toda la subred. No se asigna a dispositivos. Todos los dispositivos en esta subred comparten esta Dirección de Red.                 |
| **Puerta de Enlace (Gateway)**        | Convencionalmente, la primera dirección IP *usable* de la subred.    | `192.168.1.1`                  | La IP del router (en su interfaz LAN) que permite a los dispositivos de la subred comunicarse con otras redes (ej. Internet). Utiliza una IP de host. |
| **Rango de IPs de Host Usables**    | Desde la IP siguiente a la Dirección de Red, hasta la IP anterior a la de Broadcast. | `192.168.1.1` a `192.168.1.254` | Direcciones IP que pueden ser asignadas a dispositivos finales (PCs, móviles, servidores, etc.) dentro de la subred.                                 |
| **Dirección de Broadcast**          | La última dirección IP posible en la subred.                        | `192.168.1.255`                | Se utiliza para enviar un mensaje a *todos* los dispositivos dentro de la misma subred simultáneamente. No se asigna a dispositivos.                    |
| **Número de Hosts Usables**         | Fórmula: 2<sup>(bits de host)</sup> - 2. <br/> Para /24 (con 8 bits de host): 2<sup>8</sup> - 2. | 256 - 2 = **254**              | La cantidad de dispositivos que pueden tener una IP única en esta subred. Se restan 2 IPs (Dirección de Red y Dirección de Broadcast). (Una IPv4 tiene 32 bits; si 24 son de red, quedan 8 para hosts). |

#### 5.2.5. Direcciones IPv4 Públicas vs. Privadas <a name="capa3-ipv4-publica-privada"></a>

*   **Públicas:** Únicas globalmente, enrutables en Internet. Asignadas por ISPs, LIRs o RIRs.
*   **Privadas:** Para uso en redes internas, son unicas solo en tu red (LANs). No son enrutables directamente en Internet y pueden repetirse en diferentes LANs. Se requiere NAT para que los dispositivos con IP privada accedan a Internet.
  
#### 5.2.6. Rangos Comunes de IP Privada (RFC 1918) <a name="capa3-ip-privada-rangos"></a>
Una vez que entendemos que existen IPs "Privadas" para uso interno, es útil conocer cuáles son estos rangos de direcciones privadas estándar:

| Rango de IP Privada             | Máscara de Subred (Bloque Completo) | Uso Típico / Implementación Común                                                                                                |
|---------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `10.0.0.0` – `10.255.255.255`   | `255.0.0.0` (`/8`)                  | Empresas grandes (el bloque `/8` se subdivide en múltiples subredes más pequeñas).                                                  |
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` (`/12`)                 | Empresas medianas (el bloque `/12` se subdivide en subredes).                                                                    |
| `192.168.0.0` – `192.168.255.255`| `255.255.0.0` (`/16`)                 | **Hogares / Pequeñas Empresas:** Comúnmente se utiliza una subred `/24` de este bloque (ej: `192.168.1.0/24`, con 254 hosts usables). |

*Nota: En cada subred creada, 2 IPs no son usables por dispositivos (hosts): la Dirección de Red y la Dirección de Broadcast.*

### 5.3. Conexión al Mundo Exterior: Router y NAT. Principalmente Capa 3 y poco en Capa 4 <a name="capa3-router-nat"></a> 

Para que tus *dispositivos (hosts)* con IPs privadas (en tu LAN) accedan a Internet, el router actúa como intermediario esencial. Utiliza **NAT (Network Address Translation)** para traducir la IP privada de tu dispositivo a su propia IP pública (de la *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* WAN) al enviar datos, y revierte esta traducción para las respuestas entrantes. En tu red local, todos los dispositivos comparten la misma *Puerta de Enlace (Gateway)* e IP pública asignada por el router al comunicarse con el exterior, mientras NAT gestiona las conexiones y el tráfico de manera eficiente.

Cada red privada tiene su propia IP pública asignada por su proveedor de servicios de internet (ISP), sin compartirla con redes vecinas, incluso si se comunican entre sí. Su asignación puede ser:

*   Manual (IP fija): Permanece constante en el tiempo, asignada por el ISP.
*   Automática (IP dinámica): Asignada por el ISP vía DHCP (Dynamic Host Configuration Protocol es capa 7), pudiendo cambiar periódicamente. Esto es común en hogares y pequeñas empresas.

Independientemente de su método de asignación, NAT dirige todo el tráfico de la red interna a través de la IP pública disponible, asegurando el enrutamiento y la seguridad de la comunicación.

| Concepto                  | Tu PC (Host)                                  | Router (Interfaz LAN)                          | Router (Interfaz WAN)                             | Internet (Servidor Externo)        |
|---------------------------|-----------------------------------------------|------------------------------------------------|---------------------------------------------------|------------------------------------|
| **Tipo de IP (y Visibilidad)** | Privada <br>*(Solo visible en tu LAN)*      | Privada <br>*(Solo visible en tu LAN)*          | Pública <br>*(Visible para todo Internet)*        | Pública <br>*(Visible para todo Internet)* |
| **Ejemplo IP / Interfaz** | `192.168.1.45/24`                             | `192.168.1.1/24` (Interfaz LAN)                | `181.160.25.12` (Interfaz WAN)                    | `142.250.184.174` (Google)         |
| **Función / Rol Principal** | Usar servicios de red; identificado por su IP privada. | *Puerta de Enlace (Gateway)* para la LAN; puede actuar como Servidor DHCP; **Realiza NAT**. | Conexión a Internet; posee la IP pública que representa a la LAN en Internet. | Proveer servicios/contenido.       |

### 5.4. Direcciones IPv4 Especiales <a name="capa3-ipv4-especiales"></a>
*   **Loopback:** `127.0.0.0/8` (comúnmente `127.0.0.1`). Se usa para probar la pila TCP/IP del propio host.
*   **Link-Local (APIPA - Automatic Private IP Addressing):** `169.254.0.0/16`. Autoasignada por sistemas operativos (como Windows) si no se puede obtener una dirección IP de un servidor DHCP(capa 7). Permite comunicación limitada en la red local.
*   **Experimental (TEST-NET):** `192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24` (reservadas para documentación y ejemplos).
*   **Direcciones Reservadas (IANA):** Incluye rangos para multidifusión (`224.0.0.0/4`), futuro uso (`240.0.0.0/4`).

### 5.5. Clases de Direcciones IPv4 (Histórico) <a name="capa3-ipv4-clases"></a>
Sistema original de asignación, obsoleto y reemplazado por **CIDR (Classless Inter-Domain Routing)** que permite máscaras de subred de longitud variable (VLSM) para un uso más eficiente del espacio de direcciones.

| Clase | Rango de IP                         | Prefijo CIDR | Nº *dispositivos (hosts)* aprox. | Uso Principal                             |
|-------|-------------------------------------|--------------|------------------|-------------------------------------------|
| A     | 0.0.0.0 – 127.255.255.255           | /8           | +16 millones     | Redes muy grandes (Gobiernos, ISP, etc.)  |
| B     | 128.0.0.0 – 191.255.255.255         | /16          | ~65 mil          | Redes medianas y grandes                  |
| C     | 192.0.0.0 – 223.255.255.255         | /24          | 254              | Redes pequeñas (LANs, oficinas, etc.)     |
| D     | 224.0.0.0 – 239.255.255.255         | —            | —                | 🟢 Multidifusión (Multicast)              |
| E     | 240.0.0.0 – 255.255.255.255         | —            | —                | Reservado para pruebas/experimentos       |

### 5.6. Asignación de Direcciones IP (IANA, RIRs, LIRs, ISPs) <a name="capa3-asignacion-ip"></a>
Jerarquía global:
*   **IANA (Internet Assigned Numbers Authority)** -> da bloques de IPs a los **RIRs (Regional Internet Registries)** (LACNIC, ARIN, etc.) -> quienes las asignan a los **ISPs (Internet Service Providers)** y grandes organizaciones → Usuarios finales.
    
    **Los cinco RIRs son:**
    *   **AfriNIC:** Para África.
    *   **APNIC:** Para Asia-Pacífico.
    *   **ARIN:** Para Norteamérica.
    *   **LACNIC:** Para Latinoamérica y el Caribe.
    *   **RIPE NCC:** Para Europa, Oriente Medio y partes de Asia Central.
  
*   **ISPs (Internet Service Providers) y LIRs (Local Internet Registries):** Obtienen bloques de IPs de los RIRs y los asignan a organizaciones y usuarios finales.
  
### 5.7. Dirección IPv6 (128 bits) <a name="capa3-ipv6"></a>
Diseñada para suceder a IPv4 debido al agotamiento de direcciones públicas IPv4.
*   **Formato:** 8 grupos (hextetos) de 4 dígitos hexadecimales, separados por dos puntos (`:`).
    *   Ej: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Reglas de Abreviación:**
    1.  **Omitir Ceros Iniciales:** En cualquier hexteto, los ceros a la izquierda se pueden omitir (ej: `0db8` → `db8`; `000a` → `a`). Un hexteto de `0000` se puede escribir como `0`.
    2.  **Comprimir Secuencia de Ceros:** Una *única* secuencia contigua de hextetos que sean todos cero puede reemplazarse por dos puntos dobles (`::`). *Esta regla solo puede aplicarse una vez por dirección*.
        *   Ej: `2001:0db8:0000:0000:0000:ff00:0042:8329` → `2001:db8::ff00:42:8329`
*   ***El encabezado IPv6, de 40 bytes fijos, incluye campos como "Siguiente Encabezado" (análogo al campo "Protocolo" de IPv4, para identificar la carga útil) y "Límite de Saltos" (similar al TTL). Una característica importante de IPv6 es el uso de "Encabezados de Extensión" opcionales para funcionalidades como fragmentación o seguridad, manteniendo el encabezado principal simple.***
  
### 5.8. Dispositivos de Capa 3: Routers <a name="capa3-routers-dispositivos"></a>
*   Función principal: Conectar diferentes redes (subredes) y tomar decisiones de **enrutamiento** para reenviar paquetes entre ellas basándose en la dirección IP de destino.
*   Cada *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* de un router pertenece a una red IP diferente y, por lo tanto, a un dominio de difusión diferente. **Los routers no propagan broadcasts por defecto.**
*   **Componentes Internos Clave:**
    *   **CPU:** Ejecuta el sistema operativo y los procesos de enrutamiento.
    *   **RAM:** Almacena la tabla de enrutamiento activa, la configuración en ejecución (running-config), colas de paquetes. Es volátil.
    *   **Memoria Flash:** Almacena la imagen del sistema operativo (ej: IOS en Cisco). Es no volátil.
    *   **NVRAM (Non-Volatile RAM):** Almacena la configuración de inicio (startup-config). Es no volátil.
    *   **Interfaces:** Puertos físicos (Ethernet, Serial, etc.) para conectar a diferentes redes.
    *   **Fuente de Alimentación.**
*   **ISR (Integrated Services Router):** Router que combina funciones de enrutamiento con otros servicios como firewall, VPN, telefonía IP.

### 5.9. Tabla de Enrutamiento (memoria) <a name="capa3-tabla-enrutamiento"></a>
Es una base de datos que un router (o incluso un host) utiliza para decidir cómo reenviar un paquete IP hacia su destino.
*   🧩 Cada entrada contiene:
    *   Red de destino y máscara de subred: Identifican a qué red pertenece un paquete.
    *   Dirección IP del siguiente salto (Next Hop "el próximo router en la ruta") al que debe enviarse el paquete o la *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* de salida si la red está conectada directamente.
    *   Métrica (un valor que indica la "preferencia" o "costo" de la ruta). Se elige la ruta con menor métrica si hay varias posibles.
*   🔄 ¿Cómo se llena la tabla?
    *   **Redes Conectadas Directamente(fisicamente):** Agregadas automáticamente a la tabla cuando una *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* del router es configurada con una dirección IP y está activa. El router sabe que puede alcanzar cualquier host en estas redes sin necesidad de otro router.
    *   **Rutas Estáticas:** Configuradas manualmente por un administrador.
    *   **Rutas Dinámicas:** Aprendidas a través de protocolos de enrutamiento (ej: RIP, EIGRP, OSPF, BGP) que intercambian información de enrutamiento con otros routers.
*   🚪 Ruta predeterminada (0.0.0.0/0)
*   Conocida como (Gateway of Last Resort):** Una ruta especial (a menudo `0.0.0.0/0`) que se usa si no existe una coincidencia más específica en la tabla para la red de destino. Dirige el tráfico hacia un router que tiene más conocimiento de la red (ej: el router del ISP).
*   *Puerta de Enlace Predeterminada (Default Gateway):* En un host, es la dirección IP de la *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* del router en su LAN a la que el host enviará todo el tráfico destinado a redes externas.

#### 5.9.1. Ejemplo de Tabla de Enrutamiento <a name="capa3-tabla-ejemplo"></a>

| Red de destino | Máscara de subred | Puerta de enlace (Gateway) | Interfaz de salida | Métrica |
|----------------|-------------------|-----------------------------|--------------------|---------|
| 192.168.1.0     | 255.255.255.0     | 0.0.0.0                     | eth0               | 1       |
| 10.0.0.0        | 255.0.0.0         | 192.168.1.1                 | eth0               | 10      |
| 0.0.0.0         | 0.0.0.0           | 192.168.1.254               | eth0               | 20      |
| 127.0.0.0       | 255.0.0.0         | 0.0.0.0                     | lo                 | 0       |

> 📝 Nota:
> - Las rutas con **gateway 0.0.0.0** indican redes directamente conectadas.
> - La ruta `0.0.0.0/0` es la **ruta por defecto** que se usa cuando ninguna otra coincide.
> - La **métrica** más baja tiene prioridad si hay rutas múltiples hacia el mismo destino.

### 5.10. Diseño de Red Jerárquico <a name="capa3-diseno-jerarquico"></a>

Para lograr eficiencia, escalabilidad y una gestión simplificada, especialmente en redes de medianas a grandes, se adopta un **diseño jerárquico**. Este enfoque estructura la red en niveles o capas distintas, cada una con funciones específicas.

**Conceptos y Beneficios Clave de la Jerarquía:**
*   **Escalabilidad Mejorada:** La red puede crecer de forma modular. Añadir nuevos segmentos o servicios en una capa tiene un impacto mínimo en las otras.
*   **Rendimiento Optimizado:** El tráfico se localiza y se maneja de manera eficiente, con rutas de alta velocidad donde se necesitan (especialmente en el núcleo).
*   **Facilidad de Gestión y Mantenimiento:** La segmentación lógica y física simplifica la administración y la resolución de problemas, permitiendo aislar fallos.
*   **Control del Tráfico de Difusión:** Aunque los routers son los principales delimitadores de dominios de broadcast, un diseño jerárquico ayuda a contener y gestionar este tráfico de manera más efectiva.
*   *(Recordatorio: La distinción entre **Direcciones Físicas (MAC)** para la comunicación local en Capa 2 y **Direcciones Lógicas (IP)** para el enrutamiento global en Capa 3, donde la IP se divide en porción de red y host, es fundamental para que funcione este diseño).*

**Modelo Común de Tres Capas:**
Un modelo de diseño jerárquico ampliamente utilizado (ej: por Cisco) divide la red en tres capas funcionales:

1.  **Capa de Acceso (Access Layer):**
    *   **Función:** Proporciona el punto de conexión inicial para los dispositivos finales (PCs, impresoras, teléfonos IP, puntos de acceso inalámbricos) a la red.
    *   **Dispositivos Típicos:** Principalmente *switches (conmutadores)* de Capa 2.
    *   **Consideraciones:** Conectividad para hosts, seguridad a nivel de puerto, segmentación con VLANs, PoE (Power over Ethernet).

2.  **Capa de Distribución (Distribution Layer):**
    *   **Función:** Agrega el tráfico de múltiples switches de la capa de acceso. Sirve como límite entre la capa de acceso y la capa núcleo. Implementa políticas de red (como ACLs), realiza enrutamiento entre VLANs, y puede ser un punto de redundancia.
    *   **Dispositivos Típicos:** Switches multicapa (Layer 3 Switches) o *routers (enrutadores)*.
    *   **Consideraciones:** Agregación de enlaces, políticas de enrutamiento, QoS, redundancia.

3.  **Capa de Núcleo (Core Layer):**
    *   **Función:** Es la "columna vertebral" (backbone) de alta velocidad de la red. Su principal objetivo es conmutar y enrutar grandes volúmenes de tráfico de manera rápida y eficiente entre diferentes bloques de la capa de distribución o entre diferentes sitios de la red.
    *   **Dispositivos Típicos:** Switches de alta capacidad y velocidad (generalmente switches multicapa) o routers de gama alta.
    *   **Consideraciones:** Máxima velocidad, alta disponibilidad, redundancia. Se evita la implementación de políticas complejas que puedan introducir latencia.

### 5.11. ARP y NDP: Resolución de Direcciones IP a MAC <a name="capa3-arp-ndp"></a>

Cuando un dispositivo necesita enviar un paquete IP a otro dispositivo en la misma red local, conoce la dirección IP de destino (Capa 3). Sin embargo, para construir la trama Ethernet (Capa 2) que transportará ese paquete, necesita la dirección MAC física del destino. Aquí es donde entra en juego el **Protocolo de Resolución de Direcciones (ARP)** para redes IPv4. Para IPv6, un proceso similar se realiza mediante el **Protocolo de Descubrimiento de Vecinos (NDP)**, utilizando mensajes ICMPv6.

ARP tiene dos funciones principales: resolver direcciones IPv4 a direcciones MAC y mantener una **tabla ARP (o caché ARP)** temporal de estos mapeos **(almacenada en la memoria RAM del dispositivo)**.

**Proceso ARP Detallado:**

1.  **Destino en la misma red local:**
    *   El dispositivo emisor primero revisa su caché ARP buscando una entrada para la IP de destino.
    *   Si no hay entrada (o ha expirado), inicia una **Solicitud ARP (ARP Request)**:
        *   Se construye un mensaje ARP Request.
        *   Este mensaje se encapsula ***directamente en una trama Ethernet (utilizando el EtherType `0x806` para identificarlo como ARP), sin un encabezado IP.***
        *   La trama tiene:
            *   MAC Destino: `FF:FF:FF:FF:FF:FF` (Broadcast de Capa 2).
            *   MAC Origen: La del emisor.
        *   El mensaje ARP Request pregunta: "¿Quién tiene la dirección IP `[IP_Destino]`? Por favor, envíame tu dirección MAC."
    *   Todos los dispositivos en la LAN reciben y procesan la trama broadcast.
    *   El dispositivo con la `[IP_Destino]` correspondiente responde con una **Respuesta ARP (ARP Reply)**:
        *   Este mensaje también se encapsula en una trama Ethernet ***(con EtherType `0x806`)***.
        *   La trama tiene:
            *   MAC Destino: La MAC del solicitante original (Unicast).
            *   MAC Origen: La MAC del dispositivo que responde (la que se buscaba).
        *   El mensaje ARP Reply dice: "Yo tengo `[IP_Destino]`, mi dirección MAC es `[MAC_Destino]`."
    *   El emisor original recibe la ARP Reply y almacena la correspondencia IP-MAC en su caché ARP. ***Estas entradas en caché suelen tener un tiempo de vida limitado (timeout, ej: 15-45 segundos en Windows, pero varía según el SO) antes de ser eliminadas. También se pueden configurar entradas ARP estáticas manualmente, que no expiran.***

2.  **Destino en una red remota:**
    *   El dispositivo emisor determina que la IP de destino no está en su red local (comparando con su propia IP y máscara de subred).
    *   En este caso, necesita enviar el paquete a su **Puerta de Enlace Predeterminada (Default Gateway)** (el router local).
    *   El dispositivo realizará el proceso ARP (como se describió en el punto 1) para obtener la dirección MAC de la IP de su Puerta de Enlace Predeterminada, si aún no la tiene en su caché ARP.
    *   La trama Ethernet se enviará con la MAC de destino del router. El router, al recibir el paquete, consultará su tabla de enrutamiento para determinar el siguiente salto.
  
### 5.12. ARP Spoofing/Poisoning Seguridad <a name="capa3-arp-spoofing-poisoning-security"></a>

***Consideraciones de Rendimiento y Seguridad con ARP:***

*   ***Impacto de las Difusiones ARP en el Rendimiento:***
    *   Dado que las solicitudes ARP son tramas de difusión, todos los dispositivos en la red local las reciben y procesan. En una red comercial típica con tráfico normal, estas difusiones suelen tener un impacto mínimo en el rendimiento.
    *   Sin embargo, en escenarios donde una gran cantidad de dispositivos se encienden simultáneamente y comienzan a acceder a servicios de red al mismo tiempo (generando múltiples solicitudes ARP), el volumen de tráfico de difusión podría causar una disminución temporal del rendimiento de la red. Una vez que los dispositivos pueblan sus cachés ARP, este efecto se minimiza.

*   ***Vulnerabilidades de Seguridad de ARP: Suplantación (Spoofing) y Envenenamiento (Poisoning):***
    *   El protocolo ARP, en su diseño original, es inherentemente inseguro ya que no incluye mecanismos de autenticación para validar las respuestas. Esto lo hace susceptible a varios ataques en la red local.
    *   **ARP Spoofing (Suplantación de Identidad ARP):** Es una técnica maliciosa donde un atacante envía mensajes ARP falsificados a la red local. El atacante puede enviar una respuesta ARP no solicitada (o responder a una solicitud legítima) asociando su propia dirección MAC con la dirección IP de otro dispositivo en la red (por ejemplo, la dirección IP de la puerta de enlace predeterminada o la de otro host).
    *   **ARP Cache Poisoning (Envenenamiento de la Caché ARP):** Cuando los dispositivos legítimos reciben estas respuestas ARP fraudulentas, actualizan sus cachés ARP con la información incorrecta (IP legítima -> MAC del atacante).
    *   **Consecuencias:** Una vez que las cachés ARP están envenenadas, los dispositivos víctimas comenzarán a enviar tramas destinadas a la IP suplantada hacia la dirección MAC del atacante. Esto puede llevar a:
        *   **Ataques Man-in-the-Middle (MitM):** El atacante se posiciona entre dos comunicantes, pudiendo interceptar, leer, modificar o redirigir todo su tráfico.
        *   **Denegación de Servicio (DoS):** El atacante podría simplemente descartar el tráfico recibido, impidiendo la comunicación.
        *   **Secuestro de Sesión (Session Hijacking).**

*   ***Mitigación de Ataques ARP:***
    *   Para contrarrestar estas vulnerabilidades, los switches de nivel empresarial suelen implementar técnicas de mitigación.
    *   **Inspección Dinámica de ARP (DAI - Dynamic ARP Inspection):** Es una característica de seguridad que valida los paquetes ARP en la red. El switch mantiene una base de datos de enlaces IP-MAC confiables (a menudo aprendidos a través de DHCP Snooping). DAI intercepta todos los paquetes ARP y verifica si la combinación IP-MAC del remitente coincide con una entrada confiable. Si no hay coincidencia, o si la MAC del remitente en una respuesta ARP no coincide con la MAC de origen de la trama Ethernet, el paquete ARP se considera inválido y se descarta.
        *   *(DAI y otras técnicas avanzadas de seguridad de Capa 2 suelen estar más allá del alcance de una introducción, pero es importante conocer su existencia).*

**Importante: Diferenciar ARP/NDP de otros protocolos:**
*(Tu contenido existente)*

| Protocolo/Mensaje        | Capa 3 Destino (IP) | Capa 2 Destino (MAC) | Propósito Principal                                                                 |
|-------------------------|---------------------|----------------------|-------------------------------------------------------------------------------------|
| **ARP Request** | IP de destino a resolver | `FF:FF:FF:FF:FF:FF`   | Preguntar a todos en la LAN por la MAC asociada a una IP específica.               |
| **DHCP Discover (Inicial)** | `255.255.255.255`   | `FF:FF:FF:FF:FF:FF`   | Buscar servidores DHCP disponibles en la LAN para obtener una configuración IP. |

**Importante: Diferenciar ARP/NDP de otros protocolos:**
*   **ARP/NDP:** Descubren la dirección MAC asociada a una IP *dentro de la misma red local*. (Interacción Capa 3 - Capa 2 Enlace de datos (Data Link))
*   **NAT (Network Address Translation):** Traduce IPs privadas a públicas (y viceversa) en el router frontera, para comunicarse con redes externas (WAN). Opera principalmente en Capa 3, con implicaciones para Capa 4.
*   **DHCP (Dynamic Host Configuration Protocol):** Asigna dinámicamente direcciones IP (privadas o públicas, según la configuración del servidor DHCP) y otra información de configuración de red (máscara de subred, gateway, DNS) a los *dispositivos (hosts)*. Es un protocolo de Capa 7 (Aplicación).
*   **PDU (Protocol Data Units):** Nombre genérico para la unidad de datos en cada capa del modelo OSI; cada capa añade su propia cabecera al pasar la información hacia abajo: (Bits en L1, Tramas(frames) en L2, Paquetes en L3, Segmentos/Datagramas en L4, Datos en L5-L7).

## 6. Capa 4 OSI: Transporte – Comunicación Extremo a Extremo <a name="capa4-transporte"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 4: Transporte</summary>

### 6.1. Función Principal y PDU (Capa 4) <a name="capa4-funcion-pdu"></a>  
  *   **Función Principal (OSI):** Proporcionar comunicación lógica directa y segmentación de datos entre *procesos de aplicación* en *dispositivos (hosts)* diferentes. ***Realiza el seguimiento de conversaciones individuales entre aplicaciones, segmenta los datos de la aplicación en unidades más pequeñas para la transmisión y los reensambla en el destino.*** Ofrece servicios de transporte fiables y orientados a conexión (TCP) o servicios rápidos y no fiables sin conexión (UDP). Maneja el control de flujo y la multiplexación de conversaciones usando números de puerto.
 *   **Equivalente TCP/IP:** Capa de Transporte.
 *   **PDU (Protocol Data Unit):** Segmentos (TCP), Datagramas (UDP).
 
 ### 6.2. TCP (Transmission Control Protocol) vs. UDP (User Datagram Protocol) capa 4. <a name="capa4-tcp-udp-detallado"></a>
 
La capa de transporte ofrece principalmente dos protocolos, TCP y UDP, cada uno con características y mecanismos distintos, diseñados para diferentes tipos de aplicaciones.

#### Protocolo de Control de Transmisión (TCP)

TCP es un protocolo **orientado a conexión** y **con estado**, lo que significa que establece una sesión antes de transmitir datos y mantiene información sobre el estado de esa sesión. Está diseñado para proporcionar un transporte **fiable** de datos.

*   ***Encabezado TCP: Añade 20 bytes (o más con opciones) de información de control a los datos de la aplicación. Campos clave incluyen Puertos de Origen/Destino, Números de Secuencia, Números de Acuse de Recibo, Flags (bits de control), Tamaño de Ventana y Suma de Comprobación.***
*   **Características y Mecanismos Clave de TCP:**
    *   **Establecimiento de Sesión (Handshake de Tres Vías):**
        1.  El cliente envía un segmento con el flag **SYN** (Sincronizar) activado y un Número de Secuencia Inicial (ISN).
        2.  El servidor responde con un segmento con los flags **SYN y ACK** (Acuse de Recibo) activados, su propio ISN, y acusa recibo del ISN del cliente.
        3.  El cliente responde con un segmento con el flag **ACK** activado, confirmando la recepción y estableciendo la conexión.
    *   **Entrega Confiable y Ordenada:**
        *   ***Numeración y Seguimiento:*** TCP numera los bytes de datos con **Números de Secuencia (ISN y subsecuentes)** para rastrear los segmentos y permitir el reensamblaje en el orden correcto en el destino, incluso si llegan desordenados.
        *   ***Acuses de Recibo (ACKs):*** El receptor envía ACKs para confirmar los bytes recibidos. TCP utiliza **acuses de recibo de expectativa** (indicando el siguiente byte esperado).
        *   ***Retransmisión de Datos Perdidos:*** Si un ACK no se recibe en un tiempo determinado, el emisor retransmite los datos no confirmados. Mecanismos como el **Reconocimiento Selectivo (SACK)** permiten al receptor informar qué segmentos específicos ha recibido (incluso si hay huecos), para que el emisor solo retransmita los segmentos realmente perdidos.
    *   **Control de Flujo:**
        *   ***Tamaño de la Ventana (Window Size):*** El receptor especifica en el encabezado TCP la cantidad de datos (en bytes) que está dispuesto a recibir antes de que el emisor deba esperar un ACK. Esto evita que el emisor desborde los búferes del receptor.
        *   ***Ventanas Deslizantes:*** Permiten al emisor enviar múltiples segmentos antes de requerir un ACK, ajustando dinámicamente la cantidad de datos en tránsito según los ACKs y el tamaño de ventana anunciado por el receptor.
        *   ***Tamaño Máximo de Segmento (MSS):*** Durante el establecimiento de la conexión, los hosts negocian el MSS, que es la cantidad más grande de datos que un dispositivo puede recibir en un solo segmento TCP. El MSS se calcula típicamente restando los tamaños de los encabezados IP y TCP de la MTU del enlace subyacente (ej: 1500 bytes MTU - 20 bytes IP - 20 bytes TCP = 1460 bytes MSS).
    *   **Prevención de Congestión:** TCP puede detectar la congestión de la red (ej: por pérdida de paquetes o aumento de retardos en los ACKs) y reduce proactivamente su tasa de transmisión para evitar sobrecargar la red.
    *   **Terminación de Sesión (Handshake de Cuatro Vías):**
        1.  Un host envía un segmento con el flag **FIN** (Finalizar) activado.
        2.  El otro host responde con un **ACK**.
        3.  Ese otro host, cuando también está listo para cerrar, envía su propio **FIN**.
        4.  El primer host responde con un **ACK**, cerrando la conexión.

#### Protocolo de Datagramas de Usuario (UDP)

UDP es un protocolo **sin conexión** y **sin estado**. Proporciona una funcionalidad básica de transporte con una sobrecarga mínima, lo que lo hace rápido pero no fiable.

*   ***Encabezado UDP: Es muy simple, solo 8 bytes. Contiene Puertos de Origen/Destino, Longitud del datagrama y una Suma de Comprobación opcional (para integridad de datos y encabezado).***
*   **Características Clave de UDP:**
    *   **Entrega de "Mejor Esfuerzo":** No hay confirmaciones, ni retransmisiones de segmentos perdidos, ni garantía de entrega ordenada.
    *   ***Reconstrucción en Orden de Llegada: Los datagramas UDP se entregan a la aplicación en el orden en que llegan, sin intentar reordenarlos si llegan fuera de secuencia.***
    *   **Baja Sobrecarga:** El encabezado simple y la ausencia de mecanismos de control lo hacen más rápido que TCP.
    *   **Sin Establecimiento de Sesión:** Los datos se envían sin negociación previa.

#### ¿Cuándo Usar TCP o UDP?

| Característica   | TCP                                     | UDP                                     |
| :--------------- | :-------------------------------------- | :-------------------------------------- |
| **Confiabilidad**| **Alta** (ACKs, SACK, retransmisiones, secuenciación) | **Baja** ("mejor esfuerzo", sin confirmación) |
| **Conexión**     | Orientado a conexión (Handshakes)       | Sin conexión                            |
| **Estado**       | **Con estado** (rastrea la sesión)      | **Sin estado**                          |
| **Velocidad**    | Más lento (por sobrecarga de control)   | Más rápido (menor sobrecarga)           |
| **Control Flujo/Congestión**| **Sí** (Ventanas, MSS, algoritmos de congestión) | No                                      |
| **Uso Típico**   | Web (HTTP/S), Email (SMTP), FTP, SSH (donde cada bit cuenta) | Streaming (video/voz en tiempo real), DNS (consultas rápidas), DHCP, TFTP, Juegos en línea (donde la velocidad es crítica y alguna pérdida puede ser tolerable) |

***En resumen, las aplicaciones que requieren que todos los datos lleguen intactos y en orden (navegadores web, correo, transferencia de archivos) utilizan TCP. Aquellas que pueden tolerar alguna pérdida de datos pero necesitan baja latencia y rapidez (VoIP, video en vivo, DNS) a menudo prefieren UDP. Los desarrolladores eligen el protocolo de transporte según los requisitos de la aplicación.***
 
 ### 6.3. Sockets y Pares de Sockets <a name="capa4-sockets-pares"></a>
 
 **La Idea Esencial:** Para que tu computadora maneje múltiples conexiones de red simultáneamente (navegar, chatear) y dirija los datos de la Capa de Transporte al proceso de aplicación correcto, utiliza "sockets".
 
 #### 6.3.1. ¿Qué es un Socket? <a name="capa4-socket-que-es"></a>
 
 Un **Socket** es la combinación de:
 *   **`Dirección_IP`** (del dispositivo)
 *   **`:`** (separador)
 *   **`Número_de_Puerto`** (de la aplicación en ese dispositivo)
 
 #### 6.3.2. El Par de Sockets: La Conexión Única <a name="capa4-par-sockets"></a>
 
 Esto permite identificar de forma única cada conversación entre dos aplicaciones.
 
 **Tu PC (Solicitante) pidiendo una Página Web al Servidor (Proveedor)**
 
 | Rol en la Conexión     | Socket (`IP:Puerto`)        |
 | :--------------------- | :-------------------------- |
 | **Socket Solicitante** (Tu PC, navegador) | `192.168.1.5:1099`          |
 | **Socket Proveedor**   (Servidor Web, HTTP) | `203.0.113.7:80`            |
 | **Par de Sockets (Conexión Única)** | **(`192.168.1.5:1099` , `203.0.113.7:80`)** |


</details>

## 7. Capas 5, 6 y 7 OSI: Sesión, Presentación y Aplicación – La interfaz *(API - Application Programming Interface)* con el Usuario y los Servicios de Red <a name="capas567-aplicacion"></a>

<details>
  <summary>Ver/Ocultar Detalles de Capas 5, 6 y 7: Aplicación</summary>

### 7.1. Funciones Generales (Capas 5, 6, 7 OSI y Aplicación TCP/IP) <a name="capas567-funciones"></a>

En el modelo TCP/IP, las funciones de las capas de Sesión, Presentación y Aplicación del modelo OSI se consolidan en una única **Capa de Aplicación**.

#### 7.1.1. Capa 5 (Sesión OSI) <a name="capas567-sesion"></a>

    *   **Función:** Establece, gestiona y finaliza las "conversaciones" (sesiones) entre aplicaciones en diferentes *dispositivos (hosts)*. Mantiene el diálogo y sincroniza la comunicación.
       
#### 7.1.2. Capa 6 (Presentación OSI) <a name="capas567-presentacion"></a>

    *   **Función:** Asegura que los datos intercambiados sean comprensibles para las aplicaciones. Se encarga de la sintaxis y semántica de la información, incluyendo:
        *   **Formato de Datos y Codificación de Caracteres:** (ej: ASCII, EBCDIC, Unicode).
        *   **Cifrado y Descifrado:** Para la seguridad (ej: SSL/TLS opera conceptualmente aquí, aunque su implementación a menudo se extiende a otras capas).
        *   **Compresión y Descompresión:** Para reducir el tamaño de los datos.
  
#### 7.1.3. Capa 7 (Aplicación OSI) / Capa de Aplicación (TCP/IP) <a name="capas567-aplicacion-tcpip"></a>

*   **Función:** Proporciona la interfaz **(API - Application Programming Interface)** directa entre las aplicaciones que usan los usuarios (o procesos de sistema) y los servicios de red subyacentes. Define los protocolos que las aplicaciones usan para intercambiar datos.
*   **PDU (Protocol Data Unit) en estas capas:** Generalmente se refiere como "Datos" o "Mensaje".

### 7.2. Capa de Aplicación: Protocolos, Puertos y Servicios Esenciales <a name="capas567-protocolos-puertos"></a>

Un **protocolo** es un conjunto de reglas y convenciones que definen cómo se formatea, transmite y recibe la información entre dispositivos en una red. Actúa como una "regla de traducción del mensaje" para que diferentes sistemas puedan entenderse. Cada servicio de aplicación utiliza uno o más protocolos y, típicamente, escucha o envía mensajes a través de un **puerto** específico, que es como una "dirección" dentro de un dispositivo donde llega un mensaje destinado a una aplicación particular.
Un **Números de Puerto** Son identificadores de 16 bits (0-65535) usados por TCP y UDP para diferenciar entre múltiples aplicaciones o procesos que se ejecutan en un host.
    *   **Puerto de Origen:** Elegido dinámicamente por el host cliente (generalmente un número alto, >1023) para identificar de forma única su lado de la conversación.
    *   **Puerto de Destino:** Usado por el cliente para indicar el servicio específico solicitado en el servidor (ej: puerto 80 para HTTP).
    *   **Rangos de Puertos (administrados por IANA):**
        *   **Puertos Bien Conocidos (Well-Known Ports: 0-1023):** Reservados para servicios y aplicaciones estándar (HTTP: 80, HTTPS: 443, FTP: 21, SMTP: 25, DNS: 53).
        *   **Puertos Registrados (Registered Ports: 1024-49151):** Pueden ser registrados por desarrolladores de software para aplicaciones específicas.
        *   **Puertos Dinámicos/Privados/Efímeros (Dynamic/Private/Ephemeral Ports: 49152-65535):** Usados típicamente como puertos de origen temporales por los clientes.

| Nombre Protocolo                                | Puerto(s) Típicos (Destino) | Transporte Usado | Descripción del Protocolo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------|---------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **DNS (Domain Name System)**             | 53                        | UDP (consultas), TCP (transferencias de zona) | **Traduce nombres de dominio** legibles por humanos (ej: www.google.com) a direcciones IP numéricas (ej: 172.217.160.142) y viceversa, facilitando la navegación y el acceso a servicios. ***El sistema DNS opera con una estructura jerárquica global (desde dominios raíz, pasando por dominios de primer nivel como `.com` o `.org`, hasta dominios específicos), distribuyendo la carga de resolución en múltiples servidores organizados en zonas. Cada servidor DNS gestiona los registros de recursos (que mapean nombres a IPs y otros datos, como registros A, MX, CNAME) para su zona. Todas las comunicaciones DNS, incluyendo consultas, respuestas y transferencias de zona entre servidores, utilizan un formato de mensaje estandarizado.*** Las consultas suelen usar UDP por su rapidez; las transferencias de zona importantes entre servidores DNS usan TCP por su fiabilidad para grandes volúmenes de datos. |
| **HTTP (Hypertext Transfer Protocol)**     | 80                        | TCP               | Protocolo fundamental para la **World Wide Web**. Permite la solicitud y transferencia de recursos como documentos **HTML (Hypertext Markup Language)**, imágenes, y otros archivos entre un cliente (navegador) y un servidor web. Es un protocolo sin estado. |
| **HTTPS (HTTP Secure)**                  | 443                       | TCP               | Versión segura de HTTP. **Cifra la comunicación** entre el cliente y el servidor utilizando TLS (Transport Layer Security) o su predecesor SSL (Secure Sockets Layer), protegiendo la confidencialidad e integridad de los datos transferidos (ej: datos bancarios, contraseñas). Transfiere contenido web, incluyendo HTML. |
| **FTP (File Transfer Protocol)**         | 21 (control), 20 (datos)  | TCP            | Diseñado para la **transferencia de archivos** entre un cliente y un servidor. Utiliza dos conexiones TCP: una para comandos y control de tráfico (puerto 21) y otra para la transferencia de datos (puerto 20 en modo activo, o un puerto dinámico en modo pasivo para carga y descarga de archivos). |
| **TFTP (Trivial File Transfer Protocol)**| 69                        | UDP               | Versión muy **simplificada de FTP**. No ofrece autenticación ni muchas de las funciones avanzadas de FTP. Usa UDP, lo que lo hace rápido pero menos fiable. Comúnmente usado para arrancar dispositivos de red o transferir archivos de configuración/firmware en redes locales. |
| **SMTP (Simple Mail Transfer Protocol)**   | 25 (tradicional), 587 (con STARTTLS), 465 (SMTPS obsoleto) | TCP            | Protocolo estándar para el **envío de correo electrónico**. Se utiliza para transferir mensajes desde un cliente de correo a un servidor de correo, y también entre servidores de correo. Es un protocolo de "empuje" (push). |
| **POP3 (Post Office Protocol v3)**       | 110 (tradicional), 995 (POP3S) | TCP               | Utilizado para **recuperar correo electrónico** de un servidor. Generalmente, los mensajes se descargan al dispositivo del cliente y se eliminan del servidor (aunque puede configurarse para mantenerlos). Menos flexible para acceso desde múltiples dispositivos. |
| **IMAP4 (Internet Message Access Protocol v4)**| 143 (tradicional), 993 (IMAPS) | TCP               | Permite **recuperar y gestionar correo electrónico** directamente en el servidor. Los mensajes se mantienen en el servidor, permitiendo la sincronización y el acceso desde múltiples clientes/dispositivos. Ofrece más funcionalidades que POP3 (ej: gestión de carpetas en el servidor). |
| **Telnet**                               | 23                        | TCP               | Protocolo de **emulación de terminal remoto**. Permite acceder a la línea de comandos de un dispositivo remoto. Es **inseguro** porque toda la comunicación, incluidas las credenciales de acceso, se transmite en texto plano. Ha sido mayormente reemplazado por SSH. |
| **SSH (Secure Shell)**                   | 22                        | TCP               | Protocolo **seguro para acceso remoto, emulación de terminales**, transferencia de archivos (SFTP, SCP) y tunelización de otros protocolos. Cifra toda la sesión, protegiendo contra escuchas y manipulación. Es el reemplazo estándar de Telnet. |
| **DHCP (Dynamic Host Configuration Protocol)**| 67 (servidor), 68 (cliente) | UDP    | **Asigna automáticamente direcciones IP** y otra información de configuración de red (máscara de subred, puerta de enlace, servidores DNS) a los dispositivos cliente en una red. Simplifica la administración de direcciones IP. |
| **SNMP (Simple Network Management Protocol)**| 161 (agente), 162 (trap) | UDP               | Utilizado para la **monitorización y gestión de dispositivos de red** (routers, switches, servidores, impresoras). Permite a los administradores consultar el estado de los dispositivos, recibir alertas (traps) y, en algunos casos, modificar configuraciones. |
| **RADIUS (Remote Authentication Dial-In User Service)** | 1812 (Autenticación), 1813 (Accounting) <br/> (o legados 1645, 1646) | UDP               | Protocolo cliente-servidor que proporciona servicios centralizados de **Autenticación, Autorización y Contabilidad (AAA)** para usuarios que se conectan y utilizan un servicio de red. Comúnmente usado para autenticar usuarios en accesos Wi-Fi (ej: WPA2/3-Enterprise), VPNs, y accesos de red por marcado. |

### 7.3. Tecnologías Relacionadas con Servicios de Aplicación <a name="capas567-tecnologias-relacionadas"></a>
*   **VoIP (Voice over IP):** Es una familia de tecnologías y protocolos que permiten la transmisión de **voz sobre redes IP**. Protocolos clave incluyen:
    *   **SIP (Session Initiation Protocol):** Para establecer, modificar y terminar sesiones de comunicación (ej: llamadas de voz o video). Puerto 5060/5061 (TCP/UDP).
    *   **RTP (Real-time Transport Protocol):** Para transportar los datos de audio y video en tiempo real. Usa puertos UDP dinámicos.
*   **SMS (Short Message Service):** Aunque fundamentalmente es un servicio de telefonía móvil, su infraestructura puede interactuar con redes IP a través de pasarelas SMS (SMS gateways) para enviar/recibir mensajes desde aplicaciones basadas en internet.
*   **PSTN (Public Switched Telephone Network):** Es la red telefónica conmutada pública tradicional. Las *Puertas de Enlace (Gateways)* VoIP-PSTN son dispositivos que permiten la interconexión y las llamadas entre redes VoIP y la PSTN.

### 7.4. Herramientas para Pruebas y Análisis de Protocolos (Aplicación) <a name="capas567-herramientas-analisis"></a>

Existen aplicaciones que implementan estos protocolos, permitiendo interactuar con servicios de red y analizar su comportamiento.
*   **FileZilla:** Popular cliente gráfico (GUI) que implementa los protocolos FTP y SFTP (SSH File Transfer Protocol). Permite a los usuarios conectarse a servidores FTP/SFTP para subir, descargar y gestionar archivos y directorios de forma visual e interactiva, facilitando la transferencia de archivos.
*   **Tera Term:** Aplicación de emulación de terminal que soporta Telnet y SSH, entre otros. Facilita el acceso remoto seguro (vía SSH) o inseguro (vía Telnet) a la línea de comandos de servidores y dispositivos de red para configuración, gestión y monitorización.

Al utilizar estas herramientas, se puede observar el comportamiento del protocolo en acción. Por ejemplo, analizando el tráfico de red con herramientas como **Wireshark** mientras se usa FileZilla, se pueden ver los comandos FTP (puerto 21) y la transferencia de datos. En entornos de aprendizaje como **Packet Tracer**, se pueden simular estas interacciones, ayudando a comprender cómo se establece la comunicación, cómo se traducen los mensajes según las reglas del protocolo y cómo se transportan a través de los puertos específicos. Estas aplicaciones y simuladores son cruciales para validar la correcta implementación y funcionamiento de los servicios de red, diagnosticar problemas y profundizar en la comprensión del transporte de datos.

### 7.5. Configuración de Direcciones IP: Estática vs. Dinámica (DHCP) capa 7 <a name="capas567-dhcp"></a>

Aunque DHCP utiliza UDP (Capa 4) para el transporte de sus mensajes y asigna direcciones IP (Capa 3), su función principal es un servicio de la Capa de Aplicación destinado a la configuración automática de los *dispositivos (hosts)*.

*   **Estática:** La dirección IP, máscara de subred, puerta de enlace predeterminada y servidores DNS se configuran manualmente en cada host.
    *   **Ventajas:** Control predecible (ideal para servidores, impresoras y otros dispositivos de red críticos).
    *   **Desventajas:** Consume tiempo, propenso a errores de configuración (duplicados de IP, máscaras incorrectas), y difícil de gestionar en redes grandes o con muchos cambios.

*   **Dinámica (usando DHCP - Dynamic Host Configuration Protocol):** Un servidor DHCP asigna automáticamente la configuración de red a los clientes.
    *   **Ventajas:** Simplifica enormemente la administración de direcciones IP, reduce la posibilidad de errores de configuración, permite la reutilización eficiente de direcciones IP y facilita la movilidad de los dispositivos.
    *   ***Funcionamiento:*** DHCP asigna direcciones IP por un período de tiempo configurable, conocido como **período de concesión (lease period)**. Cuando este período expira, o si el cliente envía un mensaje `DHCPRELEASE`, la dirección IP se devuelve al *pool* (rango de direcciones disponibles) del servidor DHCP para que pueda ser asignada a otro dispositivo.
    *   **Proceso DORA Detallado (para IPv4):**
        1.  **DHCPDISCOVER (Cliente → Servidor, Broadcast):** El cliente, al conectarse a la red, envía un mensaje de difusión para localizar servidores DHCP disponibles.
        2.  **DHCPOFFER (Servidor → Cliente, Unicast o Broadcast):** Uno o más servidores DHCP pueden responder con una oferta, proponiendo una dirección IP y otros parámetros de configuración (máscara, gateway, DNS, duración de la concesión).
        3.  **DHCPREQUEST (Cliente → Servidor, Broadcast):** El cliente selecciona una de las ofertas (generalmente la primera que recibe) y envía un mensaje de difusión solicitando formalmente la dirección IP ofrecida al servidor específico.
        4.  **DHCPACK (Servidor → Cliente, Unicast o Broadcast):** El servidor DHCP confirma la asignación de la dirección IP y los demás parámetros, finalizando la concesión con un mensaje de acuse de recibo.
        *   ***Si la dirección IP ofrecida ya no está disponible, el servidor puede responder con un DHCPNAK (Negative Acknowledgment), y el cliente debe reiniciar el proceso Discover.***
    *   **DHCPv6 (para IPv6):**
        *   ***Proporciona servicios similares de asignación de direcciones para clientes IPv6.***
        *   ***Una diferencia clave es que DHCPv6 típicamente no asigna la dirección de la puerta de enlace predeterminada; esta información la obtienen los clientes IPv6 a través de los mensajes de Anuncio de Router (Router Advertisement - RA) enviados por el router local (parte del protocolo NDP).***
        *   ***Los mensajes en DHCPv6 tienen nombres diferentes pero cumplen funciones análogas: SOLICIT (similar a Discover), ADVERTISE (similar a Offer), REQUEST o RENEW (similar a Request), y REPLY (similar a Acknowledge). También existe el mensaje INFORMATION-REQUEST para obtener otra información de configuración sin necesidad de una dirección IP.***

### 7.6. Tipos de Conexión a Internet (Servicios) <a name="capas567-conexion-internet"></a>
Generalmente provistos por un **ISP (Proveedor de Servicios de Internet)**.
*   **DSL (Digital Subscriber Line):** Usa líneas telefónicas de cobre.
*   Otros: Cable Modem, Fibra Óptica (FTTH), Satélite, Celular (3G/4G/5G).

### 7.7. Identificadores de Red Comunes (Configuración de Usuario) <a name="capas567-identificadores-usuario"></a>

*   **SSID (Service Set Identifier):** El nombre público de una red Wi-Fi, configurado en el Punto de Acceso.
*   **Servidor DNS:** La dirección IP del servidor que el host usará para resolver nombres de dominio. A menudo se obtiene vía DHCP (capa 7).
* "Guía telefónica" de Internet: Nombre de dominio (google.com) -> Dirección IP (142.250.184.142).

### 7.8. Caso de Uso: Servicios en la Nube <a name="capas567-cloud"></a>
Actualmente, muchas aplicaciones usan protocolos de esta capa para acceder a servicios de **Computación en la Nube** (recursos como servidores y software vía Internet). Los modelos comunes incluyen nubes **Públicas** (ej: AWS, Azure), **Privadas** (dedicadas a una organización) **comunitarias** servicios como consultas medicas e **Híbridas** (combinación de ambas). La conectividad de red y los protocolos de aplicación son vitales para este acceso.

</details>

## 8. Herramientas de Solución de Problemas de Red *(CLI - interfaz de Línea de Comandos)* <a name="herramientas-cli"></a> 

<details>
  <summary>Ver/Ocultar Herramientas CLI</summary>

Estos comandos son esenciales para diagnosticar problemas de conectividad y configuración en diversas capas del modelo de red.

### 8.1. Comandos de Configuración IP (`ipconfig`, `ifconfig`, `ip`) <a name="cli-ipconfig"></a>

| Propósito / Opción Común                     | Windows (`ipconfig`)   | Linux/macOS (Tradicional: `ifconfig`) | Linux/macOS (Moderno: `ip`)     |
|----------------------------------------------|------------------------|---------------------------------------|---------------------------------|
| Muestra la configuración basica IP del host (IP, máscara, *Puerta de Enlace (Gateway)*). | `ipconfig`             | `ifconfig -a`                         | `ip addr show` o `ip a`         |
| Información detallada (muestra dirección MAC, servidores DNS, estado de DHCP, tiempo de lease). | `ipconfig /all`        | `ifconfig -a` (menos detalle que Win) | `ip addr show` (detalle similar)|
| Libera la concesión de dirección IP actual obtenida vía DHCP | `ipconfig /release`    | `sudo dhclient -r [interfaz]`         | `sudo dhclient -r [interfaz]`   |
| Solicita una nueva configuración al servidor DHCP, es decir asigna automaticamente Dirección IP, Máscara de subred, Puerta de enlace predeterminada (gateway) y Servidor DNS | `ipconfig /renew`      | `sudo dhclient [interfaz]`            | `sudo dhclient [interfaz]`      |
| Asignar IP estática (ejemplo)                | (Vía GUI o `netsh`)    | `sudo ifconfig [if] [ip] netmask [mask]` | `sudo ip addr add [ip]/[cidr] dev [if]` |
| Habilitar/Deshabilitar interfaz              | `netsh interface set interface "Nombre" admin=enable/disable` | `sudo ifconfig [if] up/down` | `sudo ip link set [if] up/down` |

*   **Nota Windows:** Si se detecta una IP incorrecta asignada por DHCP, es común usar `ipconfig /release` para liberar, seguido de `ipconfig /renew` para renovar configuracion DHCP.
*   **Nota Linux/macOS:** `ifconfig` está siendo reemplazado por el conjunto de herramientas `ip` (parte de `iproute2`) en muchas distribuciones modernas de Linux. `dhclient` es un cliente DHCP común en Linux.

### 8.2. `ping` (Diagnóstico de Conectividad) <a name="cli-ping"></a>

El comando `ping` (Packet Internet Groper) se utiliza para probar la conectividad de red en la **Capa 3 (Red)** con un host destino. Funciona enviando mensajes **ICMP (Internet Control Message Protocol) Echo Request** y esperando recibir mensajes **ICMP Echo Reply**. Mide la latencia total de ida y vuelta (RTT) y verifica la alcanzabilidad.

*   **Salida Típica:** Indica si el destino respondió, tiempo de ida y vuelta (latencia), y TTL.
    ```cmd
    C:\> ping www.google.com
    Haciendo ping a www.google.com [142.250.190.36] con 32 bytes de datos:
    Respuesta desde 142.250.190.36: bytes=32 tiempo=10ms TTL=118
    ```

#### 8.2.1. Opciones Comunes de `ping` <a name="cli-ping-opciones"></a>

| Función                                    | Opción Windows | Opción Linux/macOS (Conceptual/Común) |
|--------------------------------------------|----------------|---------------------------------------|
| Resolver nombre de host desde IP (en salida) | `-a`           | (Por defecto; `-n` para no resolver)  |
| Enviar pings indefinidamente               | `-t`           | (Comportamiento por defecto)          |
| Especificar número de solicitudes echo     | `-n count`     | `-c count`                            |
| Especificar tamaño del payload de datos    | `-l size`      | `-s size` (payload, no incl. cabecera ICMP) |
| Forzar uso de IPv4                         | `-4`           | `-4`                                  |
| Forzar uso de IPv6                         | `-6`           | `-6`                                  |
| Establecer intervalo entre pings (segundos)| (N/A directo)  | `-i interval`                         |

#### 8.2.2. Ejemplos de Uso (`ping`) <a name="cli-ping-ejemplos"></a>

```bash
# Windows & Linux/macOS (conceptual)
ping www.google.com       # Prueba básica
ping 8.8.8.8              # Prueba a IP
ping -t 192.168.1.1       # (Win) Ping continuo
ping 192.168.1.1          # (Linux) Ping continuo (Ctrl+C para parar)
ping -n 10 www.ejemplo.com # (Win) 10 pings
ping -c 10 www.ejemplo.com # (Linux) 10 pings
```

### 8.3. `tracert` / `traceroute` (Trazado de Ruta) <a name="cli-traceroute"></a>

Descubre la ruta (secuencia de routers o "saltos") que los paquetes toman para llegar a un host destino. Mide la latencia a cada salto, ayudando a identificar dónde pueden estar ocurriendo retrasos o pérdidas.

*   **Funcionamiento:** Envía paquetes con TTL (Time To Live) incremental. Cada router en la ruta devuelve un mensaje ICMP "Time Exceeded", identificándose y permitiendo medir la latencia hasta él.   
*   **Salida Típica:** Lista los saltos con sus IPs y tiempos de respuesta.
    ```cmd
    C:\> tracert www.google.com

    Traza a la dirección www.google.com [142.250.190.36] sobre un máximo de 30 saltos:
      1     1 ms     1 ms     1 ms  mi.router.local [192.168.1.1]
      2     8 ms     7 ms     8 ms  router.isp.com [10.0.0.1]
      3     *        *        *     Tiempo de espera agotado para esta solicitud.
    ... (saltos intermedios pueden mostrar latencias variables o más tiempos de espera) ...
      9    20 ms    20 ms    20 ms  mad41s19-in-f4.1e100.net [142.250.190.36]
    Traza completa.
    ```

#### 8.3.1. Opciones Comunes de `tracert`/`traceroute` <a name="cli-traceroute-opciones"></a>

| Función                                    | Windows (`tracert`) | Linux/macOS (`traceroute`)    |
|--------------------------------------------|---------------------|-------------------------------|
| No resolver IPs a nombres de host          | `-d`                | `-n`                          |
| Número máximo de saltos (TTL máximo)       | `-h max_saltos`     | `-m max_ttl`                  |
| Tiempo de espera por respuesta             | `-w timeout (ms)`   | `-w waittime (s, flotante)`   |
| Forzar uso de IPv4                         | `-4`                | `-4`                          |
| Forzar uso de IPv6                         | `-6`                | `-6`                          |
| Usar paquetes ICMP Echo (en lugar de UDP)  | (Por defecto)       | `-I` (puede requerir `sudo`)  |
| Especificar puerto destino (si usa UDP)    | (N/A, usa ICMP)     | `-p puerto`                   |
| Número de paquetes de sondeo por salto     | (N/A directo, 3 por defecto) | `-q nqueries`              |

#### 8.3.2. Ejemplos de Uso (`tracert`/`traceroute`) <a name="cli-traceroute-ejemplos"></a>

```bash
# Windows & Linux/macOS (conceptual)
tracert -d www.google.com # Windows: Trazar ruta a google.com sin resolver nombres de host
sudo traceroute -I www.google.com # Linux/macOS: Trazar ruta a google.com usando ICMP
traceroute -6 ipv6.google.com # Linux/macOS: Trazar ruta a google.com usando IPv6
```

### 8.4. `netstat` / `ss` (Monitoreo de Conexiones Activas) <a name="cli-netstat-ss"></a>
Muestra información sobre conexiones de red activas, puertos en escucha, estadísticas de Ethernet, la tabla de enrutamiento IP, estadísticas de IPv4/IPv6, etc.

| Función                                                      | Opción Windows | Opción Linux/macOS (o `ss`)   |
|--------------------------------------------------------------|----------------|-------------------------------|
| Muestra todas las conexiones activas y puertos en escucha    | `-a`           | `-a`                          |
| Muestra direcciones/puertos en formato numérico (no resolver)| `-n`           | `-n`                          |
| Muestra el ID del proceso (PID) asociado a la conexión     | `-o`           | `-p` (puede requerir `sudo`)  |
| Muestra la tabla de enrutamiento IP                          | `-r`           | `-r`                          |
| Muestra estadísticas de interfaz Ethernet/red                | `-e`           | `-i`                          |
| Muestra estadísticas por protocolo (TCP, UDP, ICMP, IP)      | `-s`           | `-s`                          |
| Muestra solo sockets TCP                                     | (Filtrar salida) | `-t` (o `ss -t`)              |
| Muestra solo sockets UDP                                     | (Filtrar salida) | `-u` (o `ss -u`)              |
| Muestra solo sockets en estado de escucha                    | (Filtrar salida con `findstr LISTEN`) | `-l` (o `ss -l`)              |

*   **Ejemplos de Combinaciones Populares:**
    *   **Windows:** `netstat -ano`(muestra todo, numérico, con PIDs).
    *   **Linux:** `netstat -tulnp` o, preferiblemente, `ss -tulnp` (muestra puertos TCP/UDP (tu) en escucha (l), numéricos (n), con programa/PID (p)).
    *   Nota: En muchas distribuciones Linux modernas, `ss (socket statistics)` es el sucesor de `netstat` y ofrece un rendimiento superior y más opciones.

### 8.5. `nslookup` (Consulta a DNS) <a name="cli-nslookup"></a>
Herramienta para consultar servidores DNS (Domain Name System).
*   **Uso Básico:** Resuelve un nombre de dominio a una dirección IP, o viceversa (búsqueda inversa si se proporciona una IP).
    ```cmd
    C:\> nslookup www.google.com
    Servidor:  mi.dns.local
    Address:  192.168.1.1

    Respuesta no autoritativa:
    Nombre:  www.google.com
    Addresses:  2607:f8b0:4004:c06::64
                142.250.190.36
    ```
*   **Modo Interactivo:** Escribiendo nslookup sin argumentos se entra en modo interactivo. Para especificar servidores DNS a consultar, tipos de registros a buscar (A, MX, NS, CNAME, etc.) Dentro de este modo, se pueden usar comandos como:
*   server [IP_servidor_DNS]: Para cambiar el servidor DNS a consultar.
*   set type=[TIPO_REGISTRO] (ej: set type=MX, set type=NS, set type=AAAA, set type=CNAME, set type=SOA): Para especificar el tipo de registro DNS a buscar.
*   Luego, escribir el nombre de dominio para consultar ese tipo de registro.
*   exit: Para salir del modo interactivo.
  
</details>

## 9. Fundamentos de Sistemas Numéricos <a name="sistemas-numericos"></a>

<details>
  <summary>Ver/Ocultar Sistemas Numéricos</summary>

### 9.1. Tipos de Sistemas Numéricos (Decimal, Binario, Hexadecimal) <a name="sistemas-numericos-tipos"></a>

*   **Números Decimales (Base 10):** Utilizan los dígitos del 0 al 9. Cada posición representa una potencia de 10. Es el sistema que usamos comúnmente.
*   **Números Binarios (Base 2):** Utilizan solo los dígitos 0 y 1 (bits). Cada posición representa una potencia de 2. Fundamental para la computación.
*   **Números Hexadecimales (Base 16):** Utilizan los dígitos del 0 al 9 y las letras de la A a la F (donde A=10, B=11, C=12, D=13, E=14, F=15). Cada posición representa una potencia de 16. Se usa a menudo como una representación más compacta del binario.

### 9.2. Métodos de Conversión entre Sistemas Numéricos <a name="sistemas-numericos-conversion"></a>

#### 9.2.1. Conversión de Decimal a Binario (Usando Tabla Posicional) <a name="sistemas-numericos-dec-bin"></a> 

Este método se basa en encontrar qué potencias de 2 suman el número decimal.

**Ejemplo: Convertir 192 (Decimal) a Binario**

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

#### 9.2.2. Decimal a Hexadecimal y Hexadecimal a Decimal (Usando División Sucesiva y Tabla de Posición) <a name="sistemas-numericos-dec-hex-y-hex-dex"></a> 

**1. Tabla de Posición: Decimal ⇔ Hexadecimal ⇔ Binario**

| Decimal:     | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |
|---------------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| Hexadecimal:  | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | A    | B    | C    | D    | E    | F    |
| Binario:      | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

**2. Resumen del Cálculo:**

*   **Decimal -> Hexadecimal (División):**
    *   Divide sucesivamente por 16.
    *   El cociente y el residuo de cada división se convierten a hexadecimal usando la tabla de conversión (arriba).  **Ejemplo:** 202 / 16 = 12 (C) residuo 10 (A) => CA
*   **Hexadecimal -> Decimal (Multiplicación):**
    *   Cada dígito hexadecimal se convierte a decimal usando la tabla de conversión (arriba).
    *   Cada dígito decimal se multiplica por 16 elevado a la potencia de su posición (de derecha a izquierda, comenzando con 0).
    *   Los resultados se suman. **Ejemplo:** 7D = (7 * 16^1) + (13 * 16^0) = 112 + 13 = 125

#### 9.2.3. Conversión de Decimal > Binario > Hexadecimal (usa tabla de posicion y tabla conversion) <a name="sistemas-numericos-dec-bin-hex"></a> 

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

#### 9.2.4. Conversión de Hexadecimal > Binario > Decimal (usa tabla de posicion y tabla conversion) <a name="sistemas-numericos-hex-bin-dec"></a> 

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
</details>

## 10. Interfaz de Línea de Comandos (CLI) del IOS de Cisco <a name="cisco-ios-cli-configuracion"></a>

<details>
  <summary>Ver/Ocultar Detalles de la CLI del IOS de Cisco</summary>

### 10.1. Contexto y Fundamentos de la CLI del IOS de Cisco <a name="ios-cli-contexto"></a>

El **IOS (Internetwork Operating System) de Cisco** es el sistema operativo propietario que se ejecuta en la gran mayoría de los routers y switches fabricados por Cisco Systems. Al igual que una computadora personal tiene un sistema operativo (como Windows, macOS o Linux) para gestionar sus recursos y permitir la interacción del usuario, los dispositivos de red Cisco utilizan IOS para sus funciones de red.

La **Interfaz de Línea de Comandos (CLI)** del IOS de Cisco es el principal método basado en texto para interactuar con este sistema operativo. Permite a los administradores de red:

*   **Configurar** los dispositivos (establecer direcciones IP, protocolos de enrutamiento, políticas de seguridad, etc.).
*   **Monitorear** el estado y el rendimiento de la red y del dispositivo.
*   **Mantener y Solucionar Problemas (Troubleshooting)** en la red.

**¿Cómo se Accede a la CLI?**
Aunque la CLI se ejecuta *en el router o switch Cisco*, se accede a ella *desde* una computadora (PC o estación de trabajo) mediante diferentes métodos:

*   **Conexión de Consola (Fuera de Banda - Out-of-Band):** Conexión física directa al puerto de consola del dispositivo Cisco usando un cable de consola (generalmente un cable rollover con un adaptador USB a serial o un puerto serial DB-9 en PCs más antiguas) y un programa de emulación de terminal (como PuTTY, Tera Term, SecureCRT, o la terminal integrada en macOS/Linux). Este método se usa para la configuración inicial o cuando el acceso por red no está disponible.
*   **Conexión Remota (Dentro de Banda - In-Band):**
    *   **Telnet (Puerto 23 TCP):** Permite el acceso remoto a la CLI a través de la red. **Es inseguro** ya que la comunicación (incluidas las credenciales) viaja en texto plano.
    *   **SSH (Secure Shell - Puerto 22 TCP):** Proporciona un acceso remoto **seguro y cifrado** a la CLI a través de la red. Es el método preferido para la administración remota.
    *   **HTTP/HTTPS (GUI):** Algunos dispositivos IOS también ofrecen una Interfaz Gráfica de Usuario (GUI) accesible vía web, pero la CLI sigue siendo fundamental para la mayoría de las tareas avanzadas y la automatización.

**Importancia de la CLI:**
A pesar de la existencia de GUIs, la CLI del IOS de Cisco sigue siendo la herramienta preferida por muchos profesionales de redes debido a su potencia, precisión, eficiencia para tareas repetitivas (mediante scripts) y la consistencia de los comandos a través de diferentes dispositivos Cisco. Dominar la CLI es una habilidad esencial para cualquier persona que trabaje con infraestructura de red Cisco.

### 10.2. Modos de Comando del IOS <a name="ios-cli-modos"></a>

El IOS de Cisco utiliza una estructura jerárquica de modos de comando para proporcionar diferentes niveles de acceso y funcionalidad, principalmente por razones de seguridad y para organizar los comandos. Cada modo se identifica por un `prompt` (indicador) diferente en la línea de comandos.

| Modo de Comando         | Prompt Típico | Descripción y Propósito Principal                                                                                                                                                           |
| :---------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **EXEC del Usuario**    | `Router>` o `Switch>` | **Nivel de acceso inicial y limitado.** Permite ejecutar comandos básicos de monitoreo y visualización (ej: `ping`, `show version` limitado, `show interfaces` limitado). No permite realizar cambios en la configuración del dispositivo. |
| **EXEC Privilegiado**   | `Router#` o `Switch#` | **Nivel de acceso completo (superusuario o "enable mode").** Permite ejecutar todos los comandos `show` para ver cualquier aspecto de la configuración y el estado, comandos de depuración (`debug`), gestión de archivos del sistema operativo, y, crucialmente, es el punto de entrada para acceder a los modos de configuración. |
| **Configuración Global**| `Router(config)#` o `Switch(config)#` | **Permite realizar cambios que afectan al dispositivo en su totalidad.** Desde aquí se configuran parámetros globales como el nombre del host, contraseñas, banners, y se accede a submodos de configuración más específicos. |
| **Configuración de Interfaz** | `Router(config-if)#` o `Switch(config-if)#` | **Permite configurar parámetros específicos de una interfaz de red** (ej: dirección IP, descripción, velocidad, dúplex, encapsulación). Se accede desde el modo de configuración global. |
| **Configuración de Línea** | `Router(config-line)#` o `Switch(config-line)#` | **Permite configurar los parámetros de las líneas de acceso** (consola, vty para Telnet/SSH, aux). Se accede desde el modo de configuración global. |
| **Configuración de Router** | `Router(config-router)#` o `Switch(config-router)#` | **Permite configurar protocolos de enrutamiento** (ej: OSPF, EIGRP, RIP). Se accede desde el modo de configuración global. |
| *(Otros modos específicos)* | *(Varía)*      | Existen muchos otros submodos de configuración para características específicas (VLANs, ACLs, etc.), generalmente accesibles desde el modo de configuración global. |

### 10.3. Navegación entre los Modos del IOS <a name="ios-cli-navegacion"></a>

Moverse entre los diferentes modos de comando es una tarea fundamental al trabajar con la CLI del IOS.

| Comando        | Modo Actual Típico        | Modo Destino Típico      | Propósito                                                                                                                               |
| :------------- | :------------------------ | :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`       | EXEC del Usuario (`>`)    | EXEC Privilegiado (`#`)  | Ingresar al modo EXEC privilegiado (generalmente requiere una contraseña si está configurada).                                          |
| `disable`      | EXEC Privilegiado (`#`)   | EXEC del Usuario (`>`)   | Regresar al modo EXEC del usuario.                                                                                                      |
| `configure terminal` (o `conf t`) | EXEC Privilegiado (`#`)   | Configuración Global (`(config)#`) | Ingresar al modo de configuración global para realizar cambios en la configuración del dispositivo.                                      |
| `interface [tipo] [número]` (ej: `interface gigabitethernet 0/0/0`, `interface vlan 1`) | Configuración Global (`(config)#`) | Configuración de Interfaz (`(config-if)#`) | Ingresar al modo de configuración específico para la interfaz indicada.                                                                   |
| `line [tipo] [número]` (ej: `line console 0`, `line vty 0 4`) | Configuración Global (`(config)#`) | Configuración de Línea (`(config-line)#`) | Ingresar al modo de configuración específico para la línea de acceso indicada.                                                              |
| `router [protocolo] [id_proceso_opcional]` (ej: `router ospf 10`) | Configuración Global (`(config)#`) | Configuración de Router (`(config-router)#`) | Ingresar al modo de configuración para el protocolo de enrutamiento especificado.                                                       |
| `exit`         | Cualquier modo de sub-configuración (ej: `(config-if)#`, `(config-line)#`, `(config-router)#`) | Modo de Configuración inmediatamente superior (ej: `(config)#`) | Salir del modo de configuración actual y regresar al modo anterior en la jerarquía. Si se usa en Configuración Global, regresa a EXEC Privilegiado. |
| `end`          | Cualquier modo de configuración o sub-configuración | EXEC Privilegiado (`#`)  | Salir de cualquier modo de configuración y regresar directamente al modo EXEC privilegiado.                                               |
| `Ctrl+Z`       | Cualquier modo de configuración o sub-configuración | EXEC Privilegiado (`#`)  | Equivalente a `end`. Sale de cualquier modo de configuración y regresa directamente al modo EXEC privilegiado.                         |

### 10.4. Estructura de los Comandos del IOS <a name="ios-cli-estructura-comandos"></a>

Los comandos del IOS siguen una estructura general que es importante entender para usarlos correctamente.

| Componente del Comando | Descripción                                                                                                                                                              | Ejemplo en `ping 192.168.1.1` | Ejemplo en `show ip interface brief` |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- | :----------------------------------- |
| **Comando**            | La palabra de acción inicial que le dice al IOS qué hacer.                                                                                                               | `ping`                        | `show`                               |
| **Espacio**            | Un separador requerido entre el comando y sus parámetros.                                                                                                              | (espacio después de `ping`)   | (espacio después de `show`)          |
| **Palabra Clave (Keyword)** | Un parámetro específico y predefinido que modifica o especifica la acción del comando. No todos los comandos requieren palabras clave.                                 | (No aplica directamente)      | `ip`, `interface`                    |
| **Argumento**          | Un valor o variable proporcionado por el usuario que el comando necesita para ejecutarse. No todos los comandos requieren argumentos.                                        | `192.168.1.1`                 | `brief` (en este caso, actúa como una palabra clave que especifica el formato de salida) |

**Sintaxis General:** `prompt comando [palabra_clave1 [argumento1]] [palabra_clave2 [argumento2]] ...`

*   **Texto en negrita** en la documentación de Cisco usualmente indica comandos y palabras clave que se ingresan tal cual.
*   **Texto en cursiva** usualmente indica argumentos para los cuales el usuario debe proporcionar un valor.
*   **Ejemplo de Sintaxis:** El comando para poner una descripción en una interfaz es `description <string>`.
    *   `description` es el comando.
    *   `<string>` es el argumento (la cadena de texto que el usuario escribe).
    *   Ejemplo de uso: `R1(config-if)# description Enlace_WAN_a_Oficina_Central`

### 10.5. Funciones de Ayuda y Atajos en la CLI (shortcuts) <a name="ios-cli-ayuda-shortcuts"></a>

La CLI del IOS ofrece varias características para facilitar su uso y hacer más eficiente la configuración y el monitoreo.

| Característica                      | Cómo se Usa / Tecla(s)                                        | Descripción y Propósito                                                                                                                                                                                               |
| :---------------------------------- | :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ayuda Sensible al Contexto**      | `?` (signo de interrogación)                                  | Escribir `?` en cualquier punto de un comando (o solo) muestra los comandos disponibles en ese modo o las siguientes palabras clave/argumentos posibles para el comando que se está escribiendo. Es extremadamente útil. |
| **Completado de Comandos/Palabras Clave** | `Tab` (tecla Tabulador)                                       | Después de escribir parte de un comando o palabra clave, presionar `Tab` intentará completarlo automáticamente. Si hay múltiples opciones, no completará o mostrará las opciones si se presiona `Tab` dos veces (o `?`). |
| **Abreviación de Comandos/Palabras Clave** | Escribir solo los caracteres iniciales únicos.              | Se pueden abreviar comandos y palabras clave a la cantidad mínima de caracteres que los identifiquen unívocamente. Ej: `conf t` en lugar de `configure terminal`; `sh run` en lugar de `show running-config`. |
| **Recuperación de Comandos Anteriores** | Flecha Arriba (`↑`), Flecha Abajo (`↓`)                        | Permite navegar por el historial de comandos ingresados previamente en la sesión actual.                                                                                                                            |
| **Mover el Cursor en la Línea**     | Flecha Izquierda (`←`), Flecha Derecha (`→`)                   | Mueve el cursor carácter por carácter.                                                                                                                                                                                  |
|                                     | `Ctrl+A`                                                      | Mueve el cursor al inicio de la línea.                                                                                                                                                                                |
|                                     | `Ctrl+E`                                                      | Mueve el cursor al final de la línea.                                                                                                                                                                                 |
| **Borrar Caracteres/Línea**         | `Backspace`                                                   | Borra el carácter a la izquierda del cursor.                                                                                                                                                                           |
|                                     | `Ctrl+U`                                                      | Borra toda la línea actual.                                                                                                                                                                                           |
|                                     | `Ctrl+W`                                                      | Borra la palabra a la izquierda del cursor.                                                                                                                                                                            |
| **Interrumpir un Proceso**          | `Ctrl+C`                                                      | Termina un comando en ejecución (como un `ping` continuo o un `debug`).                                                                                                                                                   |
| **Salir de Modos de Configuración** | `Ctrl+Z`                                                      | Regresa directamente al modo EXEC Privilegiado desde cualquier submodo de configuración (equivalente a `end`).                                                                                                        |
| **Mostrar Más Salida**              | `Barra Espaciadora`                                           | Cuando la salida de un comando (ej: `show running-config`) es más larga que la pantalla, muestra la siguiente pantalla completa.                                                                                     |
|                                     | `Enter`                                                       | Muestra la siguiente línea de la salida.                                                                                                                                                                              |
|                                     | `q` (o cualquier otra tecla)                                  | Detiene la visualización de la salida paginada y regresa al prompt.                                                                                                                                                     |

### 10.6. Visualización de Información del Dispositivo con Comandos `show` <a name="ios-cli-comandos-show"></a>

Los comandos `show` son herramientas de diagnóstico y verificación fundamentales en el IOS de Cisco. Se utilizan principalmente en el modo EXEC del Usuario y, con más detalle, en el modo EXEC Privilegiado para mostrar el estado actual del dispositivo, su configuración, tablas de protocolos, estadísticas de interfaces, etc. **No modifican la configuración.**

| Comando `show` Común        | Propósito Principal y Qué Muestra                                                                                                                                                                                                   | Modo Típico de Uso |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| `show running-config`       | Muestra la **configuración actualmente activa** que está en la RAM. Refleja todos los cambios realizados desde que el dispositivo se encendió o desde que se cargó la última configuración guardada.                                 | EXEC Privilegiado  |
| `show startup-config`       | Muestra la **configuración guardada** que está almacenada en la NVRAM. Esta es la configuración que el dispositivo cargará la próxima vez que se reinicie.                                                                            | EXEC Privilegiado  |
| `show interfaces [tipo número]` | Muestra estadísticas detalladas y el estado de todas las interfaces o de una interfaz específica. Incluye estado de Capa 1 (up/down) y Capa 2 (line protocol up/down), dirección MAC, MTU, contadores de errores, velocidad, dúplex. | EXEC Usuario/Priv. |
| `show ip interface [tipo número]` | Muestra la información de configuración IP (Capa 3) para todas las interfaces o una específica. Incluye dirección IP, máscara de subred, estado de helper-address, ACLs aplicadas, etc.                                              | EXEC Usuario/Priv. |
| `show ip interface brief`   | Proporciona un resumen conciso del estado de las interfaces (IP, estado de Capa 1 y Capa 2). Muy útil para una verificación rápida.                                                                                              | EXEC Usuario/Priv. |
| `show arp`                  | Muestra la tabla ARP del dispositivo, que contiene los mapeos entre direcciones IP y direcciones MAC de los dispositivos en las redes directamente conectadas.                                                                      | EXEC Usuario/Priv. |
| `show ip route`             | Muestra la tabla de enrutamiento IP del dispositivo. Detalla las redes conocidas, cómo llegar a ellas (siguiente salto o interfaz de salida), la métrica de la ruta y cómo se aprendió la ruta (conectada, estática, dinámica).        | EXEC Usuario/Priv. |
| `show protocols`            | Muestra el estado de los protocolos de Capa 3 configurados en cada interfaz (ej: si IP está habilitado) y las direcciones IP de las interfaces.                                                                                    | EXEC Usuario/Priv. |
| `show version`              | Muestra información crítica del sistema, incluyendo la versión del software IOS, tiempo de actividad del sistema, información de hardware (CPU, memoria RAM/Flash/NVRAM), interfaces físicas, y el valor del registro de configuración. | EXEC Usuario/Priv. |
| `show mac address-table` (en Switches) | Muestra la tabla de direcciones MAC del switch, con las MACs aprendidas, el puerto asociado y la VLAN. (Comando específico de switches).                                                                                | EXEC Usuario/Priv. |
| `show vlan brief` (en Switches) | Muestra un resumen de las VLANs configuradas en el switch y los puertos asignados a cada una. (Comando específico de switches).                                                                                             | EXEC Usuario/Priv. |

### 10.7. Nota sobre Herramientas de Simulación <a name="ios-cli-simulacion"></a>
Cuando se aprende a configurar dispositivos Cisco, es común utilizar herramientas de simulación o emulación antes de trabajar en equipos de producción reales.
*   **Verificadores de Sintaxis (Syntax Checkers):** Herramientas simples que a menudo requieren que los comandos se ingresen de forma exacta y completa. Son útiles para familiarizarse con la sintaxis precisa.
*   **Simuladores más Avanzados (ej: Cisco Packet Tracer):** Permiten una experiencia más realista, aceptando comandos abreviados, el uso de la tecla `Tab` para completar, y simulando el comportamiento de una red. Aunque son muy completos, pueden no tener todas las funcionalidades de un equipo real.
*   **Emuladores (ej: GNS3, EVE-NG):** Permiten ejecutar imágenes reales del IOS de Cisco en un entorno virtualizado, ofreciendo la experiencia más cercana al hardware real.

Es recomendable practicar en estos entornos para desarrollar habilidades de configuración y resolución de problemas de forma segura.

</details>

