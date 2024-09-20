# Tarea 1: Examina una regla personalizada en Suricata 
alert http $HOME_NET any -> $EXTERNAL_NET any (msg:"GET on wire"; flow:established,to_server; content:"GET"; http_method; sid:12345; rev:3;)
# accion NIDS
-alert: alerta de trafico y IDS inspecciona
-drop: alerta de trafico, descarta trafico, suricata modo IPS
-pass: permite que pase el tráfico por la interfaz de la red. Se puede usar la regla pass para anular las otras reglas. También se puede hacer una excepción 
de la regla drop con una regla pass
-reject: no permite que pase el tráfico. En su lugar, se enviará un paquete de restablecimiento de TCP. Luego, Suricata descartará el paquete que coincida. Un paquete de restablecimiento de TCP indica a las computadoras que dejen de enviar mensajes entre sí.
# ENCABEZADO

La siguiente parte de la firma es el encabezado. Define el tráfico de red de la firma, que incluye algunos atributos como los protocolos, la dirección del tráfico y las direcciones de IP y puertos de origen y de destino.

El siguiente campo después de la palabra clave de acción es el de protocolo. En el ejemplo, el protocolo es http, lo que determina que la regla se aplica solo al tráfico HTTP.

Los parámetros para el campo de protocolo http son $HOME_NET any -> $EXTERNAL_NET any. La flecha indica que el origen de la dirección del tráfico es $HOME_NET y que la dirección IP de destino es $EXTERNAL_NET.

$HOME_NET es una variable de Suricata definida en /etc/suricata/suricata.yaml que puedes usar en las definiciones de reglas como un marcador de posición para tu red local o doméstica con el fin de identificar el tráfico que se conecta a los sistemas de tu organización o que proviene de ellos.

En este lab, $HOME_NET se define como la subred 172.21.224.0/20.

La palabra any significa que Suricata detecta tráfico de todos los puertos definidos en la red $HOME_NET.

Nota: El símbolo $ indica el comienzo de la variable. Las variables se usan como marcadores de posición para almacenar valores.
Hasta ahora, aprendimos que esta firma activa una alerta cuando detecta tráfico HTTP que sale de la red doméstica y se dirige hacia la red externa.
# Opciones de la regla
Dispones de muchas opciones de la regla que te permiten personalizar firmas con parámetros adicionales. Si configuras estas opciones, podrás reducir el tráfico de red para encontrar exactamente lo que buscas. Como se ve en el ejemplo, por lo general las opciones de la regla están delimitadas entre paréntesis y separadas con punto y coma.

Examinemos en detalle las opciones de la regla del ejemplo:

La opción msg: proporciona el mensaje de alerta. En este caso, la alerta mostrará el mensaje "GET on wire", que especifica la razón por la que se activó la alarma.
La opción flow:established,to_server determina que deben emparejarse paquetes que van desde el cliente hacia el servidor. (En este caso, se define un servidor como el dispositivo que responde al paquete SYN inicial con un paquete SYN-ACK).
La opción content:"GET" indica a Suricata que busque la palabra GET en el contenido de la sección http.method del paquete.
La opción sid:12345 (ID de la firma) es un valor numérico único que identifica a la regla.
La opción rev:3 indica la revisión de la firma que se usa para identificar la versión de la firma. En este caso, la versión de la revisión es 3.
En resumen, esta firma activa una alerta cada vez que Suricata encuentra el mensaje GET como método HTTP en un paquete HTTP desde la red doméstica hacia la red externa.
# Tarea 2: Activa una regla personalizada en Suricata
Ahora que aprendiste sobre la composición de las reglas personalizadas de Suricata, debes activar una y examinar los registros de alertas que Suricata genera.

Obtén una lista de los archivos de la carpeta /var/log/suricata:
ls -l /var/log/suricata
Se copió correctamente
Observa que, antes de ejecutar Suricata, el directorio /var/log/suricata no contiene archivos.

Ejecuta suricata usando los archivos custom.rules y sample.pcap:
sudo suricata -r sample.pcap -S custom.rules -k none
Se copió correctamente
Este comando inicia Suricata y procesa el archivo sample.pcap usando las reglas del archivo custom.rules. También genera un resultado que indica la cantidad de paquetes que Suricata procesó.

Nota: En este lab, debes usar sudo para procesar archivos de captura de paquetes con Suricata. Sin embargo, es posible que no sea necesario en un entorno de uso real.
A continuación, examinarás en detalle las opciones del comando:

La opción -r sample.pcap especifica un archivo de entrada para imitar el tráfico de red, que en este caso es el archivo sample.pcap.
La opción -S custom.rules ordenará a Suricata usar las reglas definidas en el archivo custom.rules.
La opción -k none ordenará a Suricata inhabilitar todas las sumas de verificación.
Recuerda que las sumas de verificación son una forma para detectar si un paquete se modificó en tránsito. Debido a que usas tráfico de red de un archivo de muestra de captura de paquetes, no necesitarás Suricata para comprobar la integridad de la suma de verificación.

Suricata agrega una nueva línea de alerta al archivo /var/log/suricata/fast.log cuando se cumplen todas las condiciones de cualquier regla.

