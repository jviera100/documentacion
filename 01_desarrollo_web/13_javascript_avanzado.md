### **Callback**

Un **callback** (o "función de retorno") es una función que se pasa a otra función como un argumento, y que luego se invoca ("se llama de vuelta") dentro de la función externa para completar algún tipo de rutina o acción. Son la base del manejo de eventos y la asincronía en JavaScript.

**Relación con las Promesas:**
Las promesas son una evolución de los callbacks para manejar código asíncrono de una manera más legible y robusta, evitando el "Callback Hell" (anidamiento excesivo de callbacks). Un `.then()` en una promesa es, en esencia, un registro de una función callback que se ejecutará cuando la promesa se resuelva.

---

### 172. (Pregunta 1) Async/Await, Promise.all y Promise.race

- **Promesas (Promises):** Objeto que representa la terminación o el fracaso de una operación asíncrona.
- **`async/await`:** Azúcar sintáctico sobre las promesas para escribir código asíncrono que parece síncrono.
- **`Promise.all(iterable)`:** Espera a que **todas** las promesas de un iterable se completen. El tiempo de espera lo marca la más lenta.
- **`Promise.race(iterable)`:** Espera a que **una** de las promesas se complete, la primera que llegue.

**Ejercicio Original:**
```javascript
// Función auxiliar que crea una promesa que se resuelve después de un 'delay'
const promisify = (item, delay) => new Promise((resolve) => 
  setTimeout(() => resolve(item), delay)
);

// Tres funciones que devuelven promesas con distintos tiempos de resolución
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// Función 1: Usa Promise.all
async function one() {
  // Inicia la ejecución de a(), b() y c() en paralelo.
  const promises = [a(), b(), c()];
  // Espera a que TODAS las promesas se resuelvan. Tarda lo que tarda la más lenta (5000ms).
  const [output1, output2, output3] = await Promise.all(promises);
  return `one is done: ${output1} ${output2} ${output3}`;
}

// Función 2: Usa Promise.race
async function two() {
  // Inicia la ejecución de a(), b() y c() en paralelo.
  const promises = [a(), b(), c()];
  // Espera solo a que la PRIMERA promesa se resuelva. La más rápida es a() (100ms).
  const output1 = await Promise.race(promises);
  return `two is done: ${output1}`;
}

// Función 3: Ejecución secuencial
async function three() {
  // Espera 100ms a que 'a' termine.
  const output1 = await a();
  // LUEGO, espera 5000ms a que 'b' termine.
  const output2 = await b();
  // LUEGO, espera 3000ms a que 'c' termine.
  const output3 = await c();
  return `three is done ${output1} ${output2} ${output3}`;
}
one().then(console.log)
two().then(console.log)
three().then(console.log)
```

**Análisis de la Solución:**
La respuesta correcta es `two is done: a`, `one is done: a b c`, `three is done a b c`.
- `two()` termina primero (~100ms) porque `Promise.race` solo espera a la más rápida (`a`).
- `one()` termina después (~5000ms) porque `Promise.all` debe esperar a la más lenta (`b`).
- `three()` termina última (~8100ms) porque ejecuta las promesas en secuencia, sumando todos los tiempos de espera.

---

### 173. (Pregunta 2) Objeto Global

- **Ámbito Global (Global Scope):** El nivel más alto del ámbito en JavaScript.
- **Entornos de Ejecución (Runtimes):** Cada entorno (navegador, Node.js) tiene su propio objeto global.

**Ejercicio Original:**
```javascript
// ¿Cuál es el objeto global en un navegador típico?
```

**Análisis de la Solución:**
La respuesta correcta es `window`. En el entorno de un navegador, `window` es el objeto global que contiene todas las variables globales y las APIs del navegador (como `document` o `fetch`). `globalThis` es la forma moderna y universal de acceder a él.

---

### 174. (Pregunta 3) Engine vs. Runtime

- **Engine (Motor):** Compila y ejecuta el código JS. Ejemplo: V8.
- **Runtime (Entorno de Ejecución):** Es el ecosistema completo. Incluye el Engine + APIs del entorno. Ejemplo: Node.js, Navegador.

**Ejercicio Original:**
```javascript
// ¿Cuál es la diferencia entre JavaScript Engine y Runtime?
// ¿V8 es un Engine o Runtime?
// ¿Node.js es un Engine o Runtime?
```

