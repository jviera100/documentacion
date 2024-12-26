### Resumen de JavaScript:

### 1. Generalidades y Configuración

- **Comentarios en Código**: 
    - `Ctrl + K + C` mantiene el botón `Ctrl` presionado para presionar `K` y luego `C`. Esto convierte la selección en un comentario.
- **JavaScript es Sensible a Mayúsculas y Espacios**: Asegúrate de poner un punto y coma al final de cada función.
- **Configuraciones de Visual Studio Code**:
    - `setting-ligatures-true`
    - `setting-font-agregar fuentes: Fira Code, Iosevka, Cascadia Code, Menlo, Monaco, 'Courier New', monospace`

### 2. Tipos de Datos

- **String**: Texto o cadena de texto. 
    ```js
    let saludo = "Hola Mundo";
    ```
- **Number**: Un número. 
    ```js
    let numero = 10;
    ```
- **Boolean**: Valor lógico, `true` o `false`. 
    ```js
    let esVerdadero = true;
    ```

### 3. Operadores Aritméticos

- `+` : Suma 
- `-` : Resta
- `*` : Multiplicación
- `/` : División
- `%` : Módulo o resto de la división 

### 4. Operadores de Comparación

- `==` : Igual a (compara si dos valores son iguales, ejemplo `"10" == 10` es `true`)
- `===` : Igualdad estricta (compara si dos valores son iguales y si son del mismo tipo de dato, ejemplo `"10" === 10` es `false`) 
- `!=` : Diferente de (compara si dos valores son diferentes, ejemplo `10 != 10` es `false`)
- `>` : Mayor que (ejemplo `10 > 5` es `true`)
- `<` : Menor que
- `>=` : Mayor o igual que

### 5. Material de Apoyo

