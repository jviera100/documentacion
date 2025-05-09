### Guía de propiedades CSS:

### 🎨 1. Estructura y Selección de Clases, IDs y Etiquetas en CSS

**Seleccionar y aplicar estilos con CSS**

| Tipo        | HTML Ejemplo                            | CSS Ejemplo                   | Aplica estilo a...                   |
|-------------|------------------------------------------|-------------------------------|--------------------------------------|
| Etiqueta    | `<header>Encabezado</header>`           | `header { color: blue; }`     | Todos los elementos `<header>`       |
| Clase       | `<div class="caja">Contenido</div>`     | `.caja { padding: 10px; }`    | Todos los elementos con class="caja" |
| ID          | `<section id="inicio">Inicio</section>` | `#inicio { background: gray; }` | Solo al elemento con id="inicio"     |

📌 **Notas:**
- Usa **clases** para estilos reutilizables en varios elementos.
- Usa **IDs** solo para elementos únicos.
- Los **selectores por etiqueta** son útiles para aplicar estilos generales.

### 2. Espaciado

**Margen y Relleno**
- **Margen**: Espacio exterior alrededor de un elemento.
    ```css
    margin: 0;                     /* Sin margen. */
    margin: 0 auto;                /* Centra el contenido horizontalmente. */
    margin: 30px 100px 60px 50px;  /* Margen superior, derecho, inferior e izquierdo. */
    ```
- **Relleno (Padding)**: Espacio interior dentro de un elemento *Espacio se suma a la altura y ancho (usar box-sizing: border-box, para evitar desbordamiento).*
    ```css
    padding: 0;                   /* Sin relleno. */
    padding: 20px;                /* Relleno uniforme en todos los lados. */
    padding: 100px 50px;          /* 100px arriba/abajo, 50px izquierda/derecha. */
    ```

### 3. Tamaño y Dimensiones

**Ancho y Altura**
- **Ancho del Elemento**:
    ```css
    width: 100px;               /* Ancho fijo del elemento. */
    width: 100%;                /* Ajusta el ancho al 100% del contenedor. */
    ```
- **Altura del Elemento**:
    ```css
    height: 100px;   /* Altura fija del elemento. */
    height: 100%;    /* Altura al 100% del contenedor padre. */
    height: 100vh;   /* Altura igual al 100% del viewport, pero puede fallar en móviles (oculta la barra de navegación). Util en body o secciones de pantalla completa. */
    height: 100dvh;  /* Altura igual al 100% del viewport visible. Mejor opción en móviles modernos que 100vh. Útil en body o secciones de pantalla completa. */
    ```
- **Ancho Máximo**:
    ```css
    max-width: 100%;        /* Ancho máximo permitido al 100%. */
    max-width: 1800px;      /* Ancho máximo específico en píxeles. */
    ```

### 4. Fondo

**Propiedades de Fondo**
- **Color de Fondo**:
    ```css
    background-color: turquoise;     /* Color de fondo turquesa. */
    ```
- **Imagen de Fondo**:
    ```css
    background-image: url("./assets/images/"); /* Imagen de fondo. */
    background-position: center;               /* Posiciona la imagen de fondo al centro. */
    background-repeat: no-repeat;              /* No repite la imagen de fondo. */
    background-size: contain;                  /* Contiene la imagen dentro del elemento. */
    background-size: cover;                    /* Ajusta la imagen al espacio disponible. */
    ```

### 5. Bordes

**Propiedades de Bordes**
- **Borde**:
    ```css
    border: 3px solid black;         /* Borde sólido de 3px y color negro. */
    border: 3px double black;        /* Borde doble de 3px y color negro. */
    border-bottom: 3px solid black;  /* Borde inferior sólido de 3px y color negro. */
    ```
- **Radio de Borde**:
    ```css
    border-radius: 50%;              /* Borde redondeado al 50%. */
    ```

### 6. Flexbox y Grid

**Diseño Flexible y de Cuadrícula**
- **Propiedades de Flexbox**:
    ```css
    display: flex;                   /* Activa la alineación flexible. */
    flex: 1;                         /* Ocupar todo el espacio disponible en la línea. */
    flex-direction: row;             /* Dirección de los elementos flexibles en fila. */
    flex-wrap: wrap;                 /* Permite envolver a la siguiente línea. */
    justify-content: center;         /* Centra los elementos horizontalmente. */
    justify-content: space-around;   /* Espaciado entre elementos horizontalmente, lejos de los extremos. */
    justify-content: space-between;  /* Espaciado entre elementos horizontalmente desde los extremos. */
    justify-content: space-evenly;   /* Espaciado uniforme entre elementos horizontalmente. */
    gap: 20px;                       /* Distancia entre elementos en contenedor flex. */
    ```
- **Propiedades de Grid**:
    ```css
    display: grid;                   /* Activa el diseño de cuadrícula. */
    ```

### 7. Texto

**Estilo y Alineación del Texto**
- **Color y Fuente**:
    ```css
    color: black;                               /* Color del texto principal. */
    color: #FFFFFF;                           /* Color blanco para el texto. */
    font-family: Arial, Helvetica, sans-serif;  /* Estilo de letra. */
    font-size: 20px;                            /* Tamaño de letra. */
    font-style: italic;                         /* Estilo de la fuente (cursiva). */
    font-weight: 100;                           /* Grosor de la fuente. */
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
    box-sizing: border-box;  /* Padding y bordes no se suman al ancho y alto definidos. Evita el desbordamiento. */
    box-sizing: content-box; /* Padding y bordes se suman al ancho y alto definidos. Puede causar desbordes. */

    ```
- **Propiedades de Overflow**:
    ```css
    overflow-x: hidden;      /* Oculta el desbordamiento horizontal y evita que aparezca la barra de scroll lateral */
    scroll-behavior: smooth; /* Desplazamiento suave al hacer clic en enlaces ancla dentro de la página */
    ```

### 9. Comentarios

**Comentarios en CSS**
```css
/* Comentarios explicativos para entender el propósito del código. No afectan el diseño. */
```
