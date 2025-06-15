# Guía Introductoria a `tcpdump`: Análisis de Paquetes de Red desde la Terminal

## 1. ¿Qué es `tcpdump`?

`tcpdump` es una potente **herramienta de línea de comandos para el análisis de paquetes de red**. Permite capturar y mostrar el tráfico TCP/IP (y otros protocolos) que pasa a través de una interfaz de red en un sistema. A diferencia de Wireshark, que tiene una interfaz gráfica, `tcpdump` opera enteramente desde la terminal, lo que lo hace ideal para servidores, sistemas embebidos o cuando no se dispone de un entorno gráfico.

**Usos comunes:**
*   Diagnóstico y solución de problemas de red directamente en servidores.
*   Captura de tráfico para análisis posterior (posiblemente con Wireshark).
*   Monitoreo de seguridad y detección de actividad sospechosa.
*   Aprendizaje detallado sobre cómo los protocolos de red operan a bajo nivel.
*   Scripting y automatización de tareas de análisis de red.

## 2. Consideraciones Previas y Permisos

*   **Permisos de Superusuario (`sudo`):** Para capturar tráfico en la mayoría de los sistemas, `tcpdump` necesita privilegios elevados. Por lo general, ejecutarás los comandos con `sudo`.
*   **Identificación de Interfaces de Red:** Necesitarás saber el nombre de la interfaz de red que quieres monitorear (ej. `eth0`, `en0`, `wlan0`, etc.).

## 3. Comandos Fundamentales de `tcpdump`

A continuación, se presentan los comandos esenciales para comenzar a trabajar con `tcpdump`, organizados por funcionalidad.

### A. Identificación y Selección de Interfaces

Antes de capturar, es crucial identificar las interfaces de red disponibles en tu sistema.

| Comando                    | Descripción                                                                                                                                   |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `sudo tcpdump -D`          | Lista todas las interfaces de red que `tcpdump` puede utilizar para la captura. Es la forma recomendada y portable para ver las interfaces. |
| `sudo ifconfig` (Linux)    | (Más antiguo, puede no estar instalado por defecto en sistemas modernos) Muestra la configuración de todas las interfaces de red activas.      |
| `ip link show` (Linux)     | (Más moderno) Muestra información sobre las interfaces de red.                                                                               |
| `networksetup -listallhardwareports` (macOS) | Lista los puertos de hardware de red en macOS.                                                                                |

### B. Captura Básica de Paquetes

Una vez identificada la interfaz (por ejemplo, `eth0`), puedes comenzar a capturar paquetes.

| Comando                                  | Descripción                                                                                                                               |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `sudo tcpdump -i eth0`                   | Inicia la captura de paquetes en la interfaz `eth0`. Muestra un resumen de cada paquete. Presiona `Ctrl+C` para detener.                   |
| `sudo tcpdump -i eth0 -v`                | Captura en `eth0` con salida detallada (`verbose`). Muestra más información de los encabezados.                                             |
| `sudo tcpdump -i eth0 -vv`               | Salida aún más detallada.                                                                                                                   |
| `sudo tcpdump -i eth0 -c 5`              | Captura exactamente `5` paquetes en `eth0` y luego se detiene automáticamente.                                                              |
| `sudo tcpdump -i eth0 -nn`               | Captura en `eth0` sin resolver nombres de host (primera `-n`) ni nombres de puerto (segunda `-n`). Muestra IPs y números de puerto crudos.  |
| `sudo tcpdump -i eth0 -c 5 -v -nn`       | Combina opciones: captura 5 paquetes en `eth0`, con salida detallada y sin resolución de nombres.                                          |

### C. Guardar y Leer Capturas (Archivos `.pcap`)

Es muy común guardar el tráfico capturado en un archivo para un análisis posterior, incluso con herramientas como Wireshark.