- [Jon Mircha - JavaScript](https://jonmircha.com/javascript)
- [Lenguaje JavaScript](https://lenguajejs.com/javascript/)

### 6. Funciones en JavaScript

- **`alert()`**: Muestra una ventana de alerta en el navegador.
    ```js
    alert("soy ventana de alerta");
    alert("soy texto" + soyvariable);
    ```
- **`console.log()`**: Muestra texto en la consola del navegador.
    ```js
    console.log("soy texto en consola");
    console.log(10);
    console.log(true);
    console.log(soyvariable);
    console.log("soy texto" + soyvariable);
    ```

- **`console.debug()`, `console.info()`, `console.dir()`, `console.trace()`**: Funciones similares a `console.log` pero con diferente visualización.
    ```js
    console.debug(Object);
    console.info(Object);
    console.dir("detalle objeto");
    console.trace("ruta detallada");
    ```

- **`console.error()`**: Muestra errores en la consola.
    ```js
    console.error(Object);
    console.error(error.message); 
    console.error("Error:", error);
    console.error(error.stack); 
    ```

### 7. Variables

- Declaración de Variables:
    ```js
    let soyvariable = 3 + 4;
    let soyvariable = "soy texto";
    const PI = 3.14;
    ```

- Alcance de Variables:
    - **Global**: Variables accesibles en toda la aplicación.
    - **Funcional**: Variables accesibles dentro de la función donde se declaran.
    - **Bloque**: Variables accesibles dentro del bloque donde se declaran.

- Variables Anidadas (Objetos):
    ```js
    const variablepadre = {
        variablehijo: x,
        variablehija: y    
    };
    alert(variablepadre.variablehijo);
    ```

- Llamar Variables Fuera del Nido con Corchetes:
    ```js
    const s = "le gusta programar";
    const user = {
        name: "poplin",
        age: 35,
        [s]: true   
    };
    alert(user[s]);
    ```

### 8. Clases y Objetos

- **Clase en JavaScript**:
    ```js
    class User {
        constructor(name) {
            this.name = name;
        }

        sayHello() {
            alert("Hola " + this.name);
        }
    }

    let user1 = new User("yo");
    let user2 = new User("tu");
    user1.sayHello();
    ```

### 9. Otros Métodos y Funciones

- **`document.write()`**: Muestra texto en el navegador.
    ```js
    document.write("soy texto" + soyvariable);
    ```
- **`prompt()`**: Muestra una ventana interactiva para que el usuario ingrese un valor.
    ```js
    let soyvariableprompt = prompt("soy texto");
    alert("soy texto" + soyvariableprompt);
    ```
- **`parseInt()`**: Convierte un texto a un número entero.
    ```js
    let soyvariable = parseInt(prompt("soy texto"));
    alert("soy texto" + soyvariable);
    ```

### 10. Manipulación del DOM

- **`document.getElementById()`**: Captura un elemento del HTML por su ID.
    ```js
    let soyvariable = document.getElementById("soyID");
    ```
- **`innerHTML`**: Cambia el contenido de un elemento del HTML.
    ```js
    soyvariabledelgetElementById.innerHTML = soyvariabledelprompt;
    ```

### 11. Estructuras de Control

- **`if`**: Condicional simple.
    ```js
    if (condicion) {
        // código si la condición se cumple
    }
    ```

- **`if - else`**: Condicional con alternativa.
    ```js
    if (condicion) {
        // código si la condición se cumple
    } else {
        // código si la condición no se cumple
    }
    ```

- **Condición Ternaria**: Similar a `if - else`.
    ```js
    mensaje = age < 18 ? "hola" : "hola señor";
    ```

### 12. Operadores Lógicos

1. **`&& (AND)`**: Agrega condiciones simultáneas en una línea que deben cumplirse todas.
    ```js
    if (age > 5 && age < 18) {
        // código si ambas condiciones se cumplen
    }
    ```
2. **`|| (OR)`**: Agrega condiciones simultáneas en una línea donde al menos una debe cumplirse.
    ```js
    if (age == 5 || (age > 5 && age < 18)) {
        // código si alguna de las condiciones se cumple
    }
    ```
3. **`! (NOT)`**: Invierte la condición, función o variable.
    ```js
    const variable = age < 18;
    if (!variable) {
        // código si la condición es falsa
    }
    ```

### 13. Estructuras de Control Avanzadas

1. **`switch`**: Múltiples condiciones.
    ```js
    var num = prompt("Escribe un Número del 1 al 7");
    switch (num) {
        case "1": 
            alert("El día de la semana es lunes");
            break;
        case "2":
            alert("El día de la semana es martes");
            break;
        case "3":
            alert("El día de la semana es miércoles");
            break;
        case "4":
            alert("El día de la semana es jueves");
            break;
        case "5":
            alert("El día de la semana es viernes");
            break;
        case "6":
            alert("El día de la semana es sábado");
            break;
        case "7":
            alert("El día de la semana es domingo");
            break;
        default:
            alert("El número ingresado no corresponde a un día de la semana");
            break;
    }
    ```

### 14. Ciclos o Bucles

1. **`for`**: Ideal cuando sabes cuántas veces se va a repetir el ciclo. La variable de control se actualiza automáticamente. La estructura es valor de variable, condición y acumulador en orden horizontal.
    ```js
    var num = 0;        
    for (;num < 2;) {   
        alert(num++);              
    }
    ```



### 15. Operador de Módulo (%)

1. **Operador de Módulo (% = residuo)**: Hasta el tercer término o recorrido del ciclo: el par siempre da 0 y el impar 1.

**Elementos de la División**:
- **Dividendo**: Es el número que se está dividiendo.
- **Divisor**: Es el número por el cual se divide el dividendo.
- **Cociente**: Es el resultado de la división (la cantidad de veces que el divisor cabe en el dividendo).
- **Resto o residuo**: 
    ``` 
    resto = dividendo - (divisor * cociente)
    ```
    
**Ejemplos**:
- **(1 / 2)**:
  ``` 
  La división de 1 entre 2 es 0.5.
  El cociente es 0 (porque 2 no cabe en 1). Respuesta solo número entero, no el decimal.
  El resto es 1.
  ```
- **(2 / 2)**:
  ``` 
  La división de 2 entre 2 es 1.
  El cociente es 1 (porque 2 cabe exactamente en 2).
  El resto es 0.
  ```
- **(3 / 2)**:
  ``` 
  La división de 3 entre 2 es 1.5.
  El cociente es 1 (porque 2 cabe una vez en 3).
  El resto es 1.
  ```

### 16. Iterar con Operador Módulo, Contador y Acumulador

**Sintaxis**:
```js
var contador = 0; // Inicio del contador en 0
var acumulador = 0; // Inicio del acumulador en 0
for (i = 1; i <= 50; i++) { // Valor inicial es 1
    if (i % 2 != 0) { // Condición de impar para hacer el ciclo
        contador++; // Es igual que escribir: contador = contador + 1
        acumulador += i; // Es igual a escribir: acumulador = acumulador + i
    }
}
alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada de ellos es: ${acumulador}`); // Cuento 25 impares y sumados da 625 (suma de los 25 impares)
```

### 17. Método de Gauss para Contar Todos los Números

**Cálculo de Gauss**:
``` 
metodo de gaus = ((numero menor - numero mayor) + 1) * ((numero menor + numero mayor) / 2)
metodo de gaus = ((1 - 50) + 1) * ((1 + 50) / 2)
metodo de gaus = 50 * 25.5 = 1275
```

### 18. Fórmula para Contar Números Impares en un Rango

**Conteo de Impares**:
``` 
n = (b - a + 1) / 2
n = (50 - 1 + 1) / 2
n = 25
```

### 19. Fórmula para Sumar Números Impares en un Rango

**Suma de Impares (n se obtiene de la fórmula de conteo)**:
``` 
S = n * ((primer impar + último impar) / 2)
S = 25 * ((1 + 49) / 2)
S = 25 * 25 = 625
```


### 20. Iterar Array de Objetos con un Ciclo `for`

1. **`for`**: Iterar el array de objetos.
    ```js
    for (let i = 0; i < dental.length; i++) {
        console.log(dental[i].name);
    }
    ```

### 21. `for...in`

1. **`for...in`**: Muestra la posición de la array.
    ```js
    for (let diente in dental) {
        console.log(dental[diente].id);
    }
    ```

### 22. `for...of`

1. **`for...of`**: Muestra el elemento de la array.
    ```js
    for (let diente of dental) {
        console.log(diente.name);
    }
    ```

### 23. `while` (Ciclos)

1. **`while`**: Ideal cuando no sabes cuántas veces se va a repetir el ciclo. La variable de control la manejas tú, y debes asegurarte de actualizarla para que el ciclo no sea infinito. Se repite el ciclo de código hasta que la condición deje de cumplirse.
    ```js
    var num = 0; // variable num es igual a 0
    while (num < 2) { // el número debe ser menor a 2
        alert(num); // si cumple la condición muestra el número
        num++; // si cumple la condición le suma 1
    } // si no cumple la condición se detiene
    ```

### 24. `do...while`

1. **`do...while`**: Hace el algoritmo y después comprueba la condición.
    ```js
    var num = 0;
    do {
        alert(num);
        num++;
    } while (num < 2);
    ```

### 25. Nombrar Ciclo `for`

1. **Nombrar Ciclo**: Se puede poner nombre a los ciclos.
    ```js
    nombreciclo: for
    ```

### 26. `break` (Estructura de Control de Ciclo)

1. **`break`**: Interrumpe el ciclo.
    ```js
    break;
    break nombreciclo;
    ```

### 27. `continue` (Estructura de Control de Ciclo)

1. **`continue`**: Se salta una instrucción.
    ```js
    continue;
    ```

### 28. `Math.random()`

1. **`Math.random()`**: Función que muestra datos al azar.
    ```js
    Math.random();
    ```

### 29. Funciones Anónimas (Expresadas)

1. **Funciones Anónimas**: Función sin nombre asignada a una variable para poder ser invocada.
    ```js
    var num1 = prompt("Ingrese el primer número: ");
    var num2 = prompt("Ingrese el segundo número: ");
    let divide = function (a, b) {
        let resultado = parseInt(a) / parseInt(b);
        return resultado;
    };
    document.write("Resultado de la división: " + divide(num1, num2));
    ```

### 30. `Math.pow`

1. **`Math.pow`**: Se utiliza para calcular el valor de un número elevado a una potencia.
    ```js
    let base = 2;
    let exponente = 3;
    let resultado = Math.pow(base, exponente);
    console.log(resultado); // Esto mostrará 8 en la consola
    ```

### 31. Función con Nombre (Declarada)

1. **Función con Nombre**: Declarada funciona de manera desordenada.
    ```js
    function nombre(parametros) {
        // instrucciones
    }

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    function suma(nums) {
        // no uso return porque no tiene instrucciones la función
    }
    console.log(suma(nums));
    ```

### 32. `else if` (ES5)

1. **`else if`**: Condición adicional en estructuras de control.
    ```js
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
        return resultado;
    }

    alert(`El número ingresado es: ${verificar(parseInt(num))}`);
    ```





### 33. Arrays o Arreglos []

1. **Arrays**: Son elementos simultáneos entre corchetes, similar a variables anidadas o con propiedades.
    ```js
    let a = ["naranja", "manzana", "pera"];
    alert(a[0]); // naranja
    alert(a[1]); // manzana
    alert(a[2]); // pera
    ```

2. **`length`**: Cuenta elementos dentro del array.
    ```js
    alert(a.length); 
    ```

3. **`push`**: Agrega último elemento en el array.
    ```js
    a.push("uva");
    ```

4. **`pop`**: Elimina el último elemento en el array.
    ```js
    a.pop();
    ```

5. **`shift`**: Elimina el primer elemento en el array.
    ```js
    a.shift();
    ```

6. **`unshift`**: Agrega el primer elemento en el array.
    ```js
    a.unshift("kiwi");
    ```

7. **`split` (Desconcatenador)**: Divide una cadena en un array de subcadenas.
    ```js
    var filtros = 'Comida china RM nunoa';
    var filtrosArray = filtros.split(' ');
    console.log(filtrosArray); // ["Comida", "china", "RM", "nunoa"]
    ```

8. **`join` (Concatenador)**: Une todos los elementos de un array en una cadena.
    ```js
    var amigos = ["Erick", "Cristian", "Max", "Claudia"];
    console.log(amigos.join(" - ")); // Erick - Cristian - Max - Claudia
    ```

### 34. Métodos de Array

1. **`map`**: Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
    ```js
    var clientes = [
        {nombre: 'Juan', edad: 28},
        {nombre: 'Carlos', edad: 17},
        {nombre: 'Karla', edad: 27}
    ];

    var clientes_modificado = clientes.map(function(cliente) {
        cliente.adulto = cliente.edad >= 18;
        return cliente;
    });

    console.log(clientes_modificado);
    // 0: {nombre: "Juan", edad: 28, adulto: true}
    // 1: {nombre: "Carlos", edad: 17, adulto: false}
    // 2: {nombre: "Karla", edad: 27, adulto: true}
    ```

2. **`reduce`**: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
    ```js
    var deudas = [10000, 5000, 50000, 35000];
    var sumatoriaDeudas = deudas.reduce(function(contador, deuda) {
        return contador + deuda;
    }, 0);
    console.log(sumatoriaDeudas); // 100000
    ```

3. **`filter`**: Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada.
    ```js
    var clientes = [
        {nombre: 'Juan', edad: 28},
        {nombre: 'Carlos', edad: 17},
        {nombre: 'Karla', edad: 27}
    ];

    var adultos = clientes.filter(function(cliente) {
        return cliente.edad >= 18;
    });

    console.log(adultos);
    // {nombre: "Juan", edad: 28}
    // {nombre: "Karla", edad: 27}
    ```

4. **`concat`**: Fusiona dos o más arrays.
    ```js
    var autosCompactos = [
        {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
        {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
        {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
        {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'}
    ];

    var autosDeportivos = [
        {marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
        {marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
        {marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'}
    ];

    var autos = autosCompactos.concat(autosDeportivos);
    console.log(autos);
    // 0: {marca: "Toyota", modelo: "Corolla", combustible: "Gasolina"}
    // 1: {marca: "Mazda", modelo: "3", combustible: "Gasolina"}
    // 2: {marca: "Honda", modelo: "Civic", combustible: "Gasolina"}
    // 3: {marca: "Bmw", modelo: "116d", combustible: "Diesel"}
    // 4: {marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina"}
    // 5: {marca: "Renault", modelo: "Megane RS", combustible: "Gasolina"}
    // 6: {marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina"}
    ```


### 35. Ordenar y Revertir Arrays

1. **`sort`**: Ordena arreglos o arrays de menor a mayor basándose en el primer dígito.
    ```js
    [4, 3, 2, 1].sort();
    // Resultado: [1, 2, 3, 4]
    ```

2. **`reverse`**: Revierte el orden de los elementos en un array.
    ```js
    var muchachos = ["Juan", "Lucas", "Pedro", "Marcos"];
    console.log(muchachos.reverse());
    // Resultado: ["Marcos", "Pedro", "Lucas", "Juan"]
    ```

### 36. Buscar en Arrays

1. **`find`**: Similar a `filter`, encuentra el primer elemento que cumple una condición.
    ```js
    var productos = [
        {nombre: 'coca-cola', precio: 990},
        {nombre: 'papas fritas', precio: 590},
        {nombre: 'ramitas', precio: 290},
        {nombre: 'kapo', precio: 190},
    ];

    var kapo = productos.find(function(producto){
        return producto.nombre == 'kapo';
    });

    console.log(kapo);
    // Resultado: {nombre: 'kapo', precio: 190}
    ```

2. **`findIndex`**: Entrega el índice o posición del primer elemento que cumple una condición.
    ```js
    var productos = [
        {nombre: 'coca-cola', precio: 990},
        {nombre: 'papas fritas', precio: 590},
        {nombre: 'ramitas', precio: 290},
        {nombre: 'kapo', precio: 190},
    ];

    var ramitasIndice = productos.findIndex(function(producto) {
        return producto.nombre == 'ramitas';
    });

    console.log(ramitasIndice);
    // Resultado: 2
    ```

### 37. Verificar Valores en Arrays

1. **`some`**: Verifica si hay al menos un valor en el array que cumple una condición, devuelve `true` o `false`.
    ```js
    var autos = [
        {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
        {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
        {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
        {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
    ];

    var algunDiesel = autos.some(function(auto) {
        return auto.combustible == 'Diesel';
    });

    console.log(algunDiesel);
    // Resultado: true
    ```

### 38. Destructuring

1. **Destructuring**: Permite extraer valores de objetos o arrays y asignarlos a variables individuales de una manera más compacta.
    ```js
    const persona = { nombre: 'Juan', edad: 30 };
    const { nombre, edad } = persona;
    console.log(nombre); // "Juan"
    console.log(edad);   // 30
    ```

### 39. Rest Parameters

1. **Rest Parameters**: Permiten representar un número indefinido de argumentos como un arreglo.
    ```js
    function sumar(...numeros) {
        return numeros.reduce((total, num) => total + num, 0);
    }

    console.log(sumar(1, 2, 3)); // 6
    ```

### 40. Spread Operator

1. **Spread Operator**: Se utiliza para expandir elementos en lugares donde se esperan múltiples argumentos o múltiples elementos.
    ```js
    const numeros = [1, 2, 3];
    console.log(...numeros); // 1 2 3
    ```

### 41. Arrow Functions (ES6)

1. **Arrow Functions**: Se puede reemplazar la palabra reservada `function` por `let` y agregar una flecha en el valor de la variable.
    ```js
    var num = prompt("Ingrese un numero entero");
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
        return resultado;
    };

    alert(`El número ingresado es: ${verificar(parseInt(num))}`);
    ```

### 42. Ciclos Anidados

1. **Ciclos Anidados**: Un ciclo dentro de otro ciclo.
    ```js
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            console.log(i, j); 
        }
    }
    ```

### 43. Event Listener (Eventos)

1. **Event Listener**: Escucha que se ejecute un evento sobre un elemento y aplica una función.
    - **Sintaxis**:
        ```js
        element.addEventListener(evento, funcion, propagacion);
        ```
    - **Ejemplo**:
        ```js
        rockBtn.addEventListener("click", () => {
            play(ROCK);
        });
        ```

### 44. `label` y `input`

1. **`label`**: Etiqueta o título de `input`.
    ```html
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    ```

2. **`input`**: Los elementos de entrada (`input`) en HTML son muy versátiles y se utilizan para recoger diferentes tipos de datos del usuario. Pueden ser campos de texto, botones de opción, casillas de verificación, botones, campos de contraseña, y más.
    ```html
    <input type="button" value="Accion" id="btnAccion">
    ```

### 45. Objetos del Navegador en JavaScript

1. **`window`**: Objeto padre de todo, objeto raíz.

### 46. DOM (Document Object Model)

1. **DOM**: Dentro de `window`, está el DOM, que proporciona objetos para la interacción con el documento XML y/o HTML. Elementos incluyen `id`, `tag`, `class`.
    - **Ejemplos**:
        ```js
        document.body.style.backgroundColor = "red"; // desde js cambio color de body
        const elem = document.getElementById("mydiv"); // declaro que variable es un ID de un elemento o sección del HTML
        elem.style.backgroundColor = "red"; // cambio color a variable que es un ID
        ```

### 47. BOM (Browser Object Model)

1. **BOM**: Dentro de `window`, está el BOM, que proporciona objetos para la interacción con el navegador.
    - **Ejemplos**:
        ```js
        alert(navigator.platform); // muestra la plataforma en la que se ejecuta el navegador (win32)
        alert(navigator.userAgent); // muestra el navegador y sistema operativo
        ```

### 48. Métodos de `Object`

1. **`Object.keys`**: Iterar o recorrer objetos. Devuelve el nombre de las propiedades.
    - **Ejemplo**:
        ```js
        var compras = {manzana: 2, naranjas: 5, peras: 10};
        var keys = Object.keys(compras);
        console.log(keys); // ["manzana", "naranjas", "peras"]
        ```

2. **`Object.values`**: Iterar o recorrer objetos. Devuelve el valor de las propiedades.
    - **Ejemplo**:
        ```js
        var values = Object.values(compras);
        console.log(values); // [2, 5, 10]
        ```

3. **`Object.entries`**: Iterar o recorrer objetos. Devuelve el nombre y el valor de las propiedades.
    - **Ejemplo**:
        ```js
        var entries = Object.entries(compras);
        console.log(entries); // [["manzana", 2], ["naranjas", 5], ["peras", 10]]
        ```

### 49. Sets

1. **Set**: Permite crear un conjunto de valores únicos.
    - **Ejemplo**:
        ```js
        var set2 = new Set("hooola");
        console.log(set2); // Set(4) {"h", "o", "l", "a"}
        ```

2. **`set.delete`**: Elimina elementos del Set.
    - **Ejemplo**:
        ```js
        set2.delete("o");
        console.log(set2); // Set(3) {"h", "l", "a"}
        ```

3. **`set.add`**: Agrega elementos al Set.
    - **Ejemplo**:
        ```js
        set2.add("m");
        set2.add("p");
        console.log(set2); // Set(5) {"h", "l", "a", "m", "p"}
        ```

4. **`set.forEach`**: Mostrar todo el arreglo con el método `forEach`.
    - **Ejemplo**:
        ```js
        set2.forEach(function(elementos) {
            console.log(elementos);
        });
        ```

### 50. Funciones de JavaScript

1. **Funciones de JavaScript**:
    - **Ejemplos**:
        ```js
        window.Object
        window.Array
        window.Function
        ```

### 51. Selección de Elementos

1. **`querySelector`**: Selecciona el primer elemento que coincide con el selector.
    - **Ejemplo**:
        ```js
        let listas = document.querySelector("li");
        listas.style.color = "red"; // cambia color al primer <li>
        ```

2. **`querySelectorAll`**: Selecciona todos los elementos que coinciden con el selector.
    - **Ejemplo**:
        ```js
        let listas = document.querySelectorAll("li");
        let counter = 20;
        for (let li of listas) {
            counter += 10;
            li.style.fontSize = counter + "px"; // cambio de tamaño a <li>
        }
        ```

3. **`matches`**: Comprueba si un elemento es igual a otro.
    - **Ejemplo**:
        ```js
        alert(listas[0].matches("h1")); // mostrará false
        ```

4. **`closest`**: Selecciona o busca el elemento más cercano.
    - **Ejemplo**:
        ```js
        let chapter = document.querySelector(".chapter");
        let book = chapter.closest(".book");
        ```

5. **`getElementBy`**: Busca elementos por ID, clase, etiqueta o nombre.
    - **Ejemplos**:
        ```js
        const elem1 = document.getElementById("mydiv");
        const elem2 = document.getElementsByClassName("mydiv");
        const elem3 = document.getElementsByTagName("div");
        const elem4 = document.getElementsByName("name");
        ```

### 52. Modificar el DOM

1. **`append`**: Crea y añade un elemento dentro de un contenedor al final.
    - **Ejemplo**:
        ```js
        document.body.append(document.createElement("div"));
        ```

2. **`prepend`**: Crea y añade un elemento dentro de un contenedor al principio.
    - **Ejemplo**:
        ```js
        document.body.prepend(document.createElement("div"));
        ```

3. **`before`**: Crea y añade un elemento fuera de un contenedor al principio.
    - **Ejemplo**:
        ```js
        document.body.before(document.createElement("div"));
        ```

4. **`after`**: Crea y añade un elemento fuera de un contenedor al final.
    - **Ejemplo**:
        ```js
        document.body.after(document.createElement("div"));
        ```

5. **`replaceWith`**: Cambia un elemento por otro.
    - **Ejemplo**:
        ```js
        document.body.replaceWith(document.createElement("div"));
        ```

6. **`insertAdjacentText`**: Inserta texto en una posición específica en relación con el elemento.
    - **Ejemplo**:
        ```js
        let ol = document.getElementById("ol");
        ol.insertAdjacentText("beforebegin", "antes");
        ol.insertAdjacentText("afterend", "despues");
        ol.after("despues");

        let li = document.createElement("li");
        li.innerHTML = "primero";
        ol.prepend(li);
        ```

### 53. Eliminar y Clonar Elementos

1. **`remove`**: Elimina un elemento del DOM.
    - **Ejemplo**:
        ```js
        ol.remove();
        ```

2. **`cloneNode`**: Clona un elemento del DOM.
    - **Ejemplo**:
        ```js
        let div2 = div1.cloneNode(true);
        ```

### 54. Eventos jQuery en JavaScript

**Mouse Events**
1. **`click`**: Hace clic sobre el elemento.
2. **`contextmenu`**: Hace clic derecho sobre el elemento.
3. **`mouseover`**: El ratón pasa por encima del elemento.
4. **`mouseout`**: El ratón sale del elemento.
5. **`mousedown`**: Presiona el botón del ratón.
6. **`mouseup`**: Deja de presionar el ratón.
7. **`mousemove`**: Se mueve el ratón.
8. **`hover`**: El ratón entra pasando sobre y sale del elemento. Puede tener una función para cada evento; si se pone solo una función, se aplicará para ambos eventos.

**Keyboard Events**
1. **`keydown`**: Presiona una tecla.
2. **`keyup`**: Suelta una tecla.
3. **`keypress`**: Presiona y suelta una tecla.

**Form Element Events**
1. **`submit`**: Cuando se envía un formulario `<form>`.
2. **`focus`**: Un elemento recibe el foco, ejemplo `<input>`.
3. **`blur`**: Un elemento pierde el foco.

**Document Events**
1. **`DOMContentLoaded`**: Cuando el HTML termina de cargar.

**CSS Events**
1. **`transitionend`**: Cuando una animación de CSS termina.

### 55. jQuery en JavaScript

**Link jQuery en HTML**
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
```

**Extensión jQuery**
- **Extensión jQuery Code Snippets**: Autocompleta estructura de eventos de jQuery, es decir, autocompleta códigos.

### 56. Sintaxis jQuery

**Sintaxis jQuery**: Carga `document.ready` y aplica esta función.
```js
$(document).ready(function(){
    // Código aquí
});
```

### 57. Eventos o Acciones en jQuery

**Eventos son Reactivos**

1. **`click`**: El mouse hace clic sobre el elemento y lo oculta.
    ```js
    $("#texto").click(function(){
        $(this).hide();
    });
    ```

2. **`click`**: Solo funciona en elementos que ya existen en el DOM en el momento en que se ejecuta el código. El mouse hace clic sobre el elemento y lo cambia a color rojo.
    ```js
    $("#texto").click(function(){
        $(this).css("color", "red");
    });
    ```

3. **`on("click")`**: Puede manejar eventos en elementos que se agregan al DOM después de que se ejecuta el código.
    - **Ejemplo**:
        ```js
        $("#btn").on("click", function() {
            console.log("Ocurrió un clic sobre el botón");
        });
        ```

4. **`dblclick`**: El mouse hace doble clic sobre el elemento y lo cambia a color azul.
    ```js
    $("#texto").dblclick(function(){
        $(this).css("color", "blue");
    });
    ```

5. **`mouseover`**: El mouse entra pasando sobre el elemento y lo cambia a color amarillo.
    ```js
    $(".caja").mouseover(function(){
        $(this).css("background-color", "yellow");
    });
    ```

6. **`mouseout`**: El mouse sale del elemento y lo cambia a color rojo.
    ```js
    $(".caja").mouseout(function(){
        $(this).css("background-color", "red");
    });
    ```

7. **`hover`**: El mouse entra pasando sobre y sale del elemento. Puede tener una función para cada evento; si se pone solo una función, se aplicará para ambos eventos.
    ```js
    $("p").hover(
        function() {
            $(this).html("<a href='#'>Me convertí</a>");
        }, 
        function() {
            $(this).html("Soy un párrafo de nuevo");
        }
    );
    ```

### 58. Filtros en jQuery

1. **`:gt(3)`**: Cambia elementos después de la posición indicada hacia abajo. En este ejemplo, estás parado en la posición 4 y desde la posición 5 hacia abajo realiza cambios.
    - **Ejemplo**:
        ```js
        $("td:gt(3)").css("background-color", "yellow");
        ```

2. **`:first`**: Cambia el elemento de la primera posición (first = 0). En este ejemplo, cambia solo la posición 1.
    - **Ejemplo**:
        ```js
        $("td:first").css("background-color", "yellow");
        ```

3. **`:eq(3)`**: Cambia solo el elemento de la posición indicada. En este ejemplo, cambia solo la posición 4.
    - **Ejemplo**:
        ```js
        $("td:eq(3)").css("background-color", "yellow");
        ```

4. **`:lt(3)`**: Cambia elementos antes de la posición indicada hacia arriba. En este ejemplo, estás parado en la posición 4 y desde la posición 3 hacia arriba realiza cambios.
    - **Ejemplo**:
        ```js
        $("td:lt(3)").css("background-color", "yellow");
        ```

### 59. Filtros Hijos

1. **`:last-child`**: Cambia el último hijo de un elemento.
    - **Ejemplo**:
        ```js
        $("ul li:last-child").html("parrafo modificado");
        ```

### 60. Filtros de Formularios

1. **Filtrar checkbox seleccionados**:
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            $('input[type="checkbox"]:checked');
        });
        ```

2. **Obtener valor de la opción seleccionada en un select**:
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            let valorDeLaOpcion = $('select > option:selected').val();
            console.log(valorDeLaOpcion);
        });
        ```

### 61. Otros Filtros

1. **Obtener elementos animados**: `:animated`
2. **Elementos ocultos**: `:hidden`
3. **Elemento raíz**: `:root`
4. **Elementos visibles**: `:visible`

### 62. Pseudo Elementos

1. **`:even`**: Selecciona elementos impares.
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            $("#btn").on("click", function() {
                $("li").filter(":even").css("background-color", "red");
            });
        });
        ```

2. **`:odd`**: Selecciona elementos pares.
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            $("#btn").on("click", function() {
                $("li").filter(":odd").css("background-color", "red");
            });
        });
        ```

### 63. Función `formatDate` y Contador de Clicks

1. **Formato de Fecha y Contador de Clicks**: Cuando se hace click, mostrará en la consola la hora, minuto, segundo y milisegundo actual. Si es menor a 10, antepondrá un `0` para que tenga dos dígitos. Además, mostrará la palabra `click`, el contador sumará 1 y la palabra `vez`.
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            function formatDate(date) {
                return (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' +
                       (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' +
                       (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + '.' +
                       (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) + date.getMilliseconds();
            }

            let contador = 0;
            $('#ejemplo').on('click', function() {
                contador++;
                console.log('--->' + formatDate(new Date()) + ' Clic ' + contador + ' vez!');
            });
        });
        // Ejemplo de salida: --->18:30:19.483 Clic 1 vez!
        ```

### 64. Animaciones

1. **`toggle`**: Muestra u oculta instantáneamente un elemento.
2. **`fadeToggle`**: Muestra u oculta gradualmente un elemento.
3. **`slideToggle`**: Muestra u oculta deslizando un elemento.
4. **`fadeIn`**: Cambia gradualmente la opacidad, para los elementos seleccionados, de ocultos a visibles.
5. **`fadeOut`**: Cambia gradualmente la opacidad, para los elementos seleccionados, de visibles a ocultos.
6. **`slideUp`**: Desliza hacia arriba (oculta) los elementos seleccionados.
7. **`slideDown`**: Desliza hacia abajo (muestra) los elementos seleccionados.

### 65. Transformar JavaScript a jQuery

1. **Sintaxis JavaScript**:
    - **Ejemplo**:
        ```js
        let button = document.getElementById('button');
        button.addEventListener('click', function(){
            alert('click sobre el botón');
        });
        ```

2. **Sintaxis jQuery**:
    - **Ejemplo**:
        ```js
        let button = $('#button');
        button.click(function(){
            alert('click sobre el botón');
        });
        ```

### 66. DOM jQuery

1. **DOM jQuery**:
    - **Ejemplo**:
        ```js
        $(document).ready(function() {
            let titulo_1 = $('#titulo_1');
            console.log(titulo_1); 
        });
        ```

### 67. Métodos HTTP API

1. **Métodos HTTP API**: Esto en programación lo llamamos CRUD: Create, Read, Update, Delete.
    - **GET**: Obtener
    - **POST**: Crear 
    - **PUT / Patch**: Actualizar
    - **DELETE**: Eliminar

### 68. JSON

1. **JSON**: Notación de objetos de JavaScript. Un JSON se visualiza como un arreglo (array) de objetos con la diferencia de que sus propiedades van con comillas.

### 69. API JSON Placeholder con AJAX

1. **AJAX y API**: Realiza solicitudes y respuestas asíncronas con la API.
    - **Ejemplo**:
        ```js
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'GET',
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.log('Error: ', error);
            }
        });
        ```

### 70. Plugin de jQuery

1. **Plugin de jQuery**: Son pequeños programas que añaden funcionalidades a otros programas. Por ejemplo, en un navegador web, puedes instalar un plugin para bloquear anuncios.
    - **Ejemplo**:
        ```js
        jQuery.fn.parpadea = function() {
            this.each(function(){
                elem = $(this);
                elem.fadeOut(250, function(){
                    $(this).fadeIn(250);
                });
            });
            return this;
        };

        $(document).ready(function(){
            // Parpadean los elementos de clase CSS "parpadear"
            $(".parpadear").parpadea();

            // Añadir evento click para un botón
            $("#botonparpadear").click(function() {
                $(".parpadear").parpadea();
            });
        });
        ```

### 71. CanvasJS Biblioteca

**CanvasJS**: Es una parte de HTML5 que permite dibujar gráficos en una página web con JavaScript. Se puede usar para hacer cosas como gráficos, juegos o cualquier otra cosa que requiera dibujo en la página.

**Ejemplo de Uso de CanvasJS en HTML**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
    <title>Usando CanvasJS</title>
</head>
<body>
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    <script src="script.js"></script>
</body>
</html>
```

**Ejemplo de Llamada AJAX y Configuración de Gráfico**:
```js
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/dolar",
        dataType: "json",
        success: function(datos) {
            let datosApi = datos.serie;
            console.log(datosApi);
        },
        error: function(error) {
            console.log(error);
        }
    });
});

var options = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Daily Sales Data"
    },
    axisX: {
        valueFormatString: "DD MMM YYYY"
    },
    axisY: {
        title: "USD",
        titleFontSize: 24
    },
    data: [{
        type: "spline",
        dataPoints: dataPoints
    }]
};

$(document).ready(function(){
    var dataPoints = [];
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Daily Sales Data"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY"
        },
        axisY: {
            title: "USD",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints
        }]
    };

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/dolar",
        dataType: "json",
        success: function(datos) {
            let datosApi = datos.serie;
            for(var i = 0; i < datosApi.length; i++) {
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor
                });
            }
            $("#chartContainer").CanvasJSChart(options);
        },
        error: function(error) {
            console.log(error);
        }
    });
});
```

### 72. Función Constructora

1. **Función Constructora**: Se utiliza para reutilizar métodos en objetos con la palabra reservada `new`.
    - **Ejemplo**:
        ```js
        function Cuadrado(lado) {
            this.lado = lado;
        }

        Cuadrado.prototype.calcularArea = function() {
            return this.lado * this.lado;
        }

        Cuadrado.prototype.calcularPerimetro = function() {
            return this.lado * 4;
        }

        var c1 = new Cuadrado(2); // Instanciar es crear un nuevo objeto a partir de moldes o plantillas como función constructora o clase u objeto
        console.log(c1.calcularArea()); // 4
        console.log(c1.calcularPerimetro()); // 8
        ```

### 73. Getters y Setters

1. **Getters y Setters**: Permiten definir métodos para obtener (get) y asignar (set) valores a propiedades privadas.
    - **Ejemplo**:
        ```js
        function Vehiculos(marca) {
            var _marca = marca;
            Object.defineProperty(this, "_getMarca", {
                get: function () {
                    return _marca;
                }
            });
            Object.defineProperty(this, "_setMarca", {
                set: function (marca) {
                    _marca = marca;
                }
            });
        }

        Vehiculos.prototype.getMarca = function() {
            return this._getMarca;
        };

        Vehiculos.prototype.setMarca = function(marca) {
            this._setMarca = marca;
        };

        var v1 = new Vehiculos("Ford");
        console.log(v1.getMarca()); // "Ford"
        v1.setMarca("Kia");
        console.log(v1.getMarca()); // "Kia"
        ```

### 74. Interpolación

1. **Interpolación**: Es como concatenar con llamados o invocaciones de propiedades, usando el signo `$` en lugar del signo `+`.
    - **Ejemplo**:
        ```js
        var persona = { nombre: "José" };
        var direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };
        var mensaje = `Hola ${persona.nombre}, tu dirección es ${direccion.calle}, ${direccion.comuna}`;
        ```

### 75. Usar Babel desde la Terminal

1. **Comandos para Usar Babel**:
    - `npx babel js/ -d dist/`: Transforma todos los archivos JavaScript en el directorio `js/` de ES6 a ES5, colocando los archivos transformados en el directorio `dist/`.
    - `babel.config.json`: Archivo de configuración que Babel utiliza para entender cómo debe transformar tu código.
    - `npx babel js/ -d dist/ --config-file ./babel.config.json`: Similar al primero, pero también le dice a Babel que utilice el archivo de configuración `babel.config.json` que has especificado.
    - `node dist/for-anidados.js` y `node dist/rest-spread-objetos.js`: Ejecuta los archivos JavaScript transformados que se encuentran en el directorio `dist/`.

### 76. Instalar Babel desde la Terminal

1. **Comandos para Instalar Babel**:
    ```sh
    npm init -y
    npm i @babel/preset-env @babel/cli @babel/core @babel/polyfill
    ```

### 77. Clase en JavaScript con Node

1. **Clase en JavaScript**: Una clase es una forma de organizar el código, que permite abstraer ciertos conceptos y organizarlos en torno a patrones que permitan construir objetos.
    - **Ejemplo**:
        ```js
        class Estudiante {
            constructor(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
            }
        }

        let e1 = new Estudiante('Juan', 35);
        console.log(e1); // Estudiante { nombre: 'Juan', edad: 35 }
        ```

2. **Comando**:
    ```sh
    node script.js
    ```

### 78. Comando para Transpilar de ES6 a ES5 en la Terminal

1. **Sintaxis**:
    ```sh
    npx babel src --out-dir dist
    ```

2. **Aplicación**:
    ```sh
    npx babel dir desafio-evaluado-3-clases-en-ES6/assets/js --out-dir desafio-evaluado-3-clases-en-ES6/assets/es5
    ```

### 79. Herencia con `super` y `extends`

1. **Herencia con `super` y `extends`**: Permite crear una clase que hereda propiedades y métodos de otra clase.
    - **Ejemplo**:
        ```js
        class Personal {
            constructor(nombre, departamento, tipo, activo) {
                this.nombre = nombre;
                this.departamento = departamento;
                this.tipo = tipo;
                this.activo = activo;
            }
        }

        class Administrativo extends Personal {
            constructor(nombre, departamento, tipo, activo) {
                super(nombre, departamento, tipo, activo);
            }
        }

        class Docente extends Personal {
            constructor(nombre, departamento, tipo, activo) {
                super(nombre, departamento, tipo, activo);
            }
        }

        class Obrero extends Personal {}
        ```

### 80. Función `play` de Método

1. **`play`**: Se utiliza para iniciar la reproducción de un medio, como un video o un audio.
    - **Ejemplo**:
        ```js
        document.getElementById("myVideo").play();
        ```

### 81. Closures

1. **Closures**: Una función que tiene acceso a variables de su ámbito léxico, incluso después de que la función externa haya terminado de ejecutarse.
    - **Explicación Sencilla**: 
      Imagina que tienes una caja (función externa), y dentro de esa caja tienes un juguete (variable) y otra caja más pequeña (función interna o closure). La caja pequeña puede seguir viendo y jugando con el juguete incluso después de que la caja grande se cierre.
    - **Ejemplo**:
        ```js
        function crearFuncion() {
            let nombre = "Copilot";
            function mostrarNombre() {
                console.log(nombre);
            }
            return mostrarNombre;
        }

        let miFuncion = crearFuncion();
        miFuncion();  // Esto imprimirá: "Copilot"
        ```
 aqui llamas la variable y la variable es la funcion inicial, por eso se repite la funcion porque quedo referenciada o enlazada a la variable, o el valor de la variable es la funcion inicial, y al ir al final es funcion de cierre o closure.
 ### 82. Variables Locales vs Variables Globales

1. **Variable Local (Funcional o Bloque) vs Variable Global**: Una variable local puede tener el mismo nombre que una global. La global llamará a la global primero y la local llamará a la local primero.
    - **Ejemplo 1**:
        ```js
        var lenguaje = "Ruby";
        (function() {
            var lenguaje = "JavaScript";
            console.log(lenguaje + " es un lenguaje de programación"); // llamará a local + string
        })();
        console.log(lenguaje); // llamará a global
        ```
    - **Ejemplo 2**:
        ```js
        let globalVar = "Soy global"; // Esta es una variable global

        function miFuncion() {
            let localVar = "Soy local"; // Esta es una variable local
            console.log(globalVar); // Puedo acceder a la variable global desde la función
            console.log(localVar); // Puedo acceder a la variable local desde dentro de la función
        }

        miFuncion();

        console.log(globalVar); // Puedo acceder a la variable global desde fuera de la función
        console.log(localVar); // Esto dará un error porque localVar no está definida en este ámbito
        ```

### 83. IIFE (Funciones Autoejecutables)

1. **IIFE**: Immediately-invoked Function Expressions.
    - **Ejemplo ES5**:
        ```js
        (function() {
            // declaraciones
        })();
        ```
    - **Ejemplo ES6**:
        ```js
        (() => {
            // declaraciones
        })();
        ```

### 84. Patrón de Módulo en JavaScript

1. **Patrón de Módulo en JavaScript**: Invocar códigos en otros archivos `.js`.
    - **Ejemplo**:
        ```js
        // miModulo.js
        let contador = 0;

        function incrementar() {
            contador++;
        }

        function mostrarContador() {
            console.log(contador);
        }

        // Exportamos las funciones que queremos hacer públicas
        export { incrementar, mostrarContador };

        // app.js
        // Importamos las funciones del módulo
        import { incrementar, mostrarContador } from './miModulo.js';

        incrementar();
        mostrarContador();  // Esto imprimirá: 1
        ```

### 85. Mecanismos de Programación

1. **Sincrónica**: Los procesos se ejecutan uno después de otro.
2. **Asincrónica**: Los procesos se ejecutan todos a la vez y no necesitan esperar a que finalicen los otros. Cada proceso puede tener una duración diferente, por lo cual hay cortos y largos y pueden ser simultáneos en algunas etapas.

### 86. Concurrencia y Paralelismo

1. **Concurrencia**: Los procesos inician en diferentes momentos y pueden ser simultáneos en alguna etapa.
2. **Paralelismo**: Los procesos inician al mismo tiempo y son simultáneos desde el comienzo.

### 87. Event Loop o Bucle de Eventos

1. **Event Loop**: Gestiona operaciones asíncronas y revisa una lista de espera para ejecutarlas en orden FIFO (el primer dato en entrar es el primero en salir).

### 88. Memory Heap y Call Stack

1. **Memory Heap**: Puedes tomar y dejar bloques (objetos y propiedades) en cualquier orden.
2. **Call Stack**: Puedes tomar el bloque superior y dejar el bloque en la parte superior (objetos y propiedades).

### 89. Web API

1. **Web API**: Es como un menú en un restaurante. Tú (la aplicación) le dices al mesero (la API) qué platillo (datos) quieres y él va a la cocina (el servidor) a conseguirlo para ti.

### 90. Callback Queue

1. **Callback Queue**: Fila de espera para ejecutarse en orden FIFO, primer dato en entrar, primer dato en salir.

### 91. Callback (Llamada de Vuelta)

1. **Callback**: Es una función que se pasa como argumento a otra función y se invoca una vez que las operaciones asíncronas terminan y nos devuelven un resultado.

### 92. Race Condition (Condición de Carrera)

1. **Race Condition**: Ocurre cuando procesos se ejecutan simultáneamente sin saber si su resultado futuro será un acierto o un error.

### 93. Async Await

1. **Async Await**: Permite que las funciones que retornan promesas devuelvan directamente los resultados en lugar de promesas.
    - `async`: Se utiliza antes de la declaración de una función para indicar que siempre retornará una promesa.
    - `await`: Se utiliza dentro de una función `async` para esperar y retornar la promesa.

### 94. setTimeout

1. **`setTimeout`**: El método `setTimeout()` llama a una función o evalúa una expresión después de un número específico de milisegundos.
    - **Ejemplo**:
        ```js
        setTimeout(() => {
            console.log('hola mundo!');
        }, 1000);
        ```

### 95. Promesas (Estado)

1. **Promesas**: Es un objeto que representa el estado de una operación asíncrona. Estados:
    - **Pendiente (Pending)**: Cuando todavía no empieza o no ha terminado de ejecutarse.
    - **Cumplida o Resuelto (Fulfilled)**: En caso de éxito.
    - **Rechazada (Rejected)**: En caso de fallo.

### 96. Promise.all

1. **`Promise.all`**: Es un método que toma un iterable (como un arreglo) de promesas como entrada y devuelve una sola promesa. Esta promesa resultante se cumple cuando todas las promesas del iterable se han cumplido o se rechaza si alguna de ellas es rechazada.
    - **Ejemplo**:
        ```js
        const p1 = Promise.resolve(3);
        const p2 = 1337;
        const p3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, "foo");
        });

        Promise.all([p1, p2, p3]).then((values) => {
            console.log(values); // [3, 1337, "foo"]
        });
        ```

### 97. Promise.race

1. **`Promise.race`**: Toma un iterable de promesas como entrada y devuelve una sola promesa. Esta promesa se resuelve con el estado de la primera promesa que se resuelve o se rechaza.
    - **Ejemplo**:
        ```js
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
        ```

### 98. Tipos de Errores

1. **Error**: Permite establecer un mensaje de error personalizado.
2. **RangeError**: Ocurre cuando un número está fuera del rango permitido por el lenguaje.
3. **ReferenceError**: Ocurre cuando se hace referencia a variables no declaradas.
4. **SyntaxError**: Ocurre cuando hay un error de sintaxis en nuestro código.
5. **TypeError**: Ocurre cuando un valor no es del tipo esperado.
6. **URIError**: Ocurre cuando se codifica o decodifica una URL utilizando las funciones `encodeURI`, `decodeURI`, `encodeURIComponent` o `decodeURIComponent`.
7. **EvalError**: Ocurre cuando hay un error al evaluar una expresión con la función `eval`. Evaluar expresiones con esta función es una mala práctica, por lo que no se debería usar.

### 99. `throw`

1. **`throw`**: Este comando en JavaScript permite enviar al navegador una excepción tal cual como si de una real se tratase.

### 100. Bloques `try`, `catch` y `finally`

1. **`try` (bloque)**: Ejecuta todas las instrucciones que posee y evalúa en cada una si se ejecutó de forma correcta.
2. **`catch` (bloque)**: Permite obtener cuál fue el error que se produjo en el bloque `try`. Podemos acceder a la información del error mediante una variable.
3. **`finally` (bloque)**: Permite que siempre se puedan ejecutar sentencias posterior a `try` y `catch`, habiendo evaluado de forma correcta el `try` o si es que hubiera algún error en `catch`. Siempre ejecutará lo que está en este bloque.

### 101. `onerror` (Método)

1. **`onerror` (método)**: 
    - **El método `onerror` del objeto window** permite capturar los errores en tiempo de ejecución.
    - **Se puede utilizar `onerror` en el elemento `img` de HTML** para capturar el error cuando no existe la imagen cargada.

### 102. Prototipo y Clases en JavaScript

1. **Prototipo**: Objeto modelo a reutilizar.
2. **Clase Objeto**: Modelo a seguir o parámetro para instanciar.
3. **Objetos**: Instancia de una clase de objeto, anteponiendo palabra reservada `new`. El objeto contiene propiedades y funciones.
    - **Atributo o Propiedad**: Características de objeto.
    - **Método o Función**: Comportamiento de objeto.

### 103. Función Proactiva vs Función Reactiva

1. **Método**: Función proactiva.
2. **Evento**: Función reactiva.

