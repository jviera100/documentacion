Gracias por compartir esta tarea tan detallada sobre cómo explorar datos con Wireshark. Aquí está la continuación de la guía:

### Tarea 1: Explora datos con Wireshark

En esta tarea, abrirás un archivo de captura de paquetes de red que contiene datos capturados de un sistema que realizó solicitudes web a un sitio. Abrirás estos datos con Wireshark para obtener un panorama de cómo se muestran los datos en la aplicación.

1. **Abrir Archivo de Captura de Paquetes**:
    - Haz doble clic en el archivo sample para abrir el archivo de captura de paquetes en el escritorio de Windows. Wireshark se iniciará.
    - El archivo de captura de paquetes tiene el ícono de archivo de captura de paquetes de Wireshark, que muestra la aleta de un tiburón que nada sobre tres filas de dígitos binarios. Este archivo tiene una extensión .pcap que está oculta de forma predeterminada en Windows Explorer y en la vista para computadoras de escritorio.
    - Nota: Es posible que aparezca un cuadro de diálogo Software Update para notificarte que hay una nueva versión de Wireshark disponible. Haz clic en Skip this version.
    - Haz doble clic en la barra de título de Wireshark junto al nombre de archivo sample.pcap para maximizar la ventana de la aplicación Wireshark.
    - Se mostrará una lista con una gran cantidad de tráfico de paquetes de red, por lo que aplicarás filtros para encontrar la información necesaria en un próximo paso.

2. **Descripción General de las Columnas de Propiedades Clave**:
    - **No.**: El número de índice del paquete en este archivo de captura de paquetes.
    - **Time**: La marca de tiempo del paquete.
    - **Source**: La dirección IP de origen.
    - **Destination**: La dirección IP de destino.
    - **Protocol**: El protocolo contenido en el paquete.
    - **Length**: La longitud total del paquete.
    - **Info**: Cierta información sobre los datos en el paquete (la carga útil) según la interpretación de Wireshark.

3. **Colores de los Paquetes**:
    - No todos los paquetes de datos tienen el mismo color. Se utilizan reglas de colores para proporcionar indicaciones visuales de alto nivel que te ayudarán a clasificar rápidamente los diferentes tipos de datos.
    - El paquete de ejemplo muestra una lista de un grupo de paquetes de color azul claro que contienen tráfico de DNS, seguido de paquetes verdes que contienen una mezcla de tráfico de protocolo TCP y HTTP.

4. **Buscar Paquete "Echo (ping) request"**:
    - Desplázate hacia abajo en la lista de paquetes hasta que aparezca un paquete donde la columna de información comience con las palabras "Echo (ping) request".

**Pregunta: ¿Cuál es el protocolo del primer paquete de la lista donde la columna de información comienza con las palabras 'Echo (ping) request'?**
- SSH
- ICMP
- TCP
- HTTP

### Tarea 2: Aplica un filtro de Wireshark básico e inspecciona un paquete

1. **Ingresar Filtro de Tráfico para Dirección IP Específica**:
    - Ingresa el siguiente filtro para el tráfico asociado con una dirección IP específica. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:
    ```sh
    ip.addr == 142.250.1.139
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.

2. **Inspeccionar Paquete TCP**:
    - Haz doble clic en el primer paquete de la lista que tenga TCP como protocolo.
    - Se abrirá una ventana del panel de detalles del paquete.
    - Nota: El panel de detalles se encuentra en la parte inferior de la ventana principal de Wireshark. Si haces doble clic en un paquete, se abrirá el panel de detalles en una nueva ventana.
    - Haz doble clic en el primer subárbol de la sección superior, que comienza con la palabra Frame.
    - Vuelve a hacer doble clic en Frame para contraer el subárbol, y haz doble clic en el subárbol Ethernet II.
    - Vuelve a hacer doble clic en Ethernet II para contraer el subárbol y, luego, haz doble clic en el subárbol Internet Protocol Version 4.
    - Haz doble clic en Internet Protocol Version 4 nuevamente para contraer ese subárbol y, luego, haz doble clic en el subárbol Transmission Control Protocol.

3. **Puerto de Destino TCP**:
    - Este subárbol brinda información detallada sobre el paquete de TCP, incluidos los puertos TCP de origen y de destino, los números de secuencia de TCP y las marcas de TCP.

**Pregunta: ¿Cuál es el puerto de destino TCP de este paquete TCP?**
- 53
- 80
- 200
- 66

4. **Ver Detalles de Flags de TCP**:
    - En el subárbol Transmission Control Protocol, desplázate hacia abajo y haz doble clic en Flags.
    - Verás una vista detallada de las marcas de TCP establecidas en este paquete.
    - Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.
    - Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.
    - Todos los paquetes se muestran nuevamente en la pantalla.

### Tarea 3: Usa filtros para seleccionar paquetes

1. **Seleccionar Tráfico de Dirección IP de Origen Específica**:
    - Ingresa el siguiente filtro para seleccionar el tráfico de solo una dirección IP de origen específica. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:
    ```sh
    ip.src == 142.250.1.139
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
    - Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.

