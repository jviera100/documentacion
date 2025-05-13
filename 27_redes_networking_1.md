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

*Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.*

## Principios Fundamentales del Diseño de Redes

Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.

### Pilares de una Red Confiable
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

## Capa 1: Física – La Transmisión de Bits

*   **Función Principal (OSI):** Transmitir el flujo de bits (0s y 1s) a través del medio físico. Define características eléctricas, mecánicas y funcionales (voltajes, tasas de bits, conectores, tipos de cable, radiofrecuencias).
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Bits.

### Medios de Red
El "camino" físico por el que viajan los datos.

| Medio                               | Tipo de Datos         | Distancia Máxima                          | Ancho de Banda/Velocidad | Funcionalidad                                                                            | Ejemplo de Uso                                                                     |
|-------------------------------------|-----------------------|-------------------------------------------|--------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Par Trenzado (Cat5/5e/6/6a)**     | Impulsos Eléctricos   | Hasta 100 metros (Ethernet)               | Moderado a Alto          | Conexión de dispositivos en redes Ethernet (LAN). Base de la mayoría de redes locales.     | Conectar una PC a un router en casa o en la oficina.                                 |
| **Coaxial**                         | Impulsos Eléctricos   | Media (depende de la frecuencia)          | Moderado                 | Transmisión de señales de TV, conexión satelital. Como cables de cobre de compañías de TV. | Conexión de un televisor a un servicio de cable, conexión satelital.                 |
| **Fibra Óptica**                    | Pulsos de Luz         | Varios kilómetros o más                   | Muy Alto                 | Transmisión de datos a alta velocidad, inmune a interferencia.                             | Redes troncales, conexión de ciudades, centros de datos, compañías telefónicas.      |
| **Inalámbrico**                     | Ondas Electromagnéticas | Variable (depende del estándar y entorno) | Bajo a Moderado          | Conexión de dispositivos sin cables mediante modulación de frecuencias.                    | Conexión de laptops, smartphones, tablets a redes Wi-Fi; Bluetooth; redes celulares. |

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
*   **Analogía:** Como un *carnet de identificación*.

### 🧾 Dirección MAC (Media Access Control)
Identificador *único y físico* de 48 bits (6 bytes hexadecimales, ej: `00:1A:2B:3C:4D:5E`) asignado a cada NIC por el fabricante.
*   Es la dirección "local" utilizada para entregar tramas dentro de la misma LAN.
*   **Analogía:** Como el número de serie de un dispositivo o el *RUT/DNI* impreso en un carnet. Es la dirección "local" para la entrega de tramas dentro de una LAN.

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

### 📡 Dispositivos Primarios de Capa 2
*   ***Switches (Conmutadores)*:**
    *   Toman decisiones de reenvío inteligentes basadas en direcciones MAC destino de las tramas.
    *   Crean una **tabla MAC** (o tabla CAM) que mapea direcciones MAC a puertos del switch.
    *   Cada puerto del switch es un **dominio de colisión** separado, reduciendo colisiones.
    *   Por defecto, un switch forma un único **dominio de difusión** (los broadcasts se inundan a todos los puertos excepto el de origen).
*   **Puntos de Acceso Inalámbricos (WAP o AP - Wireless Access Point):** Permiten a dispositivos Wi-Fi conectarse a una red cableada. Actúan como un bridge entre el medio inalámbrico y el cableado.
*   **Bridges (Puentes):** Predecesores de los switches, conectaban segmentos de red. Menos eficientes.
*   **Routers:** Conectan la LAN con otras redes (como Internet) y enrutan el tráfico entre ellas. Un tipo avanzado es el ISR (Integrated Services Router), que incorpora funciones adicionales como seguridad (firewall, VPN) y voz (VoIP). *No* propagan difusiones, limitando el dominio.
*   **Cables y Tarjetas de Red (NIC):** Permiten la conexión física de los dispositivos a la LAN mediante Ethernet o fibra óptica.

### 🌐 Tipos de Redes por Alcance (Predominantemente Capa 1 y 2)

| Tipo de Red (General)        | Descripción                                                                    | Cobertura Típica      | Ejemplo                                               | Tecnologías Comunes        |
| :--------------------------- | :----------------------------------------------------------------------------- | :-------------------- | :---------------------------------------------------- | :------------------------- |
| **PAN (Personal Area Network)** | Conexión de dispositivos personales muy cercanos.                              | Pocos metros          | Auriculares Bluetooth con teléfono (WPAN)             | Bluetooth, Zigbee (WPAN)   |
| **LAN (Local Area Network)**   | Red en un área limitada (casa, oficina, edificio).                             | Edificio              | Red de oficina con cables Ethernet (LAN) o Wi-Fi (WLAN) | Ethernet, Wi-Fi (WLAN)     |
| **MAN (Metropolitan Area Network)** | Interconecta LANs en una ciudad o área metropolitana.                        | Ciudad                | Red municipal conectando edificios                    | Fibra óptica, WiMAX (WMAN) |
| **WAN (Wide Area Network)**    | Cubre áreas extensas (países, continentes). Internet es una WAN.             | País, Mundo           | Red corporativa global, Internet                      | MPLS, Satélite, 4G/5G (WWAN)|

