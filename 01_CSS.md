¡Vamos a estructurar y ampliar la guía de propiedades CSS de la misma manera clara y detallada!

### 1. Estructura y Selección

**Selección de Elementos**
- **Selector de Etiqueta**: Selecciona todos los elementos de una etiqueta específica.
    ```css
    body { }
    ```
- **Selector de Clase**: Selecciona todos los elementos que tienen una clase específica.
    ```css
    .nombre { }
    ```
- **Selector de ID**: Selecciona un único elemento que tiene un ID específico.
    ```css
    #nombre { }
    ```

### 2. Espaciado

**Margen y Relleno**
- **Margen**: Espacio exterior alrededor de un elemento.
    ```css
    margin: 0;                            /* Sin margen. */
    margin: 0 auto;                       /* Centra el contenido horizontalmente. */
    margin: 30px 100px 60px 50px;        /* Margen superior, derecho, inferior e izquierdo. */
    ```
- **Relleno (Padding)**: Espacio interior dentro de un elemento.
    ```css
    padding: 0;                           /* Sin relleno. */
    ```

### 3. Tamaño y Dimensiones

**Ancho y Altura**
- **Ancho del Elemento**:
    ```css
    width: 100px;                         /* Ancho fijo del elemento. */
    width: 100%;                          /* Ajusta el ancho al 100% del contenedor. */
    ```
- **Altura del Elemento**:
    ```css
    height: 100px;                        /* Altura fija del elemento. */
    ```
- **Ancho Máximo**:
    ```css
    max-width: 100%;                      /* Ancho máximo permitido al 100%. */
    max-width: 1800px;                    /* Ancho máximo específico en píxeles. */
    ```

### 4. Fondo

**Propiedades de Fondo**
- **Color de Fondo**:
    ```css
    background-color: turquoise;          /* Color de fondo turquesa. */
    ```
- **Imagen de Fondo**:
    ```css
    background-image: url("./assets/images/");  /* Imagen de fondo. */
    background-position: center;          /* Posiciona la imagen de fondo al centro. */
    background-repeat: no-repeat;         /* No repite la imagen de fondo. */
    background-size: contain;             /* Contiene la imagen dentro del elemento. */
    background-size: cover;               /* Ajusta la imagen al espacio disponible. */
    ```

### 5. Bordes

**Propiedades de Bordes**
- **Borde**:
    ```css
    border: 3px solid black;              /* Borde sólido de 3px y color negro. */
    border: 3px double black;             /* Borde doble de 3px y color negro. */
    border-bottom: 3px solid black;       /* Borde inferior sólido de 3px y color negro. */
    ```
- **Radio de Borde**:
    ```css
    border-radius: 50%;                   /* Borde redondeado al 50%. */
    ```

### 6. Flexbox y Grid

**Diseño Flexible y de Cuadrícula**
- **Propiedades de Flexbox**:
    ```css
    display: flex;                        /* Activa la alineación flexible. */
    flex: 1;                              /* Ocupar todo el espacio disponible en la línea. */
    flex-direction: row;                  /* Dirección de los elementos flexibles en fila. */
    flex-wrap: wrap;                      /* Permite envolver a la siguiente línea. */
    justify-content: center;              /* Centra los elementos horizontalmente. */
    justify-content: space-around;        /* Espaciado entre elementos horizontalmente, lejos de los extremos. */
    justify-content: space-between;       /* Espaciado entre elementos horizontalmente desde los extremos. */
    justify-content: space-evenly;        /* Espaciado uniforme entre elementos horizontalmente. */
    gap: 20px;                            /* Distancia entre elementos en contenedor flex. */
    ```
- **Propiedades de Grid**:
    ```css
    display: grid;                        /* Activa el diseño de cuadrícula. */
    ```

### 7. Texto

**Estilo y Alineación del Texto**
- **Color y Fuente**:
    ```css
    color: black;                         /* Color del texto principal. */
    color: #FFFFFF;                       /* Color blanco para el texto. */
    font-family: Arial, Helvetica, sans-serif;  /* Estilo de letra. */
    font-size: 20px;                      /* Tamaño de letra. */
    font-style: italic;                   /* Estilo de la fuente (cursiva). */
    font-weight: 100;                     /* Grosor de la fuente. */
    ```
- **Alineación y Espaciado**:
    ```css
    text-align: center;                  /* Alineación del texto al centro. */
    text-align: end;                     /* Alineación del texto a la derecha. */
    text-align: left;                    /* Alineación del texto a la izquierda. */
    text-align: start;                   /* Alineación del texto a la izquierda. */
    letter-spacing: 1px;                 /* Espacio entre letras. */
    text-shadow: 0px 3px 6px black;      /* Sombra del texto. */
    text-decoration: none;               /* Sin decoración de texto en enlaces. */
    ```

### 8. Comportamiento y Overflow

**Comportamiento y Desbordamiento**
- **Propiedades de Comportamiento**:
    ```css
    box-sizing: border-box;               /* Evitar que el padding afecte el ancho total. */
    ```
- **Propiedades de Overflow**:
    ```css
    overflow-x: hidden;                   /* Evitar la barra de desplazamiento horizontal. */
    scroll-behavior: smooth;              /* Efecto de desplazamiento suave entre secciones. */
    ```

### 9. Comentarios

**Comentarios en CSS**
```css
/* Signos para comentarios y no aplican función */
```

Espero que esta versión detallada y estructurada de la guía de propiedades CSS te sea de ayuda. Si tienes más preguntas o necesitas más aclaraciones, ¡déjame saber! Estoy aquí para ayudarte.