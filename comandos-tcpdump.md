sudo ifconfig => Usa ifconfig para identificar las interfaces que estén disponibles:
sudo tcpdump -D => permitirá identificar qué interfaces de red están disponibles. Esto puede ser útil en sistemas que no incluyen el comando ifconfig.
sudo tcpdump -i eth0 -v -c5 => 
    -i eth0: Captura datos de la interfaz eth0 específicamente.
    -v: Muestra datos de un paquete en detalle.
    -c5: Captura 5 paquetes de datos.
# Explora los detalles del paquete de red
tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes
    En los datos de muestra del comienzo de los resultados del paquete, tcpdump informó que escuchaba la interfaz eth0. Además, proporcionó información sobre el tipo de vínculo y el tamaño de la captura en bytes:
22:24:18.910372 IP 
    En la línea siguiente, el primer campo corresponde a la marca de tiempo del paquete, seguido del tipo de protocolo, que es IP:
(tos 0x0, ttl 64, id 5802, offset 0, flags [DF], proto TCP (6), length 134)
    La opción que lista los detalles, -v, proporcionó más información sobre los campos del paquete IP, como el tipo de servicio; el TTL; la desviación; las marcas; el tipo de protocolo interno (en este caso, TCP (6)) y el tamaño del paquete IP externo en bytes:
7acb26dc1f44.5000 > nginx-us-east1-c.c.qwiklabs-terminal-vms-prod-00.internal.59788:
    los datos muestran qué sistemas se comunican entre sí: De forma predeterminada, tcpdump convertirá las direcciones IP en nombres, como se muestra en la captura de pantalla. El nombre de tu máquina virtual de Linux, que también se incluye en el símbolo del sistema, aparece aquí como el origen del primer paquete y el destino del segundo. En tus datos en vivo, el nombre será un conjunto diferente de letras y números.
    La flecha (>) indica la dirección del flujo de tráfico de este paquete. Cada nombre de sistema incluye un sufijo con el número de puerto (.5000 en la captura de pantalla), que se usa para este paquete en los sistemas de origen y de destino.
Flags [P.], cksum 0x5851 (incorrect > 0x30d3), seq 1080713945:1080714027, ack 62760789, win 501, options [nop,nop,TS val 1017464119 ecr 3001513453], length 82
    Los datos restantes filtran los datos del encabezado para el paquete TCP interno: El campo Flags identifica las marcas de TCP. En este caso, la P representa la marca push, mientras que el punto indica que es una marca de ACK. Esto significa que el paquete está enviando datos.
    El campo siguiente es el valor de la suma de verificación de TCP. Se usa para detectar errores en los datos.
    Esta sección también incluye los números de secuencia y de confirmación de recepción, el tamaño de la ventana y el tamaño del paquete TCP interno en bytes.
sudo tcpdump -i eth0 -nn -c9 port 80 -w capture.pcap &
    -i eth0: Captura datos de la interfaz eth0.
    -nn: No intentes resolver direcciones IP o puertos con nombres. Esta es una práctica recomendada de seguridad, ya que los datos de la búsqueda podrían no ser válidos. También evita que se alerte a actores maliciosos de posibles investigaciones en curso.
    -c9: Captura 9 paquetes de datos y luego sale.
    port 80: Filtra solamente el tráfico del puerto 80. Este es el puerto HTTP predeterminado.
    -w capture.pcap: Guarda los datos capturados en el archivo nombrado.
    &: Esta es una instrucción para que la shell Bash ejecute el comando en segundo plano.
curl opensource.google.com
    Usa curl para generar algo de tráfico HTTP (puerto 80):
ls -l capture.pcap
    Verifica que capturaste datos del paquete:
sudo tcpdump -nn -r capture.pcap -v
    Usa el comando tcpdump para filtrar datos del encabezado del paquete que se encuentren en el archivo de captura capture.pcap:
    -nn: Inhabilita la búsqueda de nombres de puerto y protocolos.
    -r: Lee los datos capturados del archivo nombrado.
    -v: Muestra datos de un paquete en detalle.
    Debes especificar el interruptor -nn nuevamente, ya que quieres asegurarte de que tcpdump no busque nombres de direcciones IP o puertos, ya que podría alertar a actores maliciosos.
sudo tcpdump -nn -r capture.pcap -X
    Usa el comando tcpdump para filtrar los datos ampliados del paquete que se encuentren en el archivo de captura capture.pcap:
    -nn: Inhabilita la búsqueda de nombres de puerto y protocolos.
    -r: Lee los datos capturados del archivo nombrado.
    -X: Muestra los datos del paquete como resultados en formato ASCII y hexadecimal. Los analistas de seguridad pueden analizar los resultados hexadecimales y ASCII para detectar patrones o anomalías durante un análisis forense o de software malicioso.
    Nota: El sistema hexadecimal, también conocido como hex o de base 16, utiliza 16 símbolos para representar valores, incluyendo los dígitos del 0 al 9 y las letras A, B, C, D, E y F. El American Standard Code for Information Interchange (ASCII) es un estándar de codificación de caracteres que utiliza un conjunto de caracteres para representar texto en forma digital.

# -w => tcpdump para capturar o guardar el tráfico de red en un archivo de captura de paquetes para su posterior análisis.