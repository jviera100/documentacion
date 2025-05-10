# Guía de Estudio de Networking: Del Modelo OSI a la Práctica

## Introducción: ¿Qué es Internet y Cómo se Organiza la Comunicación?

**Internet** es una "red de redes" (internetwork) global que interconecta millones de dispositivos (computadoras, servidores, móviles) mediante tecnologías cableadas e inalámbricas, permitiendo el intercambio de información a escala mundial.

**Analogía del Viaje de Datos:**
Cuando los datos viajan por la red, es como una persona en un viaje internacional:
*   **Identificación:** Necesita identificadores (direcciones MAC y IP).
*   **Origen y Destino:** Requiere una dirección de partida y una de llegada.
*   **Permanencia:** Las conexiones tienen una duración.

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

A continuación, exploraremos los conceptos de red siguiendo la estructura del Modelo OSI.

---

## Capa 1: Física – La Transmisión de Bits

*   **Función Principal (OSI):** Transmitir el flujo de bits (0s y 1s) a través del medio físico. Define características eléctricas, mecánicas y funcionales (voltajes, tasas de bits, conectores, tipos de cable, radiofrecuencias).
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Bits.

### Medios de Red
El "camino" físico por el que viajan los datos.

| Medio             | Tipo de Datos    | Distancia Máxima | Entorno de Instalación | Ancho de Banda/Velocidad | Costo | Funcionalidad                                               | Ejemplo de Uso                                   |
|--------------------|-------------------|-------------------------------------------|-------------------------|--------------------------|-------|-------------------------------------------------------------|---------------------------------------------------|
| **Par Trenzado (Cat5/5e/6/6a)** | Impulsos Eléctricos | Hasta 100 metros (Ethernet) | Interior (oficinas, hogares) | Moderado a Alto       | Bajo a Moderado | Conexión de dispositivos en redes Ethernet (LAN).  Base de la mayoría de redes locales. | Conectar una PC a un router en casa o en la oficina. |
| **Coaxial**         | Impulsos Eléctricos | Media (depende de la frecuencia)          | Interior/Exterior       | Moderado                | Moderado | Transmisión de señales de TV, conexión satelital. Como cables de cobre de compañías de TV.  | Conexión de un televisor a un servicio de cable, conexión satelital.    |
| **Fibra Óptica**   | Pulsos de Luz   | Varios kilómetros o más               | Interior/Exterior (subterráneo, submarino) | Muy Alto               | Alto | Transmisión de datos a alta velocidad, inmune a interferencia. | Redes troncales, conexión de ciudades, centros de datos, compañías telefónicas. |
| **Inalámbrico**     | Ondas Electromagnéticas | Variable (depende del estándar y entorno) | Interior/Exterior       | Bajo a Moderado           | Bajo a Moderado | Conexión de dispositivos sin cables mediante modulación de frecuencias. | Conexión de laptops, smartphones, tablets a redes Wi-Fi; Bluetooth; redes celulares. |

*(EMI: Interferencia Electromagnética, RFI: Interferencia de Radiofrecuencia)*

### 🔧 Multiplexación
Técnica para combinar múltiples flujos de datos en un único canal de comunicación compartido.

| Tipo          | Explicación Simple                                                    | Ejemplo Práctico                                     |
| :------------ | :-------------------------------------------------------------------- | :--------------------------------------------------- |
| **FDM** (Frecuencia) | Cada señal viaja por una "banda" de frecuencia diferente dentro del canal. | Radio FM/AM, TV analógica por cable                |
| **TDM** (Tiempo)    | Cada señal usa todo el ancho de banda del canal, pero en pequeños turnos de tiempo asignados. | Telefonía digital (líneas T1/E1), algunas redes SONET/SDH |
| **WDM** (Long. de onda) | Específico para fibra óptica; múltiples señales viajan como diferentes "colores" (longitudes de onda) de luz. | Internet por fibra óptica de alta capacidad (DWDM, CWDM) |
| **CDM** (Código)    | Cada señal se mezcla con un código único que permite separarlas en el receptor aunque usen la misma frecuencia/tiempo. | Redes celulares (CDMA, WCDMA), GPS                |
| **SDM** (Espacial)  | Utiliza diferentes rutas físicas o antenas para transmitir señales separadas simultáneamente. | Antenas MIMO en Wi-Fi y 4G/5G, sistemas de fibra óptica paralela |

### Otros Conceptos y Dispositivos de Capa 1:
*   **Codificación y Sincronización de Bits.**
*   **Dispositivos de Capa 1:**
    *   **Hubs (Concentradores):** Obsoletos. Repiten la señal a todos los puertos.
    *   **Repetidores:** Regeneran la señal para extender la distancia.
    *   **Transceptores (Transceivers):** Convierten señales entre tipos de medios.
    *   **Cables y Conectores:** (RJ45, Fibra LC/SC, etc.).
    *   **Componente Físico de la NIC:** La parte de la tarjeta de red que se conecta al medio.
