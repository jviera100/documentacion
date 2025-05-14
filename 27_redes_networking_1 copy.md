
## Ethernet y Direcciones MAC

1.  **Historia y Evolución de Ethernet:**
    *   **El Problema Original:** En los inicios (años 70), las redes eran un caos de protocolos propietarios (IBM, Xerox, HP, etc.). Los equipos de diferentes fabricantes no podían comunicarse, lo que limitaba enormemente la expansión y la flexibilidad.
    *   **La Solución (Estándares y el Triunfo de Ethernet):** Surgió la necesidad de estándares para la interoperabilidad. Ethernet, estandarizado principalmente bajo la especificación IEEE 802.3, se impuso como la tecnología dominante para redes de área local (LAN) cableadas. Su éxito se debe a su robustez, costo relativamente bajo y, crucialmente, su capacidad de evolucionar.

    **Escala de Tiempo Simplificada de la Evolución de Ethernet:**

    | Año/Periodo      | Estándar/Hito Clave                               | Descripción Breve / Velocidad / Medio Principal          |
    | :--------------- | :------------------------------------------------ | :------------------------------------------------------- |
    | Años 70          | Protocolos Propietarios                           | Incompatibilidad entre fabricantes.                      |
    | 1973             | Invención de Ethernet (Xerox)                     | Concepto inicial.                                        |
    | 1980             | DIX Standard (Ethernet II)                        | 10 Mbps sobre cable coaxial grueso.                      |
    | 1983             | IEEE 802.3 (10BASE5)                              | 10 Mbps sobre cable coaxial grueso ("Thicknet").         |
    | 1985             | IEEE 802.3a (10BASE2)                             | 10 Mbps sobre cable coaxial delgado ("Thinnet").         |
    | 1990             | IEEE 802.3i (10BASE-T)                            | **10 Mbps sobre par trenzado (UTP)** - ¡Gran adopción!   |
    | 1995             | IEEE 802.3u (Fast Ethernet: 100BASE-TX, etc.)     | **100 Mbps** sobre par trenzado y fibra.                 |
    | 1998-1999        | IEEE 802.3z/ab (Gigabit Ethernet: 1000BASE-X/T) | **1 Gbps** sobre fibra y par trenzado.                   |
    | 2002+            | IEEE 802.3ae/an/etc.                              | **10 Gbps (10GBASE-T/SR/LR...), 40 Gbps, 100 Gbps+** sobre fibra y par trenzado mejorado. Introducción de PoE (Power over Ethernet). |
    | 2016 - Presente  | IEEE 802.3bz (2.5GBASE-T, 5GBASE-T)             | 2.5 Gbps y 5 Gbps sobre cableado de par trenzado existente (Cat5e/Cat6). |

2.  **La Dirección MAC: Identidad Única en la Red Local:**
    *   Para que los dispositivos se comuniquen dentro de una misma red Ethernet (segmento de Capa 2), necesitan una dirección única a este nivel. Esta es la **dirección MAC (Media Access Control)**.
    *   Es una dirección **física de 48 bits (6 bytes)**, que viene "quemada" (grabada de fábrica) en la circuitería de cada tarjeta de interfaz de red (NIC).
    *   También se conoce como: dirección física, dirección Ethernet, o BIA (Burned-In Address).

3.  **Composición de la Dirección MAC: Entendiendo sus Partes**
    *   **OUI (Organizational Unique Identifier - Identificador Único Organizacional):** Es un código de **24 bits (3 bytes)** que el IEEE (Institute of Electrical and Electronics Engineers) asigna de forma única a cada fabricante de hardware de red. Funciona como un prefijo que identifica a la compañía que manufacturó el dispositivo de red (la NIC).
    *   Una dirección MAC se divide en dos partes principales:

    **Ejemplo de Descomposición de una Dirección MAC (Ej: `D4-BE-D9-13-63-00`):**

    | Parte de la MAC                                       | Bytes Hexadecimales | Descripción                                                                     | Responsable de Asignación |
    | :---------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------ | :------------------------ |
    | **OUI** (Identificador Único Organizacional)          | `D4-BE-D9`          | Los primeros 3 bytes. Identifican al **fabricante** de la tarjeta de red (NIC). | IEEE                      |
    | **Identificador Único de Interfaz** (ID de Dispositivo) | `13-63-00`          | Los últimos 3 bytes. Asignados por el **fabricante** a esa tarjeta específica.  | Fabricante (bajo su OUI)  |

    *   **Garantía de Unicidad Global:** La combinación del OUI (asignado centralmente por el IEEE al fabricante) y el identificador único de interfaz (asignado por el fabricante a cada una de sus tarjetas bajo ese OUI) asegura que cada dirección MAC sea, en teoría, globalmente única en el mundo.