**Análisis de la Solución:**
- El **Engine** (V8) es el motor que procesa el código.
- El **Runtime** (Node.js) es el entorno completo que le da al motor acceso a APIs como el sistema de archivos (`fs`) o red (`http`).

---

### 175. (Pregunta 4) Event Loop, Microtasks y Macrotasks

- **Call Stack:** Pila donde se ejecuta el código síncrono.
- **Microtask Queue:** Cola de alta prioridad. Se vacía completamente después de que la Call Stack esté vacía. Ej: `.then()` de promesas.
- **Macrotask Queue:** Cola de baja prioridad. Se ejecuta UNA tarea de aquí por cada ciclo del Event Loop. Ej: `setTimeout`.

**Ejercicio Original:**
```javascript
// Se agenda una macrotarea para que se ejecute en ~100ms.
setTimeout(() => {console.log('a')}, 100);
// Se agenda una macrotarea para que se ejecute lo antes posible.
setTimeout(() => {console.log('b')}, 0);
// Se agenda una microtarea, que tiene alta prioridad.
Promise.resolve('c').then(console.log);
// Se ejecuta de forma síncrona en la Call Stack. Es lo primero.
console.log('d');
```

**Análisis de la Solución:**
La respuesta correcta es `d, c, b, a`.
1.  **Call Stack:** Se ejecuta `console.log('d')`. Salida: `d`.
2.  **Microtask Queue:** La pila está vacía, así que se ejecuta la microtarea de la promesa. Salida: `c`.
3.  **Macrotask Queue:** Se ejecuta la primera macrotarea disponible (`setTimeout` con 0ms). Salida: `b`.
4.  **Macrotask Queue:** Pasan 100ms y se ejecuta la siguiente macrotarea. Salida: `a`.

---

### 176. (Pregunta 5) Métodos `call`, `apply` y `bind`

- **`this`:** Palabra clave cuyo valor depende de cómo se invoca una función.
- **`call()`, `apply()`, `bind()`:** Métodos para establecer el valor de `this` manualmente.

- **`.call(thisArg, arg1, arg2, ...)`**  
  Llama una función estableciendo el valor de `this` y pasando los argumentos de forma individual.

- **`.apply(thisArg, [argsArray])`**  
  Llama una función estableciendo el valor de `this`, pero pasando los argumentos en un arreglo.

- **`.bind(thisArg, arg1, arg2, ...)`**  
  Devuelve una nueva función con `this` vinculado al valor indicado. No ejecuta la función de inmediato.

**Ejercicio Original:**
```javascript
const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    // 'this' se referirá al objeto que llame al método.
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

// ¿Cómo podemos usar el método 'heal' de 'wizard' para curar a 'archer'?
// Queremos que archer.health sea 100.

// Solución:
// 1. Accedemos a la función que queremos: `wizard.heal`
// 2. La invocamos con `.call()` para poder cambiar el 'this'.
// 3. El primer argumento de .call() es el nuevo 'this': `archer`.
// 4. Los siguientes argumentos son los parámetros de la función `heal`: 30 y 20.
wizard.heal.call(archer, 30, 20);
```

**Análisis de la Solución:**
La respuesta correcta es `wizard.heal.call(archer, 30, 20)`. El método `.call()` permite "prestar" un método de un objeto (`wizard`) para que lo use otro (`archer`), estableciendo que `this` dentro de `heal` se refiera a `archer`. Los argumentos `30` y `20` se pasan a la función `heal`.

---

### 177. (Pregunta 6) Modificación de Prototipos `Array.prototype.map` (Incorrecta – No usa el callback)

- **`Array.prototype`**: Objeto que contiene los métodos comunes a todos los arrays.

**Ejercicio Original:**
```javascript
// ¡MALA PRÁCTICA! Se sobrescribe el método .map para TODOS los arrays.
Array.prototype.map = function() {
  // Se crea un array vacío para almacenar el resultado.
  let arr = [];
  // Se itera sobre el array original (referenciado por 'this').
  for (let i = 0; i < this.length; i++) {
    // ⚠️ Aquí se ignora el parámetro callback que usualmente recibe `.map()`y se concatena el elemento original + "!" al nuevo array.
    arr.push((this[i] + '!'));// Aquí no usamos el callback, ignora el nuevo parametro con .map
    //arr.push(callback(this[i], i, this)); // ✅ Aquí sí usamos el callback, para no ser ignorada el nuevo parametro con .map
  }
  // Se devuelve el nuevo array modificado.
  return arr;
}

// 🔹 Se usa el método `.map` modificado, pasándole una función callback que *debería* multiplicar por 2
//    Pero como el método que definimos ignora este parámetro, nunca se ejecuta
const answer = [1,2,3].map(x => x*2);

// 🔹 Se imprime el resultado, que en lugar de [2, 4, 6], es ["1!", "2!", "3!"]
console.log(answer);
```

