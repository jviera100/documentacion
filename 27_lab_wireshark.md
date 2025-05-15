# Práctica de Laboratorio: Ver Tráfico ARP en Wireshark

## Objetivos
*   **Parte 1:** Capturar y analizar datos de ARP en Wireshark.
    *   Iniciar y detener la captura de datos del tráfico `ping`.
    *   Localizar información de direcciones IPv4 y MAC en las PDU capturadas.
    *   Analizar el contenido de los mensajes ARP intercambiados.
*   **Parte 2:** Ver las entradas de caché ARP en la PC.
    *   Usar el comando `arp` de Windows para ver la caché ARP local.

## Aspectos Básicos
TCP/IP utiliza ARP para asignar direcciones IPv4 a direcciones MAC en la red local. Cuando un dispositivo necesita enviar una trama Ethernet, debe conocer la MAC de destino. Si no la conoce, envía una solicitud ARP (broadcast). El dispositivo con la IP solicitada responde con su MAC (respuesta ARP unicast), y esta información se guarda en la caché ARP del solicitante. Wireshark nos permite "ver" este intercambio.

## Recursos Necesarios
*   1 PC (Windows con Wireshark instalado).
*   (Opcional) Otros dispositivos en la LAN para hacerles `ping` o usar la IP de la puerta de enlace predeterminada.

## Instrucciones

### Parte 1: Capturar y Analizar los Datos ARP Locales en Wireshark

**Paso 1: Recupere las direcciones de interfaz de la PC.**
    a. Abra una ventana del **Símbolo del sistema** (CMD).
    b. Escriba `ipconfig /all` y presione Enter.
    c. Identifique y anote:
        *   **Su Adaptador de Red Activo** (ej: "Adaptador de LAN inalámbrica Wi-Fi")
        *   **Su Dirección IPv4**
        *   **Su Dirección MAC (Dirección física)**
        *   **Su Puerta de Enlace Predeterminada (IPv4)**
    d. (Opcional) Anote las direcciones IPv4 de otros dispositivos en su LAN a los que pueda hacer `ping`. Si no tiene otros, usará la puerta de enlace predeterminada.

    **Pregunta:**
    *   Registre las direcciones IPv4 de la puerta de enlace predeterminada y las otras PC (o dispositivos) de la LAN.
        *   *Respuesta:* `[Espacio para tu respuesta]`

**Paso 2: Inicie Wireshark y comience a capturar datos.**
    a. Inicie **Wireshark** en su PC.
    b. En la pantalla de inicio de Wireshark, identifique y **seleccione la interfaz de red activa** (la que anotó en el Paso 1c).
    c. En la barra de filtro de captura/visualización (arriba, dice algo como "Aplicar un filtro de visualización..."), escriba `arp` y presione Enter.
        *   *Esto asegura que Wireshark solo mostrará paquetes ARP.*
    d. Para iniciar la captura:
        *   Opción 1: Haga doble clic en el nombre de la interfaz seleccionada.
        *   Opción 2: Seleccione la interfaz y haga clic en el icono de la aleta de tiburón azul (Iniciar captura).
    e. En su ventana del **Símbolo del sistema**, haga `ping` a la dirección IP de su **puerta de enlace predeterminada**.
        *   Ejemplo: `ping 192.168.1.1` (reemplace con la IP de su gateway).
    f. Si tiene otras direcciones IP de dispositivos locales, haga `ping` a ellas también.
    g. Vuelva a Wireshark y detenga la captura de datos haciendo clic en el **icono de cuadrado rojo (Detener)**.