4.  **¿Por Qué un Dispositivo Puede Tener Múltiples Direcciones MAC?**
    *   Un dispositivo (como una PC, laptop, smartphone) no tiene "una" dirección MAC. **Cada interfaz de red física o virtual** en ese dispositivo tiene su propia dirección MAC.
    *   **Ejemplos comunes:**
        *   Tu **tarjeta Ethernet cableada** (para el conector RJ45) tiene una MAC.
        *   Tu **tarjeta Wi-Fi** (inalámbrica) tiene *otra* MAC diferente.
        *   Si usas un **adaptador Bluetooth**, este también tiene su propia MAC.
        *   Interfaces de red virtual creadas por software de virtualización (como VMware o VirtualBox) o por VPNs también tendrán sus propias MACs.
    *   Por esto, al ejecutar `ipconfig /all` (en Windows) o `ifconfig` / `ip a` (en Linux/macOS), puedes ver varias "Direcciones físicas" listadas, cada una correspondiente a una interfaz de red distinta.

5.  **Uso Práctico: Identificar al Fabricante con el OUI:**
    *   Conociendo los primeros 3 bytes (el OUI) de una dirección MAC, puedes identificar al fabricante del dispositivo de red.
    *   Herramientas online como la que mencionaste de Wireshark (`https://www.wireshark.org/tools/oui-lookup.html`) permiten ingresar el OUI y obtener el nombre del fabricante registrado.
    *   Esto es útil para:
        *   Identificar el hardware en una red.
        *   Diagnósticos de red.
        *   Inventario de dispositivos.

# Síntesis Integrada del Módulo 4.2: Tramas de Ethernet y su Análisis con Wireshark

Este módulo es fundamental para entender cómo se estructura la información para su transmisión a través de redes Ethernet, la tecnología LAN cableada predominante. Se explora la encapsulación, las subcapas involucradas, la anatomía de una trama Ethernet y cómo herramientas como Wireshark nos permiten observar estos procesos.

## 1. Fundamentos de Ethernet y Encapsulación (Sección 4.2.1)

*   **Ethernet:** Tecnología de **Capa 1 (Física)** y **Capa 2 (Enlace de Datos)** del modelo OSI.
    *   Definida por los estándares **IEEE 802.2 (LLC)** y **IEEE 802.3 (MAC y Física)**.
    *   Base de la mayoría de las redes locales (LAN) cableadas (par trenzado, fibra óptica).
    *   Soporta velocidades desde 10 Mbps hasta más de 100 Gbps.
*   **Encapsulación:** Proceso de añadir información de control (encabezados/tráileres) a los datos de una capa superior. Ethernet encapsula los datos de Capa 3 (ej., paquete IP) para formar una **trama**.

## 2. Subcapas de Enlace de Datos (Sección 4.2.2): División de Tareas en Capa 2

La Capa de Enlace de Datos en Ethernet se divide en:

*   **Subcapa LLC (Logical Link Control - IEEE 802.2):**
    *   **Función:** Interfaz entre protocolos de Capa 3 (red) y la subcapa MAC.
    *   **Identificación de Protocolo:** Usa el campo **EtherType** en la trama Ethernet II para identificar el protocolo de Capa 3 encapsulado (IPv4, ARP, IPv6), permitiendo que múltiples protocolos de Capa 3 compartan la misma interfaz y medio.
    *   Implementada en **software** (controladores de red).

*   **Subcapa MAC (Media Access Control - IEEE 802.3 para Ethernet):**
    *   **Funciones:**
        1.  **Encapsulación de Datos:** Construye la trama Ethernet añadiendo **direcciones MAC** (origen/destino) y el **tráiler (FCS)**.
        2.  **Control de Acceso al Medio:** Gestiona cómo y cuándo los dispositivos transmiten.
    *   Implementada en **hardware** (NIC).
    *   *Nota: Existen otros estándares MAC para WLAN (802.11) y WPAN (802.15).*

## 3. Profundizando en la Subcapa MAC de Ethernet (Sección 4.2.3)

*   **Encapsulación MAC:**
    *   **Trama de Ethernet:** Estructura interna de la PDU de Capa 2.
    *   **Direccionamiento Ethernet:** Direcciones MAC de 48 bits para entrega *dentro de la misma LAN*.
    *   **Detección de Errores Ethernet:** Mediante el **tráiler FCS**.
        *   **Definición de Tráiler:** Información de control añadida **al final** de una PDU. En Ethernet, es el FCS para detección de errores.
        *   **Ejemplo de Tráiler (FCS):** Valor de 4 bytes (CRC) calculado sobre la trama. El receptor lo verifica.

*   **Acceso al Medio MAC:**
    *   **Ethernet Heredado (Half-Duplex, hubs/bus):** Usaba **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**.
        *   Escuchar antes de transmitir, detectar colisiones, esperar y reintentar.
    *   **Ethernet Moderno (Full-Duplex, switches):** Conexiones punto a punto, transmisión y recepción simultáneas. CSMA/CD no es necesario en estos enlaces.

## 4. Anatomía de una Trama Ethernet II (Sección 4.2.4)

