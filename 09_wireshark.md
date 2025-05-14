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

## 3. La Interfaz de Wireshark

Al abrir Wireshark (y después de abrir un archivo de captura o iniciar una captura en vivo), verás varias secciones principales:

![Wireshark Interface Overview](https://www.wireshark.org/docs/wsug_html_chunked/images/ws-main-window-layout.png)
*(Imagen referencial de la interfaz de Wireshark)*

1.  **Barra de Menú y Herramientas:** Acceso a todas las funciones (Archivo, Editar, Ver, Captura, Analizar, Estadísticas, etc.) y accesos directos (iniciar/detener captura, guardar, barra de filtros).
2.  **Barra de Filtro de Visualización (`Apply a display filter...`):** Aquí es donde ingresas los filtros para reducir la cantidad de paquetes mostrados.
3.  **Paneles Principales de Datos:**

    | Panel                     | Descripción                                                                                                                               |
    | :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
    | **Lista de Paquetes**     | (Cuadro superior) Muestra un resumen de cada paquete capturado.                                                                          |
    | **Detalles del Paquete**  | (Cuadro inferior izquierdo, por defecto) Muestra el paquete seleccionado de la lista en un formato de árbol expandible, con cada capa de protocolo desglosada. |
    | **Bytes del Paquete**     | (Cuadro inferior derecho, por defecto) Muestra el contenido crudo del paquete seleccionado en formato hexadecimal y ASCII.                    |

    **Columnas comunes en la Lista de Paquetes (Panel Superior):**

    | Columna       | Descripción                                                                               |
    | :------------ | :---------------------------------------------------------------------------------------- |
    | **No.**       | Número de índice del paquete en la captura actual.                                        |
    | **Time**      | Marca de tiempo (timestamp) de cuándo se capturó el paquete. Puede ser absoluto o relativo. |
    | **Source**    | Dirección de origen del paquete (IP, MAC, etc., según la capa más prominente).            |
    | **Destination**| Dirección de destino del paquete (IP, MAC, etc.).                                       |
    | **Protocol**  | El protocolo de más alto nivel que Wireshark pudo diseccionar en el paquete.             |
    | **Length**    | Longitud total del paquete en bytes, tal como se transmitió por el medio.                 |
    | **Info**      | Información resumida y específica del protocolo sobre el contenido o propósito del paquete. |

## 4. Capturando y Explorando Paquetes

Puedes analizar tráfico de dos maneras principales:

1.  **Iniciar una Captura en Vivo:**
    *   Al iniciar Wireshark, verás una lista de interfaces de red disponibles. Haz doble clic en la interfaz que deseas monitorear (ej: "Ethernet", "Wi-Fi").
    *   Alternativamente, ve a `Capture > Options...`, selecciona la interfaz y haz clic en `Start`.
    *   Para detener la captura, haz clic en el botón rojo de "Stop" en la barra de herramientas.
    *   Puedes guardar la captura (`File > Save As...`) para analizarla más tarde.

2.  **Abrir un Archivo de Captura Existente:**
    *   Haz clic en `File > Open` y selecciona tu archivo (`.pcap`, `.pcapng`, u otro formato compatible).
    *   Si tienes un archivo con el ícono de Wireshark, a menudo puedes hacer doble clic en él.

**Inspeccionando un Paquete Individual (Panel de Detalles del Paquete):**

Cuando seleccionas un paquete en la "Lista de Paquetes", el panel "Detalles del Paquete" te permite desglosar su estructura capa por capa. Al expandir cada capa (haciendo clic en el triángulo `>` o `+`), obtienes información detallada.

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

## 5. Aplicando Filtros de Visualización

Los archivos de captura pueden contener miles de paquetes. Los filtros de visualización son esenciales. Escribe la expresión del filtro en la barra "Apply a display filter..." y presiona Enter o haz clic en la flecha `->`.

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

## 7. Conclusión

Wireshark es una herramienta increíblemente poderosa. Esta guía te proporciona una base sólida. La mejor manera de aprender es:
*   **Practicar:** Captura tu propio tráfico (¡con precaución y respetando la privacidad y permisos!) o descarga archivos de muestra de internet (busca "sample pcap files").
*   **Experimentar:** Prueba diferentes filtros y explora los detalles de varios protocolos. No tengas miedo de hacer clic y expandir todo.
*   **Consultar:** La documentación oficial de Wireshark ([https://www.wireshark.org/docs/](https://www.wireshark.org/docs/)) y los innumerables tutoriales en línea son excelentes recursos.

¡Feliz análisis de paquetes!