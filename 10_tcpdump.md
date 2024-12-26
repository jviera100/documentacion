### Comandos para Análisis de Paquetes de Red con tcpdump

1. **Identificar Interfaces Disponibles**:
    - `sudo ifconfig`: Usa `ifconfig` para identificar las interfaces que estén disponibles.
    - `sudo tcpdump -D`: Permite identificar qué interfaces de red están disponibles.

2. **Capturar Paquetes de la Interfaz eth0**:
    - `sudo tcpdump -i eth0 -v -c5`:
        - `-i eth0`: Captura datos de la interfaz eth0 específicamente.
        - `-v`: Muestra datos de un paquete en detalle.
        - `-c5`: Captura 5 paquetes de datos.

**Explorar los Detalles del Paquete de Red**:

```sh
tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes
22:24:18.910372 IP (tos 0x0, ttl 64, id 5802, offset 0, flags [DF], proto TCP (6), length 134)
7acb26dc1f44.5000 > nginx-us-east1-c.c.qwiklabs-terminal-vms-prod-00.internal.59788:
Flags [P.], cksum 0x5851 (incorrect > 0x30d3), seq 1080713945:1080714027, ack 62760789, win 501, options [nop,nop,TS val 1017464119 ecr 3001513453], length 82
```

3. **Capturar y Guardar Paquetes en un Archivo**:
    - `sudo tcpdump -i eth0 -nn -c9 port 80 -w capture.pcap &`:
        - `-i eth0`: Captura datos de la interfaz eth0.
        - `-nn`: No intentes resolver direcciones IP o puertos con nombres.
        - `-c9`: Captura 9 paquetes de datos y luego sale.
        - `port 80`: Filtra solamente el tráfico del puerto 80.
        - `-w capture.pcap`: Guarda los datos capturados en el archivo nombrado.
        - `&`: Ejecuta el comando en segundo plano.

4. **Generar Tráfico HTTP**:
    - `curl opensource.google.com`: Usa `curl` para generar algo de tráfico HTTP (puerto 80).

5. **Verificar Datos Capturados**:
    - `ls -l capture.pcap`: Verifica que capturaste datos del paquete.

6. **Filtrar Datos del Encabezado del Paquete**:
    - `sudo tcpdump -nn -r capture.pcap -v`:
        - `-nn`: Inhabilita la búsqueda de nombres de puerto y protocolos.
        - `-r`: Lee los datos capturados del archivo nombrado.
        - `-v`: Muestra datos de un paquete en detalle.

7. **Filtrar Datos Ampliados del Paquete**:
    - `sudo tcpdump -nn -r capture.pcap -X`:
        - `-nn`: Inhabilita la búsqueda de nombres de puerto y protocolos.
        - `-r`: Lee los datos capturados del archivo nombrado.
        - `-X`: Muestra los datos del paquete como resultados en formato ASCII y hexadecimal.

**Notas**:
- El sistema hexadecimal, también conocido como hex o de base 16, utiliza 16 símbolos para representar valores, incluyendo los dígitos del 0 al 9 y las letras A, B, C, D, E y F.
- El American Standard Code for Information Interchange (ASCII) es un estándar de codificación de caracteres que utiliza un conjunto de caracteres para representar texto en forma digital.

# -w => tcpdump para capturar o guardar el tráfico de red en un archivo de captura de paquetes para su posterior análisis.