Obtén una vez más una lista de los archivos de la carpeta /var/log/suricata:
ls -l /var/log/suricata
Se copió correctamente
Observa que, después de ejecutar Suricata, ahora el directorio /var/log/suricata contiene cuatro archivos, incluidos los archivos fast.log y eve.json. Veamos estos archivos en detalle.

Usa el comando cat para mostrar el archivo fast.log que Suricata generó:
cat /var/log/suricata/fast.log
Se copió correctamente
El resultado genera entradas de alerta en el registro:

11/23/2022-12:38:34.624866  [**] [1:12345:3] GET on wire [**] [Classification: (null)] [Priority: 3] {TCP} 172.21.224.2:49652 -> 142.250.1.139:80
11/23/2022-12:38:58.958203  [**] [1:12345:3] GET on wire [**] [Classification: (null)] [Priority: 3] {TCP} 172.21.224.2:58494 -> 142.250.1.139:80
Cada línea o entrada del archivo fast.log corresponde a una alerta que Suricata generó cuando procesaba un paquete que cumple con las condiciones de una regla para generar alertas. Cada línea de alerta incluye el mensaje que identifica la regla que generó la alerta, así como el origen, el destino y la dirección del tráfico.
# Tarea 3: Examina el resultado de eve.json
En esta tarea, debes examinar el resultado adicional que Suricata genera en el archivo eve.json.

Como se mencionó anteriormente, este archivo se encuentra en el directorio /var/log/suricata/.

El archivo eve.json es el archivo de registro estándar y principal de Suricata y contiene muchos más datos que el archivo fast.log. Dichos datos se almacenan en formato JSON, lo que facilita el análisis y el procesamiento para otras apps.

Usa el comando cat para mostrar las entradas en el archivo eve.json:
cat /var/log/suricata/eve.json
Se copió correctamente
El resultado muestra el contenido del archivo sin procesar. Observarás que se muestran muchos datos y que este formato es un poco difícil de comprender.

Usa el comando jq para mostrar las entradas en un formato mejorado:
jq . /var/log/suricata/eve.json | less
Se copió correctamente
Nota: Puedes usar las teclas f y b minúsculas para avanzar o retroceder en el resultado. Además, si ingresas un comando de forma incorrecta y la interfaz no regresa a la ventana de la línea de comandos, puedes presionar CTRL+C para detener el proceso y forzar la shell a regresar a la ventana de la línea de comandos.
Presiona Q para salir del comando less y regresar a la ventana de la línea de comandos.
Observa lo fácil que es leer el resultado ahora en comparación con el resultado del comando cat.

Nota: La herramienta jq es muy útil para procesar datos JSON. Sin embargo, la explicación completa de sus funciones está fuera del alcance de este lab.

¿Cuál es el valor de la propiedad de gravedad de la primera alerta que devuelve el comando jq?

1

3

4

0

Usa el comando jq para extraer datos específicos de eventos del archivo eve.json:
jq -c "[.timestamp,.flow_id,.alert.signature,.proto,.dest_ip]" /var/log/suricata/eve.json
Se copió correctamente
Nota: El comando jq anterior extrae los campos especificados en la lista entre corchetes de la carga útil del archivo JSON. Los campos seleccionados son la marca de tiempo (.timestamp), el ID del flujo (.flow_id), el mensaje o alerta de la firma (.alert.signature), el protocolo (.proto) y la dirección IP de destino (.dest_ip).

¿Cuál es la dirección IP de destino que aparece para el último evento en el archivo 'eve.json'?

192.168.0.1

172.21.224.2

142.250.1.102

142.250.1.139


¿Cuál es la firma de alerta de la primera entrada de alerta en el archivo 'eve.json'?

BAD USER-AGENT

DROP ICMP for HOMENET

GET on wire

Pass ICMP for HOMENET

Usa el comando jq para mostrar todos los registros de eventos relacionados con un flow_id del archivoeve.json. El valor de flow_id es un número de 16 dígitos y será distinto para cada entrada de registro. Reemplaza X con cualquiera de los valores de flow_id que se mostraron en la consulta anterior:
jq "select(.flow_id==X)" /var/log/suricata/eve.json
Se copió correctamente
Nota: Un flujo de red es una secuencia de paquetes entre un origen y un destino que comparten características en común, como direcciones IP, protocolos, entre otras. En seguridad cibernética, los flujos de tráfico de red ayudan a los analistas a comprender el comportamiento del tráfico de red para identificar y analizar amenazas. Suricata asigna un flow_id único para cada flujo de red. Todos los registros de un flujo de red comparten el mismo flow_id. Por ello, el campo flow_id es útil para relacionar tráfico de red que pertenezca a los mismos flujos de red.
# Conclusión
¡Muy bien!

Completaste la actividad. Ya deberías poder usar Suricata con el fin de activar alertas para el tráfico de red.

Ahora tienes experiencia práctica con la ejecución de Suricata para hacer lo siguiente:

crear reglas personalizadas y ejecutarlas en Suricata
supervisar el tráfico capturado en un archivo de captura de paquetes
examinar los resultados de fast.log y eve.json
Desarrollaste una habilidad fundamental en tu camino para convertirte en analista de seguridad.