*   **W** delante de PAN, LAN, MAN, WAN (ej. **WLAN**) indica que la tecnología principal es inalámbrica (Wireless).
*   *(WMAN, WWAN son las versiones inalámbricas, usan tecnologías como WiMAX, 4G/5G).*
*   *(MAN y WAN implican principalmente enrutamiento de Capa 3, aunque usan tecnologías de Capa 1 y 2 para los enlaces).*

### 🔪 Segmentación en Capa 2: VLANs y Dominios de Difusión
*   **Dominio de Difusión:** Área de una red donde un broadcast enviado por un dispositivo es recibido por todos los demás. Los *switches (commutadores)*, por defecto, crean un solo dominio de difusión.
*   **Problemas con Dominios de Difusión Grandes:** Excesivo tráfico de broadcast puede ralentizar la red.
*   **VLANs (Virtual LANs):** Permiten segmentar lógicamente una red física (un switch) en múltiples dominios de difusión independientes.
    *   El tráfico entre VLANs diferentes requiere un dispositivo de Capa 3 (router o switch multicapa) para ser enrutado.
    *   Mejoran la seguridad, organización y gestión del tráfico.

### 🔹 VLAN vs SSID adicional: la diferencia importante es que VLAN puede dividir el trafico.

| Característica             | SSID Adicional                                       | VLAN (Virtual LAN)                                                  |
|---------------------------|------------------------------------------------------|----------------------------------------------------------------------|
| **Nivel técnico**         | Solo cambia el nombre/red Wi-Fi visible              | Crea una red lógica separada a nivel de capa 2 (switch)             |
| **Aislamiento real**      | Depende del router: algunos no aíslan                | Aislamiento fuerte si el switch/router lo impone                    |
| **Tráfico separado**      | Comparten red IP, gateway y **ancho de banda**       | Pueden tener **IP, reglas, gateways y ancho de banda separados**    |
| **Visibilidad de equipos**| Pueden verse si están en misma subred IP             | No se ven salvo que tú crees una ruta entre VLANs                   |
| **Control de tráfico (QoS)**| No (todos comparten el canal)                     | Sí (puedes priorizar o limitar por VLAN)                            |
| **Propósito típico**      | Organizar redes Wi-Fi por nombre o perfil            | Separar tráfico por seguridad, prioridad, rendimiento o control     |
| **Hardware especial**     | No                                                   | Sí (router/switch que soporte VLANs y 802.1Q)                        |

✅ **Conclusión:** Un SSID adicional es solo otra entrada a la misma red. Una VLAN es una red realmente separada y controlable dentro del mismo equipo o infraestructura.

### 🗣️ Tipos de Comunicación (Direccionamiento) en Capa 2
| Tipo       | Dirigido a...                              | MAC Destino Ejemplo            |
|------------|--------------------------------------------|--------------------------------|
| **Unicast**  | Una única NIC específica en la LAN.        | `00:1A:2B:3C:4D:5E`            |
| **Multicast**| Un grupo de NICs en la LAN.                | `01:00:5E:xx:xx:xx` (para IPv4 multicast) |
| **Broadcast**| Todas las NICs en el dominio de difusión.  | `FF:FF:FF:FF:FF:FF`            |

*(Los routers NO reenvían broadcasts por defecto).*

## Capa 3: Red – Direccionamiento Lógico y Enrutamiento Global

*   **Función Principal (OSI):** Proporcionar direccionamiento lógico único (principalmente *IP - Internet Protocol*) a los dispositivos en la internetwork y determinar la mejor ruta (**enrutamiento**) para los **paquetes** de datos a través de múltiples redes interconectadas.
*   **Equivalente TCP/IP:** Capa de Internet.
*   **PDU (Protocol Data Unit):** Paquetes.

### 📍 Direccionamiento IP (capa 3)
#### Dirección IPv4 (32 bits)
Una **Dirección IP (Internet Protocol)** es una etiqueta numérica única asignada a cada *dispositivo (host)* conectado a una red informática que utiliza el Protocolo de Internet para la comunicación. En su versión 4 (IPv4), esta dirección:
*   Es una dirección lógica de 32 bits, agrupada en cuatro octetos (bloques de 8 bits).
*   Usualmente se representa en notación decimal separada por puntos.
*   **Ejemplo:** 
*   - Binario: `11010001101001011100100000000001`
*   - Octetos: `11010001.10100101.11001000.00000001`
*   - Decimal con puntos: `209.165.200.1`
*   Cada paquete IP contiene una dirección IP de origen y una de destino para su correcto enrutamiento.

### 🔍 Desglosando una Dirección IP con su Máscara de Subred: Ejemplo `192.168.1.50/24`