| Comando                                           | Descripción                                                                                                                                                             |
| :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sudo tcpdump -i eth0 -w captura.pcap`            | Captura tráfico de `eth0` y lo guarda directamente en el archivo `captura.pcap`. No mostrará salida en la terminal mientras guarda. `Ctrl+C` para detener.             |
| `sudo tcpdump -i eth0 -c 10 -w captura.pcap`      | Captura 10 paquetes de `eth0` y los guarda en `captura.pcap`, luego se detiene.                                                                                          |
| `sudo tcpdump -r captura.pcap`                    | Lee y muestra el contenido del archivo `captura.pcap` previamente guardado.                                                                                             |
| `sudo tcpdump -r captura.pcap -nn -v`             | Lee `captura.pcap` sin resolver nombres y con salida detallada.                                                                                                           |
| `sudo tcpdump -i eth0 -w captura.pcap &`          | Captura tráfico de `eth0`, lo guarda en `captura.pcap`, y ejecuta el comando en **segundo plano** (`&`). Útil para dejar capturando mientras realizas otras tareas.  |
| `ls -l captura.pcap`                              | (Comando de sistema) Verifica la existencia y el tamaño del archivo de captura.                                                                                           |
| `sudo tcpdump -i eth0 -W 2 -C 10 -w backup.pcap` | **Rotación de archivos:** `-W 2` guarda 2 archivos. `-C 10` rota al siguiente archivo cuando el actual alcance los 10MB. Los archivos se nombrarán `backup.pcap0`, `backup.pcap1`. |

### D. Filtrado de Paquetes (Expresiones de `tcpdump`)

`tcpdump` utiliza un lenguaje de expresiones potente para filtrar el tráfico que se captura o se muestra. Para probar filtros de red (ej. `port 80`), puedes generar tráfico visitando un sitio web o usando herramientas como `curl http://ejemplo.com`.

| Tipo de Filtro       | Expresión de Ejemplo              | Descripción                                                                                              |
| :------------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Por Host (IP/Nombre)** | `host 192.168.1.10`             | Tráfico hacia o desde la IP `192.168.1.10`.                                                                |
|                      | `src host 192.168.1.10`           | Tráfico originado *desde* la IP `192.168.1.10`.                                                            |
|                      | `dst host www.google.com`         | Tráfico destinado *hacia* `www.google.com` (requiere resolución DNS si no se usa `-n`).                |
| **Por Red**          | `net 192.168.1.0/24`              | Tráfico hacia o desde la red `192.168.1.0/24`.                                                             |
|                      | `src net 10.0.0.0 mask 255.0.0.0` | Tráfico originado desde la red `10.0.0.0/8`.                                                               |
| **Por Puerto**       | `port 80`                         | Tráfico en el puerto 80 (HTTP), origen o destino.                                                        |
|                      | `src port 12345`                  | Tráfico originado *desde* el puerto 12345.                                                                 |
|                      | `dst port 443`                    | Tráfico destinado *hacia* el puerto 443 (HTTPS).                                                           |
| **Por Protocolo**    | `tcp`                             | Solo paquetes TCP.                                                                                       |
|                      | `udp`                             | Solo paquetes UDP.                                                                                       |
|                      | `icmp`                            | Solo paquetes ICMP (ej. ping).                                                                           |
|                      | `arp`                             | Solo paquetes ARP.                                                                                       |
| **Operadores Lógicos** | `host 1.2.3.4 and port 80`      | **AND (`and` o `&&`):** Ambas condiciones deben cumplirse.                                                  |
|                      | `port 80 or port 443`             | **OR (`or` o `||`):** Al menos una condición debe cumplirse.                                                |
|                      | `not arp`                         | **NOT (`not` o `!`):** Excluye paquetes que cumplen la condición.                                          |
| **Combinado**        | `(src host 10.0.0.5 or dst host 10.0.0.5) and not icmp` | Tráfico desde o hacia `10.0.0.5`, excluyendo ICMP. Usa paréntesis para agrupar.         |
| **Ejemplo práctico de combinación** | `sudo tcpdump -i eth0 -nn -c9 port 80 -w captura_http.pcap` | Captura 9 paquetes en `eth0` sin resolver nombres, solo del puerto 80, y guarda en `captura_http.pcap`. |

*Nota: Las expresiones de filtro de `tcpdump` se aplican **antes** de que los paquetes se guarden o se muestren, a diferencia de los filtros de visualización de Wireshark que actúan sobre la captura ya hecha.*

### E. Visualización Detallada del Contenido del Paquete

`tcpdump` ofrece opciones para inspeccionar el contenido de los paquetes más allá de los resúmenes.

