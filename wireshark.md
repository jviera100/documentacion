Tarea 1: Explora datos con Wireshark
En esta tarea, debes abrir un archivo de captura de paquetes de red que contiene datos capturados de un sistema que realizó solicitudes web a un sitio. Abrirás estos datos con Wireshark para obtener un panorama de cómo se muestran los datos en la aplicación.

Haz doble clic en el archivo sample para abrir el archivo de captura de paquetes en el escritorio de Windows. Wireshark se iniciará.
El archivo de captura de paquetes tiene el ícono de archivo de captura de paquetes de Wireshark, que muestra la aleta de un tiburón que nada sobre tres filas de dígitos binarios. Este archivo tiene una extensión .pcap que está oculta de forma predeterminada en Windows Explorer y en la vista para computadoras de escritorio.

Nota: Es posible que aparezca un cuadro de diálogo Software Update para notificarte que hay una nueva versión de Wireshark disponible. Haz clic en Skip this version.
Haz doble clic en la barra de título de Wireshark junto al nombre de archivo sample.pcap para maximizar la ventana de la aplicación Wireshark. Interfaz de usuario principal de tres paneles de Wireshark.
Se mostrará una lista con una gran cantidad de tráfico de paquetes de red, por lo que aplicarás filtros para encontrar la información necesaria en un próximo paso.

Por ahora, te mostramos una descripción general de las columnas de propiedades clave que se muestran para cada paquete:

No.: el número de índice del paquete en este archivo de captura de paquetes
Time: la marca de tiempo del paquete
Source: la dirección IP de origen
Destination: la dirección IP de destino
Protocol: el protocolo contenido en el paquete
Length: la longitud total del paquete
Info: cierta información sobre los datos en el paquete (la carga útil) según la interpretación de Wireshark
No todos los paquetes de datos tienen el mismo color. Se utilizan reglas de colores para proporcionar indicaciones visuales de alto nivel que te ayudarán a clasificar rápidamente los diferentes tipos de datos. Dado que los archivos de captura de paquetes de red pueden contener grandes cantidades de datos, puedes usar reglas de colores para identificar rápidamente los datos que consideras relevantes. El paquete de ejemplo muestra una lista de un grupo de paquetes de color azul claro que contienen tráfico de DNS, seguido de paquetes verdes que contienen una mezcla de tráfico de protocolo TCP y HTTP.

Desplázate hacia abajo en la lista de paquetes hasta que aparezca un paquete donde la columna de información comience con las palabras "Echo (ping) request".

¿Cuál es el protocolo del primer paquete de la lista donde la columna de información comienza con las palabras 'Echo (ping) request'?

SSH

ICMP

TCP

HTTP

Tarea 2: Aplica un filtro de Wireshark básico e inspecciona un paquete
En esta tarea, abrirás un paquete en Wireshark para realizar una exploración más detallada y filtrarás los datos para inspeccionar las capas de red y los protocolos contenidos en el paquete.

Ingresa el siguiente filtro para el tráfico asociado con una dirección IP específica. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:
ip.addr == 142.250.1.139
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
La lista de paquetes que se muestra ahora se redujo significativamente y contiene solo aquellos paquetes en los que la dirección IP de origen o de destino coincide con la dirección que ingresaste. Ahora se utilizan solo dos colores de paquetes: rosa claro para los paquetes de protocolo ICMP y verde claro para los paquetes de TCP (y HTTP, que es un subconjunto de TCP).

Haz doble clic en el primer paquete de la lista que tenga TCP como protocolo.
Se abrirá una ventana del panel de detalles del paquete:

Panel de detalles del paquete de Wireshark 

La sección superior de esta ventana contiene subárboles en los que Wireshark te brinda un análisis de las diferentes partes del paquete de red. La sección inferior de la ventana contiene los datos del paquete sin procesar que se muestran en formato de texto hexadecimal y ASCII. También verás texto de marcadores de posición en los campos donde los datos de caracteres no aplican, como se indica con el punto (".").