Para entender cómo una dirección *IP (Internet Protocol)* individual se relaciona con su red local (LAN) y cómo se identifican los *dispositivos (hosts)* dentro de ella, utilizamos la **máscara de subred**.

Una **Máscara de Subred** es un número de 32 bits, expresado comúnmente en notación decimal con puntos (igual que una IPv4) o en notación CIDR (ej: `/24`). Su función es dividir una dirección IP en dos partes fundamentales: la **porción de RED** (que identifica la subred) y la **porción de HOST** (que identifica a un *dispositivo (host)* específico dentro de esa subred).

**Principios Clave de la Máscara de Subred:**

*   La **máscara de subred** (`255.255.255.0` o `/24`) es crucial:
    *   `255` indica que el octeto correspondiente de la IP es parte de la **porción de RED**.
    *   `0` indica que el octeto correspondiente de la IP es parte de la **porción de HOST**.
*   Los dispositivos con la misma **Porción de Red** (y por lo tanto, la misma **Dirección de Red**) pertenecen a la misma subred y pueden comunicarse directamente.
*   En cualquier subred, la **Dirección de Red** y la **Dirección de Broadcast** son reservadas y no se pueden asignar a dispositivos individuales.

## 🔁 Conversión CIDR a Máscara de Subred (IPv4)

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

#### 🎭 Máscara de Subred vs. Dirección MAC:
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

#### 🏡 Direcciones IPv4 Públicas vs. Privadas
*   **Públicas:** Únicas globalmente, enrutables en Internet. Asignadas por ISPs, LIRs o RIRs.
*   **Privadas:** Para uso en redes internas, son unicas solo en tu red (LANs). No son enrutables directamente en Internet y pueden repetirse en diferentes LANs. Se requiere NAT para que los dispositivos con IP privada accedan a Internet.
  
#### Rangos Comunes de IP Privada (RFC 1918)
Una vez que entendemos que existen IPs "Privadas" para uso interno, es útil conocer cuáles son estos rangos de direcciones privadas estándar:

