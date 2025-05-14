
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

## 6. Laboratorios de Wireshark: Observando la Teoría en Acción

## Información de Red Identificada y Preparación

**Datos de tu Red (según tu `ipconfig /all`):**
*   **Tu Adaptador Activo:** "Adaptador de LAN inalámbrica Wi-Fi"
*   **Tu Dirección IPv4:** `192.168.100.170`
*   **Tu Dirección MAC (Física):** `CC-47-40-5F-BE-BE` (Identificada por Wireshark como `AzureWaveTec_5f:be:be`)
*   **IP de tu Puerta de Enlace Predeterminada (Router):** `192.168.100.1`
*   **MAC de tu Router (descubierta en tu captura):** `4c:f5:5b:a6:ed:4f` (Identificada por Wireshark como `HuaweiTechno_a6:ed:4f`)

**Wireshark - Puntos Clave:**
*   **Selección de Interfaz:** Al abrir Wireshark, identifica tu interfaz "Adaptador de LAN inalámbrica Wi-Fi". Verás una gráfica de actividad tipo "electrocardiograma" al lado de las interfaces activas.
*   **Filtros:** Se escriben en **minúsculas** (ej: `arp`, `icmp`) en la barra de filtro de visualización. La barra se pondrá **verde** si el filtro es válido, o **roja** si es inválido. Aplica con Enter.

---

## Laboratorio 1: Viendo el Diálogo ARP (El "Quién es Quién" de tu Red Local)

**Objetivo:** Observar el proceso por el cual tu PC (`192.168.100.170`) obtiene la dirección MAC de tu router (`192.168.100.1`) usando ARP, si aún no la conoce.

**Secuencia de Pasos REFINADA:**

1.  **Paso Opcional pero Recomendado (En CMD *COMO ADMINISTRADOR*): Limpiar y Verificar la caché ARP.**
    *   Abre el **Símbolo del sistema COMO ADMINISTRADOR**.
    *   Escribe: `arp -d 192.168.100.1` y presiona Enter.
    *   Luego, escribe: `arp -a` y presiona Enter (para verificar que la entrada para `192.168.100.1` ya no esté o diga "incompleta").
    *   Puedes cerrar esta ventana de CMD de administrador.

2.  **En Wireshark: Preparar Filtro, Seleccionar Interfaz e Iniciar Captura.**
    *   Abre Wireshark.
    *   **Opción A (Seleccionar interfaz, LUEGO escribir filtro para iniciar captura):**
        1.  Haz un **solo clic** en tu interfaz **"Wi-Fi"** (la que muestra actividad) para seleccionarla/resaltarla.
        2.  En la barra de filtro de visualización (arriba), escribe `arp` y presiona Enter. *Esto debería iniciar la captura en la interfaz seleccionada y aplicar el filtro.*
    *   **Opción B (Escribir filtro, LUEGO seleccionar interfaz para iniciar captura):**
        1.  En la barra de filtro de visualización (arriba), escribe `arp`.
        2.  Haz un **doble clic** en tu interfaz **"Wi-Fi"** (la que muestra actividad). *Esto debería iniciar la captura en esa interfaz y aplicar el filtro escrito previamente.*
    *   *(Ambas opciones buscan que Wireshark comience a capturar y te muestre solo paquetes ARP).
    *   **Opción C (Seleccionar interfaz, iniciar captura, LUEGO escribir filtro en la parte superior):***
    *   **NOTA IMPORTANTE:** *Aquí ya podrías ver el paquete ARP (Solicitud y Respuesta) si tu sistema necesitó resolver la MAC del router inmediatamente. Si es así, y ves el par de paquetes ARP que se describen en el paso 4, la misión principal de este laboratorio ya se cumplió. Los pasos 3 y 4 son para forzarlo si no apareció naturalmente.*

3.  **Si NO viste los paquetes ARP en el paso anterior, continúa (En CMD - ventana normal): Generar Tráfico que *necesitará* ARP.**
    *   Abre una nueva ventana de **Símbolo del sistema (normal)**.
    *   Escribe: `ping -n 1 192.168.100.1`
    *   Presiona Enter.

4.  **En Wireshark: Detener y Analizar (si realizaste el paso 3).**
    *   Poco después de que el ping se complete, vuelve a Wireshark.
    *   Haz clic en el **botón rojo cuadrado (Stop)** para detener la captura.
    *   **Busca en la lista de paquetes:**
        *   **Una Solicitud ARP (ARP Request):**
            *   `Source:` Tu MAC (`AzureWaveTec_5f:be:be`)
            *   `Destination: Broadcast`
            *   `Info: Who has 192.168.100.1? Tell 192.168.100.170`
        *   **Una Respuesta ARP (ARP Reply):**
            *   `Source:` La MAC de tu router (`HuaweiTechno_a6:ed:4f`)
            *   `Destination:` Tu MAC (`AzureWaveTec_5f:be:be`)
            *   `Info: 192.168.100.1 is at 4c:f5:5b:a6:ed:4f`