2. **Seleccionar Tráfico de Dirección IP de Destino Específica**:
    - Ingresa el siguiente filtro para seleccionar el tráfico de solo una dirección IP de destino específica:
    ```sh
    ip.dst == 142.250.1.139
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
    - Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.

3. **Seleccionar Tráfico de Dirección MAC de Ethernet Específica**:
    - Ingresa el siguiente filtro para seleccionar el tráfico hacia o desde una dirección MAC de Ethernet específica:
    ```sh
    eth.addr == 42:01:ac:15:e0:02
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.

4. **Inspeccionar Paquete MAC**:
    - Haz doble clic en el primer paquete de la lista.
    - Haz doble clic en el subárbol Ethernet II si aún no está abierto.
    - La dirección MAC que especificaste en el filtro aparece como la dirección de origen o de destino en el subárbol Ethernet II expandido.
    - Haz doble clic en el subárbol Ethernet II para cerrarlo.
    - Haz doble clic en el subárbol Internet Protocol Version 4 para expandirlo y desplázate hacia abajo hasta que aparezcan los campos Time to Live y Protocol.

**Pregunta: ¿Cuál es el protocolo contenido en el subárbol Internet Protocol Version 4 del primer paquete relacionado con la dirección MAC 42:01:ac:15:e0:02?**
- ICMP
- TCP
- ESP
- UDP

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones MAC.

### Tarea 4: Usa filtros para explorar paquetes de DNS

En esta tarea, usarás filtros para seleccionar y examinar el tráfico de DNS. Una vez que hayas seleccionado el tráfico de DNS de muestra, desglosarás el protocolo para examinar cómo los datos del paquete de DNS contienen tanto consultas (nombres de sitios de Internet que se buscan) como respuestas (direcciones IP que un servidor DNS devuelve cuando un nombre se resuelve con éxito).

1. **Seleccionar Tráfico del Puerto UDP 53**:
    - Ingresa el siguiente filtro para seleccionar el tráfico del puerto UDP 53. El tráfico de DNS usa el puerto UDP 53, por lo que solo mostrará el tráfico relacionado con consultas y respuestas de DNS. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:
    ```sh
    udp.port == 53
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.

2. **Abrir y Examinar Paquete DNS**:
    - Haz doble clic en el primer paquete de la lista para abrir la ventana detallada del paquete.
    - Desplázate hacia abajo y haz doble clic en el subárbol Domain Name System (query) para expandirlo.
    - Desplázate hacia abajo y haz doble clic en Queries.
    - Verás que el nombre del sitio web que se consultó es opensource.google.com.
    - Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

3. **Examinar Respuestas de DNS**:
    - Haz doble clic en el cuarto paquete de la lista para abrir la ventana detallada del paquete.
    - Desplázate hacia abajo y haz doble clic en el subárbol Domain Name System (query) para expandirlo.
    - Desplázate hacia abajo y haz doble clic en Answers, que se encuentra en el subárbol Domain Name System (query).

**Pregunta: ¿Cuál de estas direcciones IP se muestra en la sección Answers expandida de la consulta de DNS correspondiente a opensource.google.com?**
- 169.254.169.254
- 142.250.1.139
- 139.1.250.142
- 172.21.224.1

4. **Quitar Filtro de DNS**:
    - Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.
    - Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro.

### Tarea 5: Usa filtros para explorar paquetes de TCP

En esta tarea, usarás filtros adicionales para seleccionar y examinar paquetes de TCP. Aprenderás a buscar texto que se encuentre en los datos de carga útil de los paquetes de red. De esta forma, podrás localizar los paquetes en función de aspectos como un nombre o algún otro texto que te interese.

1. **Seleccionar Tráfico del Puerto TCP 80**:
    - Ingresa el siguiente filtro para seleccionar el tráfico del puerto TCP 80. El puerto TCP 80 es el puerto predeterminado que está asociado con el tráfico web:
    ```sh
    tcp.port == 80
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
    - Se crearon bastantes paquetes cuando el usuario accedió a la página web http://opensource.google.com.

2. **Examinar Paquete TCP**:
    - Haz doble clic en el primer paquete de la lista. La dirección IP de destino de este paquete es 169.254.169.254.

**Preguntas**:

- **¿Cuál es el valor de Time to Live del paquete como se especifica en el subárbol Internet Protocol Version 4?**
  - 128
  - 16
  - 32
  - 64

- **¿Cuál es el valor de Frame Length del paquete como se especifica en el subárbol Frame?**
  - 74 bytes
  - 60 bytes
  - 54 bytes
  - 40 bytes

- **¿Cuál es el valor de Header Length del paquete como se especifica en el subárbol Internet Protocol Version 4?**
  - 60 bytes
  - 74 bytes
  - 54 bytes
  - 20 bytes

- **¿Cuál es el valor de Destination Address como se especifica en el subárbol Internet Protocol Version 4?**
  - 239.1.250.142
  - 142.250.1.139
  - 172.21.224.2
  - 169.254.169.254

3. **Quitar Filtro de TCP**:
    - Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.
    - Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro.

4. **Seleccionar Paquetes de TCP que Contengan Datos de Texto Específicos**:
    - Ingresa el siguiente filtro para seleccionar datos de paquetes de TCP que contengan datos de texto específicos:
    ```sh
    tcp contains "curl"
    ```
    - Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
    - Esta acción filtra los paquetes que contienen solicitudes web realizadas con el comando curl en este archivo de captura de paquetes de muestra.

