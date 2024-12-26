### 1. Tarea 1: Examina una regla personalizada en Suricata

1. **Regla Personalizada en Suricata**:
    ```plaintext
    alert http $HOME_NET any -> $EXTERNAL_NET any (msg:"GET on wire"; flow:established,to_server; content:"GET"; http_method; sid:12345; rev:3;)
    ```

2. **Acción NIDS**:
    - **alert**: Alerta de tráfico e IDS inspecciona.
    - **drop**: Alerta de tráfico, descarta tráfico, Suricata en modo IPS.
    - **pass**: Permite que pase el tráfico por la interfaz de la red.
    - **reject**: No permite que pase el tráfico y envía un paquete de restablecimiento de TCP.

3. **Encabezado**:
    - Define el tráfico de red de la firma, incluyendo protocolo, dirección del tráfico y direcciones IP y puertos de origen y destino.
    - **Ejemplo**: `http $HOME_NET any -> $EXTERNAL_NET any`.
    - `$HOME_NET`: Variable de Suricata definida en `/etc/suricata/suricata.yaml`.

4. **Opciones de la Regla**:
    - **msg**: Proporciona el mensaje de alerta.
    - **flow**: Establece la dirección del tráfico.
    - **content**: Indica a Suricata que busque contenido específico.
    - **sid**: ID de la firma.
    - **rev**: Revisión de la firma.

### 2. Tarea 2: Activa una regla personalizada en Suricata

1. **Lista de Archivos en `/var/log/suricata`**:
    ```sh
    ls -l /var/log/suricata
    ```

2. **Ejecutar Suricata**:
    ```sh
    sudo suricata -r sample.pcap -S custom.rules -k none
    ```
    - `-r`: Especifica un archivo de entrada.
    - `-S`: Usa las reglas definidas.
    - `-k none`: Inhabilita todas las sumas de verificación.

3. **Verificar Nuevos Archivos en `/var/log/suricata`**:
    ```sh
    ls -l /var/log/suricata
    ```

4. **Mostrar Contenido de `fast.log`**:
    ```sh
    cat /var/log/suricata/fast.log
    ```
    - Ejemplo de resultado:
        ```plaintext
        11/23/2022-12:38:34.624866  [**] [1:12345:3] GET on wire [**] [Classification: (null)] [Priority: 3] {TCP} 172.21.224.2:49652 -> 142.250.1.139:80
        11/23/2022-12:38:58.958203  [**] [1:12345:3] GET on wire [**] [Classification: (null)] [Priority: 3] {TCP} 172.21.224.2:58494 -> 142.250.1.139:80
        ```

### 3. Tarea 3: Examina el resultado de `eve.json`

1. **Mostrar Contenido de `eve.json`**:
    ```sh
    cat /var/log/suricata/eve.json
    ```

2. **Mostrar Contenido en Formato Mejorado con `jq`**:
    ```sh
    jq . /var/log/suricata/eve.json | less
    ```
    - Nota: Puedes usar las teclas `f` y `b` minúsculas para avanzar o retroceder en el resultado. Presiona `Q` para salir del comando `less`.

**Pregunta: ¿Cuál es el valor de la propiedad de gravedad de la primera alerta que devuelve el comando `jq`?**
- 1
- 3
- 4
- 0

3. **Extraer Datos Específicos de Eventos con `jq`**:
    ```sh
    jq -c "[.timestamp,.flow_id,.alert.signature,.proto,.dest_ip]" /var/log/suricata/eve.json
    ```

**Pregunta: ¿Cuál es la dirección IP de destino que aparece para el último evento en el archivo 'eve.json'?**
- 192.168.0.1
- 172.21.224.2
- 142.250.1.102
- 142.250.1.139

**Pregunta: ¿Cuál es la firma de alerta de la primera entrada de alerta en el archivo 'eve.json'?**
- BAD USER-AGENT
- DROP ICMP for HOMENET
- GET on wire
- Pass ICMP for HOMENET

4. **Mostrar Registros de Eventos Relacionados con un `flow_id`**:
    ```sh
    jq "select(.flow_id==X)" /var/log/suricata/eve.json
    ```

Nota: Un flujo de red es una secuencia de paquetes entre un origen y un destino que comparten características en común, como direcciones IP, protocolos, entre otras. En seguridad cibernética, los flujos de tráfico de red ayudan a los analistas a comprender el comportamiento del tráfico de red para identificar y analizar amenazas. Suricata asigna un flow_id único para cada flujo de red. Todos los registros de un flujo de red comparten el mismo flow_id. Por ello, el campo flow_id es útil para relacionar tráfico de red que pertenezca a los mismos flujos de red.

¡Excelente trabajo completando la actividad! 🚀

Ahora tienes la capacidad de utilizar Suricata para activar alertas relacionadas con el tráfico de red. Con esta experiencia práctica, has aprendido a:

- **Crear Reglas Personalizadas**: Definir y configurar reglas para Suricata.
- **Supervisar Tráfico Capturado**: Analizar archivos de captura de paquetes.
- **Examinar Resultados**: Interpretar los datos en `fast.log` y `eve.json`.