**Conclusión del Laboratorio 1:**
La misión es ver **ese par de paquetes ARP: la pregunta y la respuesta**. Si los viste, ¡el laboratorio fue un éxito!

---

## Laboratorio 2: Viendo la Trama del Ping (MACs vs IPs)

**Objetivo:** Observar las direcciones MAC e IP en las tramas de ping a tu router y a un sitio de Internet.

**Secuencia de Pasos (Ping Local):**

1.  **En Wireshark:**
    *   Abre Wireshark (o detén la captura anterior).
    *   **Prepara el filtro:** En la barra de filtro de visualización, escribe `icmp` y presiona Enter.
    *   **Inicia la captura:** Haz doble clic en tu interfaz **"Wi-Fi"** (o selecciona y presiona la aleta de tiburón).

2.  **En CMD (ventana normal):**
    *   Escribe: `ping 192.168.100.1`
    *   Presiona Enter.

3.  **En Wireshark: Detener y Analizar.**
    *   Cuando el ping en CMD termine, haz clic en el **botón rojo cuadrado (Stop)**.
    *   **Meta:** Encontrar los paquetes `Echo (ping) request` y ver sus direcciones.
    *   **Análisis en Wireshark:**
        1.  **Selecciona el Paquete:** En el **Panel Superior (Lista de Paquetes)**, busca y haz **UN SOLO CLIC** en una línea que sea un `Echo (ping) request` de tu IP (`192.168.100.170`) a la IP de tu router (`192.168.100.1`).
        2.  **Visualiza y Expande los Detalles de Capa CON NOMBRES:**
            *   **Opción 1 (Usando el Panel Medio - "recuadro inferior izquierdo"):**
                *   Observa el **Panel Medio (Detalles del Paquete)**. Verás las capas listadas.
                *   Haz clic en el `▶` al lado de `Ethernet II ...` para expandir y ver los campos `Destination MAC`, `Source MAC`, etc., CON SUS NOMBRES.
                *   Haz clic en el `▶` al lado de `Internet Protocol Version 4 ...` para expandir y ver los campos `Source Address`, `Destination Address`, etc., CON SUS NOMBRES.
            *   **Opción 2 (Usando una Nueva Ventana):**
                *   Alternativamente, después de seleccionar el paquete en el Panel Superior con un solo clic, puedes hacer **DOBLE CLIC en esa misma línea del Panel Superior**. Esto abrirá una **nueva ventana separada** que muestra las mismas capas y campos detallados CON SUS NOMBRES (idéntico a lo que verías al expandir en el Panel Medio).
        *   *Recuerda: Inicialmente ves la TRAMA. Al expandir (ya sea en el panel medio o en la nueva ventana), ves los detalles de Capa 2 (Ethernet), luego Capa 3 (IP) y Capa 4 (ICMP).*

**Secuencia de Pasos (Ping Remoto):**

1.  **En Wireshark:**
    *   Haz clic en el icono de la **aleta de tiburón azul (Iniciar nueva captura)**. Elige "Continuar sin guardar".
    *   Asegúrate de que el filtro `icmp` siga aplicado en la barra de filtro.
    *   *(Si el filtro se borró, vuelve a escribir `icmp` y presiona Enter ANTES de iniciar la captura efectiva para la nueva sesión).*
    *   Si no has iniciado la captura aún para esta nueva sesión, haz doble clic en tu interfaz **"Wi-Fi"**.

2.  **En CMD (ventana normal):**
    *   Escribe: `ping www.google.com`
    *   Presiona Enter.

3.  **En Wireshark: Detener y Analizar.**
    *   Cuando el ping en CMD termine, haz clic en el **botón rojo cuadrado (Stop)**.
    *   **Meta:** Encontrar los paquetes `Echo (ping) request` a Google y ver cómo las direcciones MAC difieren de las IP.
    *   **Análisis en Wireshark:**
        1.  **Selecciona el Paquete:** En el **Panel Superior**, haz **UN SOLO CLIC** en una línea que sea un `Echo (ping) request` de tu IP a la IP de Google.
        2.  **Visualiza y Expande los Detalles de Capa CON NOMBRES (igual que en Ping Local):**
            *   Usa el **Panel Medio ("recuadro inferior izquierdo")** y expande (`▶`) las capas "Ethernet II" e "Internet Protocol..." para ver los campos con nombres.
            *   O, haz **DOBLE CLIC en la línea del paquete en el Panel Superior** para ver estos detalles con nombres en una nueva ventana.
            *   **Compara:**
                *   En "Ethernet II": `Destination MAC` será la MAC de tu Router.
                *   En "Internet Protocol...": `Destination Address` será la IP de Google.


---