*   **Definición de Trama (Frame):** Unidad de datos de Capa 2 (Enlace de Datos), la "envoltura" que transporta un paquete de Capa 3 en la LAN.
*   **Tamaño:** Mínimo 64 bytes, máximo 1518 bytes (desde MAC Destino hasta FCS).
    *   Menos de 64 bytes: "Runt frame" (fragmento de colisión), descartada.
    *   Más de 1500 bytes de datos: "Jumbo frame".

*   **Componentes de una Trama Ethernet II:**

    | Campo                     | Longitud (Bytes) | Descripción y Función Clave                                                                                                                             |
    | :------------------------ | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Preámbulo**             | 7                | Patrón alternante de 1s y 0s (`1010...`) para **sincronización del reloj** del receptor.                                                                 |
    | **SFD (Start Frame Delimiter)** | 1                | `10101011`. El `11` final marca el fin de la sincronización y el inicio de la MAC Destino.                                                              |
    | **Dirección MAC de Destino** | 6                | Dirección física de 48 bits de la NIC receptora en la LAN.                                                                                               |
    | **Dirección MAC de Origen**  | 6                | Dirección física de 48 bits de la NIC emisora en la LAN.                                                                                                 |
    | **Tipo/Longitud (EtherType)** | 2                | Generalmente **EtherType** (si valor ≥ 1536). Indica el protocolo de Capa 3 encapsulado (ej: `0x0800`=IPv4, `0x0806`=ARP). Clave para la LLC.          |
    | **Datos (y Relleno/Pad)**   | 46 - 1500        | Contiene la PDU de Capa 3 (ej., paquete IP). Se añade **relleno (padding)** si es necesario para alcanzar el tamaño mínimo de trama (históricamente para CSMA/CD). |
    | **FCS (Frame Check Sequence)** | 4                | **Tráiler**. Valor CRC de 32 bits para **detección de errores** en la trama.                                                                           |

    *   **Ejemplo Visual de Trama (simplificado):**
        `[Preámbulo+SFD | MAC_Dest | MAC_Org | EtherType | DATOS (Paquete IP) | FCS]`

## 5. La Transición a Bits y la Identificación de 0s y 1s (Capa 1 - Física)

*   **Definición de Bits:** Unidad más básica (0 o 1). Toda la trama se convierte en una secuencia de bits.
*   **¿Cómo se sabe cuándo es un 1 y cuándo es un 0 en el medio físico?**
    Depende del **esquema de codificación de línea** (especificado por IEEE 802.3 para cada tipo de Ethernet):
    *   **Propósito:** Convertir bits lógicos en señales físicas interpretables y mantener la sincronización.
    *   **Ejemplos de esquemas:**
        *   **Cobre (Par Trenzado):**
            *   **Manchester Coding (10BASE-T):** Transición de voltaje en medio de cada bit (ayuda a la sincronización).
            *   **MLT-3 (100BASE-TX):** Tres niveles de voltaje.
            *   **PAM (Gigabit Ethernet y superiores):** Múltiples niveles de amplitud de pulso para codificar varios bits por símbolo.
        *   **Fibra Óptica:** Presencia/ausencia de luz (simplificado), o esquemas como 8B/10B.
    *   **Sincronización:** El **Preámbulo** permite al receptor "enganchar" su reloj al ritmo de la señal entrante antes de que lleguen los datos de la trama. El **SFD** marca el fin de esta sincronización.
-------------------------------------------------
# Direcciones MAC Ethernet: Identidad en la Red Local

La **Capa de Enlace de Datos** del modelo OSI (Capa 2) es responsable de la transferencia fiable de datos entre dos nodos directamente conectados en la misma red física (o segmento de red). Una de las funciones más críticas de esta capa es el **direccionamiento físico**, que en las redes Ethernet se realiza mediante **direcciones MAC (Media Access Control)**.

Para comprender las direcciones MAC, es fundamental recordar los sistemas numéricos:
*   **Binario (Base 2):** El lenguaje fundamental de las computadoras, usando solo 0 y 1. Las direcciones MAC son, en su núcleo, secuencias binarias.
*   **Hexadecimal (Base 16):** Usa dígitos 0-9 y letras A-F. Proporciona una representación compacta y legible por humanos de largas cadenas binarias. Un dígito hexadecimal representa 4 bits binarios.

## 1. ¿Qué es una Dirección MAC?

*   **Identificador Único:** Una dirección MAC es un identificador único asignado a la mayoría de las interfaces de red (NIC - Network Interface Card) para comunicaciones dentro de un segmento de red local.
*   **Formato Fundamental:** Es un valor **binario de 48 bits**.
*   **Representación Común (Hexadecimal):** Para facilitar su lectura y manejo, estos 48 bits se expresan comúnmente como **12 dígitos hexadecimales**.
    *   **Ejemplos de formato:** `00:07:E9:63:CE:53`, `00-07-E9-63-CE-53`, o `0007.E963.CE53`.
    *   Cada par de dígitos hexadecimales representa 8 bits (1 byte). Por ejemplo, `E9` (Hex) corresponde a `11101001` (Binario).