Nota: El panel de detalles se encuentra en la parte inferior de la ventana principal de Wireshark. Si haces doble clic en un paquete, se abrirá el panel de detalles en una nueva ventana.
Haz doble clic en el primer subárbol de la sección superior, que comienza con la palabra Frame.
Esta sección te proporciona detalles sobre el paquete o marco de red general, incluida la longitud del marco y la hora de llegada del paquete. En este nivel, verás información sobre todo el paquete de datos.

Vuelve a hacer doble clic en Frame para contraer el subárbol, y haz doble clic en el subárbol Ethernet II.
Este elemento contiene detalles sobre el paquete a nivel de Ethernet, incluidas las direcciones MAC de origen y de destino y el tipo de protocolo interno que el paquete Ethernet contiene.

Vuelve a hacer doble clic en Ethernet II para contraer el subárbol y, luego, haz doble clic en el subárbol Internet Protocol Version 4.
Este elemento proporciona datos de paquetes relacionados con los datos del Protocolo de Internet (IP) contenidos en el paquete Ethernet. Contiene información como las direcciones IP de origen y de destino y el protocolo interno (por ejemplo, TCP o UDP), que se transporta dentro del paquete IP.

Nota: El subárbol Internet Protocol Version 4 es el Internet Protocol Version 4 (IPv4). La etiqueta del tercer subárbol refleja el protocolo.
Las direcciones IP de origen y de destino que se muestran aquí coinciden con las direcciones IP de origen y de destino de la pantalla de resumen de este paquete en la ventana principal de Wireshark.

Haz doble clic en Internet Protocol Version 4 nuevamente para contraer ese subárbol y, luego, haz doble clic en el subárbol Transmission Control Protocol.
Este subárbol brinda información detallada sobre el paquete de TCP, incluidos los puertos TCP de origen y de destino, los números de secuencia de TCP y las marcas de TCP.

Los puertos de origen y destino enumerados aquí coinciden con los de la columna de información de la pantalla del resumen correspondiente a este paquete en la lista de todos los paquetes de la ventana principal de Wireshark.


¿Cuál es el puerto de destino TCP de este paquete TCP?

53

80

200

66

En el subárbol Transmission Control Protocol, desplázate hacia abajo y haz doble clic en Flags.
Verás una vista detallada de las marcas de TCP establecidas en este paquete.

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.

Ubicación del botón Clear Filter de Wireshark. 

Todos los paquetes se muestran nuevamente en la pantalla.

Si cierras accidentalmente la aplicación Wireshark, haz doble clic en el archivo sample en el escritorio para volver a abrirla.

Tarea 3: Usa filtros para seleccionar paquetes
En esta tarea, usarás filtros para analizar paquetes de red específicos según su origen o destino. Explorarás formas de seleccionar paquetes según la dirección física Media Access Control (MAC) de Ethernet o la dirección de protocolo de Internet (IP).

Ingresa el siguiente filtro para seleccionar el tráfico de solo una dirección IP de origen específica. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:
ip.src == 142.250.1.139
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
Se muestra una lista filtrada con menos entradas que antes. Solo contiene paquetes que provienen de 142.250.1.139.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.

Ingresa el siguiente filtro para seleccionar el tráfico de solo una dirección IP de destino específica:

ip.dst == 142.250.1.139
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
Se muestra una lista filtrada que contiene solo los paquetes que se enviaron a 142.250.1.139.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones IP.

Ingresa el siguiente filtro para seleccionar el tráfico hacia o desde una dirección MAC de Ethernet específica. Se filtrará el tráfico relacionado con una dirección MAC, independientemente de los otros protocolos involucrados:

eth.addr == 42:01:ac:15:e0:02
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.

Haz doble clic en el primer paquete de la lista. Es posible que debas desplazarte hacia atrás para ver el primer paquete de la lista filtrada.

Haz doble clic en el subárbol Ethernet II si aún no está abierto.

La dirección MAC que especificaste en el filtro aparece como la dirección de origen o de destino en el subárbol Ethernet II expandido.

Haz doble clic en el subárbol Ethernet II para cerrarlo.

Haz doble clic en el subárbol Internet Protocol Version 4 para expandirlo y desplázate hacia abajo hasta que aparezcan los campos Time to Live y Protocol.