*   **Dispositivos Finales:** (PCs, servidores, impresoras, teléfonos IP, etc.) se conectan físicamente en esta capa, aunque su operación completa abarca capas superiores.

---

## Capa 2: Enlace de Datos – Comunicación en la Red Local

*   **Función Principal (OSI):** Transferencia confiable de datos (en forma de **tramas**) entre dos nodos directamente conectados en la *misma red local (segmento de red)*. Se encarga del direccionamiento físico (MAC), control de acceso al medio, y detección de errores básicos.
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Tramas.

### Organizaciones y Estándares Clave:
*   **IEEE (Institute of Electrical and Electronics Engineers):** Define estándares como IEEE 802.3 (Ethernet) y IEEE 802.11 (Wi-Fi).
*   **IANA (Internet Assigned Numbers Authority):** Asigna direcciones IP, números de sistema autónomo, etc.
*   **IETF (Internet Engineering Task Force):** Fuerza de Tarea de Ingeniería de Internet.
*   **RFC (Request for Comments):** Petición de Comentarios (documentos técnicos de la IETF).

### 💳 Tarjeta de Interfaz de Red (NIC - Network Interface Card)
Hardware que permite la conexión del dispositivo a la red.
*   **Función en Capa 2:** Contiene la dirección MAC única, participa en la creación y procesamiento de tramas.
*   **Tipos:** Ethernet (cable), Wi-Fi (inalámbrica), Virtual (para VMs, VPNs).
*   **Analogía:** Como un carnet de identificación.

### 🧾 Dirección MAC (Media Access Control)
Identificador *único y físico* de 48 bits (6 bytes hexadecimales, ej: `00:1A:2B:3C:4D:5E`) asignado a cada NIC por el fabricante.
*   Es la dirección "local" utilizada para entregar tramas dentro de la misma LAN.
*   **Analogía:** Como el número de serie de un dispositivo o el RUT/DNI impreso en un carnet. Es la dirección "local" para la entrega de tramas dentro de una LAN.

## Capa 2: Enlace de Datos – Comunicación en la Red Local

*   **Función Principal (OSI):** Transferencia confiable de datos (en forma de **tramas**) entre dos nodos directamente conectados en la *misma red local (segmento de red)*. Se encarga del direccionamiento físico (MAC), control de acceso al medio, y detección de errores básicos.
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Tramas.

### 🔄 El Proceso de Comunicación en Capa 2: Protocolos, Encapsulación y la Trama Ethernet

Para que los dispositivos se comuniquen en una red, siguen reglas estrictas llamadas **protocolos de red**. Un concepto fundamental en estos protocolos es la **encapsulación**:

1.  **Protocolos de Red (Fundamentos, para iniciar capa 2):**
    *   **Definición:** Un conjunto de reglas y convenciones que los dispositivos deben seguir para intercambiar información de manera correcta y comprensible. Definen el formato, tamaño, temporización(sincronizacion o velocidad), codificación(conversion a bits), encapsulación y patrones o secuencia de los mensajes(Request/Response).
    *   **Objetivo:** Facilitar la comunicación estructurada y ordenada entre dispositivos.

2.  **Encapsulación: Envolviendo los Datos para el Viaje (proceso capa 2)**
    *   **Proceso:** A medida que los datos pasan de una capa superior (ej: Capa 3 - Red, con un paquete IP) a una capa inferior (ej: Capa 2 - Enlace de Datos), la capa inferior "envuelve" los datos de la capa superior. Esto implica añadir información de control propia de la capa, como encabezados (y a veces tráileres).
    *   **Analogía:** Piensa en poner una carta (los datos del paquete IP) dentro de un sobre. El sobre (la trama de Capa 2) tiene su propia información (direcciones del remitente y destinatario local, sello).

