
# RESUMEN 
- ctrl + k + c mantiene el boton ctrl apretado para presiona k despues c queda como comentario
- JavaScript es sencible a las mayusculas y espacios. Poner punto y coma al final de cada funcion
- setting-ligatures-true
- setting-font-agregar fuentes: Fira Code, Iosevka, Cascadia Code, Menlo, Monaco, 'Courier New', monospace
# Tipos de datos:
- String: es un texto o cadena de texto = "Hola Mundo"
- Number: es un número, por ejemplo 10
- Boolean: es un valor lógico, true o false
# Operadores aritméticos:
+ : suma 
- : resta
* : multiplicación
/ : división
% : módulo o resto de la división 
# Operadores de comparación:
== : igual a (Comparar si dos valores son iguales ejemplo "10" == 10 es true)
=== : igualdad Estricta = (Compara si dos valores son iguales y si son del mismo tipo de dato ejemplo "10" === 10 es false) 
!= : diferente de - Comparar si dos valores son diferentes ejemplo 10 != 10 es false
> : mayor que : ejemplo 10 > 5 es true 
< : menor que
>= : mayor o igual que 
# Material para complementar
- https://jonmircha.com/javascript
- https://lenguajejs.com/javascript/

# FUNCIONES #

# alert();
- alert("soy ventana de alerta"); muestra en navegador una ventana pequeña de alerta
- alert("soy texto" + soyvariable); muestra en navegador una ventana con texto y valor variable
# console.log();
- console.log("soy texto en consola"); muestra en consola del navegador texto de color negro cuando lleva comillas
- console.log("10"); muestra en consola numero de color negro como texto(o string) cuando lleva comillas
- console.log(10); muestra en consola valor numero de color azul cuando no lleva comillas
- console.log(true); muestra en consola valor true de color azul cuando no lleva comillas
- console.log(false); muestra en consola valor false de color azul cuando no lleva comillas
- console.log(soyvariable); muestra en consola valor de variable o muestra linea de error de color rojo, en este caso la consola mostrara como resultado un numero 7 de color azul
- console.log("soy texto" + soyvariable); muestra en consola texto y numero, todo de color negro, poner funcion de console debajo de nueva variable, para que muestre variable nueva
# console.debug # consol.info # consol.dir # console.trace
funcionan igual que consol.log pero cambia el diseño de visualizacion, se muestran de otro color los mensajes en consola
ejemplo:
console.debug(Object);
console.info(Object);
console.dir("detalle objeto");
console.trace("ruta detallada");

# console.error
console.error(Object);
console.error(error.message); Muestra solo el mensaje del error
console.error("Error:", error);Muestra el objeto mensaje y detalles error, la traza de la pila (stack trace) si está disponible.
console.error(error.stack); Muestra la traza de la pila del error. Esto proporciona una visión detallada del lugar en el código donde ocurrió el error y puede ayudar a depurar más a fondo.

# variables
- soyvariable = 3 + 4  mala practica poner en js una variable, sin palabra reservada let o const
- let soyvariable = 3 + 4  buena practica poner en js una variable, con palabra reservada let o const
- soyvariable = 20  cambia valor de una variable en js, sin palabra reservada let o const
- let soyvariable = "soy texto"; en js si el valor de la variable es un texto debe llevar comillas o si en js ponemos la variable dentro de la funcion console, mostrara error en consola
- "use strict" modo estricto se pone en la cabecera del js, dara error las malas practicas, ejemplo de mala practica digitas una variables y despues le cambias el valor a esa variable, ambas sin palabra reservada let, la buena practica es cuando la primera vez que digitas la variable debe llevar let, despues cuando le cambias su valor a la variable no se pone let
- el nombre de las variables declaradas (digitadas en js) no se pueden repetir
# palabras reservadas de variables 
- var: obsoleto, da error en scope (escope es alcance) global (hoisting lee codigo hacia arriba)
- let : se utiliza para declarar una variable, o sea una variable donde se puede guardar un valor. El valor   de una variable puede cambiar a lo largo del programa.
- const: se utiliza para declarar una constante, o sea una variable que no va a cambiar su valor
# alcance de variables
● Global: Se refiere a que las variables son accedidas desde toda la aplicación. El
alcance global es el objeto window.
● Funcional: Las variables se conocen dentro de la función donde se declaran.
● Bloque: Las variables se conocen dentro del bloque donde se declaran.
# variables anidadas (objeto = variable padre con propiedades = variable hijo) <!--  similar no identico a array porque en array se agrega indice para buscar elementos-->
las variables tipo string se muestran en la alerta por <!--  orden de digitacion -->, los number por orden numerico aunque se ingrese primero ese numero o no 
ejemplo:
const variablepadre = {
    variablehijo: x
    variablehija: y    
}
alert(variablepadre.variablehijo)
# llamar variables fuera del nido con corchetes []
- ejemplo:
const s = "le gusta programar"
const user = {
    name: poplin;
    age: 35;
    [s]: true;   
}
alert(user.s)
- ejemplo:
const user = {
    name: poplin;
    age: 35;
    s: true;   
}
const s = "le gusta programar"
alert(user[s]);
# class 
funcion
- ejemplo:
class user{
    name: poplin;
    age: 35;

    constructor(name){
        this.name;
    }
    [sayhello](){
        alert("hola " + this.name);
    }
}
let user = new user ("yo");
let user = new user ("tu");
# delete
borra variable hijo
# document.write();
- document.write("soy texto" + soyvariable); muestra en navegador texto y valor variable
# prompt();
- prompt(): es una función de JavaScript que muestra una ventana con un mensaje en pantalla y espera que el usuario ingrese un valor. El valor siempre será un texto (string).
- Ejemplo:
- let soyvariableprompt = prompt("soy texto"); ventana con pregunta interactiva y con espacio para que usuario responda texto
- alert("soy texto" + soyvariableprompt); ventana mostrando texto y valor de variable que es la respuesta del usuario
# parseInt();
- parseInt(): es una función de JavaScript que convierte un texto a un número entero
- Ejemplo:
- let soyvariable = parseInt(prompt("soy texto")); ventana con pregunta interactiva y con espacio para que usuario responda numeros
- alert("soy texto" + soyvariable); ventana mostrando texto y valor de variable que es la respuesta del usuario
# tablas
- tr es fila
- th es columna menu poner ID
- td es columna respuestas
# document.getElementById();
- document.getElementById("soyID") es una función de JavaScript que captura un elemento que tiene un id="soyID" del html y ese dato capturado  es el valor de la variable
- Ejemplo:
- let soyvariable = document.getElementById("soyID")
- tambien se puede captura del html por id, class o tarjeta
ejemplo:
- var idContenedor = document.getElementById("contenedor");
console.log(idContenedor);
- var elementoUl = document.getElementsByTagName("ul");
console.log(elementoUl);
- var menuClase = document.getElementsByClassName("menu");
console.log(menuClase);
# inner.HTML();
- inner.HTML() es una función de JavaScript que permite cambiar el contenido de un elemento del HTML por otro valor y mostrarlo en el navegador
- Ejemplo:
- soyvariabledelgetElementById.innerHTML = soyvariabledelprompt
- en este ejemplo en js la variable document.getElemenById tiene el valor de una captura de un ID del html con la funcion inner.HTML, se cambia el valor de ese ID por el Prompt y lo introduce en ese ID del HTML
# scope
- El atributo scope es el alcance, en este ejemplo se utiliza para especificar si una celda de encabezado es un encabezado para una columna, fila o grupo de columnas o filas en una tabla.
- Ejemplo:
- th scope = "col">nombre columna/th se define la columna th como columna