**Análisis de la Solución:**
La respuesta correcta es `["1!", "2!", "3!"]`. El código **sobrescribe** el método `.map()` global. La nueva función ignora el callback que se le pasa (`x => x*2`) y, en su lugar, itera sobre el array, le añade un `!` a cada elemento y devuelve el resultado.

---

### 178. (Pregunta 7) Mutación de Arrays

- **Mutabilidad**: Los arrays son objetos y su contenido puede ser alterado.

**Ejercicio Original:**
```javascript
const basket = [1, 2, 3];
// ¿Cuáles de las siguientes opciones MUTAN (modifican) el array original para añadir un 4?

// Opción 1: Asignación directa por índice. MUTA el array.
basket[3] = 4;

// Opción 2: Usando el método .push(). MUTA el array.
// .bind(basket) asegura que 'this' dentro de push sea 'basket'.
const grow = basket.push.bind(basket);
grow(4);
```

**Análisis de la Solución:**
Las dos opciones correctas son la asignación por índice (`basket[3] = 4`) y el uso de `.push()`, que están diseñadas para mutar el array original.

---

### 179. (Pregunta 8) Hoisting

- **Hoisting (Elevación):** Las declaraciones de `function` y `var` se mueven al inicio de su ámbito antes de la ejecución.
- **Precedencia:** Las declaraciones de `function` tienen mayor prioridad que las de `var`.

**Ejercicio Original:**
```javascript
// 1. Se invoca a().
a();

// 2. Esta declaración de función es elevada.
function a() { console.log("I'm Spartacus"); }
// 3. Esta también es elevada, y como tiene el mismo nombre, SOBRESCRIBE a la anterior.
function a() { console.log("No! I'm Spartacus"); }
// 4. La declaración `var a` es elevada pero con menor prioridad. La asignación se queda aquí.
var a = () => console.log("You're all wrong. I'm Spartacus");
```

**Análisis de la Solución:**
La respuesta correcta es `"No! I'm Spartacus"`. Durante la fase de hoisting, la segunda declaración de `function a` sobrescribe a la primera. Cuando se llama a `a()` en la primera línea, se ejecuta esa versión. La reasignación de `var a` ocurre después de la llamada.

---

### 180. (Pregunta 9) Copia Superficial vs. Profunda

- **Shallow Copy:** Copia las referencias de los objetos anidados.
- **Deep Copy:** Crea copias nuevas de todo, incluyendo objetos anidados.

**Ejercicio Original:**
```javascript
let obj = { 
  a: 'a', 
  b: 'b', 
  c: { deep: 'try and copy me' }
};

// clone: Copia superficial. `clone.c` es una referencia a `obj.c`.
let clone = Object.assign({}, obj);
// clone2: Copia superficial. `clone2.c` también es una referencia a `obj.c`.
let clone2 = {...obj};
// clone3: Copia profunda. `clone3.c` es un objeto nuevo e independiente.
let clone3 = JSON.parse(JSON.stringify(obj));

// Se modifica la propiedad `deep` del objeto `c` DENTRO del objeto ORIGINAL.
obj.c.deep = 'hahaha';

// ¿Qué se imprimirá en la consola?
console.log(obj);       // Muestra el cambio.
console.log(clone);     // Muestra el cambio porque comparte la referencia.
console.log(clone2);    // Muestra el cambio porque comparte la referencia.
console.log(clone3);    // NO muestra el cambio porque es independiente.
```

**Análisis de la Solución:**
La respuesta correcta es la que muestra el cambio en `obj`, `clone` y `clone2`, pero no en `clone3`. `clone` y `clone2` son copias superficiales, por lo que el objeto anidado `c` es compartido. `clone3` es una copia profunda y es totalmente independiente.

---

### 181. (Pregunta 10) Ámbito de `var` en `try-catch`