3.  **La Trama Ethernet: El "Sobre" de la Capa 2 (fin proceso capa 2)**
    *   Cuando un paquete IP (de Capa 3) necesita ser enviado a través de una red local Ethernet, la Capa 2 lo encapsula dentro de una **Trama Ethernet**.
    *   Esta trama es la unidad de datos que realmente viaja por el cable o el aire en la red local.
    *   **Función Clave:** La trama Ethernet asegura que el paquete IP llegue al dispositivo correcto *dentro de la misma red local*.

    **Componentes Esenciales de una Trama Ethernet (IEEE 802.3 / Ethernet II):**

    | Componente                      | Tamaño (Bytes) | Descripción                                                                                                                              |
    |---------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | **Preámbulo**                   | 7              | Secuencia de bits alternantes (101010...) para sincronización del reloj del receptor.                                                      |
    | **SFD (Start Frame Delimiter)** | 1              | Secuencia `10101011`. Indica que el siguiente byte es la Dirección MAC Destino y marca el inicio formal de la trama.                            |
    | **Dirección MAC Destino**       | 6              | La dirección física (MAC) del dispositivo receptor en el segmento de red local. Si es `FF:FF:FF:FF:FF:FF`, es una trama de broadcast.       |
    | **Dirección MAC Origen**        | 6              | La dirección física (MAC) del dispositivo emisor en el segmento de red local.                                                              |
    | **EtherType / Longitud**        | 2              | Si valor ≥ 1536 (0x0600): Indica el protocolo de Capa 3 encapsulado (ej: `0x0800` para IPv4, `0x86DD` para IPv6). (Formato Ethernet II). Si valor ≤ 1500: Indica la longitud del campo de datos (Formato IEEE 802.3 original). |
    | **Datos (Payload)**             | 46 - 1500      | Contiene el paquete de la capa superior (generalmente un paquete IP). Si es menor de 46 bytes, se añade relleno (padding).                 |
    | **FCS (Frame Check Sequence)**  | 4              | Suma de verificación (CRC) calculada sobre la trama (desde MAC Destino hasta Datos). Permite al receptor detectar errores de transmisión.      |

    *   **El Rol del Protocolo IP dentro de la Trama:** Mientras la Trama Ethernet (con direcciones MAC) se encarga de la entrega local, el paquete IP (contenido en el campo "Datos" de la trama) lleva las direcciones IP de origen y destino finales, que son usadas por los routers para el envío a través de múltiples redes (internetworking) hasta el destino final.

### 📡 Dispositivos de Capa 2
*   **Switches (Conmutadores):**
    *   Propagan difusiones a *todas* las interfaces excepto la que recibió la difusión.
    *   Toman decisiones de reenvío basadas en direcciones MAC.
    *   Aprenden las MAC de los dispositivos conectados a cada puerto y las almacenan en una **tabla MAC**.
    *   Segmentan dominios de colisión (cada puerto es un dominio de colisión).
    *   Por defecto, un switch es un único **dominio de difusión** (broadcasts se reenvían a todos los puertos excepto el de origen).
*   **Bridges (Puentes):** Predecesores de los switches, conectaban segmentos de red. Menos eficientes.
*   **Routers:** Conectan la LAN con otras redes (como Internet) y enrutan el tráfico entre ellas. Un tipo avanzado es el ISR (Integrated Services Router), que incorpora funciones adicionales como seguridad (firewall, VPN) y voz (VoIP). *No* propagan difusiones, limitando el dominio.
*   **Cables y Tarjetas de Red (NIC):** Permiten la conexión física de los dispositivos a la LAN mediante Ethernet o fibra óptica.
*   **Puntos de Acceso Inalámbricos (WAP o AP - Wireless Access Point):** Conectan dispositivos inalámbricos a una red cableada, operando en Capa 2 (y Capa 1).

Para mejorar la eficiencia y organización dentro de una LAN, se utilizan **VLANs (Redes Locales Virtuales)**, que segmentan la red de forma lógica, permitiendo agrupar dispositivos en distintas redes independientes dentro de un mismo switch físico.

### 🌐 Tipos de Redes por Alcance (Predominantemente Capa 1 y 2)

| Tipo de Red (General)        | Descripción                                                                    | Cobertura Típica      | Ejemplo                                               | Tecnologías Comunes        |
| :--------------------------- | :----------------------------------------------------------------------------- | :-------------------- | :---------------------------------------------------- | :------------------------- |
| **PAN (Personal Area Network)** | Conexión de dispositivos personales muy cercanos.                              | Pocos metros          | Auriculares Bluetooth con teléfono (WPAN)             | Bluetooth, Zigbee (WPAN)   |
| **LAN (Local Area Network)**   | Red en un área limitada (casa, oficina, edificio).                             | Edificio              | Red de oficina con cables Ethernet (LAN) o Wi-Fi (WLAN) | Ethernet, Wi-Fi (WLAN)     |
| **MAN (Metropolitan Area Network)** | Interconecta LANs en una ciudad o área metropolitana.                        | Ciudad                | Red municipal conectando edificios                    | Fibra óptica, WiMAX (WMAN) |
| **WAN (Wide Area Network)**    | Cubre áreas extensas (países, continentes). Internet es una WAN.             | País, Mundo           | Red corporativa global, Internet                      | MPLS, Satélite, 4G/5G (WWAN)|

*   **W** delante de PAN, LAN, MAN, WAN (ej. **WLAN**) indica que la tecnología principal es inalámbrica (Wireless).
*   *(WMAN, WWAN son las versiones inalámbricas, usan tecnologías como WiMAX, 4G/5G).*


### 🔪 Segmentación en Capa 2: VLANs (Virtual LANs)
Permiten segmentar lógicamente una red física (un switch) en múltiples redes de broadcast independientes.
*   Dispositivos en diferentes VLANs no pueden comunicarse directamente sin un dispositivo de Capa 3 (router o switch multicapa).
*   Mejora la seguridad, organización y gestión del tráfico, Solución: Subredes.

