Guía Básica Para Instalar Babel:
Dentro de la terminal ejecutar los siguientes comandos:
npm init -y
npm i @babel/preset-env @babel/cli @babel/core @babel/polyfill
npm i core-js

Crear Carpeta el Repositorio ej: ejemplo
mkdir FullStack-Babel
cd FullStack-Babel

Crear nuestro archivo babel-config.json con la siguiente estructura

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

Luego de la configuración inicial, creamos la siguiente estructura
mkdir src (crear un carpeta con nombre src)
cd src (movemos a la carpeta src)

Crear los Archivos JS que desea trabajar corresponda en SRC y luego Compilar:
<!-- npx babel src/ -d dist/ -->
Opción de compilación:
npx babel src/ -d dist --config-file ./babel-config.json

(TIP extra compilar código en ES5)
TIPS dentro de nuestro archivo package.json editar donde dice:

"scripts":{
"test":"echo \"Error: no test specified\" && exit 1"
}

y agregar lo siguiente

"scripts":{
"start":"npm run build && node dist/main.js",
"build":"npx babel src/ -d dist/ --config-file ./babel-config.json",
"test":"echo \"Error: no test specified\" && exit 1"
}

luego ejecutar Iniciar:
npm start esto compilara y ejecturá nuestro program