# scroll o desplazamiento en 8 segundos
tambien hay un scroll en CSS, pero este es de JS
<script>
$(document).ready(function(){
 $("a").on('click', function(event) {
 if (this.hash !== "") {
 event.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
 scrollTop: $(hash).offset().top
 }, 800, function(){
 
 window.location.hash = hash;
 });
 }
 });
});
</script>

# diagrama de flujo
explica los pasos a seguir de la estructura del algoritmo en simbolos
https://app.diagrams.net/
# pseudocodigo
explica los pasos a seguir de la estructura del algoritmo en palabras

# ESTRUCTURAS DEL CODIGO #

# if(condicion)
condicion
# if - else (recursiva)
si condicion se cumple hacemos if  y si no cumple hacemos else
- Sintaxis:
if(condicion) {...}
else {...}
- ejemplo:
let age = number(prompt("dime tu edad",18));
let mensaje = "";
if(age < 18){
    mensaje = "hola";
}else{
    mensaje = "hola señor";
}
alert(mensaje);
# condicion ? - : similar if -else
ejemplo:
mensaje = age < 18 ? "hola" : "hola señor";
# && and (operador logico "y" todas)
agrega condiciones simultaneas en una linea que estas y aquellas deben cumplirse (todas)
ejemplo:
if(age > 5 && age < 18)  
# || or (operador logico "o" algunas)
agrega condiciones simultaneas en una linea que estas o aquellas deben cumplirse (algunas)
ejemplo:
if(age = 5 || age > 5 && age < 18)  
# ! not (operador logico "no" invierte)
invierte condicion, funcion o variable
ejemplo:
const variable = age < 18;
if (!variable)
# switch
multiples condiciones
ejemplo:
var num = prompt("Escribe un Número del 1 al 7");
switch (num) {
case "1":   <!-- condicion -->
alert("El día de la semana es lunes");  <!-- accion -->
break;
case "2":
alert("El día de la semana es martes");
break;
case "3":
alert("El día de la semana es miércoles");
break
case "4":
alert("El día de la semana es jueves");
break
case "5":
alert("El día de la semana es viernes");
break
case "6":
alert("El día de la semana es sábado");
break
case "7":
alert("El día de la semana es domingo");
break
default:
alert("El número ingresado no corresponde a un día de la semana");
break;
}
# for (ciclos o bucle o recorrido o iteracion)
se repite ciclo de codigo, ejemplo: if, switch, etc
- ejemplo:          
var num = 0;        
for (;num < 2;) {   
    alert(num++);              
}  

# operador de modulo (% = residuo) hasta el tercer término o recorrido del ciclo: el par siempre dara 0 y el inpar 1
<!-- elementos de la division -->
- El dividendo: es el número que se está dividiendo.
- El divisor: es el número por el cual se divide el dividendo.
- El cociente es el resultado de la división (la cantidad de veces que el divisor cabe en el dividendo).
- resto o residuo=(divisor*cociente.numero.entero)-dividendo
ejemplo:
(1 / 2):
La división de 1 entre 2 es 0.5.
El cociente es 0 (porque 2 no cabe en 1). respuesta solo numero entero, no el decimal
El resto es 1.
(2 / 2):
La división de 2 entre 2 es 1.
El cociente es 1 (porque 2 cabe exactamente en 2).
El resto es 0.
(3 / 2):
La división de 3 entre 2 es 1.5.
El cociente es 1 (porque 2 cabe una vez en 3).
El resto es 1.

# for iterar operador modulo contador acumulador
sintaxis:
- la iteracion: inicializacion(valor de i), condicion y actualizacion (desde el segundo recorrido)