### 🗣️ Comunicación en Capa 2: Unicast, Multicast, Broadcast
*   **Unicast:** Trama dirigida a una única dirección MAC destino.
*   **Multicast:** Trama dirigida a un grupo de direcciones MAC.
*   **Broadcast:** Trama dirigida a todas las direcciones MAC en el dominio de difusión (MAC Destino: `FF:FF:FF:FF:FF:FF`).

El tráfico de datos en una red se clasifica en:

| Tipo       | Significado                     | ¿A quién va dirigido?                      | Ejemplo común                                    |
| :--------- | :------------------------------ | :----------------------------------------- | :----------------------------------------------- |
| Unicast    | "Uno a uno"                     | A un solo receptor específico              | Enviar un correo a una persona                   |
| Broadcast  | "Uno a todos"                   | A todos los dispositivos de la red local   | DHCP al encender el PC, ARP Request              |
| Multicast  | "Uno a muchos (grupo específico)" | A varios receptores que se unieron a un grupo | IPTV, videoconferencia en LAN, juegos online       |
| Anycast    | "Uno al más cercano (entre varios)"| A uno solo, pero el más cercano geográficamente | Servidores DNS raíz, CDNs (Content Delivery Networks) |
| Geocast    | "Uno a una zona geográfica"     | A dispositivos dentro de una ubicación     | Alertas de emergencia localizadas, redes vehiculares |
| Narrowcast | "Uno a pocos seleccionados"     | A un público muy específico (más en medios) | Publicidad dirigida, TV de pago específica         |


---

## Capa 3: Red – Direccionamiento Lógico y Enrutamiento Global

*   **Función Principal (OSI):** Proporcionar direccionamiento lógico (IP) y determinar la mejor ruta (enrutamiento) para los paquetes de datos a través de múltiples redes interconectadas (internetworking).
*   **Equivalente TCP/IP:** Capa de Internet.
*   **PDU (Protocol Data Unit):** Paquetes.

### 📍 Direccionamiento Lógico: Protocolo IP (Internet Protocol)
Principal protocolo de Capa 3. Proporciona un esquema de direccionamiento jerárquico y sin conexión ("mejor esfuerzo").

#### Dirección IPv4 de 32 bits
Una dirección IPv4 es necesaria para que un host pueda comunicarse en Internet y en redes LAN. Es una dirección lógica que debe ser única y configurarse correctamente tanto a nivel local como remoto para permitir la comunicación.

Cada interfaz de red (como una tarjeta NIC) en un dispositivo final, como PC, servidores, impresoras de red o teléfonos IP, requiere una dirección IPv4. Los enrutadores también tienen direcciones IPv4 en sus interfaces para conectarse a redes IP.

Cada paquete enviado en Internet incluye una dirección IPv4 de origen y destino, lo que garantiza que los datos lleguen al destino correcto y las respuestas sean enviadas al origen.
*   Dirección lógica de 32 bits, única dentro de su red, necesaria para la comunicación, se convierten de binario a formato decimal para facilitar lectura.
*   **Formato:** 4 octetos (bloques de 8 bits) en notación decimal separada por puntos.
    **Ejemplo:**
- Binario: `11010001101001011100100000000001`
- Octetos: `11010001.10100101.11001000.00000001`
- Decimal con puntos: `209.165.200.1`
*   Cada paquete IP incluye IP de origen e IP de destino.

#### 🔍 Máscara de Subred (IPv4)

**Concepto Clave:**  IP = RED + HOST. La MÁSCARA define la división.

**Los Dos Trucos:**

1.  **Máscara -> IP: Coordenadas RED/HOST:**
    *   `255` en la máscara: El número correspondiente en la IP es RED.
    *   `0` en la máscara: El número correspondiente en la IP es HOST.
2.  **Calcular la Dirección de RED:**
    *   Toma la parte de RED de la IP.
    *   Redondea a cero la parte del HOST.  Ej: si el HOST era .50, ahora es .0

**Ejemplo Rápido:**

*   IP: `192.168.1.50`
*   Máscara: `255.255.255.0`
*   RED: `192.168.1`
*   Dirección de RED: `192.168.1.0`

**Misma Red?** Compara las Direcciones de RED. Si coinciden, ¡están en la misma red!

Indica qué parte de la IP identifica la **RED** y qué parte al **HOST**.
*   **IP = Porción de RED + Porción de HOST**
*   **Cálculo Dirección de Red:**
    1.  Identifica la porción de RED (donde la máscara tiene bits en 1, o `255` en decimal).
    2.  Pon a cero la porción de HOST (donde la máscara tiene bits en 0, o `0` en decimal).
*   **Ejemplo:**
    *   IP: `192.168.1.50`, Máscara: `255.255.255.0`
    *   Dirección de RED: `192.168.1.0`