## 2. Estructura de una Dirección MAC

Los 48 bits de una dirección MAC se dividen lógicamente en dos partes principales:

*   **OUI (Organizationally Unique Identifier - Identificador Único Organizacional):**
    *   Corresponde a los primeros **24 bits** (los primeros 6 dígitos hexadecimales).
    *   Es asignado por el IEEE (Institute of Electrical and Electronics Engineers) a los fabricantes de hardware de red.
    *   Permite identificar al fabricante de la tarjeta de red. Por ejemplo, en `00:07:E9:63:CE:53`, el OUI `00:07:E9` indicaría un fabricante específico.

*   **Identificador Asignado por el Fabricante (Número de Serie de la NIC):**
    *   Corresponde a los últimos **24 bits** (los últimos 6 dígitos hexadecimales).
    *   Es asignado por el propio fabricante de manera que sea único para cada interfaz de red que produce dentro de su OUI.

Esta combinación asegura, en teoría, una dirección MAC globalmente única para cada dispositivo de red Ethernet.

## 3. Tipos de Direcciones MAC y su Uso en Ethernet

En Ethernet, se utilizan diferentes tipos de direcciones MAC para gestionar la comunicación en la Capa 2:

*   **Dirección MAC de Unidifusión (Unicast):**
    *   **Propósito:** Identifica una **única NIC destino** en la red local. Se utiliza cuando una trama de datos se envía desde un solo dispositivo transmisor a un solo dispositivo receptor específico.
    *   **Origen:** Esta es la dirección MAC "grabada" en la interfaz de red del dispositivo.
    *   **Comunicación:**
        *   La **dirección MAC de origen** en una trama Ethernet siempre es una dirección de unidifusión (la del remitente).
        *   La **dirección MAC de destino** es la dirección de unidifusión del receptor previsto.
    *   **Descubrimiento en Redes IP:** Para enviar datos a una dirección IP en la misma red local, un host necesita conocer la dirección MAC correspondiente. Este mapeo se realiza mediante:
        *   **ARP (Address Resolution Protocol)** para IPv4.
        *   **ND (Neighbor Discovery)** para IPv6.

*   **Dirección MAC de Difusión (Broadcast):**
    *   **Propósito:** Permite enviar una trama a **todos los dispositivos** conectados en el mismo segmento de red local (dominio de difusión).
    *   **Dirección Específica:** Siempre es `FF:FF:FF:FF:FF:FF` en hexadecimal (representando los 48 bits como '1').
    *   **Comportamiento del Switch:** Cuando un switch Ethernet recibe una trama con esta dirección MAC de destino, la reenvía (inunda o "floods") por todos sus puertos, excepto por el puerto por el que la recibió originalmente.
    *   **Límite del Router:** Los routers, por defecto, no reenvían difusiones de Capa 2 (ni de Capa 3) entre diferentes redes. Esto ayuda a contener el tráfico de difusión.
    *   **Ejemplos de Uso:**
        *   Solicitudes DHCP (cuando un dispositivo busca obtener una dirección IP).
        *   Solicitudes ARP (cuando un dispositivo necesita descubrir la MAC de otro dispositivo con una IP conocida en la red local).

*   **Dirección MAC de Multidifusión (Multicast):**
    *   **Propósito:** Permite enviar una trama a un **grupo específico de dispositivos** en la red local que han manifestado interés en recibir ese tipo de tráfico (se han "unido" a un grupo de multidifusión).
    *   **Direcciones Específicas (Rangos Reservados):**
        *   Para paquetes de multidifusión **IPv4** encapsulados: La dirección MAC de destino comienza con el prefijo OUI `01:00:5E`. Los 23 bits restantes de la dirección MAC se derivan de los 23 bits inferiores de la dirección IP de multidifusión IPv4 del grupo. (Ej: Si la IP multicast es `224.0.0.200`, parte de esta IP se mapea a la MAC multicast).
        *   Para paquetes de multidifusión **IPv6** encapsulados: La dirección MAC de destino comienza con el prefijo `33:33`. Los bits restantes se derivan de la dirección de multidifusión IPv6.
        *   Otros protocolos de Capa 2 (no IP) también usan direcciones MAC de multidifusión reservadas (ej: Spanning Tree Protocol - STP, Link Layer Discovery Protocol - LLDP).
    *   **Comportamiento del Switch:**
        *   Un switch básico podría tratar las tramas de multidifusión de forma similar a las de difusión, inundándolas.
        *   Switches más avanzados pueden implementar "snooping de multidifusión" (ej: IGMP Snooping). Esto permite al switch aprender qué puertos tienen dispositivos interesados en grupos de multidifusión específicos, reenviando las tramas de multidifusión solo a esos puertos relevantes, optimizando el ancho de banda.
    *   **Límite del Router:** Similar a la difusión, los routers no reenvían tráfico de multidifusión entre redes a menos que estén configurados explícitamente para ello con protocolos de enrutamiento de multidifusión (ej: PIM).
    *   **Ejemplos de Uso:**
        *   Streaming de video/audio a múltiples suscriptores simultáneamente.
        *   Actualizaciones de protocolos de enrutamiento entre routers vecinos.
        *   Juegos en red multijugador.

