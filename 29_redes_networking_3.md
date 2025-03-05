## 3.1 Sistema Numérico Binario

### 3.1.1 Direcciones Binarias e IPv4

Las direcciones IPv4 inician como binarias, una serie de solo 1 y 0. Estos son difíciles de administrar, por lo que los administradores de red deben convertirlos a decimales. En este tema se muestran algunas formas de hacerlo.

Binario es un sistema de numeración que consta de los dígitos 0 y 1 llamados bits. Por el contrario, el sistema de numeración decimal consta de 10 dígitos que incluye del 0 al 9.

Es importante que comprendamos el sistema binario, ya que los hosts, los servidores y los dispositivos de red usan el direccionamiento binario. Específicamente, usan direcciones IPv4 binarias, como se muestra en la figura, para identificarse entre sí.

Cada dirección consta de una cadena de 32 bits, divididos en cuatro secciones denominadas octetos. Cada octeto contiene 8 bits (o 1 byte) separados por un punto. Por ejemplo, a la PC1 de la ilustración se le asignó la dirección IPv4 11000000.10101000.00001010.00001010. La dirección de gateway predeterminado sería la de la interfaz Gigabit Ethernet del R1, 11000000.10101000.00001010.00000001.

El binario funciona bien con hosts y dispositivos de red. Sin embargo, es muy difícil para los humanos trabajar con él.

Para facilitar el uso por parte de las personas, las direcciones IPv4 se expresan comúnmente en notación decimal punteada. A la PC1 se le asigna la dirección IPv4 192.168.10.10, y su dirección de puerta de enlace predeterminada es 192.168.10.1, como se muestra en la figura.

Para tener una buena comprensión del direccionamiento de red, es necesario comprender el direccionamiento binario y obtener habilidades prácticas en la conversión entre direcciones IPv4 binarias y decimales punteadas. Esta sección cubrirá cómo convertir entre sistemas de numeración de base dos (binario) y base 10 (decimal).

### 3.1.2 Video - Conversión Entre Sistemas de Numeración Binarios y Decimales

[Pulsa el botón de Reproducir para ver el vídeo.]

### 3.1.3 Verifique su Comprensión - Sistema Numérico Binario

Compruebe su comprensión de los sistemas numéricos binarios eligiendo la respuesta correcta a las siguientes preguntas.

**Pregunta 1**

¿Cuál es el binario equivalente a la dirección IP 192.168.11.10?

*   [ ] 11000000.11000000.00001011.00001010
*   [ ] 11000000.10101000.00001011.00001010
*   [ ] 11000000.10101000.00001010.00001011
*   [ ] 11000000.10101000.00001011.00010010

**Pregunta 2**

¿Cuál de los siguientes es el binario equivalente a la dirección IP 172.16.31.30?

*   [ ] 11000000.00010000.00011111.00011110
*   [ ] 10101000.00010000.00011111.00011110
*   [ ] 10101100.00010000.00011110.00011110
*   [ ] 10101100.00010000.00011111.00011110

### 3.1.4 Actividad - Conversión de Binario a Decimal

**Instrucciones**

Esta actividad le permite practicar la conversión de binario a decimal de 8 bits tanto como sea necesario. Le recomendamos que trabaje con esta herramienta hasta que pueda realizar la conversión sin errores. Convierta el número binario que se muestra en el octeto a su valor decimal.

Introduzca la respuesta decimal a continuación.

**Número binario**

[Marcar Nuevo número Mostrar Reinicio]

### 3.1.5 Conversión de Decimal a Binario

También es necesario comprender cómo convertir una dirección IPv4 decimal punteada a una binaria. La tabla de valores de posición binarios es una herramienta útil.

Haga clic en cada posición a partir de 128 y trabaje su camino de izquierda a derecha a la posición 1.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|

¿Es el número decimal del octeto (n) igual o mayor que el bit más significativo (128)?

Si no es así, introduzca un valor binario 0 en el valor de posición 128.
Si es así, agregue un valor binario 1 al valor de posición 128 y reste 128 del número decimal.

### 3.1.6 Ejemplo de Conversión de Decimal a Binario

Para poder comprender el proceso, considere la dirección IP 192.168.10.11.

El primer octeto número 192 se convierte a binario utilizando el proceso de notación posicional explicado anteriormente.

Es posible omitir el proceso de resta con números decimales menores o más pequeños. Por ejemplo, observe que es bastante fácil calcular el tercer octeto convertido a un número binario sin pasar realmente por el proceso de resta (8 + 2 = 10). El valor binario del tercer octeto es 00001010.

El cuarto octeto es 11 (8 + 2 + 1). El valor binario del cuarto octeto es 00001011.

La conversión de sistema binario a decimal puede parecer un desafío inicialmente, pero con la práctica resulta más fácil.

[Haga clic en cada paso para ver la conversión de la dirección IP de 192.168.10.11 en binario.]

[Paso 1] [Paso 2] [Paso 3] [Paso 4] [Paso 5] [Paso 6] [Paso 7] [Paso 8] [Paso 9] [Paso 10] [Paso 11]

¿Es el primer octeto número 192 igual o mayor que el bit de orden superior 128?

Sí lo es, por lo tanto, agregue un 1 al valor posicional de orden superior para representar 128.
Resta 128 de 192 para producir un resto de 64.

### 3.1.7 Actividad - Conversión de Decimal a Binario

**Instrucciones**

Esta actividad le permite practicar la conversión de valores decimales a valores binarios de 8 bits. Le recomendamos que trabaje con esta herramienta hasta que pueda realizar la conversión sin errores. Convierta el número decimal mostrado en la fila Valor decimal a sus bits binarios.

[Marcar Nuevo número Mostrar Reinicio]

### 3.1.8 Actividad - Juego Binario

Esta es una forma divertida de aprender números binarios para redes.

Enlace del Juego: [https://learningnetwork.cisco.com/docs/DOC-1803](https://learningnetwork.cisco.com/docs/DOC-1803)

Deberá iniciar sesión en cisco.com para utilizar este enlace. Será necesario crear una cuenta si aún no tiene una.

También hay una variedad de juegos binarios móviles gratuitos. Busque "Juego Binario" en su tienda de aplicaciones.

### 3.1.9 Direcciones IPv4

Como se mencionó al principio de este tema, los enrutadores y las computadoras solo entienden binario, mientras que los humanos trabajan en decimal. Es importante que usted conozca a fondo estos dos sistemas de numeración y cómo se utilizan en redes.

[Haga clic en cada botón para contrastar la dirección decimal punteada y la dirección de 32 bits.]

| Dirección Decimal Punteada | Octetos | Dirección de 32 bits |
|---|---|---|
| 192.168.10.10 es una dirección IP asignada a una computadora. |  |  |