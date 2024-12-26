

### Equivalencias en Diferentes Lenguajes
- **print = console.log = echo**
    ```python
    print("Hola, mundo")  # Python
    ```
    ```javascript
    console.log("Hola, mundo");  # JavaScript
    ```
    ```sh
    echo "Hola, mundo"  # Shell/Bash
    ```

- **def = function = let variable()=>{}**
    ```python
    def my_function():
        pass  # Python
    ```
    ```javascript
    function myFunction() {
        // JavaScript
    }
    let myFunction = () => {
        // JavaScript (arrow function)
    };
    ```

- **elif = else if**
    ```python
    if condition:
        pass
    elif other_condition:
        pass  # Python
    ```
    ```javascript
    if (condition) {
        // JavaScript
    } else if (otherCondition) {
        // JavaScript
    }
    ```

- **len = length**
    ```python
    len(my_list)  # Python
    ```
    ```javascript
    myArray.length  # JavaScript
    ```

- **f-strings = interpolación (invocación o sustitución de valores de variables)**
    ```python
    name = "World"
    f"Hello, {name}!"  # Python
    ```
    ```javascript
    let name = "World";
    `Hello, ${name}!`  # JavaScript
    ```

### Listas y Tuplas
- **Tuplas**: Se crean usando paréntesis `()`.
    ```python
    tupla = (1, 2, 3)
    ```

- **Listas**: Se crean usando corchetes `[]`.
    ```python
    lista = [1, 2, 3]
    ```

### Argumentos Variables
- **`*args`**: Permite pasar un número variable de argumentos a una función.
    ```python
    def my_function(*args):
        for arg in args:
            print(arg)
    ```

- **`**kwargs`**: Permite pasar argumentos nombrados a una función.
    ```python
    def my_function(**kwargs):
        for key, value in kwargs.items():
            print(f"{key}: {value}")
    ```

### Funciones y Métodos
- **Lambdas**: Función anónima de un solo uso.
    ```python
    add = lambda x, y: x + y
    ```

### Manipulación de Cadenas y Listas
- **`strip`**: Eliminar caracteres de los extremos de una cadena de texto.
    ```python
    my_string.strip()
    ```

- **Slicing**: Filtra lista por índices.
    ```python
    my_list[start:end:step]
    ```

- **`append`**: Añade un elemento al final de una lista.
    ```python
    my_list.append(element)
    ```

### Ejemplos de Funciones
- **Agregar elemento si cumple condición**:
    ```python
    def agregar_si(lista, nombre):
        if len(nombre) >= 5:
            lista.append(nombre)
        return lista
    ```

- **Rotar a la izquierda**:
    ```python
    def rotar_a_la_izquierda(lista):
        if lista:
            primer_elemento = lista.pop(0)
            lista.append(primer_elemento)
        return lista
    ```

- **Dibujar tabla del 12**:
    ```python
    def dibujar_tabla_12():
        n = 12
        numero = 1
        for i in range(n):
            for j in range(n):
                print(f"{numero:3d}", end=" ")
                numero += 1
            print()
    ```

- **Tabla de multiplicar**:
    ```python
    def tabla_multiplicar():
        for i in range(1, 13):
            for j in range(1, 13):
                print(f"{i * j:3d}", end=" ")
            print()
    ```

- **Mostrar tabla de un número específico**:
    ```python
    def mostrar_tabla(numero):
        for i in range(1, 11):
            print(f"{numero} x {i} = {numero * i}")
    ```

- **Imprimir números del 3 al 7**:
    ```python
    for i in range(3, 8):
        print(i)
    ```

### Comentarios
- **Comentarios de una línea**:
    ```python
    # Este es un comentario de una línea
    ```

- **Comentarios de varias líneas**:
    ```python
    '''
    Este es un comentario
    de varias líneas
    '''
    ```