- **`var`**: Tiene ámbito de función, no de bloque.

**Ejercicio Original:**
```javascript
(function () {
  // Hoisting: `var err` y `var boo` se declaran aquí arriba como `undefined`.
  try {
    // Se lanza un error, la ejecución salta inmediatamente al catch.
    throw new Error();
  } catch (err) { // `err` aquí es una variable de bloque que contiene el objeto Error.
    // Esta línea reasigna la variable `err` del ámbito de la FUNCIÓN a 5.
    var err = 5;
    // Se asigna 10 a la variable `boo` del ámbito de la función.
    var boo = 10;
    // Imprime la variable de función `err`, que ahora es 5.
    console.log(err);
  }
  // Imprime la variable de función `err`, que sigue siendo 5.
  console.log(err);
  // Imprime la variable de función `boo`, que es 10.
  console.log(boo);
})();
```

**Análisis de la Solución:**
La respuesta correcta es `5, 5, 10`. La declaración `var err = 5` dentro del `catch` no crea una variable nueva, sino que modifica la variable `err` que fue elevada al ámbito de la función, "ensombreciendo" al parámetro `err` del `catch`.

---

### 182. (Pregunta 11) Array.reduce()

- **`reduce()`**: Método para transformar un array en un único valor (en este caso, un objeto).

**Ejercicio Original:**
```javascript
const userArray = [
  {name: 'Tom', type: 'cat'}, 
  {name: 'Jerry', type: 'mouse'}
];

// `convertReducer` es la función callback que usará `reduce`.
// `acc` es el "acumulador", el objeto que se va construyendo.
// `person` es el elemento actual del array en cada iteración.
function convertReducer(acc, person) {
  // Se devuelve un nuevo objeto en cada paso:
  // `{...acc}`: Se copian todas las propiedades del acumulador actual.
  // `[person.name]: person`: Se añade una nueva clave (ej. "Tom") y se le asigna el objeto `person` completo como valor.
  return {...acc, [person.name]: person};
}

// `userArray.reduce` inicia el proceso.
// `convertReducer` es la función que se aplicará.
// `{}` es el valor inicial del acumulador `acc`.
console.log(userArray.reduce(convertReducer, {}));
```

**Análisis de la Solución:**
La respuesta correcta es `{ Tom: {name: "Tom", type: "cat"}, Jerry: {name: "Jerry", type: "mouse"} }`. El método `reduce` itera sobre el array y usa la función `convertReducer` para construir un objeto. En cada paso, toma el nombre del usuario como clave y el objeto de usuario como valor, acumulándolos en un único objeto final.

---

### 183. (Pregunta 12) Ámbito de Bloque de `let`

- **`let` y `const`**: Tienen ámbito de bloque. Solo existen dentro de las llaves `{}` donde se declaran.

**Ejercicio Original:**
```javascript
function loop() {
  // La variable `i` se declara con `let`, por lo que solo existe dentro del bucle `for`.
  for(let i = 0; i < 5; i++) {
    console.log(i); // Funciona aquí dentro.
  }
  // Aquí fuera, la variable `i` ya no existe. Ha sido destruida.
  console.log(i);
}

loop();
```

**Análisis de la Solución:**
La respuesta correcta es `ReferenceError: i is not defined`. La variable `i` fue declarada con `let`, por lo que su ámbito está limitado al bloque del bucle `for`. Intentar acceder a ella fuera de ese bloque causa un error de referencia.

---

### 184. (Pregunta 13) Composición de Funciones (Pipe)

- **Composición de Funciones**: Crear funciones complejas combinando funciones más simples.

**Ejercicio Original:**
```javascript
// `pipe` es una función de orden superior que toma 3 funciones (f, g, h)
// y devuelve una nueva función que toma un argumento `a`.
const pipe = (f, g, h) => (a) => h(g(f(a)));

// Funciones simples que realizan una operación matemática.
const less5 = (input) => input - 5;
const times2 = (input) => input * 2;
const less1 = (input) => input - 1;

// ¿Cuál de las siguientes llamadas da como resultado -3?
// Analizamos la opción correcta:
const result = pipe(less5, times2, less1)(4);
```