**Puntos Importantes sobre las Direcciones MAC:**

*   **Operación Local:** Las direcciones MAC son significativas y se utilizan para la entrega de tramas solo **dentro del mismo segmento de red local** o dominio de difusión.
*   **Reescritura en Routers:** Cuando un paquete IP debe pasar de una red a otra a través de un router, la trama Ethernet original (con sus MACs de origen y destino) se descarta en el router. El router luego crea una **nueva trama Ethernet** con nuevas direcciones MAC apropiadas para el siguiente salto (el siguiente segmento de red). La dirección MAC de origen será la del interfaz de salida del router, y la MAC de destino será la del siguiente router o del host final si está en esa red. Las direcciones IP originales dentro del paquete permanecen sin cambios durante este proceso.

# Funcionamiento de los Switches Ethernet: Dirigiendo el Tráfico en la Red Local

Una vez comprendidas las direcciones MAC, es crucial entender cómo los **switches Ethernet de Capa 2** utilizan estas direcciones para reenviar (o descartar) tramas de datos de manera eficiente dentro de una red local. A diferencia de los hubs Ethernet más antiguos (que simplemente repetían todas las señales a todos los puertos, causando congestión), los switches son dispositivos inteligentes que toman decisiones de reenvío basadas en las direcciones MAC.

## 1. Fundamentos del Switch Ethernet de Capa 2

*   **Toma de Decisiones en Capa 2:** Un switch Ethernet opera en la Capa 2 (Capa de Enlace de Datos) del modelo OSI. Sus decisiones de reenvío se basan **exclusivamente en las direcciones MAC Ethernet** contenidas en el encabezado de la trama.
*   **Indiferencia al Protocolo de Capa Superior:** El switch no inspecciona ni comprende los datos de la capa de red (Capa 3) encapsulados dentro de la trama, como un paquete IPv4, un mensaje ARP o un paquete IPv6. Su trabajo se limita a la entrega de la trama basada en las MACs.
*   **La Tabla de Direcciones MAC (Tabla MAC):** La inteligencia de un switch reside en su **tabla de direcciones MAC** (a veces llamada tabla CAM - Content Addressable Memory, aunque aquí usaremos "tabla de direcciones MAC"). Esta tabla es construida y mantenida dinámicamente por el switch y asocia las direcciones MAC de los dispositivos conectados con los puertos del switch a través de los cuales se puede llegar a ellos.
    *   Cuando un switch se enciende por primera vez, su tabla de direcciones MAC está vacía.

## 2. Proceso de Aprendizaje y Reenvío del Switch

Un switch realiza dos operaciones fundamentales con cada trama que recibe: aprendizaje de la MAC de origen y reenvío basado en la MAC de destino.

### A. Aprendizaje: Construcción de la Tabla de Direcciones MAC

*   **Examinar la Dirección MAC de Origen:** Cuando una trama ingresa a un puerto del switch, este examina la **dirección MAC de origen** de la trama y el **número de puerto** por el que ingresó.
*   **Poblar/Actualizar la Tabla:**
    1.  Si la dirección MAC de origen **no existe** en la tabla MAC, el switch la **agrega**, asociándola con el número del puerto de entrada.
    2.  Si la dirección MAC de origen **ya existe** en la tabla y está asociada al mismo puerto, el switch **actualiza el temporizador de envejecimiento** de esa entrada (por defecto, las entradas suelen mantenerse durante 5 minutos de inactividad antes de ser eliminadas, para asegurar que la tabla refleje el estado actual de la red).
    3.  Si la dirección MAC de origen ya existe pero está asociada a un **puerto diferente** (lo que podría indicar que el dispositivo se ha movido a otro puerto), el switch actualiza la entrada con el nuevo puerto.

    *Ejemplo de Aprendizaje:*
    *   PC-A (MAC `00-0A`) conectada al Puerto 1 envía una trama.
    *   El switch recibe la trama en el Puerto 1.
    *   Examina la MAC de origen (`00-0A`).
    *   Agrega la entrada `Puerto 1 -> 00-0A` a su tabla MAC.

### B. Reenvío: Toma de Decisiones Basada en la Dirección MAC de Destino

Una vez que el switch ha procesado la MAC de origen (y potencialmente actualizado su tabla), examina la **dirección MAC de destino** de la trama para decidir cómo reenviarla:

