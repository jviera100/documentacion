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


## IPs en Resumen: Máscara y Redondeo a Cero

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

**Redes Domésticas/Oficinas Pequeñas:**

1.  **Internet Entra:** El ISP te da Internet. El "ancho de banda" de tu plan define la velocidad.
2.  **Red Local (LAN/WLAN):** Tu router crea una red local (LAN = cable, WLAN = Wi-Fi) para que tus dispositivos se conecten y compartan Internet.
3.  **Direcciones:** Cada dispositivo *activo* en la red necesita una dirección IP (y tiene una MAC). Pero periféricos (mouse, teclado, webcam) no necesitan IP.
4.  **IPs y Máscaras (Lo Crucial):**
    *   La Máscara define qué parte de la IP es la RED y cuál el HOST.
    *   Para encontrar la Red, "redondea" la parte HOST a cero.
    *   Si dos IPs tienen la misma dirección de RED, están en la misma LAN.
5.  **Más Cables?**: Si necesitas conectar más dispositivos con cable, usa un switch Ethernet (amplía los puertos de tu router).
6.  **Redes Virtuales (VLANs - Opcional):** Un switch avanzado puede crear VLANs. Esto divide la red en "subredes virtuales". Dispositivos en diferentes VLANs no se ven, aunque estén conectados al mismo switch. Útil para separar redes de invitados o dispositivos inseguros.



## IPv4: Unidifusión, Difusión y Multidifusión (Resumen)

*   **Unidifusión (1 a 1):** Envío a un host específico. (excluyendo reservados)

*   **Difusión (1 a Todos):** Envío a todos en la red. (Los routers *no* reenvían difusiones limitadas 255.255.255.255).

*   **Multidifusión (1 a Grupo):** Envío a un grupo de hosts suscritos.

## Tipos de Direcciones IPv4: Públicas vs. Privadas (y el Truco!)

### Direcciones IPv4: Tipos y Rangos (¡Identifícalas Fácil!)

*   **Públicas:** Para Internet. (¡Si no está en los siguientes rangos, es pública!)

*   **Privadas:** Para redes internas.
    *   **10.x.x.x**
    *   **172.16.x.x - 172.31.x.x**
    *   **192.168.x.x**
  
*   **NAT:** Convierte IPs privadas a una IP pública.

*   **Especiales:**
    *   **Loopback (bucle invertido)(127.0.0.0/8):** Para probar la propia conexión. *Comienza con 127* (ej: 127.0.0.1, 127.255.255.255)
    *   **APIPA / Link-Local (169.254.0.0/16):** Windows las usa si no obtiene IP automáticamente. *Comienza con 169.254* (ej: 169.254.0.1, 169.254.255.254)
    *   **Experimental (240.0.0.0 - 255.255.255.254):** Para investigación. *Comienza con 240 a 255* (ej: 240.0.0.1, 255.255.255.0). No deben usarse en redes públicas.
    *   **Multidifusión (224.0.0.0 - 239.255.255.255):** Envío a un grupo específico de hosts. *Comienza con 224 a 239* (ej: 224.0.0.5).

*   **Unidifusión y Difusión:** No tienen rangos específicos fijos. Las de unidifusión son todas las IPs que *no* son privadas, loopback, APIPA, experimentales o multidifusión. Las de difusión dependen de la máscara de subred.

*   **Quién Asigna las IPs?** IANA da bloques de IPs a los **RIRs**, quienes las asignan a los ISPs.

## Segmentación de la Red: Dominios de Difusión y Subredes

Esta sección explora cómo dividir una red en segmentos más pequeños para mejorar el rendimiento y la seguridad.

**Dominios de Difusión:**

*   **Difusión:** Un mensaje enviado a *todos* los dispositivos en una red.
*   **Switches:** Propagan difusiones a *todas* las interfaces excepto la que recibió la difusión.
*   **Routers:** *No* propagan difusiones, limitando el dominio.

**Problemas con los Dominios de Difusión Grandes:**

*   Tráfico de difusión excesivo -> red lenta.
*   **Solución: Subredes:** Dividir la red en dominios de difusión más pequeños.

**Razones para la Segmentación de Redes (Subredes):**

*   Mejora el rendimiento y la seguridad.

## **Abreviando Direcciones IPv6 (4x el Tamaño de IPv4)**

Las direcciones IPv6, que tienen 128 bits (cuatro veces el tamaño de una dirección IPv4 de 32 bits), se componen de 8 hextetos (grupos hexadecimales de 16 bits) separados por dos puntos. Para simplificar su representación, se aplican dos reglas de abreviación:

**1. Regla 1: Omitir Ceros Iniciales (por Hexteto, en Toda la Dirección):**

*   **Aplicación:** A *cada* hexteto individual dentro de la dirección IPv6, lo que significa que se puede aplicar hasta en los 8 hextetos de la dirección.
*   **Acción:** Eliminar cualquier cero(s) que aparezca al comienzo de cada hexteto.
*   **Cobertura:** Al aplicarse a cada hexteto, esta regla afecta *hasta* los 128 bits (todos los dígitos) de la dirección completa y permite la eliminación de ceros *en cualquier parte* de la dirección, siempre y cuando estén al inicio de un hexteto. Es, en ese sentido, más "invasiva" porque afecta a una mayor cantidad de dígitos individuales.
*   **Ejemplo:** `2001:0DB8:000A:0001` se simplifica a `2001:DB8:A:1` (ceros iniciales removidos en 4 hextetos distintos).

**2. Regla 2: Compresión con "::" (por Dirección IPv6):**

*   **Aplicación:** A la *dirección IPv6 completa*.
*   **Acción:** Reemplazar una *única* secuencia contigua de *uno o más* hextetos *completamente cero* por `::`.
*   **Restricción:** Solo puede usarse *una vez* por dirección IPv6.
*   **Cobertura:** Aunque puede reemplazar múltiples hextetos a la vez, solo se aplica en una *única* ubicación dentro de la dirección.
*   **Ejemplo:** `2001:0DB8:0000:0000:0000:0000:0000:0200` se simplifica a `2001:DB8::200`

**Importante:** La regla 2 (compresión con "::") se aplica a cada dirección IPv6 de forma *independiente*.  Esto significa que puedes usar `::` en *múltiples direcciones IPv6 diferentes*, siempre y cuando cada una de esas direcciones cumpla con la condición de tener una secuencia contigua de hextetos cero, y solo se aplique una vez *dentro de esa dirección específica*.



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