*   Dispositivos con la misma dirección de RED están en la misma subred.

#### 🗣️ Comunicación IPv4: Unicast, Broadcast, Multicast

| Tipo       | Significado                     | Dirigido a...                              | Dirección IP Destino Ejemplo                 |
| :--------- | :------------------------------ | :----------------------------------------- | :------------------------------------------- |
| **Unicast**  | "Uno a uno"                     | Un único host específico.                  | `192.168.1.50`                               |
| **Broadcast**| "Uno a todos (en la subred)"    | Todos los hosts en la *misma subred*.      | `192.168.1.255` (si red es /24), `255.255.255.255` (limitada) |
| **Multicast**| "Uno a muchos (grupo)"          | Un grupo de hosts suscritos.               | `224.0.0.5` (para OSPF)                      |

*(Los routers NO reenvían broadcasts por defecto).*

#### 🏡 Direcciones IPv4 Públicas vs. Privadas
*   **Públicas:** Únicas globalmente, enrutables en Internet. Asignadas por ISPs.
*   **Privadas:** Para uso en redes internas (LANs). No enrutables en Internet.
    *   Rangos: `10.0.0.0/8`, `172.16.0.0/12` (172.16.x.x - 172.31.x.x), `192.168.0.0/16`.
*   **NAT (Network Address Translation):** Proceso (usualmente en routers) que traduce IPs privadas a una IP pública para acceder a Internet.

#### ⚙️ Direcciones IPv4 Especiales
*   **Loopback:** `127.0.0.0/8` (ej: `127.0.0.1`). Para probar la pila TCP/IP local.
*   **Link-Local (APIPA - Automatic Private IP Addressing):** `169.254.0.0/16`. Autoasignada por Windows si no hay DHCP.
*   **Experimental:** `240.0.0.0` a `255.255.255.254`. Para investigación.
*   **Multidifusión (224.0.0.0 - 239.255.255.255):** Envío a un grupo específico de hosts. *Comienza con 224 a 239* (ej: 224.0.0.5).
*   **Unidifusión y Difusión:** No tienen rangos específicos fijos. Las de unidifusión son todas las IPs que *no* son privadas, loopback, APIPA, experimentales o multidifusión. Las de difusión dependen de la máscara de subred.

#### 📜 Clases de Direcciones IPv4 (Histórico)
Reemplazado por **CIDR (Classless Inter-Domain Routing)** para mayor flexibilidad.

| Clase | Rango de IP                         | Prefijo CIDR | Nº Hosts aprox. | Uso Principal                             |
|-------|-------------------------------------|--------------|------------------|-------------------------------------------|
| A     | 0.0.0.0 – 127.255.255.255           | /8           | +16 millones     | Redes muy grandes (Gobiernos, ISP, etc.)  |
| B     | 128.0.0.0 – 191.255.255.255         | /16          | ~65 mil          | Redes medianas y grandes                  |
| C     | 192.0.0.0 – 223.255.255.255         | /24          | 254              | Redes pequeñas (LANs, oficinas, etc.)     |
| D     | 224.0.0.0 – 239.255.255.255         | —            | —                | 🟢 Multidifusión (Multicast)              |
| E     | 240.0.0.0 – 255.255.255.255         | —            | —                | Reservado para pruebas/experimentos       |

#### 🌐 Asignación de Direcciones IP
*   **IANA (Internet Assigned Numbers Authority)** -> da bloques de IPs a los **RIRs (Regional Internet Registries)** (LACNIC, ARIN, etc.) -> quienes las asignan a los **ISPs (Internet Service Providers)** -> Usuarios finales.
    
    **Los cinco RIRs son:**

    *   **AfriNIC:** Para África.
    *   **APNIC:** Para Asia-Pacífico.
    *   **ARIN:** Para Norteamérica.
    *   **LACNIC:** Para Latinoamérica y el Caribe.
    *   **RIPE NCC:** Para Europa, Oriente Medio y partes de Asia Central.

#### 🚀 Dirección IPv6
*   128 bits, formato hexadecimal (8 hextetos separados por `: `). Ej: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.
*   **Abreviación:**
    1.  Omitir ceros iniciales en cada hexteto (`0db8` -> `db8`, `0000` -> `0`).
    2.  Reemplazar *una única* secuencia contigua de hextetos de ceros con `::`.
        *   `2001:0db8:0000:0000:0000:0000:0000:0001` -> `2001:db8::1`

### ⚙️ Dispositivos de Capa 3: Routers (Enrutadores)
*   Conectan diferentes redes (subredes).
*   Toman decisiones de reenvío (enrutamiento) basadas en direcciones IP de destino.
*   Utilizan una **tabla de enrutamiento** para determinar la mejor ruta manual o automaticamente.
*   Cada interfaz de un router está en una red diferente y limita dominios de difusión.
*   **Componentes Internos Router:** CPU, RAM (tabla de enrutamiento, config. activa), Memoria Flash (IOS), NVRAM (config. de inicio), Interfaces y Fuente de Alimentación.
*   **ISR (Integrated Services Router):** Router con funciones adicionales (firewall, VPN).

