

### 1. Instalación de Vite para un Proyecto React

Para configurar un proyecto React con Vite, sigue estos pasos:

#### 1.1 Crear un Nuevo Proyecto con Vite
- Abre tu terminal y ejecuta el siguiente comando para crear un nuevo proyecto con Vite y el template de React:
    ```sh
    npm create vite@latest part1 -- --template react
    ```

#### 1.2 Navegar al Directorio del Proyecto
- Ingresa al directorio del proyecto recién creado:
    ```sh
    cd part1
    ```

#### 1.3 Instalar Dependencias
- Instala todas las dependencias necesarias con el siguiente comando:
    ```sh
    npm install
    ```

#### 1.4 Iniciar el Servidor de Desarrollo
- Inicia el servidor de desarrollo con:
    ```sh
    npm run dev
    ```

#### 1.5 Abrir la Aplicación en el Navegador
- Abre tu navegador y ve a la dirección proporcionada, generalmente `http://localhost:5173/`.

### 2. Estructura del Proyecto

Una vez que hayas creado tu proyecto, la estructura de carpetas será similar a esta:

```
part1/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### 3. Configuración Adicional

#### 3.1 Personalizar `vite.config.js`
- Puedes personalizar la configuración de Vite modificando el archivo `vite.config.js`.

#### 3.2 Añadir Librerías Adicionales
- Si necesitas librerías adicionales, instálalas usando npm. Por ejemplo, para instalar React Router:
    ```sh
    npm install react-router-dom
    ```

### 4. Crear Componentes en React

#### 4.1 Crear un Componente Básico
- Crea un nuevo componente en `src/components/MyComponent.jsx`:
    ```jsx
    import React from 'react';

    const MyComponent = () => {
        return (
            <div>
                <h1>¡Hola, Mundo!</h1>
            </div>
        );
    }

    export default MyComponent;
    ```

#### 4.2 Usar el Componente en `App.jsx`
- Importa y usa tu nuevo componente en `src/App.jsx`:
    ```jsx
    import React from 'react';
    import MyComponent from './components/MyComponent';

    function App() {
        return (
            <div className="App">
                <MyComponent />
            </div>
        );
    }

    export default App;
    ```

### 5. Desplegar el Proyecto

#### 5.1 Crear una Versión de Producción
- Para crear una versión de producción de tu proyecto, ejecuta:
    ```sh
    npm run build
    ```

#### 5.2 Servir la Versión de Producción Localmente
- Para revisar la versión de producción localmente, puedes usar `serve`:
    ```sh
    npm install -g serve
    serve -s dist
    ```

