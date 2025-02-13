### Definiciones Clave de Redes:

### 1. Tipos de Conexión a Internet:

**ISP (Proveedor de Servicios de Internet):**
* Acceso a Internet (no especifica la tecnología).

**DSL (Línea de Suscriptor Digital):**
* Internet por cables de cobre (líneas telefónicas).

### 2. Identificadores de Red:

**SSID (Service Set Identifier - Identificador del Conjunto de Servicios):**
* Nombre de la red Wi-Fi.

### 3. Tipos de Redes:

**LAN (Local Area Network - Red de Área Local):**
* Red en área limitada (casa, oficina). Conexión por cable (Ethernet).

**WLAN (Wireless Local Area Network - Red de Área Local Inalámbrica):**
* LAN inalámbrica (Wi-Fi).

**MAN (Metropolitan Area Network):**
* Red en área metropolitana (ciudad).

**WAN (Wide Area Network):**
* Red en área extensa (país, mundo). Internet es la WAN más grande.

**Servidor DNS (Domain Name System):**
* "Guía telefónica" de Internet: Nombre de dominio (google.com) -> Dirección IP (142.250.184.142).

### Modelos de Comunicación de Red (Síntesis Funcional):

* **Objetivo:** Comunicación entre dispositivos en la red.

* **Protocolos de Red (Fundamentos):**
    * **Definición:** Reglas para que las computadoras se comuniquen correctamente.
    * **Elementos Clave:**
        * Formato del mensaje.
        * Tamaño del mensaje.
        * Sincronización (velocidad de transmisión).
        * Codificación (conversión a bits).
        * Encapsulación (agregar encabezados con direcciones).
        * Patrón de mensaje (ej: Request/Response).

* **Modelos:**
    * **TCP/IP:** Estándar de Internet (práctico).
    * **TCP (Transmission Control Protocol):** Protocolo de control de transmisión (protocolo confiable).
        * * **Protocolos Clave:**
                  * **TCP:** Entrega confiable.
                  * **IP:** Enrutamiento.
    * **OSI:** Modelo conceptual (cómo *debería* funcionar).
    * **OSI (Open Systems Interconnection):** Interconexión de sistemas abiertos (modelo de referencia para redes).* 

* **Tabla Comparativa de Capas TCP/IP vs. OSI:**

| Capa TCP/IP       | Capa OSI        | Función Principal                                                                                                                          | Relación                                                                                                                                                         |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aplicación         | Aplicación       | Proporciona servicios de __red__ (ej: HTTP para la web, SMTP para el correo).                                               | Directa                                                                                                                                                          |
|                    | Presentación     | __Formato__ de datos, cifrado, compresión. Asegura que los datos sean legibles por la aplicación receptora.                                  | La capa de Aplicación de TCP/IP engloba estas funciones.                                                                                                                  |
|                    | Sesión           | Gestiona las __conexiones__ (sesiones) entre aplicaciones. Establece, mantiene y finaliza las comunicaciones.                               | La capa de Aplicación de TCP/IP engloba estas funciones.                                                                                                                  |
| Transporte         | Transporte       | Proporciona una __comunicación__ confiable (TCP) o rápida (UDP) entre aplicaciones. Segmentación, control de flujo, multiplexación.             | Directa                                                                                                                                                          |
| Internet           | Red             | __Enrutamiento__ de datos entre redes. Define el direccionamiento IP y la lógica para encontrar la mejor ruta.                               | Directa                                                                                                                                                          |
| Acceso a la Red   | Enlace de Datos  | __Transfiere__ datos entre dos nodos directamente conectados. Define el __formato__ de los datos (tramas), direcciones MAC, control de errores. | La capa de Acceso a la Red de TCP/IP *combina* las funciones de Enlace de Datos y Física.                                                                         |
|                    | Física          | __Transmisión__ de datos brutos (bits) a través del medio físico (cable, radio). Define voltajes, __tasas__ de datos, etc.                           | La capa de Acceso a la Red de TCP/IP *combina* las funciones de Enlace de Datos y Física.                                                                         |

### Tipos de Medios de Red