El campo Protocol del subárbol Internet Protocol Version 4 indica qué protocolo interno de IP está contenido en el paquete


¿Cuál es el protocolo contenido en el subárbol Internet Protocol Version 4 del primer paquete relacionado con la dirección MAC 42:01:ac:15:e0:02?

ICMP

TCP

ESP

UDP

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro de direcciones MAC.

Tarea 4: Usa filtros para explorar paquetes de DNS
En esta tarea, usarás filtros para seleccionar y examinar el tráfico de DNS. Una vez que hayas seleccionado el tráfico de DNS de muestra, desglosarás el protocolo para examinar cómo los datos del paquete de DNS contienen tanto consultas (nombres de sitios de Internet que se buscan) como respuestas (direcciones IP que un servidor DNS devuelve cuando un nombre se resuelve con éxito).

Ingresa el siguiente filtro para seleccionar el tráfico del puerto UDP 53. El tráfico de DNS usa el puerto UDP 53, por lo que solo mostrará el tráfico relacionado con consultas y respuestas de DNS. Ingresa esta información en el cuadro de texto Apply a display filter... justo encima de la lista de paquetes:

udp.port == 53
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.

Haz doble clic en el primer paquete de la lista para abrir la ventana detallada del paquete.

Desplázate hacia abajo y haz doble clic en el subárbol Domain Name System (query) para expandirlo.

Desplázate hacia abajo y haz doble clic en Queries.

Verás que el nombre del sitio web que se consultó es opensource.google.com.

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz doble clic en el cuarto paquete de la lista para abrir la ventana detallada del paquete.

Desplázate hacia abajo y haz doble clic en el subárbol Domain Name System (query) para expandirlo.

Desplázate hacia abajo y haz doble clic en Answers, que se encuentra en el subárbol Domain Name System (query).

Los datos de la sección Answers incluyen el nombre que se consultó (opensource.google.com) y las direcciones asociadas con ese nombre.


¿Cuál de estas direcciones IP se muestra en la sección Answers expandida de la consulta de DNS correspondiente a opensource.google.com?

169.254.169.254

142.250.1.139

139.1.250.142

172.21.224.1

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro.

Tarea 5: Usa filtros para explorar paquetes de TCP
En esta tarea, usarás filtros adicionales para seleccionar y examinar paquetes de TCP. Aprenderás a buscar texto que se encuentre en los datos de carga útil de los paquetes de red. De esta forma, podrás localizar los paquetes en función de aspectos como un nombre o algún otro texto que te interese.

Ingresa el siguiente filtro para seleccionar el tráfico del puerto TCP 80. El puerto TCP 80 es el puerto predeterminado que está asociado con el tráfico web:
tcp.port == 80
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
Se crearon bastantes paquetes cuando el usuario accedió a la página web http://opensource.google.com.

Haz doble clic en el primer paquete de la lista. La dirección IP de destino de este paquete es 169.254.169.254.

¿Cuál es el valor de Time to Live del paquete como se especifica en el subárbol Internet Protocol Version 4?

128

16

32

64


¿Cuál es el valor de Frame Length del paquete como se especifica en el subárbol Frame?

74 bytes

60 bytes

54 bytes

40 bytes


¿Cuál es el valor de Header Length del paquete como se especifica en el subárbol Internet Protocol Version 4?

60 bytes

74 bytes

54 bytes

20 bytes


¿Cuál es el valor de Destination Address como se especifica en el subárbol Internet Protocol Version 4?

239.1.250.142

142.250.1.139

172.21.224.2

169.254.169.254

Haz clic en el ícono X para cerrar la ventana de inspección de paquetes detallada.

Haz clic en el ícono X Clear display filter de la barra de filtros de Wireshark para quitar el filtro.

Ingresa el siguiente filtro para seleccionar datos de paquetes de TCP que contengan datos de texto específicos.

tcp contains "curl"
Se copió correctamente
Presiona Intro o haz clic en el ícono Apply display filter del cuadro de texto del filtro.
Esta acción filtra los paquetes que contienen solicitudes web realizadas con el comando curl en este archivo de captura de paquetes de muestra.