### 1. Guía Básica Para Instalar Babel (ES5 => ES6)

**Dentro de la terminal, ejecutar los siguientes comandos:**
```sh
npm init -y
npm i @babel/preset-env @babel/cli @babel/core @babel/polyfill
npm i core-js
```

**Crear Carpeta para el Repositorio (ej: ejemplo):**
```sh
mkdir FullStack-Babel
cd FullStack-Babel
```

**Crear nuestro archivo `babel-config.json` con la siguiente estructura:**
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": 3.6.5
      }
    ]
  ]
}
```

**Luego de la configuración inicial, crear la siguiente estructura:**
```sh
mkdir src
cd src
```

**Crear los Archivos JS que desea trabajar en SRC y luego Compilar:**
```sh
npx babel src/ -d dist/
```

**Opción de compilación:**
```sh
npx babel src/ -d dist --config-file ./babel-config.json
```

**TIP extra para compilar código en ES5:**

**Editar el archivo `package.json` para agregar scripts:**
```json
"scripts": {
  "start": "npm run build && node dist/main.js",
  "build": "npx babel src/ -d dist/ --config-file ./babel-config.json",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

**Luego ejecutar Iniciar:**
```sh
npm start
```
Esto compilará y ejecutará nuestro programa.

