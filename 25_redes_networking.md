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
    * **OSI:** Modelo conceptual (cómo *debería* funcionar).

* **Capas Clave (OSI y TCP/IP):**
    * **Física (OSI):** (Capa 1) Bits por cable/radio.
    * **Enlace de Datos (OSI):** (Capa 2) Transferencia entre nodos directos (Ethernet).
    * **Red/Internet:** (Capa 3 OSI / Internet TCP/IP) Enrutamiento entre redes (IP).
    * **Transporte:** (Capa 4) Comunicación confiable (TCP) o rápida (UDP) entre aplicaciones.
    * **Aplicación:** (Capas 5-7 OSI / Aplicación TCP/IP) Servicios de red (HTTP, SMTP, DNS).
* **Protocolos Clave:**
    * **TCP:** Entrega confiable.
    * **IP:** Enrutamiento.
* **En resumen:**
    * **Física:** Cables y señales.
    * **Enlace de Datos:** Ethernet.
    * **Red/Internet:** IP.
    * **Transporte:** TCP/UDP.
    * **Aplicación:** HTTP, SMTP, DNS.

*   **Cómo esto responde a las preguntas:**
    *   **Entrega fiable:** TCP (Transporte)
    *   **Enrutamiento:** IP (Red/Internet)
    *   **Acceso a la Red (TCP/IP) = Física + Enlace de Datos (OSI)**
    *   **Direccionamiento IP:** Red (OSI) / Internet (TCP/IP)

*   **¿Por qué OSI?**
    *   **Estandarización, solución de problemas, flexibilidad.**