### 🗺️ Tabla de Enrutamiento
*   **Contenido:** Redes de destino, interfaz de salida, IP del siguiente salto, métrica.
*   **Fuentes:** Redes conectadas directamente, rutas estáticas (manuales), rutas dinámicas (protocolos de enrutamiento como RIP, OSPF, EIGRP).
*   **Ruta Predeterminada (Gateway of Last Resort):** `0.0.0.0/0`. Usada si no hay ruta específica. El host envía paquetes a redes externas a través de su **Puerta de Enlace Predeterminada (Default Gateway)** (la IP del router en su LAN).

### 🏢 Diseño de Red Jerárquico (Enrutamiento entre capas)
Modelo para redes grandes que usa switches y routers en niveles:
*   **Núcleo (Core):** Enrutamiento de alta velocidad entre áreas de distribución.
*   **Distribución:** Agrega tráfico de acceso, aplica políticas, enruta entre VLANs.
*   **Acceso:** Conecta dispositivos finales, segmenta con VLANs.



### 🤝 Resolución de Direcciones IP a MAC (Interacción L3-L2)
Para enviar un paquete a un host en la *misma red local*, se necesita su dirección MAC.
*   **ARP (Address Resolution Protocol) - para IPv4:**
*   Preguntando por la MAC (el "Nombre") conociendo la IP (el "Apellido")**
*   Si un dispositivo (Host A) quiere enviar un mensaje *directamente* a otro (Host B) en la LAN, necesita la dirección MAC de Host B. ARP permite a Host A encontrar la MAC de Host B conociendo su IP.

*   **El Proceso ARP: Preguntar, Escuchar, Recordar**

    1.  **ARP Request:** Host A *difunde* una pregunta: "¿Quién tiene la IP X.X.X.X (Host B)?". La dirección MAC destino es `FF-FF-FF-FF-FF-FF` (difusión).

    2.  **ARP Reply:** *Solo* Host B responde *directamente* a Host A con su dirección MAC.

    3.  **Tabla ARP:** Host A guarda la IP y la MAC de Host B en su tabla ARP para uso futuro.

**En resumen:** Las difusiones permiten que todos se encuentren, pero ARP ayuda a los dispositivos a encontrar a alguien específico (su MAC), y los enrutadores limitan el alcance de las difusiones para evitar la congestión.

    1.  Host A quiere enviar a IP_B (en misma LAN).
    2.  Host A envía ARP Request (broadcast): "¿Quién tiene IP_B? Dime tu MAC."
    3.  Host B responde con ARP Reply (unicast): "Soy IP_B, mi MAC es MAC_B."
    4.  Host A guarda `IP_B -> MAC_B` en su tabla ARP.
*   **NDP (Neighbor Discovery Protocol) - para IPv6:**
    *   Funciones similares a ARP (Neighbor Solicitation/Advertisement).
    *   También para autoconfiguración de direcciones, detección de routers, etc.
*   Si el destino está en una *red remota*, el host A envía el paquete a la MAC de su **Default Gateway (router)**. El router se encargará de encontrar la siguiente MAC en la ruta.
    no confundirse entre estos conceptos:
    *   **NAT (Network Address Translation)** permite que multiples dispositivos compartan una dirección IP pública para acceder a Internet.
    *   **DHCP (Dynamic Host Configuration Protocol)** Asigna automáticamente direcciones IP y otros parámetros de red a los dispositivos cuando se conectan a la red.
    *   **PDUs (Protocol Data Units):** Una PDU es simplemente un "paquete" de datos que se envía a través de la red, y la visualización de PDUs en Packet Tracer es una simplificación para fines didácticos.

    ARP/ND son para *descubrir la dirección MAC asociada a una dirección IP dentro de la red local*.
---

## Capa 4: Transporte – Comunicación Confiable o Rápida Extremo a Extremo

*   **Función Principal (OSI):** Proporciona comunicación lógica directa entre procesos de aplicación en diferentes hosts. Segmentación de datos, control de flujo, fiabilidad (TCP) o rapidez (UDP).
*   **Equivalente TCP/IP:** Capa de Transporte.
*   **PDU (Protocol Data Unit):** Segmentos (TCP), Datagramas (UDP).

### 🚚 TCP (Transmission Control Protocol) vs. UDP (User Datagram Protocol)