| Medio             | Tipo de Datos    | Distancia Máxima | Entorno de Instalación | Ancho de Banda/Velocidad | Costo | Funcionalidad                                               | Ejemplo de Uso                                   |
|--------------------|-------------------|-------------------------------------------|-------------------------|--------------------------|-------|-------------------------------------------------------------|---------------------------------------------------|
| **Par Trenzado (Cat5/5e/6/6a)** | Impulsos Eléctricos | Hasta 100 metros (Ethernet) | Interior (oficinas, hogares) | Moderado a Alto       | Bajo a Moderado | Conexión de dispositivos en redes Ethernet (LAN).  Base de la mayoría de redes locales. | Conectar una PC a un router en casa o en la oficina. |
| **Coaxial**         | Impulsos Eléctricos | Media (depende de la frecuencia)          | Interior/Exterior       | Moderado                | Moderado | Transmisión de señales de TV, conexión satelital. Como cables de cobre de compañías de TV.  | Conexión de un televisor a un servicio de cable, conexión satelital.    |
| **Fibra Óptica**   | Pulsos de Luz   | Varios kilómetros o más               | Interior/Exterior (subterráneo, submarino) | Muy Alto               | Alto | Transmisión de datos a alta velocidad, inmune a interferencia. | Redes troncales, conexión de ciudades, centros de datos, compañías telefónicas. |
| **Inalámbrico**     | Ondas Electromagnéticas | Variable (depende del estándar y entorno) | Interior/Exterior       | Bajo a Moderado           | Bajo a Moderado | Conexión de dispositivos sin cables mediante modulación de frecuencias. | Conexión de laptops, smartphones, tablets a redes Wi-Fi; Bluetooth; redes celulares. |

### Encapsulación y la Trama de Ethernet
Este módulo explica el concepto de encapsulación y la estructura de la trama Ethernet:

**Encapsulación:** Es el proceso de envolver datos en un formato específico (trama) para su transmisión a través de la red. Similar a poner una carta dentro de un sobre.

**Trama Ethernet:** Actúa como un "sobre" para los datos, conteniendo información de origen y destino. El formato de la trama está determinado por el tipo de mensaje y el canal de transmisión.

**Dirección MAC:** Cada tarjeta de interfaz de red (NIC) tiene una dirección MAC única que se utiliza para identificar el origen y el destino de la trama Ethernet.

**Protocolo IP:** Similar al sobre en la analogía, el protocolo IP (ej. IPv6) es responsable de enviar el mensaje desde el origen al destino a través de la red.


# Propósito de una dirección IPv4

## La Dirección IPv4
Una dirección IPv4 es necesaria para que un host pueda comunicarse en Internet y en redes LAN. Es una dirección lógica que debe ser única y configurarse correctamente tanto a nivel local como remoto para permitir la comunicación.

Cada interfaz de red (como una tarjeta NIC) en un dispositivo final, como PC, servidores, impresoras de red o teléfonos IP, requiere una dirección IPv4. Los enrutadores también tienen direcciones IPv4 en sus interfaces para conectarse a redes IP.

Cada paquete enviado en Internet incluye una dirección IPv4 de origen y destino, lo que garantiza que los datos lleguen al destino correcto y las respuestas sean enviadas al origen.

## 8.1.2 Octetos y notación decimal con puntos
Una dirección IPv4 tiene 32 bits, agrupados en cuatro bloques de 8 bits llamados octetos. Para facilitar su lectura y configuración, se convierten de binario a formato decimal separado por puntos.

**Ejemplo:**
- Binario: `11010001101001011100100000000001`
- Octetos: `11010001.10100101.11001000.00000001`
- Decimal con puntos: `209.165.200.1`
```

### Glosario de Acrónimos y Siglas:

*   #### Servicios y Protocolos de Red:
    *   **DNS (Domain Name System):** Sistema de nombres de dominio (traduce nombres de dominio a direcciones IP).
    *   **HTTP (Hypertext Transfer Protocol):** Protocolo de transferencia de hipertexto (para la web).
    *   **SMTP (Simple Mail Transfer Protocol):** Protocolo simple de transferencia de correo (para enviar emails).
    *   **UDP (User Datagram Protocol):** Protocolo de datagramas de usuario (protocolo rápido, no confiable).
    *   **IP (Internet Protocol):** Protocolo de Internet (para enrutamiento).

*   #### Organizaciones y Estándares de Internet:
    *   **IANA (Internet Assigned Numbers Authority):** Asigna direcciones IP, números de sistema autónomo, etc.
    *   **IEEE (Institute of Electrical and Electronics Engineers):** Instituto de Ingenieros Eléctricos y Electrónicos.
    *   **IETF (Internet Engineering Task Force):** Fuerza de Tarea de Ingeniería de Internet.
    *   **RFC (Request for Comments):** Petición de Comentarios (documentos técnicos de la IETF).

*   #### Interferencias de Medios de Red:
    *   **EMI (Electromagnetic Interference):** Interferencia Electromagnética.
    *   **RFI (Radio Frequency Interference):** Interferencia de Radiofrecuencia.
