# 📘 Guía Completa de HTML

## 1. Estructura Básica de un Documento HTML

```html
<!-- Atajo Emmet -->
<!-- Escribe solo: ! + Tabulador (en VS Code) -->
<!-- Genera automáticamente esta estructura básica -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Título Aquí</title>
    <link rel="stylesheet" href="ruta/a/tu/estilo.css">
</head>
<body>
    <!-- Contenido aquí -->
</body>
</html>
```
### 2. Etiquetas Comunes

**Títulos y Párrafos**
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Subtítulo menor</h3>
<p>Este es un párrafo.</p>
```

**Contenedores**
```html
<div>Contenido de la caja</div>
<section>Contenido de la sección</section>
<article>Contenido del artículo</article>
```
**Listas**

- *Lista Sin Orden (círculos "●")*: 
```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```
- *Lista Con Orden (números)*: 
```html
<ol>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
</ol>
```

**Imágenes**
```html
<img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen">
```

### 3. Clases, IDs y Etiquetas
```html
<!-- Selección por etiqueta -->
<header>Encabezado</header>

<!-- Selección por clase -->
<div class="caja">Caja con clase</div>

<!-- Selección por ID -->
<section id="inicio">Sección con ID</section>
```

### 4. Enlaces

- **Enlace a Otra Página**: 
```html
<a href="https://www.ejemplo.com" target="_blank">Ir a sitio externo</a>
```
- **Enlace en Imagen**: 
```html
<a href="https://www.ejemplo.com" target="_blank">
    <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen">
</a>
```
- **Enlace interno (ancla)**
```html
<a href="#contacto">Ir a Contacto</a>

<!-- Objetivo del ancla -->
<section id="contacto">
  <h2>Contacto</h2>
</section>
<!-- 📌 Estos enlaces internos se llaman "anclas" y funcionan al usar IDs. -->
```

### 5. Comentarios y Bloques de Código en Markdown

**🔸 Comentarios en HTML**

Los comentarios se utilizan para dejar notas o instrucciones que no se mostrarán en la página web.

<!-- Esto es un comentario en HTML -->

**Definición:**  
El comentario en HTML comienza con `<!--` y termina con `-->`. Todo lo que esté dentro no será visible en el navegador.

---

**🔸 Bloques de Código en Markdown (triple backtick)**

Se utilizan para mostrar bloques de código de forma visible y con formato.

```html
<!-- Esto es visible porque está dentro de un bloque de código Markdown -->
<h1>Título visible como ejemplo</h1>
```

**Definición:**  
En Markdown, se utiliza triple backtick <code>\`\`\`</code> para abrir y cerrar un bloque de código. Se puede indicar el lenguaje (como `html`) para resaltar la sintaxis.

### 6. Comandos Útiles

- `Ctrl + C`: copia el código seleccionado.
- `Ctrl + V`: Pega el código copiado.
- `Ctrl + A`: seleccionado todo el contenido.
- `Ctrl + S`: Guardar el archivo actual.
- `Ctrl + Z`: deshacer la última acción.
- `Ctrl + Y`: rehacer la acción deshecha.
- `Ctrl + P`: imprimir el documento.
- `Ctrl + L`: Ajustar vista de línea del codigo al ancho de la pantalla.
- `Ctrl + F`: Buscar texto en el archivo.
- `Ctrl + D`: Seleccionar la siguiente ocurrencia del texto.
- `Ctrl + F`: Seleccionar todas las ocurrencias del mismo texto.
- `Ctrl + K + C`: mantiene el botón `Ctrl` presionado para presionar `K` y luego `C`. Esto convierte la selección en un comentario.

### 7. Buenas Prácticas

- Utilizá siempre incluir el atributo `alt` en las imágenes para mejorar la accesibilidad.
- Usá los títulos de forma jerárquica: (`<h1>`) solo una vez, seguido por (`<h2>`, `<h3>`, etc.).
- Para enlaces externos, usá `target="_blank"` para abrir en una nueva pestaña y asegurate de validar la URL..
- Agrupá el contenido en contenedores semánticos como `<section>`, `<article>`, y `<main>`.