| Característica   | TCP                                     | UDP                                     |
| :--------------- | :-------------------------------------- | :-------------------------------------- |
| **Confiabilidad**| Alta (ACKs, NACKs, retransmisiones, secuenciación) | Baja ("mejor esfuerzo", sin confirmación) |
| **Conexión**     | Orientado a conexión (Three-way handshake) | Sin conexión                            |
| **Velocidad**    | Más lento (por sobrecarga de control)   | Más rápido (menor sobrecarga)           |
| **Control Flujo**| Sí (evita saturación del receptor)      | No                                      |
| **Uso Típico**   | Web (HTTP/S), Email (SMTP), FTP, SSH    | Streaming (video/voz), DNS, DHCP, TFTP  |

### 🔢 Números de Puerto
Identifican la aplicación o servicio específico en un host. Usados por TCP y UDP.
*   **Puerto de Origen:** Elegido dinámicamente por el cliente (>1023) para identificar la conversación.
*   **Puerto de Destino:** Indica el servicio solicitado en el servidor.
*   **Rangos (administrados por IANA):**
    *   **Conocidos (0-1023):** Servicios estándar (HTTP:80, HTTPS:443, FTP:21, SMTP:25, DNS:53).
    *   **Registrados (1024-49151):** Para aplicaciones específicas.
    *   **Dinámicos/Privados/Efímeros (49152-65535):** Puertos de origen temporales.

### 🔌 Sockets
Combinación de una dirección IP y un número de puerto (ej., `192.168.1.100:80`). Identifica un extremo de una comunicación de forma única.

---

## Capas 5, 6 y 7: Sesión, Presentación y Aplicación – La Interfaz con el Usuario

*   **Función Principal (OSI):**
    *   **Capa 5 (Sesión):** Establece, gestiona y finaliza las conexiones (sesiones) entre aplicaciones.
    *   **Capa 6 (Presentación):** Da formato a los datos (codificación, cifrado, compresión) para que sean entendibles por la aplicación.
    *   **Capa 7 (Aplicación):** Proporciona la interfaz para que las aplicaciones de red interactúen con el usuario y ofrezcan servicios.
*   **Equivalente TCP/IP:** Capa de Aplicación (engloba las funciones de las capas 5, 6 y 7 de OSI).
*   **PDU (Protocol Data Unit):** Datos.

### 🌐 Servicios y Protocolos de Aplicación Comunes

| Protocolo | Puerto(s) | Transporte | Descripción                                               |
| :-------- | :-------- | :--------- | :-------------------------------------------------------- |
| **DNS (Domain Name System)**   | 53        | UDP, TCP   | Resuelve nombres de dominio a IP.                         |
| **HTTP (Hypertext Transfer Protocol)**  | 80        | TCP        | Transferencia de hipertexto (páginas web).                 |
| **HTML (Hypertext Markup Language)** | N/A (formato) | N/A       | Lenguaje para crear páginas web.                          |
| **HTTPS (HTTP Secure)** | 443       | TCP        | HTTP seguro (cifrado con TLS/SSL).                       |
| **FTP (File Transfer Protocol)**   | 20 (datos), 21 (control) | TCP   | Transferencia de archivos.                              |
| **TFTP (Trivial FTP)**  | 69        | UDP        | Transferencia simple de archivos (sin autenticación).      |
| **SMTP (Simple Mail Transfer Protocol)**  | 25        | TCP        | Envío de correo electrónico.                              |
| **POP3 (Post Office Protocol v3)**  | 110       | TCP        | Recepción de correo (descarga al cliente).                |
| **IMAP (Internet Message Access Protocol)**  | 143       | TCP        | Recepción de correo (mantiene en servidor).               |
| **Telnet**| 23        | TCP        | Acceso remoto a terminal (inseguro, texto plano).         |
| **SSH (Secure Shell)**   | 22        | TCP        | Acceso remoto a terminal seguro (cifrado).                |
| **DHCP (Dynamic Host Configuration Protocol)**  | 67 (servidor), 68 (cliente) | UDP | Asignación automática de configuración IP.            |
definiciones de la tabla:
*   **HTTP (Hypertext Transfer Protocol):** Protocolo de transferencia de hipertexto para solicitar servicios web utilizando la dirección IP y el puerto 80.
*   **HTML (Hypertext Markup Language):** Lenguaje de marcado utilizado para codificar el contenido de las páginas web, indicando al navegador cómo formatear la página, qué gráficos y fuentes usar.
*   **HTTPS (HTTP Secure):** Versión segura de HTTP que utiliza protocolos de transporte seguros, enviando solicitudes al puerto 443.
*   **FTP (File Transfer Protocol):** Método sencillo para transferir archivos entre computadoras. Permite subir y descargar archivos, y administrar archivos de forma remota (eliminar, renombrar).
   *   Utiliza dos puertos para la comunicación:
       *   Puerto 21 (TCP): Conexión de control (solicitudes).
       *   Puerto 20 (TCP): Transferencia de datos.
   *   El software cliente FTP viene incorporado en los sistemas operativos y en la mayoría de los exploradores Web.
