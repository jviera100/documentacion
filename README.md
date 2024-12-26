
# Proyecto Multidisciplinario: Lenguajes, Instalaciones, Seguridad y Ciencia de Datos con Azure

## Descripción

Este proyecto es un compendio de diversos lenguajes de programación, técnicas de seguridad y herramientas de ciencia de datos, con un enfoque en el uso de Azure. El objetivo es ofrecer una guía completa y práctica para desarrolladores, analistas de seguridad y científicos de datos.

## Contenidos

### Lenguajes de Programación

1. [HTML](./00_html.md)
2. [CSS](./01_CSS.md)
3. [Bootstrap](./02_bootstrap.md)
4. [JavaScript y JQuery](./03_JavaScript_JQuery.md)
5. [PHP y XAMPP](./16_php_xampp.md)
6. [Python](./14_python.md)
7. [React](./15_react.md)
8. [Laravel y Composer](./17_laravel_composer.md)
9. [Phaser](./18_phaser.md)
10. [Vite](./19_vite.md)

### Instalaciones de Entornos de Trabajo

1. [Terminal y Git](./04_terminal-git.md)
2. [Babel](./05_babel.md)
3. [JSON](./06_json.md)
4. [SQL](./07_SQL.md)
5. [Node, npm y Express](./08_node_npm_express_json.md)

### Seguridad

1. [Wireshark](./09_wireshark.md)
2. [tcpdump](./10_tcpdump.md)
3. [Suricata](./11_suricata.md)
4. [Splunk](./12_splunk.md)
5. [Chronicle](./13_chronicle.md)

### Ciencia de Datos con Azure

1. [Python para Data Analysis](./20_python_data_analyst.md)
2. [Linux para Ciencia de Datos](./21_linux.md)
3. [Data Science con Azure DP100](./22.dataScienceAzureDP100.md)

## Instalación de Dependencias

### Node.js
- **Inicializar Proyecto**:
    ```sh
    npm init -y
    ```

- **Instalar Dependencias**:
    ```sh
    npm install
    ```

### Python
- **Instalar Librerías**:
    ```sh
    pip install -r requirements.txt
    ```

### XAMPP
- **Instalar XAMPP**:
    - Descargar e instalar desde [Apache Friends](https://www.apachefriends.org/).
    - Iniciar servicios desde el Panel de Control de XAMPP.

## Uso

### Iniciar Servidor Local

- **PHP**:
    ```sh
    php -S localhost:8000
    ```

- **Node.js**:
    ```sh
    npm start
    ```

- **Laravel**:
    ```sh
    php artisan serve
    ```

### Ejecutar Análisis de Datos

- **Python**:
    ```sh
    python script.py
    ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier mejora o corrección.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---



                            MVC ( Model-View-Controller )🎉
    ● (frontend = client):
      the index.js (starts server) and this imports middlewares file (configures json requests, handlebars,
      error handling, fileupload, JWT and static folders showing html or hbs views in the browser),
      and the main.hbs view links the views and the partials (navbar and footer) and the main.hbs links the animations 
      with files (script.js) and styles with files (style.css). There is also a script with the logic in each view.

    ● (backend = server):
      index.js (raises the server) and this imports the routes.js file (the routes) and this imports the
      controllers.js (api rest full) and this imports the queries.js (sql queries), and this imports the
      config the db.js (database connection) and this imports the .env file (environment variables).
      Controllers can optionally import data from an API or from a json file.