**Análisis de la Solución:**
La respuesta correcta es `pipe(less5, times2, less1)(4)`. La función `pipe` ejecuta las funciones en secuencia de izquierda a derecha sobre el valor de entrada `4`:
1.  `f(a)` -> `less5(4)` -> devuelve `-1`.
2.  `g(-1)` -> `times2(-1)` -> devuelve `-2`.
3.  `h(-2)` -> `less1(-2)` -> devuelve `-3`.

---

### 185. (Pregunta 14) Currying

- **Currying**: Transformar una función de múltiples argumentos en una secuencia de funciones anidadas, cada una con un solo argumento.
- **Closure**: Permite que una función interna recuerde las variables de su función externa.

**Ejercicio Original:**
```javascript
// Esta llamada debe funcionar y producir 8 al final.
const multiplyByTwo = multiplyBy(null)(2);
multiplyByTwo(4); // 8

// ¿Cómo debe ser la función multiplyBy?
// Analizamos la opción correcta:
const multiplyBy = (x) => (num1) => (num2) => num1 * num2;
```

**Análisis de la Solución:**
La estructura `(x) => (num1) => (num2) => ...` es la clave del currying.
1.  `multiplyBy(null)`: Se ejecuta la primera función. `x` es `null` (y no se usa). Devuelve la segunda función: `(num1) => (num2) => num1 * num2`.
2.  `(2)`: Se ejecuta la función devuelta. `num1` es `2`. Devuelve la función más interna: `(num2) => 2 * num2`. Esta función se asigna a `multiplyByTwo`.
3.  `multiplyByTwo(4)`: Se ejecuta la última función. `num2` es `4`. Se ejecuta `2 * 4`, devolviendo `8`.

---

### 186. (Pregunta 15) Closures y Memoria

- **Closure**: Una función que "recuerda" su ámbito de creación.

**Ejercicio Original:**
```javascript
// Se ejecuta someFunc() y el resultado (una función) se guarda en runCalculation.
const runCalculation = someFunc();
// Se invoca la función guardada varias veces.
runCalculation(699);
runCalculation(701);

function someFunc() {
  // Esta línea y la creación del array ocurren UNA SOLA VEZ, cuando se llama a someFunc().
  const bigArray = new Array(7000).fill('');
  // Se retorna una nueva función. Esta función es un closure.
  // "Recuerda" la referencia a 'bigArray'.
  return function(item) {
    return bigArray[item];
  }
}

// ¿Cuántas veces se crea bigArray?
```

**Análisis de la Solución:**
La respuesta correcta es `Once` (Una vez). El `bigArray` se crea solo cuando `someFunc()` es ejecutada. Las llamadas posteriores a `runCalculation` ejecutan la función interna (el closure), que reutiliza el `bigArray` ya existente en memoria gracias al closure.

---

### 187. (Pregunta 16) Funciones Puras

- **Función Pura**: Determinista y sin efectos secundarios.

**Ejercicio Original:**
```javascript
// Impura: `console.log` es un efecto secundario.
function one(input) { console.log(input); }

// Pura: Determinista y sin efectos secundarios.
function two(input = 5) { return 5 * input; }

// Pura: Siempre devuelve 25. Determinista y sin efectos secundarios.
function three(input) { return two(); }

// Impura: `new Date()` no es determinista y llama a `one` que es impura.
function four(input) { return one(new Date()); }

// ¿Cuáles son Puras?
```

**Análisis de la Solución:**
La respuesta correcta es `two` y `three`. `one` es impura por el `console.log`. `four` es impura porque `new Date()` no es determinista y porque llama a `one`. `two` y `three` siempre devuelven el mismo resultado para la misma entrada y no modifican nada externamente.

---

### 188. (Pregunta 17) `setTimeout` y `var` vs. `let`

- **`var`**: Ámbito de función. Hay una sola variable para todo el bucle.
- **`let`**: Ámbito de bloque. Se crea una nueva variable en cada iteración.

**Ejercicio Original:**
```javascript
const array = [1,2,3,4];

// Bucle con `var`. Hay una única variable `i`.
for(var i=0; i < array.length; i++) {
  // El callback captura la referencia a la única `i`.
  // Cuando se ejecuta, `i` ya vale 4.
  setTimeout(function(){
    console.log('var:', i);
  }, 3000);
}

// Bucle con `let`. Se crea una nueva `i` en cada iteración.
for(let i=0; i < array.length; i++) {
  // El callback captura el valor de la `i` de su propia iteración.
  setTimeout(function(){
    console.log('let:', i);
  }, 400);
}
```

