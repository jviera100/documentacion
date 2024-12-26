### Instalación de Aplicaciones con Composer y Laravel

#### 1. Instalación de Composer

1. **Descargar e Instalar Composer**:
    - Ve a [getcomposer.org](https://getcomposer.org/) y sigue las instrucciones de instalación para tu sistema operativo.

#### 2. Instalación de Laravel

1. **Instalar Laravel**:
    - Abre la terminal y ejecuta el siguiente comando para instalar Laravel globalmente:
        ```sh
        composer global require laravel/installer
        ```

2. **Crear un Nuevo Proyecto Laravel**:
    - Navega al directorio donde quieres crear tu proyecto, por ejemplo:
        ```sh
        cd Desktop\dev\laravel
        ```
    - Crea un nuevo proyecto Laravel:
        ```sh
        laravel new Proyecto_tareas
        ```

#### 3. Configuración del Proyecto

1. **Levantar el Servidor**:
    - Navega al directorio del proyecto:
        ```sh
        cd Proyecto_tareas
        ```
    - Levanta el servidor:
        ```sh
        php artisan serve
        ```
    - Abre tu navegador y ve a `localhost:8000` para ver tu aplicación en funcionamiento.

2. **Abrir Proyecto en Visual Studio Code**:
    - Abre la carpeta del proyecto en Visual Studio Code para empezar a trabajar en tu código.

#### 4. Migraciones y Modelos

1. **Ejecutar Migraciones**:
    - Ejecuta las migraciones para crear las tablas en la base de datos:
        ```sh
        php artisan migrate
        ```
    - Responde "yes" cuando se te pida confirmar.

2. **Crear Modelo**:
    - Crea un modelo llamado `Tarea`:
        ```sh
        php artisan make:model Tarea -m
        ```

3. **Revertir Migraciones**:
    - Revertir las migraciones si es necesario:
        ```sh
        php artisan migrate:rollback
        ```

4. **Crear Controller**:
    - Crea un controlador llamado `TareasController`:
        ```sh
        php artisan make:controller TareasController
        ```