1.  **Destino Unicast Conocido (Filtrado de Tramas):**
    *   Si la dirección MAC de destino es una dirección de **unidifusión** y **existe una entrada** para esa MAC en la tabla, el switch **reenvía la trama únicamente por el puerto especificado** en la tabla MAC. Esto se conoce como "filtrado de tramas", ya que la trama no se envía a puertos innecesarios.

    *Ejemplo de Filtrado:*
    *   La tabla MAC ya contiene: `Puerto 4 -> 00-0D`.
    *   Llega una trama con MAC de destino `00-0D`.
    *   El switch reenvía la trama solo por el Puerto 4.

2.  **Destino Unicast Desconocido (Inundación o "Flooding"):**
    *   Si la dirección MAC de destino es una dirección de **unidifusión** pero **NO existe una entrada** para esa MAC en la tabla (es una "unidifusión desconocida"), el switch no sabe por qué puerto enviar la trama específicamente.
    *   En este caso, el switch **inunda ("floods") la trama, reenviándola por todos los puertos activos, excepto por el puerto por el cual ingresó la trama original.** Se espera que el dispositivo destino reciba la trama y, al responder, el switch aprenda su ubicación (MAC y puerto) a través de la MAC de origen de la respuesta.

    *Ejemplo de Inundación por Unidifusión Desconocida:*
    *   La tabla MAC solo tiene `Puerto 1 -> 00-0A`.
    *   Llega una trama desde el Puerto 1 con MAC de destino `00-0D` (MAC de PC-D, aún desconocida para el switch).
    *   El switch inunda la trama por los Puertos 2, 3 y 4. PC-D la recibirá. Cuando PC-D responda a PC-A, el switch aprenderá que `00-0D` está en el Puerto 4.

3.  **Destino Broadcast o Multicast:**
    *   Si la dirección MAC de destino es una dirección de **difusión (Broadcast)** (`FF:FF:FF:FF:FF:FF`) o una dirección de **multidifusión (Multicast)**, el switch, por defecto, **inunda la trama por todos los puertos activos, excepto por el puerto de entrada.**
        *   *Nota sobre Multicast:* Switches más avanzados pueden usar "snooping de multidifusión" (como IGMP Snooping) para aprender qué puertos realmente necesitan recibir cierto tráfico multicast y evitar inundaciones innecesarias.

4.  **Destino en el Mismo Puerto de Origen (Descarte Silencioso):**
    *   Si el switch determina (basándose en su tabla MAC) que la dirección MAC de destino está accesible a través del mismo puerto por el cual ingresó la trama, el switch **descarta la trama silenciosamente**. Esto ocurre comúnmente cuando hay un hub conectado a un puerto del switch y dos dispositivos en ese hub se comunican entre sí. El hub ya habrá enviado la trama al destino, y el switch no necesita reenviarla de vuelta al mismo segmento.

## 3. Consideraciones Adicionales

*   **Switches Conectados:** Un puerto de un switch puede tener muchas direcciones MAC asociadas si ese puerto está conectado a otro switch. El primer switch aprenderá las MACs de los dispositivos conectados al segundo switch a través de las tramas que pasen por el enlace entre switches. Cada switch mantiene su propia tabla MAC independiente.

*   **Envío a la Puerta de Enlace Predeterminada (Gateway):**
    *   Cuando un dispositivo necesita enviar datos a una dirección IP en una **red remota** (es decir, una red diferente a la suya), no puede enviar la trama Ethernet directamente al host de destino final.
    *   En su lugar, el dispositivo de origen encapsulará el paquete IP (que tiene la IP de origen del dispositivo y la IP de destino del host remoto) dentro de una trama Ethernet.
    *   La **dirección MAC de destino de esta trama Ethernet será la dirección MAC de su puerta de enlace predeterminada (generalmente la interfaz del router en su red local)**.
    *   El switch local reenviará esta trama al puerto donde está conectado el router, basándose en la MAC del router en su tabla MAC. El router luego se encargará de enrutar el paquete IP hacia la red de destino.

---
*(Aquí podrías mantener la sección "Actividad - Conmútelo" como un ejercicio práctico si la plataforma lo permite, o referenciarla como un tipo de ejercicio que el lector podría buscar o realizar para practicar estos conceptos).*
-----------------------------
21.5.1 ¿Qué Aprendí en este Módulo?

expand_less
Ethernet
No hay un protocolo oficial estándar para las redes locales pero, con el tiempo, una tecnología, Ethernet, se volvió más habitual que las demás. Los protocolos de Ethernet definen qué formato tienen los datos y cómo se transmiten por la red cableada. Los estándares de Ethernet especifican protocolos que funcionan en la capa 1 y en la capa 2 del modelo OSI. Ethernet se ha convertido en un estándar de facto, lo que significa que es la tecnología utilizada por casi todas las redes de área local cableadas.
El IEEE mantiene los estándares de red, incluidos los estándares de Ethernet e inalámbricos. A cada estándar de tecnología se le asigna un número que hace referencia al comité que es responsable de aprobar y mantener el estándar. El estándar 802.3 Ethernet ha mejorado con el tiempo.