*   **Telnet:** Protocolo para emulación de terminales basados en texto a través de la red.
       *   Utiliza el puerto 23 (TCP).
       *   Permite ejecutar comandos remotamente como si estuviera conectado localmente.
       *   **Inseguro:** Transmite datos sin cifrar.
*   **SSH (Secure Shell):** Alternativa segura a Telnet que proporciona:
       *   Inicio de sesión remoto seguro.
       *   Autenticación más sólida.
       *   Transporte de datos cifrados.
       *   **Recomendación:** Usar SSH en lugar de Telnet siempre que sea posible. 
*   **SMTP (Simple Mail Transfer Protocol):**
       *   Utilizado para enviar correos electrónicos del cliente al servidor local y entre servidores.
       *   Puerto 25.
*   **POP3 (Post Office Protocol version 3):**
       *   Recibe y almacena mensajes para sus usuarios.
       *   Descarga los mensajes al cliente.
       *   Puerto 110.
*   **IMAP4 (Internet Message Access Protocol version 4):**
       *   Recibe y almacena los mensajes.
       *   Conserva los mensajes en el servidor a menos que el usuario los elimine.
       *   Puerto 143.
*   **SMS**La mensajería de texto (mensajería instantánea, mensajes directos, etc.) permite la comunicación en tiempo real a través de Internet.
*   **VoIP**La telefonía por Internet (VoIP) convierte señales de voz analógicas en datos digitales. Utiliza tecnología entre pares similar a la mensajería instantánea.
*   **PSTN**Para llamadas a teléfonos convencionales (PSTN) se requiere una puerta de enlace.
           
#### Configuración IP: Estática vs. Dinámica (DHCP)
*   **Estática:** Configuración manual de IP, máscara, gateway, DNS. Útil para servidores. Propenso a errores.
*   **Dinámica (DHCP):**
    *   Asigna automáticamente IP, máscara, gateway, DNS. Reduce errores y administración.
    *   Proceso **DORA**: 
        *   **DHCP Discover:** El cliente (recién conectado o reiniciado) difunde un mensaje (broadcast) a la dirección **255.255.255.255** para encontrar servidores DHCP.  Este mensaje indica que el cliente *busca* un servidor DHCP.
        *   **DHCP Offer:** El servidor DHCP responde con un **DHCP Offer**, *ofreciendo* una dirección IP disponible, máscara de subred, puerta de enlace predeterminada y tiempo de arrendamiento.
        *   **DHCP Request:** El cliente responde al servidor *solicitando* la dirección IP ofrecida.  El cliente difunde una `DHCPREQUEST` al servidor que le ha ofertado.
        *   **DHCP Acknowledge (ACK):** El servidor DHCP confirma la asignación de la dirección IP al cliente con un **DHCPACK**. Este mensaje indica que el cliente es capaz de usar la información IP proporcionada.
    *   **Arrendamiento (Lease):** Tiempo por el cual se asigna la IP.

#### Tipos de Conexión a Internet
*   **ISP (Proveedor de Servicios de Internet):** Empresa que provee acceso.
*   **DSL (Línea de Suscriptor Digital):** Internet por líneas telefónicas de cobre. (Otras: Cable, Fibra, Satélite, Celular).

#### Identificadores de Red (Nivel Aplicación/Configuración)
*   **SSID (Service Set Identifier):** Nombre de una red Wi-Fi.
*   **Servidor DNS (Domain Name System):**
* "Guía telefónica" de Internet: Nombre de dominio (google.com) -> Dirección IP (142.250.184.142).

---

## Herramientas de Solución de Problemas (CLI)

Comandos útiles para diagnosticar problemas de red.

### `ipconfig` (Windows) / `ifconfig` o `ip addr` (Linux/macOS)
Muestra la configuración IP del host (IP, máscara, gateway, DNS, MAC).
*   `ipconfig /all` (Windows): Información detallada.
*   `ipconfig /release` y `ipconfig /renew` (Windows): Para liberar y renovar IP de DHCP.

### `ping` [destino_IP_o_nombre]
Prueba conectividad de Capa 3 enviando ICMP Echo Request.
*   Indica si el host es alcanzable y latencia.
*   Falla si hay problemas de DNS (al usar nombre), enrutamiento, o firewall.

### `tracert` (Windows) / `traceroute` (Linux/macOS) [destino]
Muestra la ruta (saltos de routers) que toman los paquetes. Útil para ver dónde se pierde la conexión.

### `netstat`
Muestra conexiones de red activas (TCP/UDP), puertos en escucha, tabla de enrutamiento.
*   `netstat -ano` (Windows) / `netstat -tulnp` (Linux).

### `nslookup` [nombre_de_dominio]
Consulta servidores DNS para resolver nombres de dominio a IPs (y viceversa).

---
Espero que esta reorganización te sea mucho más útil. ¡Mucho éxito con tu estudio!