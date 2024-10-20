# RESUMEN DE PROPIEDADES CSS
# 1. Estructura y Selección
css
Copiar código
/* Abre y cierra llave al terminar */
body { }                               /* Selector etiqueta */
.nombre { }                            /* Selector clase */
#nombre { }                            /* Selector ID */
# 2. Espaciado
css
Copiar código
margin: 0;                            /* Margen. */
margin: 0 auto;                       /* Centra el contenido. */
margin: 30px 100px 60px 50px;        /* Margen superior, derecho, inferior e izquierdo. */
padding: 0;                           /* Espacio entre elementos. */
# 3. Tamaño y Dimensiones
css
Copiar código
width: 100px;                         /* Ancho del elemento. */
width: 100%;                          /* Ajuste al ancho máximo. */
height: 100px;                        /* Altura del elemento. */
max-width: 100%;                      /* Establecer un ancho máximo. */
max-width: 1800px;                    /* Ancho máximo permitido. */
# 4. Fondo
css
Copiar código
background-color: turquoise;          /* Color de fondo del cuerpo. */
background-image: url("./assets/images/");  /* Imagen de fondo. */
background-position: center;          /* Posiciona al centro el fondo del elemento. */
background-repeat: no-repeat;         /* La imagen de fondo no se repetirá. */
background-size: contain;             /* Contiene la imagen dentro del elemento. */
background-size: cover;               /* El elemento se ajusta al espacio disponible. */
# 5. Bordes
css
Copiar código
border: 3px solid black;              /* Línea y color de borde sólido. */
border: 3px double black;             /* Línea y color de borde doble. */
border-bottom: 3px solid black;       /* Borde en la parte inferior con línea sólida y color negro. */
border-radius: 50%;                   /* Cambia barras de carrusel en puntos redondos o imagen redonda. */
# 6. Flexbox y Grid
css
Copiar código
display: flex;                        /* Alineación flexible. */
display: grid;                        /* Activa el diseño de cuadrícula. */
flex: 1;                              /* Ocupar todo el espacio disponible en la línea. */
flex-direction: row;                  /* Dirección de los elementos flexibles. */
flex-wrap: wrap;                      /* Permite envolver a la siguiente línea. */
justify-content: center;              /* Centra los elementos horizontalmente. */
justify-content: space-around;        /* Espaciado entre elementos horizontalmente, lejos de los extremos. */
justify-content: space-between;       /* Espaciado entre elementos horizontalmente desde los extremos. */
justify-content: space-evenly;        /* Espaciado uniforme entre elementos horizontalmente. */
gap: 20px;                            /* Distancia entre elementos en contenedor flex. */
# 7. Texto
css
Copiar código
color: black;                         /* Color del texto principal. */
color: #FFFFFF;                       /* Color blanco para el texto. */
font-family: Arial, Helvetica, sans-serif;  /* Estilo de letra. */
font-size: 20px;                     /* Tamaño de letra. */
font-style: italic;                  /* Estilo de la fuente (cursiva). */
font-weight: 100;                    /* Grosor de la fuente. */
text-align: center;                  /* Alineación del texto al centro. */
text-align: end;                     /* Alineación del texto a la derecha. */
text-align: left;                    /* Alineación del texto a la izquierda. */
text-align: start;                   /* Alineación del texto a la izquierda. */
letter-spacing: 1px;                 /* Espacio entre letras. */
text-shadow: 0px 3px 6px black;     /* Sombra del texto. */
text-decoration: none;                /* Sin decoración de texto en enlaces. */
# 8. Comportamiento y Overflow
css
Copiar código
box-sizing: border-box;               /* Evitar que el padding afecte el ancho total. */
overflow-x: hidden;                   /* Evitar la barra de desplazamiento horizontal. */
scroll-behavior: smooth;              /* Efecto de desplazamiento suave entre secciones. */
# 9. Comentarios
css
Copiar código
/* Signos para comentarios y no aplican función */