Los conmutadores Ethernet pueden enviar una trama hacia todos los puertos (excepto el puerto desde el que se recibió). Cada host que recibe esta trama examina la dirección MAC de destino y la compara con su dirección MAC. Es la tarjeta NIC Ethernet la que examina y compara la dirección MAC. Si no coincide con la dirección MAC del host, se ignora el resto de la trama. Cuando se trata de una coincidencia, ese host recibe el resto de la trama y el mensaje que contiene.


expand_less
Tramas de Ethernet
Ethernet se define por los protocolos de capa de enlace de datos 802.2 y 802.3. Ethernet admite anchos de banda de 10 Mbps a 100 Gbps. Los protocolos EEE 802 LAN/MAN, incluido Ethernet, usan dos subcapas separadas de la capa de enlace de datos para operar: LLC y MAC.

Subcapa LLC - Esta subcapa IEEE 802.2 se comunica entre el software de red en las capas superiores y el hardware del dispositivo en las capas inferiores. Coloca en la trama información que identifica qué protocolo de capa de red se utiliza para la trama. Esta información permite que múltiples protocolos de Capa 3, como IPv4 e IPv6, utilicen la misma interfaz de red y medios.
Subcapa MAC - Esta subcapa (IEEE 802.3, 802.11 o 802.15, por ejemplo) se implementa en hardware y es responsable de la encapsulación de datos y el control de acceso a medios. Proporciona direccionamiento de capa de enlace de datos y está integrada con varias tecnologías de capa física. La encapsulación de datos incluye la trama de Ethernet, el direccionamiento de Ethernet y la detección de errores de Ethernet.
Las LAN Ethernet de hoy utilizan conmutadores que funcionan en dúplex completo. Las comunicaciones dúplex completo con conmutadores Ethernet no requieren control de acceso a través de CSMA/CD. El tamaño mínimo de la trama de Ethernet es de 64 bytes y el máximo esperado es de 1518 bytes. Los campos son Preámbulo y Delimitador de Inicio de Trama, Dirección MAC de Destino, Dirección MAC de Origen, Tipo/Longitud, Datos y FCS. Esto incluye todos los bytes desde el campo de dirección MAC de destino hasta el campo de secuencia de verificación de trama (FCS).


expand_less
Dirección MAC de Ethernet
Una dirección MAC Ethernet consta de un valor binario de 48 bits. Hexadecimal se utiliza para identificar una dirección Ethernet porque un solo dígito hexadecimal representa cuatro bits binarios. Por lo tanto, una dirección MAC Ethernet de 48 bits se puede expresar utilizando sólo 12 valores hexadecimales.

Una dirección MAC de unicast es la dirección única que se utiliza cuando se envía una trama desde un único dispositivo de transmisión a un único dispositivo de destino. El proceso que utiliza un host de origen para determinar la dirección MAC de destino asociada con una dirección IPv4 se conoce como Protocolo de Resolución de Direcciones (Address Resolution Protocol, ARP). El proceso que utiliza un host de origen para determinar la dirección MAC de destino asociada con una dirección IPv6 se conoce como Descubrimiento de Vecinos (Neighbor Discovery, ND)

Las características de una transmisión Ethernet son las siguientes:

Tiene una dirección MAC de destino de FF-FF-FF-FF-FF-FF en hexadecimal (48 unidades en binario).
Se inunda hacia todos los puertos del conmutador Ethernet excepto el puerto entrante.
No es reenviada por un enrutador.
Las características de una multicast Ethernet son las siguientes:

Hay una dirección MAC de destino 01-00-5E cuando los datos encapsulados son un paquete de multidifusión IPv4 y una dirección MAC de destino de 33-33 cuando los datos encapsulados son un paquete de multidifusión IPv6.
Hay otras direcciones MAC de destino de multidifusión reservadas para cuando los datos encapsulados no son IP, como STP y LLDP.
Se inundan todos los puertos del conmutador Ethernet excepto el puerto entrante, a menos que el conmutador esté configurado para la indagación de multidifusión.
No es reenviado por un enrutador, a menos que el enrutador esté configurado para enrutar paquetes de multidifusión.

expand_less
La Tabla de Direcciones MAC
Un conmutador Ethernet de capa 2 usa direcciones MAC de capa 2 para tomar decisiones de reenvío. Es completamente inconsciente de los datos (protocolo) que

---
## 4. Capa 2 OSI: Enlace de Datos – Comunicación en la Red Local <a name="capa2-enlace"></a>

<details>
  <summary>Ver/Ocultar Detalles de Capa 2: Enlace de Datos</summary>

### 4.1. Función Principal y PDU <a name="capa2-funcion"></a>  

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
Los 48 bits de una dirección MAC se dividen lógicamente en dos partes principales:

*   **OUI (Organizationally Unique Identifier - Identificador Único Organizacional):**
    *   Corresponde a los primeros **24 bits** (los primeros 6 dígitos hexadecimales).
    *   Es asignado por el IEEE (Institute of Electrical and Electronics Engineers) a los fabricantes de hardware de red.
    *   Permite identificar al fabricante de la tarjeta de red. Por ejemplo, en `00:07:E9:63:CE:53`, el OUI `00:07:E9` indicaría un fabricante específico.