| Comando                               | Descripción                                                                                                                                                           |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sudo tcpdump -r captura.pcap -X`     | Lee `captura.pcap` y muestra el contenido de cada paquete en formato **Hexadecimal y ASCII**. Útil para ver la carga útil (payload).                                       |
| `sudo tcpdump -r captura.pcap -XX`    | Similar a `-X`, pero también muestra la cabecera Ethernet.                                                                                                              |
| `sudo tcpdump -r captura.pcap -A`     | Lee `captura.pcap` y muestra la carga útil de cada paquete solo en formato **ASCII**. Útil si esperas texto legible.                                                      |
| `sudo tcpdump -r captura.pcap -x`     | Muestra el contenido en hexadecimal (sin ASCII).                                                                                                                        |
| `sudo tcpdump -r captura.pcap -xx`    | Muestra el contenido en hexadecimal, incluyendo la cabecera Ethernet.                                                                                                   |
| `sudo tcpdump -i eth0 -e`             | Captura en `eth0` y muestra la **dirección de la capa de enlace** (dirección MAC) en la salida.                                                                       |
| `sudo tcpdump -i eth0 -q`             | Modo "quiet" (silencioso). Imprime menos información de protocolo, haciendo la salida más corta.                                                                         |
| `sudo tcpdump -i eth0 -t`             | No imprime la marca de tiempo en cada línea.                                                                                                                            |
| `sudo tcpdump -i eth0 -tt`            | Imprime una marca de tiempo no formateada.                                                                                                                              |
| `sudo tcpdump -i eth0 -ttt`           | Imprime un delta (diferencia) de tiempo entre la línea actual y la anterior.                                                                                            |
| `sudo tcpdump -i eth0 -tttt`          | Imprime una marca de tiempo formateada con fecha y hora.                                                                                                                |
| `sudo tcpdump -i eth0 -ttttt`         | Imprime un delta de tiempo entre la línea actual y la primera línea capturada.                                                                                          |
| `sudo tcpdump -i eth0 -S`             | Imprime números de secuencia TCP absolutos, en lugar de relativos.                                                                                                      |
| `sudo tcpdump -i eth0 -s0`            | Establece el "snaplength" (longitud de captura) a 0, lo que significa capturar el paquete completo. Por defecto, `tcpdump` puede truncar paquetes grandes para ser eficiente. ` -s0 ` es equivalente a ` -s 65535 `. |

## 4. Entendiendo la Salida de `tcpdump`

La salida estándar de `tcpdump` puede parecer densa al principio. Aquí un ejemplo de una línea típica y su desglose (como el que proporcionaste originalmente):

**Desglose General:**
1.  `22:24:18.910372`: Marca de tiempo (Timestamp).
2.  `IP`: Protocolo de capa de red (Internet Protocol).
3.  `(tos 0x0, ttl 64, id 5802, offset 0, flags [DF], proto TCP (6), length 134)`: Detalles del encabezado IP:
    *   `tos 0x0`: Tipo de Servicio.
    *   `ttl 64`: Tiempo de Vida.
    *   `id 5802`: Identificador del paquete.
    *   `offset 0`: Desplazamiento de fragmento.
    *   `flags [DF]`: Banderas IP (DF = Don't Fragment).
    *   `proto TCP (6)`: Protocolo encapsulado (TCP, número de protocolo 6).
    *   `length 134`: Longitud total del paquete IP en bytes.
4.  `7acb26dc1f44.5000 > nginx-us-east1-c.c.qwiklabs-terminal-vms-prod-00.internal.59788`: Dirección IP/nombre de host y puerto de origen (`src`) **>** Dirección IP/nombre de host y puerto de destino (`dst`).
    *   `7acb26dc1f44` es el nombre de host de origen (si no se usa `-n`).
    *   `.5000` es el puerto de origen.
    *   `nginx-us-east1-c...internal` es el nombre de host de destino.
    *   `.59788` es el puerto de destino.
5.  `Flags [P.], cksum 0x5851 (incorrect > 0x30d3), seq 1080713945:1080714027, ack 62760789, win 501, options [...], length 82`: Detalles específicos del protocolo TCP:
    *   `Flags [P.]`: Banderas TCP (P = PUSH, . = ACK implicado o no SYN/FIN/RST).
    *   `cksum`: Checksum.
    *   `seq ...`: Número de secuencia.
    *   `ack ...`: Número de acuse de recibo.
    *   `win ...`: Tamaño de ventana.
    *   `options [...]`: Opciones TCP.
    *   `length 82`: Longitud de los datos TCP (payload).

**Notas Adicionales sobre la Salida:**
*   **Hexadecimal (Hex):** Sistema de base 16 (0-9, A-F). Usado comúnmente para representar datos binarios de forma compacta.
*   **ASCII (American Standard Code for Information Interchange):** Estándar de codificación de caracteres para representar texto.