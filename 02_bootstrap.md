### Guía de funcionalidades y clases en Bootstrap:

### 1. Definiciones

**Librería**
- Ofrece funcionalidades que tú llamas y controlas.

**Framework**
- Dicta la arquitectura de tu aplicación y te proporciona un conjunto de patrones y herramientas para construirla (te da instrucciones).

### 2. Funciones de Clase

**Clases de Bootstrap**
- **Elemento de Navegación Activo**:
    ```html
    <nav class="active">...</nav>
    ```
- **Tarjeta (Card)**: Tarjeta con imágenes, títulos y texto.
    ```html
    <div class="card">...</div>
    ```
- **Cuerpo de la Tarjeta**:
    ```html
    <div class="card-body">...</div>
    ```
- **Imagen en la Parte Superior de la Tarjeta**:
    ```html
    <img class="card-img-top" src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen">
    ```
- **Enlace en la Tarjeta**:
    ```html
    <a class="card-link" href="url_a_la_pagina">Comprar</a>
    ```
- **Texto de la Tarjeta**:
    ```html
    <p class="card-text">Texto de la tarjeta.</p>
    ```
- **Título de la Tarjeta**:
    ```html
    <h5 class="card-title">Título de la tarjeta</h5>
    ```
- **Columnas**:
    ```html
    <div class="col-12">...</div> <!-- Ancho total de la página es 12 -->
    <div class="col-6">...</div> <!-- Dos columnas -->
    <div class="col-sm-4">...</div> <!-- Tres columnas en dispositivos pequeños (sm) -->
    ```
- **Barra de Navegación Colapsable en Dispositivos Pequeños**:
    ```html
    <div class="collapse navbar-collapse">...</div>
    ```
- **Contenedores**:
    ```html
    <div class="container">...</div> <!-- Centraliza y limita el ancho del contenido en una página -->
    <div class="container-fluid">...</div> <!-- Contenedor que ocupa todo el ancho de la pantalla -->
    ```
- **Texto Tachado**:
    ```html
    <del>Texto tachado</del>
    ```
- **Tamaño de Encabezados**:
    ```html
    <h5 class="display-5">Encabezado</h5>
    ```
- **Visibilidad en Dispositivos**:
    ```html
    <div class="d-none d-sm-none d-md-block">...</div> <!-- No visible en dispositivos pequeños, visible en medianos y grandes -->
    ```
- **Fijar Contenido en la Parte Superior**:
    ```html
    <div class="fixed-top">...</div>
    ```
- **Texto en Negrita**:
    ```html
    <span class="fw-bold">Texto en negrita</span>
    ```
- **Listas sin Estilos**:
    ```html
    <ul class="list-group list-group-flush">...</ul>
    <li class="list-group-item">Elemento de la lista</li>
    ```
- **Alineación**:
    ```html
    <div class="ms-auto">...</div> <!-- Coloca elementos en el margen derecho -->
    ```
- **Barra de Navegación**:
    ```html
    <nav class="navbar navbar-expand-lg navbar-light bg-light">...</nav>
    ```
- **Elementos de Navegación**:
    ```html
    <div class="navbar-brand">Logo</div>
    <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Link</a>
    </div>
    ```
- **Texto**:
    ```html
    <p class="text-body">Texto del cuerpo</p>
    <p class="text-black">Texto negro</p>
    <p class="text-center">Texto centrado</p>
    <p class="text-dark">Texto oscuro</p>
    <p class="text-danger">Texto rojo</p>
    <p class="text-end">Texto alineado a la derecha</p>
    <p class="text-info">Texto celeste</p>
    <p class="text-light">Texto blanco</p>
    <p class="text-muted">Texto atenuado</p>
    <p class="text-primary">Texto azul</p>
    <p class="text-start">Texto alineado a la izquierda</p>
    <p class="text-secondary">Texto gris</p>
    <p class="text-success">Texto verde</p>
    <p class="text-warning">Texto amarillo</p>
    <p class="text-white">Texto blanco</p>
    ```
- **Margen y Relleno**:
    ```html
    <div class="m-3">...</div> <!-- Margen -->
    <div class="p-3">...</div> <!-- Padding -->
    <div class="px-5">...</div> <!-- Padding horizontal -->
    <div class="t-2">...</div> <!-- Superior -->
    <div class="b-2">...</div> <!-- Inferior -->
    <div class="s-2">...</div> <!-- Izquierda -->
    <div class="e-2">...</div> <!-- Derecha -->
    <div class="x-2">...</div> <!-- Izquierda y derecha -->
    <div class="y-2">...</div> <!-- Superior e inferior -->
    ```

**Tamaños de Dispositivos**
- **Tamaños de Pantalla**:
    ```html
    <div class="col-xs-12">...</div> <!-- <576px -->
    <div class="col-sm-6">...</div> <!-- ≥576px -->
    <div class="col-md-4">...</div> <!-- ≥768px -->
    <div class="col-lg-3">...</div> <!-- ≥992px -->
    <div class="col-xl-2">...</div> <!-- ≥1200px -->
    <div class="col-xxl-1">...</div> <!-- ≥1400px -->
    ```

### 3. Enlaces a Documentación de Elementos de Bootstrap

- **Grid: Diseño de Columnas**: [Diseño de Columnas](https://getbootstrap.com/docs/5.3/layout/grid/)
- **Diseño y Tamaño de Encabezados**: [Encabezados](https://getbootstrap.com/docs/5.3/content/)
- **Formularios**: [Formularios](https://getbootstrap.com/docs/5.3/forms/form-control/)
- **Botones**: [Botones](https://getbootstrap.com/docs/5.3/components/buttons/)
- **Tarjetas**: [Tarjetas](https://getbootstrap.com/docs/5.3/components/card/)
- **Carousel: Muestra Deslizamiento de Diapositivas**: [Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)
- **Menú o Barra de Navegación**: [Barra de Navegación](https://getbootstrap.com/docs/5.3/components/navbar/)
- **Popovers: Mensajes en Botones**: [Popovers](https://getbootstrap.com/docs/5.3/components/popovers/)
- **Tooltips: Mensajes en Botones**: [Tooltips](https://getbootstrap.com/docs/5.3/components/tooltips/)
- **Color de Texto**: [Colores de Texto](https://getbootstrap.com/docs/5.3/utilities/colors/)

### 4. Agregar Enlace de Bootstrap en HTML

**Para Iniciarlo en JS**:
```js
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
```
**Ejemplo de Popover en HTML**:
```html
<button type="button" class="btn btn-secondary - aquí cambio color o dejo el primer btn y con un espacio pongo un nombre de clase y doy color hexadecimal desde CSS" 
        data-bs-toggle="popover" data-bs-placement="right - aquí cambio ubicación"
        data-bs-custom-class="custom-popover"
        data-bs-title="aquí agrego título" 
        data-bs-content="aquí agrego contenido.">
  Custom popover
</button>
```

### 5. Navbar Efectos

**Dropdown**
- Se despliega al hacer clic en un título o elemento de la barra de navegación para mostrar más opciones.

**Botón de Hamburguesa**
- Icono compuesto por tres líneas horizontales que representa un menú oculto. Al hacer clic, se revela un menú lateral o desplegable que contiene enlaces a diferentes secciones del sitio web.

**Barra Lateral Vertical**
- Variante de la barra de navegación que se coloca en el lado de la pantalla, en lugar de en la parte superior. Puede contener los mismos elementos que una barra de navegación horizontal y a menudo se usa en combinación con el botón de hamburguesa para ocultar o mostrar las opciones de navegación.

