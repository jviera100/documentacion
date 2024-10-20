# RESUMEN DE FUNCIONALIDADES Y CLASES EN BOOTSTRAP
# 1. Definiciones
● Librería
Te ofrece funcionalidades que tú llamas y controlas.
● Framework
Dicta la arquitectura de tu aplicación y te proporciona un conjunto de patrones y herramientas para construirla (te da instrucciones).
# 2. Funciones de Clase
html
Copiar código
<!-- Agrega comentarios con Ctrl+K seguido de Ctrl+C -->
active                             /* Elemento de navegación activo. */
card                               /* Tarjeta con imágenes, títulos y texto. (bootstrap>components>card) */
card-body                          /* Cuerpo de la tarjeta como texto, listas o enlaces. */
card-img-top                       /* Imagen en la parte superior de la tarjeta (card). */
card-link                          /* Estiliza un enlace en la tarjeta, ejemplo "Comprar". */
card-text                          /* Texto de la tarjeta. */
card-title                         /* Título de la tarjeta. */
col-12                             /* Una columna (ancho total de la página es 12). */
col-6                              /* Dos columnas (ancho total de la página es 12). (bootstrap>layout>grid) */
col-sm-4                           /* Tres columnas en dispositivos pequeños (sm) (ancho total de la página es 12). */
collapse navbar-collapse           /* Agrupa y oculta elementos de la barra de navegación en dispositivos pequeños. */
container                           /* Centraliza y limita el ancho del contenido en una página. */
container-fluid                    /* Contenedor que ocupa todo el ancho de la pantalla. */
del                                /* Tacha texto. */
display-5                          /* Define tamaño de encabezados. (bootstrap>content>typography) */
d-none d-sm-none d-md-block        /* Contenedor no visible en dispositivos pequeños, visible en medianos y grandes. */
fixed-top                          /* Fija el contenido en la parte superior de la página. */
fw-bold                            /* Aplica negrita (bold). */
list-group list-group-flush       /* Crea una lista sin estilos, elimina bordes y márgenes. */
list-group-item                    /* Define un elemento de la lista sin estilos. */
ms-auto                            /* Coloca elementos restantes en el margen derecho. */
navbar                             /* Define la barra de navegación. */
navbar-brand                       /* Área del logo de la marca. */
navbar-dark border-light           /* Estilos para el botón de hamburguesa. */
navbar bg-dark navbar-dark         /* Fondo negro y letras blancas. */
navbar-expand-lg                   /* La barra de navegación se expandirá en dispositivos grandes. */
navbar-light                       /* Establece fondo claro y letras oscuras. */
navbar-nav                         /* Define una lista de elementos de navegación. */
navbar-toggler                      /* Estilos para el botón de hamburguesa. */
nav-item                           /* Elemento individual en la barra de navegación. */
nav-link                           /* Enlace en navegación. */
p                                  /* Define el relleno del contenedor. */
row                                /* Define una fila para organizar y alinear columnas. */
sr-only                            /* Oculta el texto visualmente; accesible para lectores de pantalla. */
text-body                          /* Texto del cuerpo. */
text-black                         /* Texto negro. */
text-center                        /* Alinea texto al centro. */
text-dark                          /* Texto oscuro. */
text-danger                        /* Texto rojo. (bootstrap>utilities>colors) */
text-end                           /* Alinea texto a la derecha. */
text-info                           /* Texto celeste. */
text-light                         /* Texto blanco. */
text-muted                         /* Texto atenuado. */
text-primary                       /* Texto azul. */
text-start                         /* Alinea texto a la izquierda. */
text-secondary                     /* Texto gris. */
text-success                       /* Texto verde. */
text-warning                       /* Texto amarillo. */
text-white                         /* Texto blanco. */
m                                  /* Margen. */
p                                  /* Padding. */
px-5                               /* Padding horizontal en columna. */
t                                  /* Superior contenedor. */
b                                  /* Inferior contenedor. */
s                                  /* Izquierda contenedor. */
e                                  /* Derecha contenedor. */
x                                  /* Izquierda y derecha contenedor. */
y                                  /* Superior e inferior del contenedor. */
xs                                 /* <576px */	
sm                                 /* ≥576px */	
md                                 /* ≥768px */	
lg                                 /* ≥992px */	
xl                                 /* ≥1200px */	
xxl                                /* ≥1400px */
# 3. Enlaces documentacion Elementos de Bootstrap
● Grid: Diseño de Columnas
[Diseño de Columnas](https://getbootstrap.com/docs/5.3/layout/grid/)
● Diseño y Tamaño de Encabezados
[Encabezados](https://getbootstrap.com/docs/5.3/content/)
● Formularios
[Formularios](https://getbootstrap.com/docs/5.3/forms/form-control/)
● Botones
[Botones](https://getbootstrap.com/docs/5.3/components/buttons/)
● Tarjetas
[Tarjetas](https://getbootstrap.com/docs/5.3/components/card/)
● Carousel: Muestra Deslizamiento de Diapositivas
[Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)
● Menú o Barra de Navegación
[Barra de Navegación](https://getbootstrap.com/docs/5.3/components/navbar/)
● Popovers: Mensajes en Botones
[Popovers](https://getbootstrap.com/docs/5.3/components/popovers/)
● Tooltips: Mensajes en Botones
[Tooltips](https://getbootstrap.com/docs/5.3/components/tooltips/)
● Color de Texto
[Colores de Texto](https://getbootstrap.com/docs/5.3/utilities/colors/)

# 4. agregar enlace de bootstrap en html
// Para iniciarlo en JS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

<!-- Ejemplo de Popover en HTML -->
<button type="button" class="btn btn-secondary - aquí cambio color o dejo el primer btn y con un espacio pongo un nombre de clase y doy color hexadecimal desde CSS" 
        data-bs-toggle="popover" data-bs-placement="right - aquí cambio ubicación"
        data-bs-custom-class="custom-popover"
        data-bs-title="aquí agrego título" 
        data-bs-content="aquí agrego contenido.">
  Custom popover
</button>


# 5. Navbar Efectos
● Dropdown
Se despliega al hacer clic en un título o elemento de la barra de navegación para mostrar más opciones.
● Botón de Hamburguesa
Icono compuesto por tres líneas horizontales que representa un menú oculto. Al hacer clic, se revela un menú lateral o desplegable que contiene enlaces a diferentes secciones del sitio web.
● Barra Lateral Vertical
Variante de la barra de navegación que se coloca en el lado de la pantalla, en lugar de en la parte superior. Puede contener los mismos elementos que una barra de navegación horizontal y a menudo se usa en combinación con el botón de hamburguesa para ocultar o mostrar las opciones de navegación.