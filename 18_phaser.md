

### 1. Instalación de Phaser con npm

Para instalar Phaser, una biblioteca de juegos en 2D, puedes seguir estos pasos:

1. **Inicializar un Proyecto npm**:
    - Abre tu terminal y navega al directorio donde deseas crear tu proyecto.
    - Inicializa un nuevo proyecto npm con el siguiente comando:
        ```sh
        npm init -y
        ```

2. **Instalar Phaser**:
    - Luego, instala Phaser usando npm con el siguiente comando:
        ```sh
        npm i phaser
        ```

Esto creará un archivo `package.json` en tu directorio de proyecto e instalará Phaser como dependencia.

### 2. Configuración de un Proyecto Phaser

1. **Crear Archivos del Proyecto**:
    - Crea un archivo `index.html` en el directorio de tu proyecto y agrega el siguiente contenido:
        ```html
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Juego Phaser</title>
        </head>
        <body>
            <script src="node_modules/phaser/dist/phaser.js"></script>
            <script src="src/main.js"></script>
        </body>
        </html>
        ```

2. **Crear el Archivo Principal de JavaScript**:
    - En el mismo directorio, crea una carpeta llamada `src` y dentro de ella, un archivo `main.js` con el siguiente contenido:
        ```javascript
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload() {
            // Cargar recursos
        }

        function create() {
            // Configuración inicial del juego
        }

        function update() {
            // Lógica del juego
        }
        ```

### 3. Ejecutar el Proyecto Phaser

1. **Instalar un Servidor Local**:
    - Para ejecutar tu proyecto en un servidor local, instala `live-server` con el siguiente comando:
        ```sh
        npm install -g live-server
        ```

2. **Iniciar el Servidor**:
    - En la terminal, navega al directorio de tu proyecto y ejecuta:
        ```sh
        live-server
        ```

Esto abrirá tu proyecto en el navegador por defecto y podrás ver tu juego en funcionamiento.


