## Guia de React.js

### 1. Instalación de Dependencias

1. **Instalar React y Bootstrap**:
    ```sh
    npm install react-scripts@latest bootstrap reactstrap react react-dom --save
    ```

### 2. Creación de Proyecto React

1. **Crear un Nuevo Proyecto React**:
    ```sh
    npx create-react-app holamundo
    cd holamundo
    ```

### 3. Verificación y Ejecución

1. **Verificar Versión de React**:
    ```sh
    npm list react  # o npm ls react
    ```

2. **Iniciar el Proyecto**:
    ```sh
    npm start
    ```

3. **Acceder a la Aplicación**:
    - Abre tu navegador y ve a `http://localhost:3000/`.

### 4. Uso de Bootstrap y Reactstrap en React

1. **Importar Bootstrap y Componentes de Reactstrap**:
    ```javascript
    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Card } from 'reactstrap';
    ```

### 5. Uso de `isOpen` en Reactstrap

1. **Controlar el Estado del Componente**:
    - `isOpen` es una propiedad booleana que controla la visibilidad o estado de un componente en Reactstrap.