| Rango de IP Privada             | Máscara de Subred (Bloque Completo) | Uso Típico / Implementación Común                                                                                                |
|---------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `10.0.0.0` – `10.255.255.255`   | `255.0.0.0` (`/8`)                  | Empresas grandes (el bloque `/8` se subdivide en múltiples subredes más pequeñas).                                                  |
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` (`/12`)                 | Empresas medianas (el bloque `/12` se subdivide en subredes).                                                                    |
| `192.168.0.0` – `192.168.255.255`| `255.255.0.0` (`/16`)                 | **Hogares / Pequeñas Empresas:** Comúnmente se utiliza una subred `/24` de este bloque (ej: `192.168.1.0/24`, con 254 hosts usables). |

*Nota: En cada subred creada, 2 IPs no son usables por dispositivos (hosts): la Dirección de Red y la Dirección de Broadcast.*

### 3. Conexión al Mundo Exterior: El Router (enrutador) y NAT (Network Address Translation). Entre Capa 3 y Capa 4 (principalmente Capa 3 Red (Network))

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

#### ⚙️ Direcciones IPv4 Especiales
*   **Loopback:** `127.0.0.0/8` (comúnmente `127.0.0.1`). Se usa para probar la pila TCP/IP del propio host.
*   **Link-Local (APIPA - Automatic Private IP Addressing):** `169.254.0.0/16`. Autoasignada por sistemas operativos (como Windows) si no se puede obtener una dirección IP de un servidor DHCP(capa 7). Permite comunicación limitada en la red local.
*   **Experimental (TEST-NET):** `192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24` (reservadas para documentación y ejemplos).
*   **Direcciones Reservadas (IANA):** Incluye rangos para multidifusión (`224.0.0.0/4`), futuro uso (`240.0.0.0/4`).

#### 📜 Clases de Direcciones IPv4 (Histórico)
Sistema original de asignación, obsoleto y reemplazado por **CIDR (Classless Inter-Domain Routing)** que permite máscaras de subred de longitud variable (VLSM) para un uso más eficiente del espacio de direcciones.

| Clase | Rango de IP                         | Prefijo CIDR | Nº *dispositivos (hosts)* aprox. | Uso Principal                             |
|-------|-------------------------------------|--------------|------------------|-------------------------------------------|
| A     | 0.0.0.0 – 127.255.255.255           | /8           | +16 millones     | Redes muy grandes (Gobiernos, ISP, etc.)  |
| B     | 128.0.0.0 – 191.255.255.255         | /16          | ~65 mil          | Redes medianas y grandes                  |
| C     | 192.0.0.0 – 223.255.255.255         | /24          | 254              | Redes pequeñas (LANs, oficinas, etc.)     |
| D     | 224.0.0.0 – 239.255.255.255         | —            | —                | 🟢 Multidifusión (Multicast)              |
| E     | 240.0.0.0 – 255.255.255.255         | —            | —                | Reservado para pruebas/experimentos       |

#### 🌐 Asignación de Direcciones IP
Jerarquía global:
*   **IANA (Internet Assigned Numbers Authority)** -> da bloques de IPs a los **RIRs (Regional Internet Registries)** (LACNIC, ARIN, etc.) -> quienes las asignan a los **ISPs (Internet Service Providers)** y grandes organizaciones → Usuarios finales.
    
    **Los cinco RIRs son:**
    *   **AfriNIC:** Para África.
    *   **APNIC:** Para Asia-Pacífico.
    *   **ARIN:** Para Norteamérica.
    *   **LACNIC:** Para Latinoamérica y el Caribe.
    *   **RIPE NCC:** Para Europa, Oriente Medio y partes de Asia Central.
  
*   **ISPs (Internet Service Providers) y LIRs (Local Internet Registries):** Obtienen bloques de IPs de los RIRs y los asignan a organizaciones y usuarios finales.
  
#### 🚀 Dirección IPv6 (128 bits)
Diseñada para suceder a IPv4 debido al agotamiento de direcciones públicas IPv4.
*   **Formato:** 8 grupos (hextetos) de 4 dígitos hexadecimales, separados por dos puntos (`:`).
    *   Ej: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Reglas de Abreviación:**
    1.  **Omitir Ceros Iniciales:** En cualquier hexteto, los ceros a la izquierda se pueden omitir (ej: `0db8` → `db8`; `000a` → `a`). Un hexteto de `0000` se puede escribir como `0`.
    2.  **Comprimir Secuencia de Ceros:** Una *única* secuencia contigua de hextetos que sean todos cero puede reemplazarse por dos puntos dobles (`::`). *Esta regla solo puede aplicarse una vez por dirección*.
        *   Ej: `2001:0db8:0000:0000:0000:ff00:0042:8329` → `2001:db8::ff00:42:8329`

### ⚙️ Dispositivos de Capa 3: Routers (Enrutadores)
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

### 🗺️ Tabla de Enrutamiento (memoria)
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

### 📋 Ejemplo de Tabla de Enrutamiento

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

### 🏢 Diseño de Red Jerárquico

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

### 🤝 ARP Resolución de Direcciones IP a MAC (Interacción Capa 3 - Capa 2 Enlace de datos (Data Link))
Cuando un dispositivo necesita enviar un paquete:
1.  **Destino en la misma red local:**
    *   El dispositivo conoce la IP de destino. Necesita la dirección MAC de destino para crear la trama de Capa 2.
    *   Usa **ARP (Address Resolution Protocol)** para IPv4 o **NDP (Neighbor Discovery Protocol)** para IPv6.
    *   **Proceso ARP:**
        1.  **ARP Request (Broadcast):** El emisor envía un mensaje a toda la LAN: "¿Quién tiene la dirección IP [IP_Destino]? Por favor, envíame tu dirección MAC." (MAC destino de la trama: `FF:FF:FF:FF:FF:FF`).
        2.  **ARP Reply (Unicast):** El dispositivo con [IP_Destino] responde directamente al emisor: "Yo tengo [IP_Destino], mi dirección MAC es [MAC_Destino]."
        3.  El emisor almacena esta correspondencia IP-MAC en su **tabla ARP (o caché ARP)** para uso futuro.
2.  **Destino en una red remota:**
    *   El dispositivo envía el paquete a la dirección MAC de su *Puerta de Enlace Predeterminada (Default Gateway)* (el router local).
    *   El router, al recibir el paquete, consultará su tabla de enrutamiento y repetirá un proceso similar para encontrar la MAC del siguiente salto o del destino final si está directamente conectado.

**Importante: Diferenciar ARP/NDP de otros protocolos:**
*   **ARP/NDP:** Descubren la dirección MAC asociada a una IP *dentro de la misma red local*. (Interacción Capa 3 - Capa 2 Enlace de datos (Data Link))
*   **NAT (Network Address Translation):** Traduce IPs privadas a públicas (y viceversa) en el router frontera, para comunicarse afuera red WAN. Entre Capa 3 y Capa 4 (principalmente Capa 3 Red (Network))
*   **DHCP (Dynamic Host Configuration Protocol):** Asigna dinámicamente direcciones IP privadas e IP publicas y otra configuración de red a los *dispositivos (hosts)* para comunicarse en red interna LAN (Dirección IP, Máscara de subred, Gateway predeterminado y Servidor DNS). En capa 7.
*   **PDU (Protocol Data Units):** Nombre genérico para la unidad de datos en cada capa del modelo OSI y cada capa añade su propia cabecera al pasar la información hacia abajo: (Bits en L1, Tramas(frames) en L2, Paquetes en L3, Segmentos/Datagramas en L4, Datos en L5-L7).

| Protocolo/Mensaje        | Capa 3 Destino (IP) | Capa 2 Destino (MAC) | Propósito Principal                                                                 |
|-------------------------|---------------------|----------------------|-------------------------------------------------------------------------------------|
| **ARP Request** | IP de destino a resolver | `FF:FF:FF:FF:FF:FF`   | Preguntar a todos en la LAN por la MAC asociada a una IP específica.               |
| **DHCP Discover (Inicial)** | `255.255.255.255`   | `FF:FF:FF:FF:FF:FF`   | Buscar servidores DHCP disponibles en la LAN para obtener una configuración IP. |

## Capa 4: Transporte – Comunicación Confiable o Rápida Extremo a Extremo

*   **Función Principal (OSI):** Proporcionar comunicación lógica directa y segmentación de datos entre *procesos de aplicación* en *dispositivos (hosts)* diferentes. Ofrece servicios de transporte fiables y orientados a conexión (TCP) o servicios rápidos y no fiables sin conexión (UDP). Maneja el control de flujo y la multiplexación de conversaciones usando números de puerto.
*   **Equivalente TCP/IP:** Capa de Transporte.
*   **PDU (Protocol Data Unit):** Segmentos (TCP), Datagramas (UDP).

### 🚚 TCP (Transmission Control Protocol) vs. UDP (User Datagram Protocol) capa 4.

| Característica   | TCP                                     | UDP                                     |
| :--------------- | :-------------------------------------- | :-------------------------------------- |
| **Confiabilidad**| Alta (ACKs, NACKs, retransmisiones, secuenciación) | Baja ("mejor esfuerzo", sin confirmación) |
| **Conexión**     | Orientado a conexión (Three-way handshake) | Sin conexión                            |
| **Velocidad**    | Más lento (por sobrecarga de control)   | Más rápido (menor sobrecarga)           |
| **Control Flujo**| Sí (evita saturación del receptor)      | No                                      |
| **Uso Típico**   | Web (HTTP/S), Email (SMTP), FTP, SSH    | Streaming (video/voz), DNS, DHCP, TFTP  |

### 🔢 Números de Puerto
Identificadores de 16 bits (0-65535) usados por TCP y UDP para diferenciar entre múltiples aplicaciones o procesos que se ejecutan en un host.
*   **Puerto de Origen:** Elegido dinámicamente por el host cliente (generalmente un número alto, >1023) para identificar de forma única su lado de la conversación.
*   **Puerto de Destino:** Usado por el cliente para indicar el servicio específico solicitado en el servidor (ej: puerto 80 para HTTP).
*   **Rangos de Puertos (administrados por IANA):**
    *   **Puertos Bien Conocidos (Well-Known Ports: 0-1023):** Reservados para servicios y aplicaciones estándar (HTTP: 80, HTTPS: 443, FTP: 21, SMTP: 25, DNS: 53).
    *   **Puertos Registrados (Registered Ports: 1024-49151):** Pueden ser registrados por desarrolladores de software para aplicaciones específicas.
    *   **Puertos Dinámicos/Privados/Efímeros (Dynamic/Private/Ephemeral Ports: 49152-65535):** Usados típicamente como puertos de origen temporales por los clientes.

## 🔌 Sockets y Pares de Sockets: Claves de la Comunicación en Red

**La Idea Esencial:** Para que tu computadora maneje múltiples conexiones de red (navegar, chatear) sin mezclar datos, usa "sockets".

### 1. ¿Qué es un Socket? (Un Punto Final de Comunicación)

Un **Socket** es la combinación de:
*   **`Dirección_IP`** (del dispositivo)
*   **`:`** (separador)
*   **`Número_de_Puerto`** (de la aplicación en ese dispositivo)

### 2. El Par de Sockets: La Conexión Única

Esto permite identificar de forma única cada conversación entre dos aplicaciones.

**Tu PC (Solicitante) pidiendo una Página Web al Servidor (Proveedor)**

| Rol en la Conexión     | Socket (`IP:Puerto`)        |
| :--------------------- | :-------------------------- |
| **Socket Solicitante** (Tu PC, navegador) | `192.168.1.5:1099`          |
| **Socket Proveedor**   (Servidor Web, HTTP) | `203.0.113.7:80`            |
| **Par de Sockets (Conexión Única)** | **(`192.168.1.5:1099` , `203.0.113.7:80`)** |

## Capas 5, 6 y 7: Sesión, Presentación y Aplicación – La interfaz *(API - Application Programming Interface)* con el Usuario y los Servicios de Red

En el modelo TCP/IP, las funciones de las capas de Sesión, Presentación y Aplicación del modelo OSI se consolidan en una única **Capa de Aplicación**.

*   **Capa 5 (Sesión OSI):**
    *   **Función:** Establece, gestiona y finaliza las "conversaciones" (sesiones) entre aplicaciones en diferentes *dispositivos (hosts)*. Mantiene el diálogo y sincroniza la comunicación.
*   **Capa 6 (Presentación OSI):**
    *   **Función:** Asegura que los datos intercambiados sean comprensibles para las aplicaciones. Se encarga de la sintaxis y semántica de la información, incluyendo:
        *   **Formato de Datos y Codificación de Caracteres:** (ej: ASCII, EBCDIC, Unicode).
        *   **Cifrado y Descifrado:** Para la seguridad (ej: SSL/TLS opera conceptualmente aquí, aunque su implementación a menudo se extiende a otras capas).
        *   **Compresión y Descompresión:** Para reducir el tamaño de los datos.
*   **Capa 7 (Aplicación OSI) / Capa de Aplicación (TCP/IP):**
    *   **Función:** Proporciona la interfaz *(API - Application Programming Interface)* directa entre las aplicaciones que usan los usuarios (o procesos de sistema) y los servicios de red subyacentes. Define los protocolos que las aplicaciones usan para intercambiar datos.
*   **PDU (Protocol Data Unit) en estas capas:** Generalmente se refiere como "Datos" o "Mensaje".

### 🌐 Servicios y Protocolos de Aplicación Comunes

Un **protocolo** es un conjunto de reglas y convenciones que definen cómo se formatea, transmite y recibe la información entre dispositivos en una red. Actúa como una "regla de traducción del mensaje" para que diferentes sistemas puedan entenderse. Cada servicio de aplicación utiliza uno o más protocolos y, típicamente, escucha o envía mensajes a través de un **puerto** específico, que es como una "dirección" dentro de un dispositivo donde llega un mensaje destinado a una aplicación particular.

| Protocolo                                | Puerto(s) Típicos | Transporte Usado | Descripción Detallada                                                                                                                               |
|------------------------------------------|-------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **DNS (Domain Name System)**             | 53                | UDP (consultas), TCP (transferencias de zona) | **Traduce nombres de dominio** legibles por humanos (ej: www.google.com) a direcciones IP numéricas (ej: 172.217.160.142) y viceversa. Esencial para la navegación web y el acceso a servicios. Las consultas suelen usar UDP por su rapidez; las transferencias de zona (entre servidores DNS) usan TCP por su fiabilidad para grandes volúmenes de datos. |
| **HTTP (Hypertext Transfer Protocol)**     | 80                | TCP               | Protocolo fundamental para la **World Wide Web**. Permite la solicitud y transferencia de recursos como documentos **HTML (Hypertext Markup Language)**, imágenes, y otros archivos entre un cliente (navegador) y un servidor web. Es un protocolo sin estado. |
| **HTTPS (HTTP Secure)**                  | 443               | TCP               | Versión segura de HTTP. **Cifra la comunicación** entre el cliente y el servidor utilizando TLS (Transport Layer Security) o su predecesor SSL (Secure Sockets Layer), protegiendo la confidencialidad e integridad de los datos transferidos (ej: datos bancarios, contraseñas). Transfiere contenido web, incluyendo HTML. |
| **FTP (File Transfer Protocol)**         | 21 (control), 20 (datos) | TCP            | Diseñado para la **transferencia de archivos** entre un cliente y un servidor. Utiliza dos conexiones TCP: una para comandos y control de trafico (puerto 21) y otra para la transferencia de datos (puerto 20 en modo activo, o un puerto dinámico en modo pasivo para carga y descarga de archivos). |
| **TFTP (Trivial File Transfer Protocol)**| 69                | UDP               | Versión muy **simplificada de FTP**. No ofrece autenticación ni muchas de las funciones avanzadas de FTP. Usa UDP, lo que lo hace rápido pero menos fiable. Comúnmente usado para arrancar dispositivos de red o transferir archivos de configuración/firmware en redes locales. |
| **SMTP (Simple Mail Transfer Protocol)**   | 25 (tradicional), 587 (con STARTTLS), 465 (SMTPS obsoleto) | TCP            | Protocolo estándar para el **envío de correo electrónico**. Se utiliza para transferir mensajes desde un cliente de correo a un servidor de correo, y también entre servidores de correo. Es un protocolo de "empuje" (push). |
| **POP3 (Post Office Protocol v3)**       | 110 (tradicional), 995 (POP3S) | TCP               | Utilizado para **recuperar correo electrónico** de un servidor. Generalmente, los mensajes se descargan al dispositivo del cliente y se eliminan del servidor (aunque puede configurarse para mantenerlos). Menos flexible para acceso desde múltiples dispositivos. |
| **IMAP4 (Internet Message Access Protocol v4)**| 143 (tradicional), 993 (IMAPS) | TCP               | Permite **recuperar y gestionar correo electrónico** directamente en el servidor. Los mensajes se mantienen en el servidor, permitiendo la sincronización y el acceso desde múltiples clientes/dispositivos. Ofrece más funcionalidades que POP3 (ej: gestión de carpetas en el servidor). |
| **Telnet**                               | 23                | TCP               | Protocolo de **emulación de terminal remoto**. Permite acceder a la línea de comandos de un dispositivo remoto. Es **inseguro** porque toda la comunicación, incluidas las credenciales de acceso, se transmite en texto plano. Ha sido mayormente reemplazado por SSH. |
| **SSH (Secure Shell)**                   | 22                | TCP               | Protocolo **seguro para acceso remoto, emula terminales**, transferencia de archivos (SFTP, SCP) y tunelización de otros protocolos. Cifra toda la sesión, protegiendo contra escuchas y manipulación. Es el reemplazo estándar de Telnet. |
| **DHCP (Dynamic Host Configuration Protocol)**| 67 (servidor), 68 (cliente) | UDP    | **Asigna automáticamente direcciones IP** y otra información de configuración de red (máscara de subred, puerta de enlace, servidores DNS) a los dispositivos cliente en una red. Simplifica la administración de direcciones IP. |
| **SNMP (Simple Network Management Protocol)**| 161 (agente), 162 (trap) | UDP               | Utilizado para la **monitorización y gestión de dispositivos de red** (routers, switches, servidores, impresoras). Permite a los administradores consultar el estado de los dispositivos, recibir alertas (traps) y, en algunos casos, modificar configuraciones. |

**Más Detalles sobre Tecnologías Relacionadas:**
*   **VoIP (Voice over IP):** Es una familia de tecnologías y protocolos que permiten la transmisión de **voz sobre redes IP**. Protocolos clave incluyen:
    *   **SIP (Session Initiation Protocol):** Para establecer, modificar y terminar sesiones de comunicación (ej: llamadas de voz o video). Puerto 5060/5061 (TCP/UDP).
    *   **RTP (Real-time Transport Protocol):** Para transportar los datos de audio y video en tiempo real. Usa puertos UDP dinámicos.
*   **SMS (Short Message Service):** Aunque fundamentalmente es un servicio de telefonía móvil, su infraestructura puede interactuar con redes IP a través de pasarelas SMS (SMS gateways) para enviar/recibir mensajes desde aplicaciones basadas en internet.
*   **PSTN (Public Switched Telephone Network):** Es la red telefónica conmutada pública tradicional. Las *Puertas de Enlace (Gateways)* VoIP-PSTN son dispositivos que permiten la interconexión y las llamadas entre redes VoIP y la PSTN.

**Herramientas para Pruebas y Análisis de Protocolos:**
Existen aplicaciones que implementan estos protocolos, permitiendo interactuar con servicios de red y analizar su comportamiento.
*   **FileZilla:** Popular cliente gráfico (GUI) que implementa los protocolos FTP y SFTP (SSH File Transfer Protocol). Permite a los usuarios conectarse a servidores FTP/SFTP para subir, descargar y gestionar archivos y directorios de forma visual e interactiva, facilitando la transferencia de archivos.
*   **Tera Term:** Aplicación de emulación de terminal que soporta Telnet y SSH, entre otros. Facilita el acceso remoto seguro (vía SSH) o inseguro (vía Telnet) a la línea de comandos de servidores y dispositivos de red para configuración, gestión y monitorización.

Al utilizar estas herramientas, se puede observar el comportamiento del protocolo en acción. Por ejemplo, analizando el tráfico de red con herramientas como **Wireshark** mientras se usa FileZilla, se pueden ver los comandos FTP (puerto 21) y la transferencia de datos. En entornos de aprendizaje como **Packet Tracer**, se pueden simular estas interacciones, ayudando a comprender cómo se establece la comunicación, cómo se traducen los mensajes según las reglas del protocolo y cómo se transportan a través de los puertos específicos. Estas aplicaciones y simuladores son cruciales para validar la correcta implementación y funcionamiento de los servicios de red, diagnosticar problemas y profundizar en la comprensión del transporte de datos.

### ⚙️ Configuración de Direcciones IP: Estática vs. Dinámica (DHCP) (capa 7)
Aunque DHCP usa UDP (Capa 4) y direcciones IP (Capa 3), su función es un servicio de aplicación para la configuración de *dispositivos (hosts)*(capa 7).
*   **Estática:** La dirección IP, máscara de subred, puerta de enlace predeterminada y servidores DNS se configuran manualmente en cada host.
    *   **Ventajas:** Control predecible (bueno para servidores, impresoras).
    *   **Desventajas:** Consume tiempo, propenso a errores de configuración, difícil de gestionar en redes grandes.
*   **Dinámica (usando DHCP):** Un servidor DHCP asigna automáticamente la configuración de red a los clientes.
    *   **Ventajas:** Simplifica la administración, reduce errores, permite la reutilización eficiente de direcciones IP.
    *   **Proceso DORA (Discover, Offer, Request, Acknowledge):**
        1.  **Discover (Cliente → Servidor, Broadcast):** Cliente busca un servidor DHCP.
        2.  **Offer (Servidor → Cliente, Unicast o Broadcast según cliente):** Servidor ofrece una configuración IP.
        3.  **Request (Cliente → Servidor, Broadcast):** Cliente solicita la configuración ofrecida.
        4.  **Acknowledge (Servidor → Cliente, Unicast o Broadcast según cliente):** Servidor DHCP confirma la asignación con un **DHCPACK** y el tiempo de **arrendamiento (lease)**.

### 🔗 Tipos de Conexión a Internet (Servicios)
Generalmente provistos por un **ISP (Proveedor de Servicios de Internet)**.
*   **DSL (Digital Subscriber Line):** Usa líneas telefónicas de cobre.
*   Otros: Cable Modem, Fibra Óptica (FTTH), Satélite, Celular (3G/4G/5G).

### 📡 Identificadores de Red Comunes (Configuración de Usuario)
*   **SSID (Service Set Identifier):** El nombre público de una red Wi-Fi, configurado en el Punto de Acceso.
*   **Servidor DNS:** La dirección IP del servidor que el host usará para resolver nombres de dominio. A menudo se obtiene vía DHCP (capa 7).
* "Guía telefónica" de Internet: Nombre de dominio (google.com) -> Dirección IP (142.250.184.142).

#### Caso de Uso Aplicacion capa 7: Servicios en la Nube (Cloud Computing)
Actualmente, muchas aplicaciones usan protocolos de esta capa para acceder a servicios de **Computación en la Nube** (recursos como servidores y software vía Internet). Los modelos comunes incluyen nubes **Públicas** (ej: AWS, Azure), **Privadas** (dedicadas a una organización) e **Híbridas** (combinación de ambas). La conectividad de red y los protocolos de aplicación son vitales para este acceso.

## Herramientas de Solución de Problemas de Red *(CLI - interfaz de Línea de Comandos)*

Estos comandos son esenciales para diagnosticar problemas de conectividad y configuración en diversas capas.

### `ipconfig` (Windows) / `ifconfig` o `ip addr` (Linux/macOS)
Muestra la configuración basica IP del host (IP, máscara, *Puerta de Enlace (Gateway)*).
*   `ipconfig /all` (Windows): Información detallada (muestra dirección MAC, servidores DNS, estado de DHCP, tiempo de lease).
*   `ipconfig /release` (libera la concesión DHCP actual).
*   `ipconfig /renew` (solicita una nueva concesión DHCP).

### `ping` `[destino_IP_o_nombre_de_host]`(diagnostico de conección)
Prueba la conectividad de Capa 3 (alcance IP) con un host destino enviando mensajes ICMP Echo Request y esperando ICMP Echo Reply.
*   **Salida Típica:** Indica si el destino respondió, tiempo de ida y vuelta (latencia), TTL.
    ```cmd
    C:\> ping www.google.com
    Haciendo ping a www.google.com [142.250.190.36] con 32 bytes de datos:
    Respuesta desde 142.250.190.36: bytes=32 tiempo=10ms TTL=118
    ```
*   **Diagnóstico:**
    *   Si `ping` a un nombre de host falla pero a su IP funciona -> Problema de resolución DNS.
    *   Si `ping` a la IP falla -> Problema de enrutamiento, firewall bloqueando ICMP, o el host destino no está disponible.
    *   Hacer `ping` a la puerta de enlace predeterminada puede ayudar a aislar si el problema es local o externo.

### `tracert` (Windows) / `traceroute` (Linux/macOS) `[destino_IP_o_nombre_de_host]`(diagnostico de latencia)
Muestra la ruta (la secuencia de routers o "saltos") que toman los paquetes para llegar al destino. Envía paquetes con TTL incremental.
*   Útil para identificar dónde se está perdiendo la conectividad o dónde hay alta latencia en la ruta.
    ```cmd
    C:\> tracert www.google.com
    Traza a la dirección www.google.com [142.250.190.36]
    sobre un máximo de 30 saltos:
      1    <1 ms    <1 ms    <1 ms  192.168.1.1
      2     8 ms     7 ms     8 ms  router.isp.example.com [ISP_ROUTER_IP]
      ...
     10    10 ms     9 ms    10 ms  dfw28s01-in-f4.1e100.net [142.250.190.36]
    Traza completa.
    ```

### `netstat`(monitoreo de conecciones activas)
Muestra información sobre conexiones de red activas, puertos en escucha, estadísticas de Ethernet, la tabla de enrutamiento IP, estadísticas de IPv4/IPv6, etc.
*   **Windows:**
    *   `netstat -a` (muestra todas las conexiones activas y puertos en escucha).
    *   `netstat -n` (muestra direcciones y números de puerto en formato numérico).
    *   `netstat -o` (muestra el ID del proceso propietario de cada conexión).
    *   `netstat -r` (muestra la tabla de enrutamiento, similar a `route print`).
    *   Combinado: `netstat -ano`
*   **Linux:**
    *   `netstat -tulnp` (muestra puertos TCP y UDP en escucha (`l`), sin resolver nombres (`n`), con el programa/PID (`p`)). (Nota: `netstat` puede estar obsoleto en algunas distros Linux, reemplazado por `ss`).
    *   `ss -tulnp` (alternativa moderna a `netstat`).

### `nslookup` `[nombre_de_dominio_o_IP]`(consulta a DNS nombre o IP de URI)
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
*   Puede usarse en modo interactivo para especificar servidores DNS a consultar, tipos de registros a buscar (A, MX, NS, CNAME, etc.).

---
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