*   **Identificador Asignado por el Fabricante (Número de Serie de la NIC):**
    *   Corresponde a los últimos **24 bits** (los últimos 6 dígitos hexadecimales).
    *   Es asignado por el propio fabricante de manera que sea único para cada interfaz de red que produce dentro de su OUI.

Esta combinación asegura, en teoría, una dirección MAC globalmente única para cada dispositivo de red Ethernet.

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
En Ethernet, se utilizan diferentes tipos de direcciones MAC para gestionar la comunicación en la Capa 2:

*   **Dirección MAC de Unidifusión (Unicast):**
    *   **Propósito:** Identifica una **única NIC destino** en la red local. Se utiliza cuando una trama de datos se envía desde un solo dispositivo transmisor a un solo dispositivo receptor específico.
    *   **Origen:** Esta es la dirección MAC "grabada" en la interfaz de red del dispositivo.
    *   **Comunicación:** La **dirección MAC de origen** en una trama Ethernet siempre es una dirección de unidifusión. La **dirección MAC de destino** es la dirección de unidifusión del receptor previsto.
    *   **Descubrimiento en Redes IP:** Para enviar datos a una dirección IP en la misma red local, un host usa **ARP (Address Resolution Protocol)** para IPv4 o **ND (Neighbor Discovery)** para IPv6 para encontrar la MAC asociada.

*   **Dirección MAC de Difusión (Broadcast):**
    *   **Propósito:** Permite enviar una trama a **todos los dispositivos** conectados en el mismo segmento de red local (dominio de difusión).
    *   **Dirección Específica:** Siempre es `FF:FF:FF:FF:FF:FF` en hexadecimal (representando los 48 bits como '1').
    *   **Comportamiento del Switch:** Cuando un switch Ethernet recibe una trama con esta dirección MAC de destino, la **inunda ("floods") por todos sus puertos**, excepto por el puerto por el que la recibió originalmente. Cada host que recibe la trama examina la MAC de destino; si es una difusión, la procesa.
    *   **Límite del Router:** Los routers, por defecto, **no reenvían difusiones de Capa 2** (ni de Capa 3) entre diferentes redes.
    *   **Ejemplos de Uso:** Solicitudes DHCP, solicitudes ARP.

*   **Dirección MAC de Multidifusión (Multicast):**
    *   **Propósito:** Permite enviar una trama a un **grupo específico de dispositivos** en la LAN que pertenecen al mismo grupo de multidifusión.
    *   **Direcciones Específicas (Rangos Reservados):**
        *   Para paquetes de multidifusión **IPv4** encapsulados: La dirección MAC de destino comienza con `01:00:5E`.
        *   Para paquetes de multidifusión **IPv6** encapsulados: La dirección MAC de destino comienza con `33:33`.
        *   Otros protocolos de Capa 2 (no IP) también usan direcciones MAC de multidifusión reservadas (ej: Spanning Tree Protocol - STP, Link Layer Discovery Protocol - LLDP).
    *   **Comportamiento del Switch:** Un switch simple podría inundar las tramas de multidifusión. Switches más avanzados pueden usar "snooping de multidifusión" (ej: IGMP Snooping) para reenviar las tramas solo a los puertos interesados.
    *   **Límite del Router:** No se reenvían por un router a menos que esté configurado para enrutar paquetes de multidifusión.
    *   **Ejemplos de Uso:** Streaming de video, protocolos de enrutamiento.

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

*   **VLAN vs. SSID Adicional (en un Punto de Acceso Wi-Fi):**
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

---
## 5. Capa 3 OSI: Red – Direccionamiento Lógico y Enrutamiento Global <a name="capa3-red"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 3: Red</summary>
  *(Tu contenido actual para Capa 3)*
</details>

---
## 6. Capa 4 OSI: Transporte – Comunicación Extremo a Extremo <a name="capa4-transporte"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 4: Transporte</summary>
  *(Tu contenido actual para Capa 4, incluyendo Sockets)*
</details>

---
## 7. Capas 5, 6 y 7 OSI: Sesión, Presentación y Aplicación <a name="capas567-aplicacion"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capas 5, 6 y 7: Aplicación</summary>
  *(Tu contenido actual para estas capas)*
</details>

---
## 8. Herramientas de Solución de Problemas de Red (CLI) <a name="herramientas-cli"></a> 
<details>
  <summary>Ver/Ocultar Herramientas CLI</summary>
  *(Tu contenido actual para Herramientas CLI)*
</details>

---
## 9. Fundamentos de Sistemas Numéricos <a name="sistemas-numericos"></a>
<details>
  <summary>Ver/Ocultar Sistemas Numéricos</summary>
  *(Tu contenido actual para Sistemas Numéricos)*
</details>

---