**Análisis de la Solución:**
La respuesta correcta es `0, 1, 2, 3` (del bucle con `let` que se ejecuta a los 400ms) seguido de `4, 4, 4, 4` (del bucle con `var` que se ejecuta a los 3000ms). Con `let`, cada `setTimeout` captura el valor de `i` de esa iteración. Con `var`, todos los `setTimeout` capturan una referencia a la misma variable `i`, que al final del bucle vale 4.

---

### 189. (Pregunta 18) Eliminar Duplicados de un Array

- **`Set`**: Estructura de datos que solo almacena valores únicos.
- **`filter`**: Crea un nuevo array con los elementos que pasan una prueba.
- **`forEach`**: Ejecuta una función por cada elemento, pero devuelve `undefined`.

**Ejercicio Original:**
```javascript
// ¿Cuáles de las siguientes funciones REALMENTE eliminan duplicados y devuelven el resultado?

// Funciona: Usa un objeto `cache` para registrar elementos vistos.
function removeDuplicate(arr) { /* ... */ }

// Funciona: `Set` solo almacena valores únicos. Es la forma moderna.
function removeDuplicate2(arr) { return [...new Set(arr)]; }

// Funciona: `indexOf` encuentra solo la primera aparición de un elemento.
function removeDuplicate3(arr) { return arr.filter((item, index) => arr.indexOf(item) === index); }

// NO Funciona: `forEach` ejecuta código pero siempre devuelve `undefined`.
function removeDuplicate4(arr) { /* ... */ }
```

**Análisis de la Solución:**
La respuesta correcta es `removeDuplicate`, `removeDuplicate2`, y `removeDuplicate3`. Todas usan estrategias válidas (`cache`, `Set`, `indexOf`) y devuelven un nuevo array. `removeDuplicate4` no funciona porque `forEach` no devuelve un array.

---

### 190. (Pregunta 19) Encadenamiento de Funciones

- **Funciones de Orden Superior**: Funciones que retornan otras funciones.

**Ejercicio Original:**
```javascript
function sayMySecret() {
  // Ámbito de sayMySecret
  const a = 'a';
  // Retorna la función findSecret.
  return function findSecret() {
    // Ámbito de findSecret
    const b = 'b';
    // Retorna la función printSecret.
    return function printSecret() {
      // Ámbito de printSecret
      const c = 'c';
      // Retorna el valor final.
      return 'The Secret';
    }
  }
}

// ¿Cómo obtener la cadena "The Secret"?
```

**Análisis de la Solución:**
La respuesta correcta es `sayMySecret()()()`. Cada par de paréntesis `()` invoca la función que fue retornada por la llamada anterior, creando una cadena de ejecuciones hasta llegar al valor final.

---

### 191. (Pregunta 20) Complejidad Temporal (Big O)

- **O(n²)**: Complejidad cuadrática. Ineficiente. Típico de bucles anidados.
- **O(n)**: Complejidad lineal. Eficiente. Típico de un solo bucle.
- **O(1)**: Complejidad constante. Muy eficiente. Acceso a un objeto por clave.

**Ejercicio Original:**
```javascript
// Versión 1: Bucles anidados -> O(n²)
function findFirstRecurringCharacter1(input) {
  // Bucle 1: Se ejecuta n veces
  for (let i = 0; i < input.length; i++) {
    // Bucle 2: Se ejecuta ~n veces por cada i. Total ~n*n operaciones.
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// Versión 2: Hash Map -> O(n)
function findFirstRecurringCharacter2(input) {
  // Se crea un objeto para usarlo como Hash Map.
  let map = {};
  // Bucle único: Se ejecuta n veces.
  for (let i = 0; i < input.length; i++) {
    // La búsqueda de clave en un objeto es O(1) (tiempo constante, muy rápido).
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      // La asignación de clave en un objeto también es O(1).
      map[input[i]] = i;
    }
  }
  return undefined;
}

// ¿Cuál es más eficiente?
```

**Análisis de la Solución:**
La respuesta correcta es `findFirstRecurringCharacter2`. Su complejidad es **O(n)** porque solo recorre el array una vez, y las operaciones con el objeto `map` son de tiempo constante (O(1)). La primera función es **O(n²)** debido a los bucles anidados, lo que la hace mucho más lenta para entradas grandes.
