# Guía Introductoria a Wireshark: Explorando el Tráfico de Red

## 1. ¿Qué es Wireshark?

Wireshark es el **analizador de protocolos de red** más popular y utilizado del mundo. Te permite "ver" lo que está sucediendo en tu red a un nivel microscópico. Captura paquetes de datos en tiempo real o desde un archivo guardado y los presenta en un formato legible por humanos.

**Usos comunes:**
*   Solución de problemas de red (troubleshooting).
*   Análisis de seguridad y detección de intrusiones.
*   Desarrollo y depuración de protocolos de red.
*   Aprendizaje y educación sobre cómo funcionan las redes.

## 2. Instalación de Wireshark

1.  **Descarga:** Ve al sitio web oficial de Wireshark: [https://www.wireshark.org/download.html](https://www.wireshark.org/download.html)
2.  **Elige tu Sistema Operativo:** Descarga el instalador adecuado para tu sistema (Windows, macOS, Linux).
3.  **Instalación en Windows:**
    *   Ejecuta el instalador.
    *   Durante la instalación, asegúrate de que **Npcap** (o WinPcap en versiones más antiguas, aunque Npcap es el recomendado actualmente) esté seleccionado para instalarse. Npcap es la biblioteca necesaria para capturar paquetes en vivo en Windows.
    *   Sigue las instrucciones en pantalla.
4.  **Instalación en macOS/Linux:**
    *   **macOS:** Abre el archivo .dmg y arrastra Wireshark a tu carpeta de Aplicaciones. Es posible que necesites ajustar permisos para la captura de paquetes.
    *   **Linux:** Generalmente puedes instalarlo a través del gestor de paquetes de tu distribución (ej: `sudo apt install wireshark` en Debian/Ubuntu, `sudo dnf install wireshark-qt` en Fedora). Es posible que necesites añadir tu usuario al grupo `wireshark` o configurar permisos para capturar paquetes sin ser root (`sudo dpkg-reconfigure wireshark-common` y seleccionar "Yes" en Debian/Ubuntu).

## 3. Iniciar captura o abrir archivo de captura guardado previamente.

Puedes analizar tráfico de dos maneras principales:

1.  **Iniciar una Captura en Vivo:**
    *   **Selección de Interfaz, forma A:** Al abrir Wireshark, identifica tu interfaz (ej: "Ethernet", "Wi-Fi). Verás una gráfica de actividad tipo "electrocardiograma" al lado derecho de las interfaces activas.
    *   **Selección de Interfaz, forma B:**, ve a `Capture > Options...`, selecciona la interfaz y haz clic en `Start`.
    *   Para detener la captura, haz clic en el botón rojo de "Stop" en la barra de herramientas.
2.  **Puedes guardar la captura** (`File > Save As...`) para analizarla más tarde.

3.  **Abrir un Archivo de Captura Existente:**
    *   Haz clic en `File > Open` y selecciona tu archivo (`.pcap`, `.pcapng`, u otro formato compatible).
    *   Si tienes un archivo con el ícono de Wireshark, a menudo puedes hacer doble clic en él.
4.  **no guardar y volver a iniciar captura** presiona la aleta de tiburón.

## 4. Aplicando Filtros de Visualización

Los archivos de captura pueden contener miles de paquetes. Los filtros de visualización son esenciales.
*   **Filtros:** Se escriben en **minúsculas** (ej: `arp`, `icmp`) en la barra de filtro de visualización. La barra se pondrá **verde** si el filtro es válido, o **roja** si es inválido. Aplica con Enter o haz clic en la flecha `->`.
    *   **Opción A (Seleccionar interfaz, luego escribir filtro para iniciar captura):**
        1.  Haz un **solo clic** en tu interfaz **"Wi-Fi"** (la que muestra actividad) para seleccionarla/resaltarla.
        2.  En la barra de filtro de visualización (arriba), escribe `arp` y presiona Enter. *Esto debería iniciar la captura en la interfaz seleccionada y aplicar el filtro.*
    *   **Opción B (Escribir filtro, luego seleccionar interfaz para iniciar captura):**
        1.  En la barra de filtro de visualización (arriba), escribe `arp`.
        2.  Haz un **doble clic** en tu interfaz **"Wi-Fi"** (la que muestra actividad). *Esto debería iniciar la captura en esa interfaz y aplicar el filtro escrito previamente.*
    *   *(Ambas opciones buscan que Wireshark comience a capturar y te muestre solo paquetes ARP).
    *   **Opción C (Seleccionar interfaz, iniciar captura, luego escribir filtro en la parte superior):*** 

| Tipo de Filtro             | Ejemplo de Sintaxis                             | Descripción                                                                    |
| :------------------------- | :---------------------------------------------- | :----------------------------------------------------------------------------- |
| **Por Dirección IP**       | `ip.addr == 192.168.1.10`                       | Muestra tráfico hacia o desde la IP especificada.                              |
|                            | `ip.src == 192.168.1.10`                        | Muestra tráfico originado *desde* la IP especificada.                          |
|                            | `ip.dst == 192.168.1.10`                        | Muestra tráfico destinado *hacia* la IP especificada.                          |
| **Por Dirección MAC**      | `eth.addr == 00:11:22:33:44:55`                 | Muestra tráfico hacia o desde la MAC especificada.                             |
|                            | `eth.src == 00:11:22:33:44:55`                  | Muestra tráfico originado *desde* la MAC especificada.                         |
|                            | `eth.dst == 00:11:22:33:44:55`                  | Muestra tráfico destinado *hacia* la MAC especificada.                         |
| **Por Protocolo**          | `tcp`                                           | Muestra solo tráfico TCP.                                                      |
|                            | `udp`                                           | Muestra solo tráfico UDP.                                                      |
|                            | `icmp`                                          | Muestra solo tráfico ICMP.                                                     |
|                            | `dns`                                           | Muestra solo tráfico DNS (normalmente UDP puerto 53 o TCP puerto 53).          |
|                            | `http`                                          | Muestra solo tráfico HTTP.                                                     |
|                            | `arp`                                           | Muestra solo tráfico ARP.                                                      |
| **Por Puerto**             | `tcp.port == 80`                                | Muestra tráfico TCP en el puerto 80 (origen o destino).                        |
|                            | `udp.port == 53`                                | Muestra tráfico UDP en el puerto 53.                                           |
|                            | `tcp.srcport == 12345`                          | Muestra tráfico TCP originado *desde* el puerto 12345.                         |
|                            | `tcp.dstport == 443`                            | Muestra tráfico TCP destinado *hacia* el puerto 443 (HTTPS).                   |
| **Por Contenido (Payload)**| `tcp contains "palabra_clave"`                  | Muestra paquetes TCP cuya carga útil (datos) contiene "palabra_clave".         |
|                            | `http.request.uri contains "login"`             | Muestra peticiones HTTP cuya URI contiene "login".                             |
| **Por Flags TCP**          | `tcp.flags.syn == 1 && tcp.flags.ack == 0`      | Muestra paquetes TCP con el flag SYN activado y ACK desactivado (inicio de conexión). |
| **Operadores Lógicos**     | `ip.addr == 1.2.3.4 and tcp.port == 80`         | **AND** (`and`, `&&`): Ambas condiciones deben cumplirse.                      |
|                            | `tcp.port == 80 or tcp.port == 443`             | **OR** (`or`, `||`): Al menos una condición debe cumplirse.                    |
|                            | `not arp`                                       | **NOT** (`not`, `!`): Excluye paquetes que cumplen la condición.               |
| **Combinado**              | `(ip.src == 10.0.0.5 or ip.dst == 10.0.0.5) and not icmp` | Tráfico desde o hacia 10.0.0.5, excluyendo ICMP.                      |

**Limpiar Filtro:**
Haz clic en el icono `X` al final de la barra de filtros para eliminar el filtro actual y mostrar todos los paquetes nuevamente.


## 5. La Interfaz de Wireshark

Al abrir Wireshark (y después de abrir un archivo de captura o iniciar una captura en vivo y filtrar), verás varias secciones principales:

1.  **Barra de Menú y Herramientas:** Acceso a todas las funciones (Archivo, Editar, Ver, Captura, Analizar, Estadísticas, etc.) y accesos directos (iniciar/detener captura, guardar, barra de filtros).
2.  **Barra de Filtro de Visualización (`Apply a display filter...`):** Aquí es donde ingresas los filtros para reducir la cantidad de paquetes mostrados.
3.  **Paneles Principales de Datos:**

    | Panel                     | Descripción                                                                                                                               |
    | :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
    | **Lista de Paquetes**     | (Cuadro superior) Muestra un resumen de cada paquete capturado.                                                                          |
    | **Detalles del Paquete**  | (Cuadro inferior izquierdo, por defecto) Muestra el paquete seleccionado de la lista en un formato de árbol expandible, con cada capa de protocolo desglosada. |
    | **Bytes del Paquete**     | (Cuadro inferior derecho, por defecto) Muestra el contenido crudo del paquete seleccionado en formato hexadecimal y ASCII.                    |

4.  **Columnas comunes en la Lista de Paquetes (Panel Superior):**

    | Columna       | Descripción                                                                               |
    | :------------ | :---------------------------------------------------------------------------------------- |
    | **No.**       | Número de índice del paquete en la captura actual.                                        |
    | **Time**      | Marca de tiempo (timestamp) de cuándo se capturó el paquete. Puede ser absoluto o relativo. |
    | **Source**    | Dirección de origen del paquete (IP, MAC, etc., según la capa más prominente).            |
    | **Destination**| Dirección de destino del paquete (IP, MAC, etc.).                                       |
    | **Protocol**  | El protocolo de más alto nivel que Wireshark pudo diseccionar en el paquete.             |
    | **Length**    | Longitud total del paquete en bytes, tal como se transmitió por el medio.                 |
    | **Info**      | Información resumida y específica del protocolo sobre el contenido o propósito del paquete. |


5.  **Inspeccionando un Paquete Individual en el Panel de Detalles del Paquete, (Cuadro inferior izquierdo, por defecto):**
    *   **Selecciona** un paquete en la "Lista de Paquetes" con un solo clic.
    *   En el panel "Detalles del Paquete", **expande** las capas (haciendo clic en el triángulo `>` o `+`) para ver los campos específicos de cada protocolo. Esta acción de expandir es crucial para el análisis.

| Capa / Sección Expandible     | Qué Encontrar (Ejemplos Comunes)                                                                                                                              |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frame**                     | Información sobre la captura misma: número de frame, tiempo de llegada (absoluto, relativo), longitud del frame en el cable, longitud capturada (si fue truncado). |
| **Ethernet II** (o similar)   | Capa de Enlace de Datos: Direcciones MAC de origen y destino, EtherType (indica el protocolo de la capa superior, ej: IPv4, ARP).                                    |
| **Internet Protocol Version 4 (IPv4)** | Capa de Red: Versión, Longitud de cabecera (IHL), Servicios Diferenciados (DSCP), Longitud Total, Identificación, Flags (DF, MF), Fragment Offset, Tiempo de Vida (TTL), Protocolo encapsulado (TCP, UDP, ICMP), Checksum de cabecera, Dirección IP de Origen, Dirección IP de Destino, Opciones (si existen). |
| **Internet Protocol Version 6 (IPv6)** | Capa de Red: Versión, Clase de Tráfico, Etiqueta de Flujo, Longitud de Carga Útil, Siguiente Cabecera (indica protocolo encapsulado), Límite de Saltos (Hop Limit), Dirección IP de Origen, Dirección IP de Destino. |
| **Transmission Control Protocol (TCP)** | Capa de Transporte: Puerto de Origen, Puerto de Destino, Número de Secuencia, Número de Acuse de Recibo (ACK), Longitud de Cabecera, Flags (SYN, ACK, PSH, RST, URG, FIN, CWR, ECE), Tamaño de Ventana, Checksum, Puntero Urgente, Opciones (MSS, SACK, Timestamps, Window Scale). |
| **User Datagram Protocol (UDP)** | Capa de Transporte: Puerto de Origen, Puerto de Destino, Longitud (cabecera + datos UDP), Checksum.                                                              |
| **Internet Control Message Protocol (ICMP)** | Mensajes de Control: Tipo (ej: Echo request, Echo reply, Destination Unreachable), Código (subtipo), Checksum, Identificador, Número de Secuencia (para pings).  |
| **Domain Name System (DNS)**  | Capa de Aplicación: ID de Transacción, Flags (consulta/respuesta, recursión deseada/disponible), Número de Preguntas, Número de Respuestas, Consultas (nombre, tipo, clase), Respuestas (nombre, tipo, clase, TTL, datos como dirección IP). |
| **Hypertext Transfer Protocol (HTTP)** | Capa de Aplicación: Línea de Petición (GET, POST, etc., URI, versión HTTP), Cabeceras (Host, User-Agent, Accept, etc.), Línea de Respuesta (versión HTTP, código de estado, frase de estado), Cuerpo del mensaje (si existe). |
| **[Otros Protocolos de Aplicación...]** | Datos específicos del protocolo, como TLS/SSL (handshake, datos cifrados), FTP, SMTP, etc.                                                                  |

*Hacer doble clic en un paquete en la "Lista de Paquetes" abrirá sus detalles en una nueva ventana para un análisis más focalizado.*

## 6. Colores de los Paquetes (Coloring Rules)

Wireshark utiliza colores para ayudarte a identificar rápidamente diferentes tipos de tráfico. Estas reglas de colores son personalizables (View > Coloring Rules).

| Color Predeterminado     | Tráfico Típico Asociado         | Definición/Propósito del Protocolo Común                                                                                                                               |
| :----------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azul claro               | UDP (a menudo DNS)              | **UDP (User Datagram Protocol):** Protocolo de transporte no orientado a conexión, rápido pero sin garantías de entrega. <br> **DNS (Domain Name System):** Traduce nombres de dominio (ej: www.google.com) a direcciones IP. |
| Verde claro              | TCP                             | **TCP (Transmission Control Protocol):** Protocolo de transporte orientado a conexión, fiable, que garantiza la entrega ordenada de los datos.                             |
| Verde más oscuro/Azul verdoso | HTTP/HTTPS sobre TCP         | **HTTP (Hypertext Transfer Protocol):** Protocolo para la transmisión de documentos hipermedia, como HTML. <br> **HTTPS (HTTP Secure):** Versión segura de HTTP, cifrada con SSL/TLS. |
| Negro sobre fondo rojo/rosa | Errores TCP (retransmisiones) | Indica problemas en la comunicación TCP, como paquetes perdidos que necesitan ser reenviados.                                                                           |
| Gris claro               | Paquetes SYN/FIN/RST de TCP     | **SYN:** Inicia una conexión TCP. <br> **FIN:** Termina una conexión TCP. <br> **RST:** Reinicia una conexión TCP abruptamente.                                                   |
| Rosa/Violeta             | ICMP (a menudo "ping")          | **ICMP (Internet Control Message Protocol):** Usado para enviar mensajes de error y operativos, como solicitudes de eco (ping) y respuestas.                                |

*Nota: Los colores exactos pueden variar ligeramente entre versiones o si se han personalizado.*

## 7. Ejercicios Prácticos: Wireshark en Acción

**Preparación:**
Antes de comenzar estos ejercicios, el lector deberá identificar la siguiente información de su propio sistema (usualmente obtenida con comandos como `ipconfig /all` en Windows o `ip addr` en Linux en una terminal/CMD):
*   Su **adaptador de red activo** (ej: "Wi-Fi", "Ethernet").
*   Su **dirección IPv4 actual** (ej: `192.168.1.100`, `10.0.0.50`). Se referirá a esta como `[TU_IP_ACTUAL]`.
*   La **dirección IP de su Puerta de Enlace Predeterminada** (normalmente su router, ej: `192.168.1.1`, `10.0.0.1`). Se referirá a esta como `[IP_DE_TU_ROUTER]`.
*   Su **dirección MAC (Física)**. Se referirá a esta como `[TU_MAC]`.
*   La **dirección MAC de su Puerta de Enlace Predeterminada**. Se referirá a esta como `[MAC_DE_TU_ROUTER]`. (Esta a menudo se descubre durante el Laboratorio 1).

**Nota:** En los siguientes ejercicios, se asume que el lector ya sabe cómo iniciar/detener una captura, aplicar un filtro de visualización y expandir las capas de un paquete en el panel de detalles, como se explicó en las secciones anteriores de esta guía.

---

### Laboratorio 1: Viendo el Diálogo ARP (El "Quién es Quién" de tu Red Local)

**Objetivo:** Observar el proceso por el cual tu PC (usando `[TU_IP_ACTUAL]`) obtiene la dirección MAC de tu router (que tiene `[IP_DE_TU_ROUTER]`) usando el protocolo ARP, si aún no la conoce.

**Secuencia de Pasos:**

1.  **Paso Opcional pero Recomendado (En CMD *COMO ADMINISTRADOR*): Limpiar y Verificar la caché ARP.**
    *   Abre el **Símbolo del sistema COMO ADMINISTRADOR**.
    *   Escribe: `arp -d [IP_DE_TU_ROUTER]` y presiona Enter. (Reemplaza `[IP_DE_TU_ROUTER]` con la IP real de tu router).
    *   Luego, escribe: `arp -a` y presiona Enter (para verificar que la entrada para `[IP_DE_TU_ROUTER]` ya no esté o diga "incompleta").
    *   Puedes cerrar esta ventana de CMD de administrador.

2.  **En Wireshark: Aplicar filtro `arp` e iniciar captura.**
    *   Asegúrate de seleccionar tu interfaz de red activa.
    *   **NOTA IMPORTANTE:** *Aquí ya podrías ver el paquete ARP (Solicitud y Respuesta) si tu sistema necesitó resolver la MAC del router inmediatamente. Si es así, y ves el par de paquetes ARP que se describen en el paso 4, la misión principal de este laboratorio ya se cumplió. Los pasos 3 y 4 son para forzarlo si no apareció naturalmente.*

3.  **Si NO viste los paquetes ARP en el paso anterior, continúa (En CMD - ventana normal): Generar Tráfico que *necesitará* ARP.**
    *   Abre una nueva ventana de **Símbolo del sistema (normal)**.
    *   Escribe: `ping -n 1 [IP_DE_TU_ROUTER]` (Reemplaza `[IP_DE_TU_ROUTER]` con la IP real de tu router).
    *   Presiona Enter.

4.  **En Wireshark: Detener y Analizar (si realizaste el paso 3).**
    *   Poco después de que el ping se complete, detén la captura.
    *   **Busca en la lista de paquetes:**
        *   **Una Solicitud ARP (ARP Request):**
            *   `Source:` `[TU_MAC]` (o el fabricante de tu tarjeta de red seguido de los últimos 3 octetos de tu MAC)
            *   `Destination: Broadcast`
            *   `Info: Who has [IP_DE_TU_ROUTER]? Tell [TU_IP_ACTUAL]`
        *   **Una Respuesta ARP (ARP Reply):**
            *   `Source:` `[MAC_DE_TU_ROUTER]` (o el fabricante del router seguido de los últimos 3 octetos de su MAC)
            *   `Destination:` `[TU_MAC]`
            *   `Info: [IP_DE_TU_ROUTER] is at [MAC_DE_TU_ROUTER]`

**Conclusión del Laboratorio 1:**
La misión es ver **ese par de paquetes ARP: la pregunta y la respuesta**. Si los viste, ¡el laboratorio fue un éxito! Has observado cómo tu PC descubre la dirección física (MAC) de otro dispositivo en tu red local basándose en su dirección lógica (IP).

---

### Laboratorio 2: Viendo la Trama del Ping (MACs vs IPs)

**Objetivo:** Observar las direcciones MAC e IP en las tramas de ping a tu router (comunicación local) y a un sitio de Internet (comunicación remota), y entender el rol del router.

#### Parte A: Ping Local (a tu Router)

1.  **En Wireshark: Aplicar filtro `icmp` e iniciar captura.**
    *   Asegúrate de seleccionar tu interfaz de red activa.

2.  **En CMD (ventana normal):**
    *   Escribe: `ping [IP_DE_TU_ROUTER]` (Reemplaza `[IP_DE_TU_ROUTER]` con la IP real de tu router).
    *   Presiona Enter.

3.  **En Wireshark: Detener y Analizar.**
    *   Cuando el ping en CMD termine, detén la captura.
    *   **Meta:** Encontrar los paquetes `Echo (ping) request` y ver sus direcciones.
    *   **Análisis en Wireshark:**
        1.  Selecciona un paquete en la Lista de Paquetes que sea un `Echo (ping) request` de `[TU_IP_ACTUAL]` a `[IP_DE_TU_ROUTER]`.
        2.  Expande las capas `Ethernet II` e `Internet Protocol Version 4` en el panel de Detalles del Paquete.
            *   **En `Ethernet II` (Capa 2):**
                *   `Source MAC:` `[TU_MAC]`
                *   `Destination MAC:` `[MAC_DE_TU_ROUTER]`
            *   **En `Internet Protocol Version 4` (Capa 3):**
                *   `Source Address:` `[TU_IP_ACTUAL]`
                *   `Destination Address:` `[IP_DE_TU_ROUTER]`
        *   *Nota cómo las direcciones MAC y las direcciones IP apuntan directamente entre tu PC y tu router.*

#### Parte B: Ping Remoto (a un Servidor en Internet)

1.  **En Wireshark: Mantener filtro `icmp` e iniciar una nueva captura.**
    *   Puedes descartar la captura anterior si se te pregunta.

2.  **En CMD (ventana normal):**
    *   Escribe: `ping www.google.com` (o cualquier otro sitio web público).
    *   Presiona Enter. (CMD resolverá `www.google.com` a una dirección IP pública).

3.  **En Wireshark: Detener y Analizar.**
    *   Cuando el ping en CMD termine, detén la captura.
    *   **Meta:** Encontrar los paquetes `Echo (ping) request` a Google y ver cómo las direcciones MAC difieren de las IP.
    *   **Análisis en Wireshark:**
        1.  Selecciona un paquete en la Lista de Paquetes que sea un `Echo (ping) request` desde `[TU_IP_ACTUAL]` hacia la dirección IP pública de Google.
        2.  Expande las capas `Ethernet II` e `Internet Protocol Version 4` en el panel de Detalles del Paquete.
            *   **En `Ethernet II` (Capa 2):**
                *   `Source MAC:` `[TU_MAC]`
                *   `Destination MAC:` **`[MAC_DE_TU_ROUTER]`**
            *   **En `Internet Protocol Version 4` (Capa 3):**
                *   `Source Address:` `[TU_IP_ACTUAL]`
                *   `Destination Address:` La dirección IP pública del servidor de Google.

**Conclusión del Laboratorio 2:**
*   Para comunicaciones **locales** (como a tu router), la trama Ethernet se dirige directamente a la MAC del dispositivo destino.
*   Para comunicaciones **remotas** (fuera de tu red local), la trama Ethernet se dirige a la MAC de tu **puerta de enlace predeterminada (router)**. El paquete IP encapsulado dentro de esa trama conserva las direcciones IP originales de origen y destino final, pero la entrega física local es hacia el router, que se encargará de reenviar el paquete IP hacia Internet.
---