**Paso 3: Examine los datos capturados (Solicitud ARP).**
    *Wireshark muestra los datos en tres secciones principales: Lista de Paquetes (arriba), Detalles del Paquete (medio), Bytes del Paquete (abajo).*
    a. En el panel **Lista de Paquetes**, busque una trama donde:
        *   La columna `Source` sea la dirección MAC de su PC.
        *   La columna `Destination` sea `Broadcast`.
        *   La columna `Protocol` sea `ARP`.
        *   La columna `Info` diga algo como `Request who-has [IP_Gateway]? Tell [Su_IP]` o similar.
    b. Haga clic en esta trama de **solicitud ARP** para seleccionarla.
    c. En el panel **Detalles del Paquete** (sección media):
        i. Expanda la línea `Ethernet II`.
            **Pregunta:**
            *   ¿La dirección MAC de origen (`Source`) en la capa Ethernet II coincide con la interfaz de su PC?
                *   *Respuesta:* `[Sí/No, y la MAC observada]`
        ii. Expanda la línea `Address Resolution Protocol (request)`.
            *   Observe los campos: Hardware type, Protocol type, Hardware size, Protocol size, Opcode (debería ser `request (1)`).
            *   Observe `Sender MAC address`, `Sender IP address`.
            *   Observe `Target MAC address` (debería ser algo como `00:00:00:00:00:00`, ya que esto es lo que se está preguntando).
            *   Observe `Target IP address` (debería ser la IP a la que hizo `ping`, ej: su gateway).

**Paso 4: Localice y examine la trama de respuesta ARP.**
    a. En el panel **Lista de Paquetes**, busque la trama de **respuesta ARP** que corresponde a la solicitud que examinó. Debería:
        *   Tener como `Source` la MAC del dispositivo al que hizo `ping` (ej: su gateway).
        *   Tener como `Destination` la MAC de su PC.
        *   El `Protocol` ser `ARP`.
        *   La `Info` decir algo como `Reply [IP_Gateway] is-at [MAC_Gateway]`.
    b. Seleccione esta trama de **respuesta ARP**.
    c. En el panel **Detalles del Paquete**:
        i. Expanda `Ethernet II`.
            **Preguntas:**
            *   ¿La trama de respuesta ARP es una trama de difusión (broadcast)? (Observe la MAC de destino Ethernet II).
                *   *Respuesta:* `[Sí/No]`
            *   ¿Cuál es la dirección MAC de destino de la trama Ethernet II?
                *   *Respuesta:* `[MAC observada]`
            *   ¿Es la dirección MAC de su PC?
                *   *Respuesta:* `[Sí/No]`
        ii. Expanda `Address Resolution Protocol (reply)`.
            *   Observe el `Opcode` (debería ser `reply (2)`).
            *   Observe `Sender MAC address` y `Sender IP address` (deberían ser los del gateway/dispositivo que respondió).
            *   Observe `Target MAC address` y `Target IP address` (deberían ser los de su PC).
            **Pregunta:**
            *   ¿Qué dirección MAC es el origen (`Sender MAC address`) en el mensaje ARP?
                *   *Respuesta:* `[MAC observada]`
            *   Verifique si esta MAC coincide con la MAC esperada de su puerta de enlace u otro dispositivo al que hizo ping (si la conoce de antemano).

### Parte 2: Examine las Entradas de la Caché ARP en la PC.

**Paso 1: Ver la caché ARP.**
    a. En una ventana del **Símbolo del sistema**, escriba `arp -a` y presione Enter.
    b. Observe la salida. Debería ver una lista de direcciones IP y sus correspondientes direcciones MAC físicas que su PC ha aprendido.
    **Pregunta:**
    *   ¿Cuál es el resultado de ejecutar el comando `arp –a` en su PC? (Copie/describa las entradas relevantes, especialmente la de su gateway u otros dispositivos a los que hizo ping).
        *   *Respuesta:* `[Espacio para tu respuesta]`

**Paso 2: Explorar opciones del comando `arp`.**
    a. En el Símbolo del sistema, escriba `arp /?` y presione Enter.
    b. Revise las opciones disponibles.
    **Preguntas:**
    *   ¿Qué opción (`-letra`) se utiliza para eliminar una entrada específica de la caché ARP?
        *   *Respuesta:* `[Opción, ej: -d]`
    *   ¿Cuál sería el resultado (teórico) de emitir el comando `arp -d *`? (No es necesario ejecutarlo si no quieres borrar tu caché).
        *   *Respuesta:* `[Espacio para tu respuesta]`

## Reflexión
1.  ¿Cuál es el beneficio de mantener las entradas de la caché ARP en memoria en la computadora de origen?
    *   *Respuesta:* `[Espacio para tu respuesta]`
2.  Si la dirección IPv4 de destino no se encuentra en la misma red que el host de origen, ¿qué dirección MAC se usará como dirección MAC de destino en la trama Ethernet enviada por el host de origen?
    *   *Respuesta:* `[Espacio para tu respuesta]`

---