var contador = 0; // inicio del contador en 0
var acumulador = 0; // inicio del acumular en 0
for(i=1; i<=50; i++){ // valor inicial es 1
 if(i % 2 != 0 ){ // condicion de inpar para hacer el ciclo
 contador++; // es igual que escribir: contador = contador + 1; // primer recorrido cuento 1 inpar y tercer recorrido cuento 2 inpar
 acumulador += i; //es igual a escribir: acumulador = acumular + i; // primer recorrido sumo 0+1=1 inpar y tercer recorrido sumo 1+3=4 inpar
 }
}
alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada
de ellos es: ${acumulador}`); // cuento 25 inpares y sumados da 625 (suma de los 25 inpares)

<!-- metodo de gaus: cuenta todos los numeros -->
metodo de gaus = ((numero menor - numero mayor)+1)*((numero menor + numero mayor)/2)
metodo de gaus = ((1 - 50)+1)*((1 + 50)/2)
metodo de gaus = 50 * 25,5 = 1275
<!-- fórmula contar numeros inpares en un rango: -->
n=⌈b−a+1​⌉/2
n=[50-1+1]/2
n=25
<!-- formula sumar números impares en un rango, n se obtiene de formula de conteo)  -->
S=n×((primer.impar+ultimo.impar)​/2)
S=25×((1+49)​/2)
S=25x25 = 625



# iterar el array de objetos con un ciclo for
for (let i = 0; i < dental.length; i++){
    console.log(dental[i].name)
}
# for in
muestra la posicion de la array
ejemplo:
for(let diente in dental) {
    console.log(dental[diente].id)
}
# for of
muestra el elemento array 
ejemplo:
for(let diente of dental) {
    console.log(diente.name)
}             
# while (ciclos)
se repite ciclo de codigo hasta que la condicion deje de cumplirse
- ejemplo:          <!-- ciclo dara alerta sumando 1 cuando cumpla condicion, primera alerta es 0+1, segunda alerta es 1+1 -->
var num = 0;        <!-- variable num es igual a 0 -->
while (num < 2) {   <!-- el numero debe ser menor a 2 -->
    alert(num);     <!-- si cumple condicion muestra numero -->
    num++;          <!-- si cumple condicion le suma 1 -->
}                   <!-- si no cumple condicion se detiene, tercera alerta es 2, no aparece alerta, se detuvo -->
# do - while
hace algoritmo y despues comprueba condicion
- ejemplo:              
var num = 0;  
do {
    alert(num);       
    num++;   
}while (num < 2);   
# nombreciclo: for  
se puede poner nombre a los ciclos
ejemplo:
nombreciclo: for        
# break (estructura de control de ciclo)
se interrumpe ciclo
ejemplo:
- break
- break nombreciclo;
# continue (estructura de control de ciclo)
se salta instruccion
# random
funcion muestra datos al azar
Math.random();
# funciones anonimas (expresada funciona en orden hacia abajo)
funcion sin nombre asignada a variable para poder ser invocada
ejemplo:
var num1 = prompt("Ingrese el primer número: ");
var num2 = prompt("Ingrese el segundo número: ");
let divide = function (a,b) {
 let resultado = parseInt(a) / parseInt(b);
 return resultado;
};
document.write("Resultado de la división: "+divide(num1,num2));
# math.pow
en JavaScript se utiliza para calcular el valor de un número elevado a una potencia. Por ejemplo, si quieres calcular 2 elevado a la potencia de 3, usarías Math.pow(2, 3) y el resultado sería 8. Aquí tienes un ejemplo de cómo se usa:
ejemplo:
let base = 2;
let exponente = 3;
let resultado = Math.pow(base, exponente);
console.log(resultado); // Esto mostrará 8 en la consola

# funcion con nombre (declarada funciona desordenada)
function nombre(parametros) { // instrucciones}
ejemplo:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function suma (nums) {    <!-- no uso return porque no tiene instrucciones la funcion -->
}
console.log(sum(nums))
# else - if (ES5)
ejemplo:
var num = prompt("Ingrese un numero entero");
var resultado = 0;
function verificar(numero) {
if (numero > 0) {
 resultado = "positivo";
} else if (numero < 0) {
 resultado = "negativo";
} else if (numero === 0) {
 resultado = "nulo";
} else {
 resultado = "no es un número";
}
return resultado
}
<!-- alert(`El numero ingresado es:
${verificar(parseInt(num))}`); -->
# arrays o arreglos o conjuntos [] 
arrays son elementos simultaneos entre corchetes, similar a variable anidadas o con propiedades
ejemplo:
let a = ["naranja", "manzana", "pera"];
alert(a[0]); <!-- naranja -->
alert(a[1]); <!-- manzana -->
alert(a[2]); <!-- pera -->
# length
cuenta elementos dentro del arrays
ejemplo:
alert(a.length);
# push
agrega ultimo elemento en la arrays
ejemplo
a.push();
# pop
elimina ultimo elemento en la arrays
a.pop();
# shift
elimina primer elemento en la arrays
ejemplo:
a.shift();
# unshift
agrega primer elemento en la arrays
ejemplo:
a.unshift();
# split o desconcatenador
ejemplo:
var filtros = 'Comida china RM nunoa';
var filtros = filtros.split(' ');
console.log(filtros);
- (3) ["Comida", "china", "RM", "nunoa"]
# join o concatenador
ejemplo:
var amigos = ["Erick", "Cristian", "Max",
"Claudia"];
console.log(amigos.join(" - "));
- Erick - Cristian - Max - Claudia
# map arreglo o arrays
crea un nuevo array, pero el map debe tener los mismos elementos del original
ejemplo:
- var clientes = [
{nombre: 'Juan', edad: 28},
{nombre: 'Carlos', edad: 17},
{nombre: 'Karla', edad: 27},
];
- clientes_modificado = clientes.map(function(cliente) {
});
- clientes_modificado =   <!-- si la edad es mayor o igual a 18  -->
clientes.map(function(cliente) {
if (cliente.edad >= 18) {
cliente.adulto = true;
} else {
cliente.adulto = false;
}
return cliente;
});
console.log(clientes_modificado);
- 0: {nombre: "Juan", edad: 28, adulto: true}
1: {nombre: "Carlos", edad: 17, adulto:
false}
2: {nombre: "Karla", edad: 27, adulto: true}
# reduce arreglo o arrays
ejemplo:
var deudas = [10000, 5000, 50000, 35000];
var sumatoriaDeudas =
deudas.reduce(function(contador, deuda){
return contador + deuda;
});
console.log(sumatoriaDeudas);
- resultado 100000
# filter o filtro en arreglo o arrays
similar a forEach trae la array y ejecuta accion pero con una condicion boleana si es true ejecuta la accion
ejemplo:
var clientes = [
{nombre: 'Juan', edad: 28},
{nombre: 'Carlos', edad: 17},
{nombre: 'Karla', edad: 27},
];
var adultos =
clientes.filter(function(cliente
){
return cliente.edad >= 18
});
console.log(adultos);
- {nombre: "Juan", edad: 28}
{nombre: "Karla", edad: 27}
# concat o fusionar dos o mas arrays
ejemplo:
var autosCompactos = [
{marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
{marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
{marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
{marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
];
var autosDeportivos = [
{marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
{marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
{marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'},
];
- var autos = autosCompactos.concat(autosDeportivos);
console.log(autos);
- 0: {marca: "Toyota", modelo: "Corolla", combustible: "Gasolina"}
1: {marca: "Mazda", modelo: "3", combustible: "Gasolina"}
2: {marca: "Honda", modelo: "Civic", combustible: "Gasolina"}
3: {marca: "Bmw", modelo: "116d", combustible: "Diesel"}
4: {marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina"}
5: {marca: "Renault", modelo: "Megane RS", combustible: "Gasolina"}
6: {marca: "Mitsubishi", modelo: "Lancer Evo", combustible:
"Gasolina"}
# sort ordena arreglos o arrays
ordeno de menos a mas pero con el primer digito
ejemplo:
[4, 3, 2, 1].sort()
(4) [1, 2, 3, 4]
# reverse o revierte orden arrays
ejemplo:
var muchachos = ["Juan", "Lucas", "Pedro",
"Marcos"];
console.log(muchachos.reverse());
- (4) ["Marcos", "Pedro", "Lucas",
"Juan"]
# find similar a filter
ejemplo:
var productos = [
{nombre: 'coca-cola', precio: 990},
{nombre: 'papas fritas', precio: 590},
{nombre: 'ramitas', precio: 290},
{nombre: 'kapo', precio: 190},
];
var kapo = productos.find(function(producto){
return producto.nombre == 'kapo'
});
console.log(kapo);
# findIndex entrega el indice o posicion
ejemplo:
var ramitasIndice =
productos.findIndex(function(product
o){
return producto.nombre ==
'ramitas'
});
console.log(ramitasIndice);
- resultado 2
# some verifica si hay o no un valor en arrays true o false
ejemplo:
var autos = [
{marca: 'Toyota', modelo: 'Corolla',
combustible: 'Gasolina'},
{marca: 'Mazda', modelo: '3',
combustible: 'Gasolina'},
{marca: 'Honda', modelo: 'Civic',
combustible: 'Gasolina'},
{marca: 'Bmw', modelo: '116d',
combustible: 'Diesel'},
];
var algunDiesel =
autos.some(function(auto){
return auto.combustible == 'Diesel'
});
console.log(algunDiesel);
- true
# destructuring rercoleccion de elemento o arrays
permite extraer valores de objetos o arreglos y asignarlos a variables individuales de una manera más compacta.
ejemplo:
const persona = { nombre: 'Juan', edad: 30 };
const { nombre, edad } = persona;
console.log(nombre); // "Juan"
console.log(edad);   // 30
# rest parameters
permiten representar un número indefinido de argumentos como un arreglo.
ejemplo:
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3)); // 6
# spread
se utiliza para expandir elementos en lugares donde se esperan múltiples argumentos (en llamadas a funciones) o múltiples elementos (en arreglos literales).
ejemplo:
const numeros = [1, 2, 3];
console.log(...numeros); // 1 2 3
# arrow (ES6) <!-- otra forma de mostra una funtion -->
se puede reemplazar la palabra reservada funtion por let y agregar flecha en el valor de la variable, es como cambiar el diseño de la funtion por variable
ejemplo:
var num = prompt("Ingrese un numero
entero");
var resultado = 0;
let verificar = (numero) => {
if (numero > 0) {
 resultado = "positivo";
} else if (numero < 0) {
 resultado = "negativo";
} else if (numero === 0) {
 resultado = "nulo";
} else {
 resultado = "no es un número";
}
return resultado
}
<!-- alert(`El numero ingresado es:
${verificar(parseInt(num))}`); -->
# ciclos anidados
un ciclo dentro de otro ciclo
ejemplo:
for(let i = 0; i < 3; i++) {
 for(let j = 0; j < 3; j++) {
 console.log(i,j); 
 }
}
# listener (eventos)
escucha que se ejecute un evento sobre un elemento y aplica una funcion, 
- sintaxis:
element.addEventListener(evento, funcion, propagacion);
- ejemplo:
rockBtn.addEventListener("click", () => {
    play(ROCK);
});
# label
etiqueta o titulo de input
# input
Los elementos de entrada (input) en HTML son muy versátiles y se utilizan para recoger diferentes tipos de datos del usuario. Pueden ser campos de texto, botones de opción, casillas de verificación, botones, campos de contraseña, y más.
<!-- - <input type="button" value="Accion" id="btnAccion"> -->

# objetos de navegador en Js

# window
objeto padre de todo, objeto raiz
# DOM js (document object model) modulo de objetos del documento
dentro de window, esta dom, son objetos que nos entrega para la interaccion con el documento xml y/o html, elementos son:
id, tag, clase
- window.document
- ejemplo:
document.body.style.backgroundcolor = "red"; <!-- desde js cambio color de body -->
mydiv.style.backgroundcolor = "red"; <!-- desde js cambio color de Id (no usar asi) -->
- ejemplo: <!--usar asi, declarando variable primero-->
const elem = document.getElementById("mydiv"); <!-- declaro que variable es un Id de un elemento o Id de section del html -->
elem.style.backgrowndColor = "red"; <!-- cambio color a variable que es un Id -->
# bom (browser object model)
dentro de window, esta bom, son objetos que nos entrega para la interaccion con el navegador
- window.navigator
- window.screen
ejemplo: 
alert(navigator.platform); <!-- muestra plataforma en la que se ejecuta navegador (win 32) -->
alert(navigator.userAgent); <!-- muestra navegador, window (Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0) -->
# object.keys iterar o recorrer objetos
devuelve el nombre de las propiedades
ejemplo:
var compras = {
manzana: 2,
naranjas: 5,
peras: 10,
};
var keys = Object.keys(compras);
console.log(keys);
(3) [ "manzana", "naranjas",
"peras" ]
# object.values iterar o recorrer objetos
devuelve el valor de las propiedades
ejemplo:
var values =
Object.values(compras);
console.log(values);
(3) [ 2, 5, 10 ]
# object.entries iterar o recorrer objetos
devuelve el nombre y el valor de las propiedades
ejemplo:
var entries = Object.entries(compras);
console.log(entries);
[[ "manzana", 2 ],[ "naranjas", 5 ],[
"peras", 10 ]]
# sets o desconcatenador
ejemplo:
var set2 = new Set("hooola");
console.log(set2);
Set(4) [ "h", "o", "l", "a" ]
# set delete o elimina
arreglo.delete(" ");
arreglo.delete("d");
arreglo.delete("s");
arreglo.delete("t");
arreglo.delete("i");
arreglo.delete("n");
console.log(arreglo);
# set add o agrega
arreglo.add("s");
arreglo.add("i");
arreglo.add("m");
arreglo.add("p");
arreglo.add("l");
arreglo.add("e");
console.log(arreglo);
# set forEach
Mostrar todo el arreglo con el método forEach, sin condicion como en filter
ejemplo:
arreglo.forEach(function(elementos) {
console.log(elementos);
});
# javascript
funciones de javascript
ejemplo:
- window.object
- window.array
- window.funtion
# querySelector
let listas = document.querySelector("li"); <!-- declaro que variable son un selector de la primera lista-->
li.style.color = "red"; <!-- cambio color a primera li-->
# querySelectorAll (es un array)
let listas = document.querySelectorAll("li"); <!-- declaro que variable son un selector de listas, es decir varios elementos-->
let counter = 20
for (let li of listas){
    counter += 10; <!-- suma de 10 en 10 a variable counter -->
    li.style.fontSize = counter + "px"; <!-- cambio de menos a mas tamaño a li-->
}
# matches
comprueba si un elemento es igual a otro
ejemplo:
alert(li.matches("h1"))<!-- mostrara false-->
# closest
selecciona o busca el elemento mas cercano
ejemplo:
let chapter = document.querySelector(".chapter"); <!-- buscara class chapter-->
let book = chapter.closest(".book"); <!-- buscara contenedor padre mas cercano con class book, si no es contenedor padre, buscara contenedor abuelo, y asi hasta encontrar esa class-->
# getElementBy
busca 
const elem = document.getElementById("mydiv"); <!-- declaro que variable es un Id de un elemento o Id de section del html -->
const elem = document.getElementByClass("mydiv")
const elem = document.getElementByTagName("div");
const elem = document.getElementByName("name"); 
# nodes or strings

# append
<!-- crea y añade un elemento dentro de un contenedor al ultimo -->
ejemplo:
document.body.append(document.createElement("div")); 
# preppend
<!-- crea y añade un elemento dentro de un contenedor al principio -->
ejemplo:
document.body.preppend(document.createElement("div")); 
# before
<!-- crea y añade un elemento fuera de un contenedor al principio -->
ejemplo:
document.body.before(document.createElement("div")); 
# after
<!-- crea y añade un elemento fuera de un contenedor al ultimo -->
ejemplo:
document.body.after(document.createElement("div")); 
# replaceWith
<!-- cambia un elemnto por otro -->
ejemplo:
document.body.replaceWith(document.createElement("div")); 
# InsertAdjacentText
ejemplo:
let ol = document.getElementById("ol"); <!-- busca Id ol -->
ol.InsertAdjacentText("beforebegin", "antes"); <!-- agrega un antes en un elemento , solo texto -->
ol.InsertAdjacentText("afterend", "despues"); <!-- agrega un depues en un elemento existente -->
ol.after("despues"); <!-- agrega un depues en un elemento existente -->

let li = document.createElement("li"); <!-- creo elemento li -->
li.innerHTML = "primero"; <!-- agrego en li palabra primero -->
ol.prepend(li); <!-- crea y añade dentro de elemento un li al principio -->
# remove o elimina
<!-- remueve elemento -->
ol.remove();
# cloneNode
<!-- clona elemento -->
let div2 = div1.cloneNode(true);
# eventos jquery en js
# mouse events
- click - hace click sobre elemento
- contextmenu - hace click derecho sobre elemento
- mouseover - raton pasa por encima elemento
- mouseout - raton sale del elemento
- mousedown - presiona boton raton
- mouseup - deja de presionar raton
- mousemove - se mueve el raton
- hover - mouse entra pasando sobre y sale de elemento, una funcion para cada evento, si pone solo una funcion la aplicar para ambos eventos.
# keyboard events
- keydown - presiono tecla
- keyup - suelto tecla
- keypress - presiono y suelto tecla
# form element events
- submit - cuando se envia un <form>
- focus - un elemento recibe el foco, ejemplo <input>
- blur - un elemento pierde el foco
# document events
DOMContentLoaded - cuando el HTML termina de cargar
# CSS events
transitionend - cuando una animacion de CSS termina

# jquery en JavaScript

# link JQuery en HTML
 <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

# Extension JQuery
 Extension JQuery Code Snippets: autocompleta estructura de eventos de JQuery, es decir autocompleta codigos
# sintaxis JQuery
 sintaxis JQuery carga document.ready y aplicas esta funcion 
 $(document).ready(function(){
# EVENTOS O ACCIONES EN JQUERY en JS
# eventos son reactivos
# click
mouse hace click sobre el elemento y lo oculta
 $("#texto").click(function(){
 $(this).hide();
 });
# click
solo funciona en elementos que ya existen en el DOM en el momento en que se ejecuta el código.
mouse hace click sobre el elemento y lo cambia a color rojo
  $("#texto").click(function(){
 $(this).css("color","red");
 });
 # on("click")
 Puede manejar eventos en elementos que se agregan al DOM después de que se ejecuta el código
 ejemplo:
  $("#btn").on("click",function() {
 console.log( "Ocurrió un clic sobre el botón" );
 });
});
# dblclick
mouse hace doble click sobre el elemento y lo cambia a color azul
   $("#texto").dblclick(function(){
 $(this).css("color","blue");
 });
# mouseover
mouse entra pasando sobre el elemento y lo cambia a color amarillo
    $(".caja").mouseover(function(){
 $(this).css("background-color","yellow");
 });
# mouseout
 mouse sale del elemento y lo cambia a color rojo
    $(".caja").mouseout(function(){
 $(this).css("background-color","red");
 });
# hover  
mouse entra pasando sobre y sale de elemento, una funcion para cada evento, si pone solo una funcion la aplicar para ambos eventos.
 $("p").hover(
  function() {
    $(this).html("<a href='#'>Me convertí</a>");
  }, 
  function() {
    $(this).html("Soy un párrafo de nuevo");
  }
); 
# filtros en Jquery <!-- las posiciones empiezan desde el 0. -->
# :gt(3) <!-- este ejemplo señala la segunda posicion -->
cambia elementos despues de la posicion indicada hacia abajo, en este ejemplo estas parado en la posicion 4 y desde la posicion 5 hacia abajo realiza cambios.
ejemplo:
<!-- $("td:gt(3)").css("background-color", "yellow"); -->
# :first
cambia el elemento de la primera posicion(first=0), en este ejemplo cambia solo la posicion 1
ejemplo:
<!-- $("td:first").css("background-color", "yellow"); -->
# :eq(3)
cambia solo el elemento de la posicion indicada, en este ejemplo cambia solo la posicion 4
ejemplo:
<!-- $("td:gt(3)").css("background-color", "yellow"); -->
# :lt(3)
cambia elementos antes de la posicion indicada hacia arriba, en este ejemplo estas parado en la posicion 4 y desde la posicion 3 hacia arriba realiza cambios.
ejemplo:
<!-- $("td:gt(3)").css("background-color", "yellow"); -->
# filtros hijos
# pseudo clase # last-child # cambiar parrafo jquery en js
<!-- $("ul li:last-child").html("parrafo modificado"); -->
# filtros form
<!-- $(document).ready(function() {
 $('input[type="checkbox"]:checked');
}); -->
<!-- $(document).ready(function() {
 let valorDeLaOpcion = $('select > option:selected').val();
 console.log(valorDeLaOpcion)
}); -->
# otros filtros
● obtener elementos animados (:animated)
● elementos ocultos (:hidden)
● un elemento raíz (:root)
● elementos visibles (:visible). 
# pseudo elemento # even # elementos inpares
<!-- $(document).ready(function() {
 $("#btn").on("click",function() {
 $( "li" ).filter( ":even" ).css( "background-color", "red" );
 });
}); -->
# pseudo elemento # odd # elementos pares
<!-- $(document).ready(function() {
 $("#btn").on("click",function() {
 $( "li" ).filter( ":odd" ).css( "background-color", "red" );
 });
}); -->
# funtion formatDate y click contador++
cuando haga click mostrara en consola hora, minuto, segundo y milisegundo actual si es menor a 10 antepondra un 0 para que tenga dos digitos, palabra click, el contador sumara 1 y palabra vez
ejemplo:
<!-- $(document).ready(function() {
function formatDate(date) {
 return (date.getHours() < 10 ? '0' : '') +
date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') +
date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '')
+ date.getSeconds() + '.' + (date.getMilliseconds() < 10 ?
'00' : (date.getMilliseconds() < 100 ? '0' : '')) +
date.getMilliseconds();
};

let contador = 0;
$('#ejemplo').on('click', function() {
 contador++;
 console.log('--->' + formatDate(new Date()) + '
Clic '+contador+' vez!');
});
});
--->18:30:19.483 Clic 1 vez!   -->
# animaciones
# toggle
muestra u oculta instantaneamente un elemento
# fadeToggle (desvanecimiento)
muestra u oculta gradualmente un elemento
# slideToggle (deslizamiento arriba oculta o abajo muestra)
muestra u oculta deslizando un elemento
# fadeln (desvanecimiento mostrar)
 Cambia gradualmente la opacidad, para los elementos seleccionados, de ocultos a visibles.
 # fadeOut (desvanecimiento ocultar)
 Cambia gradualmente la opacidad, para los
elementos seleccionados, de visible a oculto.
# slideUp (deslizamiento arriba ocultar)
El método slideUp() desliza hacia arriba (oculta) los
elementos seleccionados.
# slideDown (deslizamiento abajo mostrar)
El método slideDown() desliza hacia abajo
(muestra) los elementos seleccionados.
# transformar js a jquery
# sintaxis js
let button = document.getElementById('button');
button.addEventListener('click', function(){
 alert('click sobre el botón');
});
# sintaxis jquery
let button = $('#button');
button.click(function(){
 alert('click sobre el botón');
});
# dom jquery
$(document).ready(function() {
 let titulo_1 = $('#titulo_1');
 console.log(titulo_1); 
});
# metodos http api
# metodo es proactivo
Esto en programación lo llamamos CRUD: Create, Read, Update, Delete.
● GET : Obtener
● POST: Crear 
● PUT / Patch : Actualizar
● Delete: eliminar.
# json: notacion de objetos de javascript [array] de {Objeto}
un json se visualiza como un arreglo (array) de objetos con la diferencia de que sus propiedades van con comillas

# api json place holder con ajax (biblioteca)
AJAX y API: Imagina que quieres pedir una pizza, pero no sabes cómo hacerlo. Entonces, llamas a la pizzería (la API) y haces tu pedido (la solicitud AJAX). Si todo va bien, la pizzería te dirá cuándo llegará tu pizza (la función success). Pero si algo sale mal, como que la pizzería está cerrada o no tienen los ingredientes que quieres, te lo dirán (la función error).
ejemplo:
<!-- $.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  type: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log('Error: ', error);
  }
}); -->
# plugin de jquery (biblioteca)
Son pequeños programas que añaden funcionalidades a otros programas. Por ejemplo, en un navegador web, puedes instalar un plugin para bloquear anuncios.
ejemplo:
● jQuery.fn.parpadea = function() {
 this.each(function(){
 elem = $(this);
 elem.fadeOut(250, function(){
 $(this).fadeIn(250);
 });
 });
 return this;
 };
● $(document).ready(function(){
 //parpadean los elementos de
class CSS "parpadear"
 $(".parpadear").parpadea();

 //añado evento click para un
botón. Al pulsar parpadearán los
elementos de clase parpadear

$("#botonparpadear").click(function()
{
 $(".parpadear").parpadea();
 })
 })
# canvas js biblioteca libreria
Es una parte de HTML5 que permite dibujar gráficos en una página web con JavaScript. Se puede usar para hacer cosas como gráficos, juegos o cualquier otra cosa que requiera dibujo en la página.
● <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport"
content="width=device-width,
initial-scale=1.0">
 <script
src="https://code.jquery.com/jquery-3.7.
1.min.js"></script>
 <script
src="https://canvasjs.com/assets/script/
jquery.canvasjs.min.js"></script>
 <title>Usando CanvasJS</title>
</head>
<body>
 <div id="chartContainer"
style="height: 300px; width:
100%;"></div>
 <script src="script.js"></script>
</body>
</html>
● $(document).ready(function(){
$.ajax({
 type:"GET",

url:"https://mindicador.cl/api/dolar",
 dataType:"json",
 success: function(datos) {
 let datosApi = datos.serie;
 console.log(datosApi);
 },
 error: function(error) {
 console.log(error)
 }
});
});
● var options = {
 animationEnabled: true,
 theme: "light2",
 title: {
 text: "Daily Sales Data"
 },
 axisX: {
 valueFormatString: "DD MMM
YYYY",
 },
 axisY: {
 title: "USD",
 titleFontSize: 24,
 },
 data: [{
 type: "spline",
 dataPoints: dataPoints
 }]
 };
 ● $(document).ready(function(){
 var dataPoints = []
 var options = {
 animationEnabled: true,
 theme: "light2",
 title: {
 text: "Daily Sales Data"
 },
 axisX: {
 valueFormatString: "DD MMM YYYY",
 },
 axisY: {
 title: "USD",
 titleFontSize: 24,
 },
 data: [{
 type: "spline",
 dataPoints: dataPoints
 }]
 };
$.ajax({
 type:"GET",
 url:"https://mindicador.cl/api/dolar",
 dataType:"json",
 success: function(datos) {
 let datosApi = datos.serie;
 for(var i = 0; i < datosApi.length; i++) {
 dataPoints.push({
 x: new Date(datosApi[i].fecha),
 y: datosApi[i].valor,
 })
 }
 $("#chartContainer").CanvasJSChart(options);
 },
 error: function(error) {
 console.log(error)
 }
});
});
# funcion constructora
funcion para reutilizar metodos en objetos con palabra reservada new
Ejemplo:
 ● function Cuadrado(lado) {
 this.lado = lado;
}
 ● Cuadrado.prototype.calcularArea = function()
{
 return this.lado * this.lado;
}
 ● Cuadrado.prototype.calcularPerimetro = function() {
 return this.lado * 4;
}
 ● var c1 = new Cuadrado(2); <!--instanciar es crear un nuevo objeto a partir de moldes o plantillas como funcion constructora o clase u objeto -->
console.log(c1.calcularArea());
console.log(c1.calcularPerimetro());
● 4
8
# getter or setter
ejemplo:
● function Vehiculos(marca) { <!--funcion constructora llamada vehiculo argumento o propiedad marca -->
var _marca = marca; <!--propiedad privada _marca se accede desde la funcion constructora vehiculo y desde afuera -->
Object.defineProperty(this, "_getMarca", { <!--uso metodo permite agregar propiedades con funciones a tu objeto y this representa al objeto que son privadas y solo tu puedes usar dentro de la funcion-->
 get: function () { <!--get devuelve propiedad original -->
 return _marca
 }
});
Object.defineProperty(this, "_setMarca", { 
 set: function (marca) { <!--set devuelve propiedad nueva -->
 _marca = marca
 }
});
}
● Vehiculos.prototype.getMarca = function(){ <!--agregando metodo a objeto, todos pueden usar las funciones porque son habilidades públicas del objeto-->
return this._getMarca;
};
● Vehiculos.prototype.setMarca = function(marca){ <!--agregando metodo a objeto -->
this._setMarca = marca;
};
<!--nuevo objeto -->
● var v1 = new Vehiculos("Ford"); <!--instanciar objeto -->
console.log(v1.getMarca()); // "Ford"
● v1.setMarca("Kia");
console.log(v1.getMarca()); // "Kia"
# interpolacion
es como concatenar con llamados o invocaciones de propiedades, en vez de signo + usas signo $
ejemplo:
var persona = { nombre: "José" };
var direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };
var mensaje = `Hola ${persona.nombre},
tu dirección es ${direccion.calle}, ${direccion.comuna}`; //ES6
# usar babel desde terminal
● npx babel js/ -d dist/: Este comando toma todos los archivos JavaScript en el directorio js/ y los transforma de ES6 a ES5, colocando los archivos transformados en el directorio dist/.
● babel.config.json: Este es un archivo de configuración que Babel utiliza para entender cómo debe transformar tu código. Si tienes configuraciones específicas para Babel, las colocarías aquí.
● npx babel js/ -d dist/ --config-file ./babel.config.json: Este comando es similar al primero, pero también le dice a Babel que utilice el archivo de configuración babel.config.json que has especificado.
● node dist/for-anidados.js y node dist/rest-spread-objetos.js: Estos comandos ejecutan los archivos JavaScript transformados que se encuentran en el directorio dist/.
# instalar babel desde terminal
npm init -y
npm i @babel/preset-env @babel/cli @babel/core @babel/polyfill
# class js con node
Una clase es una forma de organizar nuestro código, que nos permite abstraer ciertos
conceptos y organizarlos en torno a patrones que nos permitan construir objetos.
● class Estudiante {
 constructor(nombre, edad){
 this.nombre = nombre;
 this.edad = edad;
 }
}
let e1 = new Estudiante('Juan',35);
console.log(e1);
● comando
node script.js
● muestra
Estudiante { nombre: 'Juan', edad: 35 }
# comando para transpilar de es6 a es5 en terminal
● sintaxis
npx babel src --out-dir dist
● aplicacion
npx babel dir desafio-evaluado-3-clases-en-ES6/assets/js --out-dir desafio-evaluado-3-clases-en-ES6/assets/es5
# super hereda propiedades del padre
# extends objeto hijo de objeto padre
ejemplo:
class Administrativo extends Personal {
 constructor(nombre, departamento, tipo,
activo){
 super(nombre, departamento, tipo,
activo);
 }
}
class Docente extends Personal {
 constructor(nombre, departamento, tipo,
activo){
 super(nombre, departamento, tipo,
activo);
 }
}
class Obrero extends Personal {
}
# play (funcion de metodo)
se utiliza para iniciar la reproducción de un medio, como un video o un audio.
Ejemplo:
document.getElementById("myVideo").play();
# closure (funcion)
En programación, un cierre (o closure) es una función que tiene acceso a variables de su ámbito léxico, incluso después de que la función externa haya terminado de ejecutarse.
explicado para un niño
Imagina que tienes una caja (que es nuestra función externa), y dentro de esa caja tienes un juguete (que es nuestra variable) y otra caja más pequeña (que es nuestra función interna o closure). Ahora, cierras la caja grande, pero la caja pequeña dentro de ella puede seguir viendo y jugando con el juguete. Incluso si te llevas la caja grande a otro lugar, la caja pequeña todavía puede jugar con el juguete. Eso es básicamente un closure: una función (la caja pequeña) que puede acceder a las variables (el juguete) de otra función (la caja grande), incluso después de que la función externa ha terminado.
Ejemplo:
function crearFuncion() {
    let nombre = "Copilot";
    function mostrarNombre() {
        console.log(nombre);
    }
    return mostrarNombre;
}

let miFuncion = crearFuncion();
miFuncion();  // Esto imprimirá: "Copilot" aqui llamas la variable y la variable es la funcion inicial, por eso se repite la funcion porque quedo referenciada o enlazada a la variable, o el valor de la variable es la funcion inicial, y al ir al final es funcion de cierre o closure
# variable local (funcional o bloque) vs variable global
una variable local puede tener el mismo nombre que una global, funcionaran igual porque la global llamara a la global primero y la local llamara a la local primero
● ejemplo:
var lenguaje= "Ruby";
(function(){
 var lenguaje= "JavaScript";
 console.log(lenguaje + " es un lenguaje de programación"); // llamara a local + string
})();
console.log(lenguaje); // llamara a global
● ejemplo:
let globalVar = "Soy global"; // Esta es una variable global

function miFuncion() {
    let localVar = "Soy local"; // Esta es una variable local
    console.log(globalVar); // Puedo acceder a la variable global desde la función
    console.log(localVar); // Puedo acceder a la variable local desde dentro de la función
}

miFuncion();

console.log(globalVar); // Puedo acceder a la variable global desde fuera de la función
console.log(localVar); // Esto dará un error porque localVar no está definida en este ámbito
# IIFE (funciones autoejecutables)
Immediately-invoked Function Expressions
ejemplo ES5
(function () {
...declaraciones...
})();
ejemplo ES6
(() => {
...declaraciones...
})();
# patron de modulo js
invocar codigos en otros archivos .js
ejemplo:
● // miModulo.js
let contador = 0;

function incrementar() {
    contador++;
}

function mostrarContador() {
    console.log(contador);
}

// Exportamos las funciones que queremos hacer públicas
export { incrementar, mostrarContador };
● // app.js
// Importamos las funciones del módulo
import { incrementar, mostrarContador } from './miModulo.js';

incrementar();
mostrarContador();  // Esto imprimirá: 1
# mecanismo programacion (sincronica)
los procesos se ejecutan uno despues de otro.
# mecanismo programacion (asincronica)
los procesos se ejecutan todos a la vez y no necesitan esperar a que finalicen los otros. Cada proceso puede tener una duracion diferente, por cual hay cortos y largos y pueden ser simultaneos en algunas etapas.
# Concurrencia (dentro del contexto de la programación asincrónica):
Los procesos inician en diferentes momentos y pueden ser simultáneos en alguna etapa.
# Paralelismo (dentro del contexto de la programación asincrónica):
Los procesos inician al mismo tiempo y son simultáneos desde el comienzo.
# Event loop o bucle de eventos 
Gestiona operaciones asíncronas y revisa una lista de espera para ejecutarlas en orden FIFO (el primer dato en entrar es el primero en salir).
# memory heap (ejecucion de procesos)
puedes tomar y dejar bloques (objetos y propiedades) en cualquier orden
# call stack o pila de procesos (ejecucion de procesos)
puedes tomar bloque superior y dejar el bloque en la parte superior (objetos y propiedades)
# web api 😊
Una Web API es como un menú en un restaurante. Tú (la aplicación) le dices al mesero (la API) qué platillo (datos) quieres y él va a la cocina (el servidor) a conseguirlo para ti. 
# callback queue
fila de espera para ejecutarse en orden FIFO, primer dato en entrar primer dato en salir
# callback (llamada de vuelta)
Es una función que se pasa como argumento a otra función y se invoca una vez que las operaciones asíncronas terminan y nos devuelven un resultado. 
# race condition (condicion de carrera)
Ocurre cuando procesos se ejecutan simultáneamente sin saber si su resultado futuro será un acierto o un error.
# async await
Permite que las funciones que retornan promesas devuelvan directamente los resultados en lugar de promesas.
● async se utiliza antes de la declaración de una función para indicar que siempre retornará una promesa.
● await se utiliza dentro de una función async para esperar y retornar la promesa.
# setTimeOut
El método setTimeout() llama a una función o evalúa una expresión después de un número
específico de milisegundos.
ejemplo:
setTimeout(() => {
console.log('hola mundo!');
}, 1000)
# promesas (estado)
Es un objeto que representa el estado de una operación asíncrona. Son: 
● Pendiente (Pending): cuando todavía no empieza o no ha terminado de ejecutarse. 
● Cumplida o resuelto (Fulfilled): en caso de éxito
● Rechazada (Rejected): en caso de fallo.
# promise.all
es un método que toma un iterable (como un arreglo) de promesas como entrada y devuelve una sola promesa. Esta promesa resultante se cumple cuando todas las promesas del iterable se han cumplido o se rechaza si alguna de ellas es rechazada.
ejemplo:
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values); // [3, 1337, "foo"]
});
# promise.race
toma un iterable de promesas como entrada y devuelve una sola promesa. Esta promesa se resuelve con el estado de la primera promesa que se resuelve o se rechaza.
ejemplo:
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "four");
});
const p5 = new Promise((resolve, reject) => {
    reject("reject");
});

Promise.race([p4, p5]).then(
    (value) => {
        console.log(value); // Not called
    },
    (error) => {
        console.error(error.message); // "reject"
    }
);
# tipos de errores
● Error: Permite establecer un mensaje de error personalizado.
● RangeError: Ocurre cuando un número está fuera del rango permitido por el lenguaje.
● ReferenceError: Ocurre cuando se hace referencia a variables no declaradas.
● SyntaxError: Ocurre cuando hay un error de sintaxis en nuestro código.
● TypeError: Ocurre cuando un valor no es del tipo esperado. 
● URIError: Ocurre cuando se codifica o decodifica una URL utilizando las funciones encodeURI, decodeURI, encodeURIComponent o decodeURIComponent.
● EvalError: Ocurre cuando hay un error al evaluar una expresión con la función eval. Hay que mencionar que evaluar expresiones con esta función es una mala práctica, por lo que no se debería usar. 
# throw
Este comando en js permite enviar al navegador
una excepción tal cual como si de una real
se tratase. 
# try (bloque)
El bloque try se encarga de ejecutar todas las instrucciones que posea y evalúa en
cada una si se ejecutó de forma correcta.
# catch (bloque)
El bloque catch permite obtener cuál fue el error que se produjo en el bloque try, en
el que podemos acceder a la información del error mediante una variable.
# finally (bloque)
El bloque finally permite que siempre se puedan ejecutar sentencias posterior a try
y catch, habiendo evaluado de forma correcta el try o si es que hubiera algún error
en catch, sí o sí ejecutará lo que está en este bloque.
# onerror (metodo)
● El método onerror del objeto window permite capturar los errores en tiempo de
ejecución.
● Se puede utilizar onerror en el elemento img de html para capturar el error cuando no
existe la imagen cargada. 
# Prototipo = objeto modelo a reutilizar
Clase objeto = modelo a seguir o parámetro para instanciar
Objetos = instancia de una clase de objeto, anteponiendo palabra reservada new, el objeto contiene propiedades y funciones
    Atributo o propiedad = características de objeto
    metodo o funcion = comportamiento de objeto
# metodo funcion proactiva
# evento funcion reactiva

API-ajax api-json Babel