
### Título: Guía de Node.js y Express

### 1. Generalidades y Configuración

- **Módulo 6** [Módulo 6: Roles y Herramientas en Reuniones de Informáticos](#módulo-6-roles-y-herramientas-en-reuniones-de-informáticos) (Línea 498), [Terminal con Node, Express y Más Dependencias](#terminal-con-node-express-y-más-dependencias) (Línea 547)
- **Módulo 7** [Módulo 7: PostgreSQL en Node.js](#módulo-7-postgresql-en-node-js) (Línea 890)


### 2. Terminal Prompt Node de Windows

- **REPL (Read, Eval, Print, Loop)**:
  - `shift + enter` = Baja a la línea de abajo en consola o terminal prompt
  - a. `node --version`
  - b. `node -v`
    ```bash
    v20.11.1
    ```
  - `node`:
    ```bash
    Welcome to Node.js v20.11.1.
    Type ".help" for more information.
    ```
  - `.help`:
    ```
    .break    Sometimes you get stuck, this gets you out
    .clear    Alias for .break
    .editor   Enter editor mode
    .exit     Exit the REPL
    .help     Print this help message
    .load     Load JS from a file into the REPL session
    .save     Save all evaluated commands in this REPL session to a file
    ```

### 3. Terminal VisualStudioCode

- **Editor Mode**:
  ```bash
  .editor
  // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
  function saludar(nombre) {
    return `hola ${nombre}`;
  }
  console.log(saludar('freeCodeCamp'));
  ctrl D
  hola freeCodeCamp
  ```

- **Ejecutar Archivo JS**:
  - Terminal:
    ```bash
    node soyArchivoJs.js
    ```

### 4. Módulos Incorporados en Node.js

- **Modulos built-in**:
  - `http`
  - `https`
  - `fs` (file system)
  - `os` (operating system)
  - `path`

### 5. Procesos en Node.js

- **process**:
  - **node_process.js**:
    ```js
    console.log(process);
    ```
  - Terminal:
    ```bash
    node node_process.js
    ```

- **process.argv**:
  - Captura argumentos de terminal:
    ```js
    console.log(process.argv);
    ```
  - Terminal:
    ```bash
    node node_process_argv.js 6 7
    ```
  - Resultado:
    ```
    ubicacion de aplicacion node
    ubicacion archivo .js
    6
    7
    ```

- **process.argv.length**:
  - Ejemplo:
    ```js
    for (let i = 2; i < process.argv.length; i++) {
      console.log(process.argv[i]);
    }
    ```
  - Terminal:
    ```bash
    node node_process_argv_length.js 1 2 3 4 5 6 7
    ```
  - Resultado:
    ```
    1
    2
    3
    4
    5
    6
    7
    ```

- **process.memoryUsage**:
  - Ejemplo:
    ```js
    console.log(process.memoryUsage());
    ```
  - Terminal:
    ```bash
    node node_process_memoryUsage.js
    ```
  - Resultado:
    ```json
    {
      "rss": 25198592,
      "heapTotal": 4366336,
      "heapUsed": 3452984,
      "external": 1124397,
      "arrayBuffers": 10507
    }
    ```

### 6. Sistema Operativo

- **os.type**:
  - Ejemplo:
    ```js
    const os = require('os');
    console.log(os.type());
    ```
  - Terminal:
    ```bash
    node node_os_type.js
    ```
  - Resultado:
    ```
    Windows_NT
    ```

- **os.homedir**:
  - Ejemplo:
    ```js
    const os = require('os');
    console.log(os.homedir());
    ```
  - Terminal:
    ```bash
    node node_os_homedir.js
    ```
  - Resultado:
    ```
    C:\Users\jonat
    ```

- **os.uptime**:
  - Ejemplo:
    ```js
    const os = require('os');
    console.log(os.uptime());
    ```
  - Terminal:
    ```bash
    node node_os_uptime.js
    ```
  - Resultado:
    ```
    149303.562
    ```

- **os.userInfo**:
  - Ejemplo:
    ```js
    const os = require('os');
    console.log(os.userInfo());
    ```
  - Terminal:
    ```bash
    node node_os_userInfo.js
    ```
  - Resultado:
    ```json
    {
      "uid": -1,
      "gid": -1,
      "username": "jonat",
      "homedir": "C:\\Users\\jonat",
      "shell": null
    }
    ```

### Correlativo 7: Funciones de Temporización en Node.js

- **setTimeout**:
  - Retarda la ejecución de una función:
    ```js
    function mostrarTema(tema) {
      console.log(`estoy aprendiendo ${tema}`);
    }
    setTimeout(mostrarTema, 1000, 'node.js');
    ```
  - Terminal:
    ```bash
    node node_setTimeout.js
    ```
  - Resultado:
    ```
    estoy aprendiendo node.js
    ```

- **setImmediate**:
  - Ejecuta una función inmediatamente después de las funciones síncronas:
    ```js
    function mostrarTema(tema) {
      console.log(`estoy aprendiendo ${tema}`);
    }
    console.log('antes de setImmediate()');
    setImmediate(mostrarTema, 'node.js');
    console.log('despues de setImmediate()');
    ```
  - Terminal:
    ```bash
    node node_setImmediate.js
    ```
  - Resultado:
    ```
    antes de setImmediate()
    despues de setImmediate()
    estoy aprendiendo node.js
    ```

- **setInterval**:
  - Repite la ejecución de una función en un intervalo de tiempo:
    ```js
    function mostrarTema(tema) {
      console.log(`estoy aprendiendo ${tema}`);
    }
    setInterval(mostrarTema, 1500, 'node.js');
    ```
  - Terminal:
    ```bash
    node node_setInterval.js
    ```
  - Resultado:
    ```
    estoy aprendiendo node.js
    estoy aprendiendo node.js
    estoy aprendiendo node.js
    ```

### Correlativo 8: Versiones Asíncronas del Módulo FS

- **FS (system file) module**:
  - Métodos de este módulo por defecto son asíncronos, se ejecutan después de los síncronos. O agregar sync.

- **Leer Archivo**:
  ```js
  const fs = require('fs');
  fs.readFile('index.html', 'utf-8', (err, contenido) => { 
    if (err) {
      console.log(err);
    } else {
      console.log(contenido);
    }  
  });
  ```

- **Cambiar Nombre**:
  ```js
  const fs = require('fs');
  fs.rename('index.html', 'main.html', (err) => { 
    if (err) {
      throw err;
    }
    console.log('nombre cambiado exitosamente'); 
  });
  ```

- **Agregar Contenido al Final de un Archivo**:
  ```js
  const fs = require('fs');
  fs.appendFile('index.html', '<p>hola</p>', (err) => { 
    if (err) {
      throw err;
    }
    console.log('archivo actualizado'); 
  });
  ```

- **Reemplazar Contenido**:
  ```js
  const fs = require('fs');
  fs.writeFile('index.html', 'contenido nuevo', (err) => { 
    if (err) {
      throw err;
    }
    console.log('contenido reemplazado exitosamente'); 
  });
  ```

- **Eliminar Archivo**:
  ```js
  const fs = require('fs');
  fs.unlink('index.html', (err) => { 
    if (err) {
      throw err;
    }
    console.log('archivo eliminado'); 
  });
  ```

### Correlativo 9: Versiones Síncronas del Módulo FS

- **Leer Archivo**:
  ```js
  const fs = require('fs');
  const archivo = fs.readFileSync('index.html', 'utf-8');
  console.log(archivo);
  ```

- **Cambiar Nombre**:
  ```js
  const fs = require('fs');
  fs.renameSync('index.html', 'main.html');
  ```

- **Agregar Contenido al Final de un Archivo**:
  ```js
  const fs = require('fs');
  fs.appendFileSync('index.html', '<p>Hola</p>');
  ```

- **Reemplazar Contenido**:
  ```js
  const fs = require('fs');
  fs.writeFileSync('index.html', 'Contenido nuevo');
  ```

- **Eliminar Archivo**:
  ```js
  const fs = require('fs');
  fs.unlinkSync('main.html');
  ```


### Correlativo 10: Terminal VisualStudioCode y Express

#### Configuración de JSON en Terminal con npm

- **npm init**:
  - Inicia npm con valores modificables:
    ```json
    {
      "name": "desafio-evaluado-13-clases-en-es6",   // nombre carpeta
      "version": "1.0.0",                            // versión
      "description": "",                             // descripción
      "main": "index.js",                            // archivo principal
      "scripts": {   
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],                                 // palabras clave
      "author": "",                                   // autor
      "license": "ISC"                                // licencia  
    }
    ```

- **npm init --yes**:
  - Inicia npm con valores por defecto.

#### Express

- **Instalar Express**:
  - `npm install express`
  - El paquete JSON queda como "Dependencies".

- **Instalar Express versión específica**:
  - `npm install express@4.15.1`
  - El paquete JSON queda como "Dependencies".

- **Instalar Express para desarrollo**:
  - `npm install express --save-dev`
  - El paquete JSON queda como "devDependencies".

- **Desinstalar Express**:
  - `npm uninstall express`

#### Archivos y Herramientas de Node

- **node_modules**:
  - Es una carpeta que se crea en un proyecto de Node.js cuando se instalan paquetes o librerías a través de npm. Contiene todos los archivos de los módulos que tu proyecto necesita para funcionar correctamente.

- **package.json**:
  - Es un archivo en formato JSON que contiene metadatos relevantes sobre el proyecto, como el nombre, la versión, la descripción, y también lista las dependencias necesarias para que el proyecto funcione.

- **package-lock.json**:
  - Archivo en formato JSON que se genera automáticamente al instalar paquetes en tu proyecto. Mantiene un registro exacto de las versiones de cada paquete instalado, asegurando la consistencia y evitando conflictos entre paquetes.

- **Node**:
  - Es una terminal donde puedes ejecutar JavaScript, que normalmente solo funciona en navegadores web. Puedes usar npm y Express.

- **npm (Node Package Manager)**:
  - Es una herramienta de Node que actúa como una tienda para descargar paquetes que otras personas han escrito y que puedes usar en tus proyectos.

- **Express**:
  - Express, o Express.js, es uno de esos paquetes que puedes obtener de npm. Le da a Node habilidades extra para hacer más fácil la creación de aplicaciones web, móviles y APIs.

- **JSON (JavaScript Object Notation)**:
  - Es un lenguaje que las computadoras usan para enviar y recibir información de manera organizada. Es muy útil para almacenar información en archivos, como el archivo package.json en proyectos de Node.js.

#### Emisor de Eventos (EventEmitter)

- **Ejemplo de uso**:
  ```js
  const EventEmitter = require('events');
  const emisorProductos = new EventEmitter();

  emisorProductos.on('compra', (total, numProductos) => {
    console.log(`total de la compra $${total}.`);
    console.log(`numero de productos ${numProductos}.`);
  });

  emisorProductos.emit('compra', 500, 5);
  ```

#### Promesas

- **Ejemplo de Promesa**:
  ```js
  const promesaCumplida = false;

  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promesaCumplida) {
        resolve('¡promesa cumplida!');
      } else {
        reject('promesa rechazada...');
      }
    }, 3000);
  });

  const manejarPromesaCumplida = (valor) => {
    console.log(valor);
  };
  
  const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
  };

  miPromesa.then(manejarPromesaCumplida).catch(manejarPromesaRechazada);
  ```

#### Nodemon

- **Instalación de Nodemon**:
  - Herramienta que reinicia Node cuando detecta cambios.
  - `npm install -g nodemon`

#### Comandos Útiles

- **Terminal de Git**:
  - `q + enter`: cuando ves END y no te deja escribir, ahora te dejará escribir.

- **Terminal de Node**:
  - Cancela el servidor:
    - `ctrl + c`

#### JSON Methods

- **JSON.stringify**:
  - Convierte un objeto o un arreglo de JavaScript a una cadena de texto en formato JSON.
  - Ejemplo:
    ```js
    console.log(chalk.underline.bgRedBright.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
    ```

- **JSON.parse**:
  - Convierte una cadena de texto en formato JSON a un objeto o array de JavaScript.
  - Ejemplo:
    ```js
    let cadenaJSON = '{"usuarios":[{"nombre":"Ana","edad":25},{"nombre":"Luis","edad":30}]}';
    let objetoUsuarios = JSON.parse(cadenaJSON);
    console.log(objetoUsuarios.usuarios[0].nombre); // Salida: Ana
    ```




### Módulo 6: Roles y Herramientas en Reuniones de Informáticos

#### Proyecto:
🚀[desafio_evaluado_26_prueba_modulo_6_club_deportivo2](https://desafio-evaluado-26-prueba-modulo-6-club.onrender.com)

#### Roles de reuniones entre informáticos:

- **Daily Scrum**: Es una reunión diaria de no más de 15 minutos donde el equipo de desarrollo sincroniza el trabajo y establece el plan para las próximas 24 horas. Su propósito es evaluar el progreso hacia el objetivo del sprint y adaptar el Sprint Backlog si es necesario.

- **Scrum Diario**: Similar al Daily Scrum, es un evento clave en Scrum que fomenta la comunicación, colaboración y transparencia dentro del equipo de desarrollo.

- **Sprint Backlog**: Es una lista de tareas seleccionadas del Product Backlog que el equipo se compromete a completar durante el sprint actual. Ayuda a mantener al equipo enfocado y organiza el trabajo que se debe realizar en el sprint.

- **Scrum Master**: Es el líder y facilitador del equipo Scrum, encargado de asegurar que se sigan los principios y prácticas de Scrum. Ayuda al equipo a mantenerse enfocado y a mejorar continuamente en el marco de trabajo ágil.

- **Product Owner**: Es el representante de los stakeholders dentro del equipo Scrum, responsable de maximizar el valor del producto y de gestionar el Product Backlog. Prioriza las tareas y asegura que las necesidades del cliente se reflejen en el trabajo del equipo.

- **Stakeholder**: Persona o grupo que tiene un interés en una empresa o proyecto y que puede ser afectado por sus actividades o decisiones. En el contexto empresarial, los stakeholders pueden incluir empleados, clientes, proveedores, accionistas, inversores, y la comunidad, entre otros. Son fundamentales para el éxito de una empresa, ya que sus necesidades y opiniones pueden influir en la dirección y estrategias del negocio.

```js
console.log(chalk.underline.bgCyanBright.bold.italic(JSON.stringify(persona, null, 2)));
console.log(chalk.underline.bgCyanBright.magenta.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
```

### Estructura de Carpetas con Handlebars

- Guardar archivo y ejecutar servidor para que actualice.
- `ctrl + d` selecciona más de un elemento y `ctrl + shift + l` selecciona todos los elementos o códigos.
- HTML contenido dentro de la carpeta `public` o `assets` y dejar estática.
- Layouts o diseños en carpeta `views` => enlaces.
- Partials => CSS y Bootstraps.
- Botones: recorrer el array colores desde HTML o HBS cuando llamas al partial botones.

### Rutas y Consultas en Express

- **req.params**: Parte de la ruta.
  ```js
  const color = req.params.color; // Forma de Acceso directo
  const { color } = req.params; // Forma de Desestructuración
  ```

- **req.query**: Parte de la consulta que se envía con la ruta => valores filtrando por parámetros.
  ```js
  app.get('/crear-archivo', (req, res) => {
    const { nombre, contenido } = req.query;
    console.log(nombre, contenido);
  });
  ```

### Terminal con Node, Express y Más Dependencias

- **Iniciar JSON**:
  - `npm init -y` => crea JSON con toda configuración inicial.
  - Agrega carpetas modules, JSON y lock:
    - `npm i express` o `npm install` o `npm install express --save`
    - `npm install express@5.0.0-beta.1 --save` // última versión
    - `npm install express express-handlebars`
    - `npm i bootstrap jquery`
    - `npm i nodemon` => queda como dependencia, no usar porque lo subiría a internet = remoto.
    - `npm install -g nodemon` => global, en el PC.

- **Instalación de Paquetes Necesarios**:
  - Axios: Para hacer solicitudes a la API Random User.
  - UUID: Para generar IDs únicos para cada usuario. Si ejecutas `console.log` nuevamente genera otro ID. Es equivalente a `type serial` en SQL.
  - Moment: Para formatear las fechas.
  - Lodash: Para dividir el arreglo de usuarios por sexo.
  - Chalk: Para imprimir en la consola con colores (versión 5.3 con import).

- **Instalar Dependencias**:
  ```bash
  npm i express express-handlebars bootstrap jquery path chalk uuid moment lodash axios cli-table3 jimp nodemailer dotenv yargs pg pg-cursor sequelize pg-hstore cors body-parser
  ```

- **Otras Instancias de Instalación**:
  ```bash
  npm i # instala todas las dependencias registradas en JSON
  npm i cli-table3
  npm i chalk@5.3.0
  npm i chalk@4.1.2
  npm uninstall chalk
  npm update chalk@4.1.2
  npm update chalk
  ```



### UUID vs Date.now()

```js
UUID garantiza la unicidad absoluta
Date.now(): Esto devuelve el número de milisegundos transcurridos desde la medianoche del 1 de enero de 1970 (conocido como el “epoch” o “época”) hasta el momento actual. Básicamente, es un timestamp que representa la fecha y hora actual.
    => no es recomendable para generar valores unicos
    Los valores devueltos por Date.now() son únicos solo en el contexto de, un único proceso.
    si ubiesen dos procesos asincronicos ejecutandose al mismo tiempo, 
    podrian generar el mismo valor, pero agregando Math.random a date.now,
    es muy extraño que genere el mismo id
.toString(36): Aquí estamos convirtiendo ese timestamp en una cadena de texto. El argumento 36 indica que queremos representar el número en base 36. En base 36, los dígitos van desde 0 hasta 9 y luego de la ‘a’ a la ‘z’.
.slice(2): Finalmente, tomamos una subcadena de la cadena resultante. El índice 2 indica que queremos eliminar los primeros dos caracteres de la cadena. Esto se hace para eliminar el prefijo “0o” que se agrega automáticamente cuando convertimos a base 36.
En resumen, la expresión Date.now().toString(36).slice(2) nos da una cadena que representa el timestamp actual en base 36, sin el prefijo “0o”. Por ejemplo, si ejecutamos esta línea de código ahora mismo, obtendríamos algo como "1krs6j".
-------------------------
La época Unix es una fecha concreta a partir de la cual se cuentan los segundos, lo que da como resultado una nueva medida de tiempo. Esta medida se utiliza en sistemas operativos como Unix o Linux, así como en algunos lenguajes de programación como PHP. El tiempo en estos sistemas operativos se mide en segundos desde el 1 de enero de 1970, a las cero horas (medianoche UTC/GMT) 1.
Literalmente hablando, el epoch es el Unix time 0, que corresponde a la medianoche del 1 de enero de 1970. Sin embargo, el término “epoch” a menudo se utiliza como sinónimo de Unix time.
Este sistema de medición es ampliamente utilizado en programación y sistemas informáticos para representar fechas y horas de manera uniforme. Por ejemplo, cuando ves un timestamp en un archivo o en una base de datos, es probable que esté basado en la época Unix.
```

### JSON y Scripts

- **Scripts para Nodemon**: Invocan al nodemon instalado para cada archivo `.js`.
  ```json
  "scripts": {
    "sn": "node index.js",
    "w": "node --watch index.js",
    "n": "nodemon index.js",
    "start": "nodemon --watch index.js"
  }
  ```

- **Scripts con Mensajes de Error**: Asegúrate de que el archivo `.js` exista.
  ```json
  "scripts": {
    "sn": "node index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
    "w": "node --watch index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
    "n": "nodemon index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
    "start": "nodemon --watch index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'"
  }
  ```

### Requerimiento 0: Crear un servidor con Node en el puerto 3000

```js
const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  if (req.url == "/inicio" && req.method == "GET") {
    res.end("hola mundo! servidor con node js puro"); // .end no .send
  }
}).listen(port, () => { // .listen no app.listen
  console.log(`🔥Servidor corriendo en el puerto🔥http://localhost:${port}`);
});
```

### Requerimiento 1: Crear un servidor con Express en el puerto 3000

Modo nuevo (import):

```js
import express from 'express'; // en json debajo de main "type": "module", => asi funciona import = modo nuevo
```

Modo antiguo (require):

```js
const express = require('express'); // Importa el módulo Express = modo antiguo
```

### Configuración del Servidor

- **Importar módulos**:

  ```js
  const fs = require('fs');
  const path = require('path');
  const chalk = require('chalk');
  const uuid = require('uuid');
  const moment = require('moment');
  const _ = require('lodash');
  const axios = require('axios');
  const table = require('cli-table3');
  const jimp = require('jimp');
  const nodemailer = require('nodemailer');
  import 'dotenv/config';
  require('dotenv').config();
  const yargs = require('yargs');
  const argv = yargs.command();
  import { Client } from 'pg';
  const { Client } = require('pg');
  import readline from 'readline';
  const readline = require('readline');
  moment.locale('es'); // idioma fecha
  moment().format('DD-MM-YYYY HH:mm:ss');
  ```

- **Instancia de Express**:

  ```js
  const app = express(); // instanciar express
  const port = process.env.PORT || 3000; // Define el puerto del servidor, usa variable de entorno o 3000 por defecto
  ```

- **Servir archivos estáticos de Bootstrap y jQuery**:

  ```js
  app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // Bootstrap JavaScript
  app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // jQuery
  app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // Bootstrap CSS
  ```

- **Importar rutas**:

  ```js
  const routes = express.Router; // modo nuevo importa rutas
  const routes = require('/routes/routes'); // modo antiguo importa rutas
  ```

- **Importar motor de plantillas**:

  ```js
  const exphbs = require('express-handlebars'); // Importa el motor de plantillas express-handlebars
  ```

### Requerimiento 2: Definir la carpeta “assets” como carpeta pública del servidor

```js
app.engine(".hbs", exphbs.engine({ extname: ".hbs" })); // Define el motor de plantillas con la extensión .hbs
app.set("view engine", ".hbs"); // Establece Handlebars como el motor de vistas
app.set("views", "./views"); // Define la carpeta de vistas para las plantillas Handlebars

//use = usa todo lo dentro de la carpeta, ejemplo todas las rutas y con get solo la ruta raíz
app.use(express.static('assets')); // Define la carpeta 'assets' como estática para servir archivos directamente => en html y css no pones assets, en js si lo pones para ruta archivos.
app.use("/bootstrap_css", express.static('./node_modules/bootstrap/dist/css')); // Sirve los archivos CSS de Bootstrap desde node_modules
app.use("/bootstrap_js", express.static('./node_modules/bootstrap/dist/js')); // Sirve los archivos JS de Bootstrap desde node_modules
app.use("/jquery", express.static('./node_modules/jquery/dist')); // Sirve jQuery desde node_modules
```

### Requerimiento 3: Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios

```js
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian']; // arreglo

// Ruta raíz
app.get('/', (req, res) => { // req = consulta y res = respuesta
  res.send('⭐⭐⭐⭐⭐🎉¡Bienvenido a la página de inicio!🎉⭐⭐⭐⭐⭐');
}); // Envía un mensaje de bienvenida

// Renderizar la vista con el parcial Dashboard y los datos de los usuarios
app.get('/', (req, res) => {
  res.render('home', { // Renderiza la vista 'home' con los datos de los usuarios
    usuarios: ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian'] // arreglo
  });
});

/* app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/views/index.html'));
}); */

// Ruta devuelve JSON
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({ usuarios });
});
```

### Requerimiento 4: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres

```js
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario_ruta = req.params.usuario; // Captura el usuario de la ruta dinámica
  const isUser = usuarios.map((u) => u.toLowerCase()).includes(usuario_ruta.toLowerCase()); // Verifica si el nombre de la ruta está en el array
  //tolowercase es para buscar usuario con mayúscula o minúscula
  isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg"); // Captura imagen incógnita
});

app.get('/abracadabra/juego/:usuario', (req, res) => { // Ruta devuelve imagen incógnita
  res.sendFile(__dirname + '/index.html'); // Ruta nombre array devuelve HTML
}); // Ejemplo: http://localhost:3000/abracadabra/juego/astrid
```

### Requerimiento 5: Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria

```js
app.get('/abracadabra/conejo/:n', (req, res) => {
  const n = req.params.n; // Captura el número de la ruta dinámica
  const numero = Math.floor(Math.random() * (5 - 1)) + 1; // Número aleatorio
  if (n == numero) {
    res.sendFile(__dirname + '/assets/img/conejito.jpg'); // Devolver imagen del Conejo si coincide
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg'); // Devolver imagen de Voldemort si no coincide
  }
});
```

### Validar Nombre

```js
app.get('/usuario/:nombre', (req, res) => {
  // const nombre = req.params.nombre; // Acceso directo
  const { nombre } = req.params; // Desestructuración
  const test = nombre.match(/^[aeiouAEIOU]/); // (^ al principio) => expresión regular
  test ? res.send("Sí, tu nombre empieza con una vocal") // ? = if
       : res.send("No, tu nombre no empieza con una vocal"); // : = else
});
```

### Redireccionar a otra ruta

```js
app.get('/musica', (req, res) => {
  res.redirect('https://www.spotify.com/cl/');
});
```

### Validar Color

```js
app.use('/colores/:color', (req, res, next) => {
  const { color } = req.params;
  color == 'Azul' ? next() : res.send('No es azúl');
});
app.get('/colores/:color', (req, res, next) => {
  res.send('Sí, es azúl');
});
```

### Requerimiento 7: Crear una ruta para obtener los datos de la API: https://jsonplaceholder.typicode.com/users

```js
/*
const UserApi = 'https://jsonplaceholder.typicode.com/users';
app.get('/usuarios', async (req, res) => {
  try {
    const userApi = await axios.get(UserApi);
    const data = userApi.data.results[0].name.first;
    const id = uuidv4().slide(0, 6);
    const tiempo = moment().format(formato);
    usuarios.push({ id, name: data.name.first, tiempo });
    res.json({ usuarios });  
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
  }
  const usuariosXgenero = _.partition(usuarios);
});
*/
```

### Iniciar el servidor

```js
app.listen(port, () => {
  console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
}); // Levantamiento del servidor

app.listen(PORT, () => {
  console.log(chalk.underline.bgCyanBright.magenta.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});
```

- **Levantar desde JS**:
  - Levantar servidor => `node index`
  - Cancelar servidor => `ctrl + c` => te deja volver a escribir en terminal

- **Levantar desde packageJSON**:
  - **A) Sin watch (con start)**: Automatizar levantamiento servidor con cancelación en terminal
    ```json
    "scripts": {
      "start": "node index.js"
    },
    ```
  - **Terminal**: `npm start` (con start no se digita run)

  - **B) Con watch (con server)**: Automatizar levantamiento servidor automáticamente, sin cancelación en terminal
    ```json
    "scripts": {
      "server": "node --watch index.js"
    },
    ```
  - **Terminal**: `npm run server` (con nombre diferente a start se digita run)

  - **C) Con nodemon (con server)**:
    ```json
    "scripts": {
      "server": "nodemon index.js"
    }
    ```
  - **Terminal**: `npm run server` (con nombre diferente a start se digita run)

  - **D) Con nodemon y watch (con server)**:
    ```json
    "scripts": {
      "server": "nodemon --watch index.js"
    }
    ```
  - **Terminal**: `npm run server` (con nombre diferente a start se digita run)

### Thunder Client

- Usar extensión de Visual Studio Code Thunder Client o Postman para usar la URL en visual

### Gitignore

- Para ignorar la carpeta `node_modules` y no subir a GitHub, en el archivo `.gitignore` digitar `node_modules/*`


### Módulo 7: PostgreSQL en Node js

### Estructura de Carpetas (Modelo Vista Controlador - MVC)

```plaintext
index <= rutas <= query <= config conexion <= .env
```

### Conceptos de Comandos

- `npm i pg`: Instala la dependencia o módulo o aplicación PG (PostgreSQL).
- `PG.String`: Texto plano.
- `PG.Pool`: Conexiones múltiples con PostgreSQL.
- `PG.Client`: Conexión para consulta = script.
- `const { rows } = await pool.query("SELECT NOW()");`: Consulta a la base de datos.
- `console.log(result.rows);`: Captura la respuesta de la consulta a la base de datos = valor fila tabla.
- `console.log(result.rowCount);`: Captura la respuesta de la consulta a la base de datos = número orden consulta fila tabla.
- `console.log(result.fields);`: Captura la respuesta de la consulta a la base de datos = valor columna tabla.
- `await client.end();`: Cierre de conexión.
- `console.log(process.env.DB_PASS);`: Captura contraseña del archivo .env.
- `console.log(process.argv)`: Captura argumentos de terminal.
- `console.log(process.argv.slice(2))`: Captura argumentos de terminal y omite los 2 primeros índices del array (ruta de Node y ruta de archivo index.js).
- `max`: Máximo de clientes.
- `min`: Mínimo de clientes para que pool inicie consultas.
- `idleTimeoutMillis`: Tiempo de inactividad.
- `connectionTimeoutMillis`: Tiempo de espera para conectar nuevo cliente.
- `SSL`: Booleano, indica si la conexión a la base de datos soporta un protocolo de transporte encriptado.
- `allowExitOnIdle: true`: Permitir salida en inactividad.

### Conexión a Base de Datos en ES5

```js
const { Client } = require("pg");
const conection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "tu_base_de_datos",
    user: "tu_usuario",
    password: "tu_password",
  });
  await client.connect();
  const result = await client.query("SELECT * FROM users");
  console.log(result.rows);
  await client.end();
};
conection();
```

### Conexión a Base de Datos en ES6

```js
import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  allowExitOnIdle: true,
  ssl: { rejectUnauthorized: false },
});

const getDate = async () => {
  const { rows } = await pool.query("SELECT NOW()");
  console.log(rows);
  return rows;
};
getDate();

export default pool;
```

### Conexión a Base de Datos en ES6 (Otra Forma)

```js
import pg from "pg"; // cambio import pg
import "dotenv/config";

// Desestructuramos invocando los parámetros dentro de process.env
const { DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE } = process.env;

const config = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

const db = new pg.Pool(config); // instancia de pg.Pool

const getDate = async () => {
  const result = await db.query("SELECT NOW()");
  console.log(result.rows);
};
getDate();
```

### Ejemplo Archivo .env

```plaintext
DB_HOST=localhost
DB_DATABASE_POOL=soyNombre
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=123456
```

### Ejemplo Archivo DATABASE

```sql
-- Creacion de la BBDD
create database users;

-- Creación de la tabla usuarios
create table users (
  id serial primary key,
  name varchar(50) not null,
  email varchar(50) not null
);

-- Inserción de un usuario
insert into users(name, email) values('Juan', 'juan@gmail.com');
insert into users(name, email) values('Maria', 'maria@gmail.com');
```


### PROCESS.ARGV

```js
console.log(process.argv.slice(2)) = captura argumentos de terminal y omite los 2 primeros índices del array que son ruta de Node y ruta de archivo index.js
```

### CRUD

- **AGREGA datos desde terminal**:
  ```bash
  node queries/consultas add 'Juan Perez' 12300300-7 flauta basico
  ```

- **MUESTRA registro actual desde terminal**:
  ```bash
  node queries/consultas get 
  ```

- **BUSCA dato por FILTRO rut desde terminal**:
  ```bash
  node queries/consultas getrut 12300300-7
  ```

- **ACTUALIZA datos desde terminal**:
  ```bash
  node queries/consultas update 'Juan Perez' 12300300-7 flauta intermedio
  ```

- **ELIMINA datos desde terminal**:
  ```bash
  node queries/consultas delete 'Juan Perez' 12300300-7 flauta intermedio
  ```

### PG-CURSOR

Es un módulo de PostgreSQL que proporciona un cursor para realizar consultas selectivas en una base de datos. Los cursores permiten recorrer los resultados de una consulta de manera eficiente, especialmente cuando se trabaja con grandes conjuntos de datos. Esto es útil cuando se necesitan resultados parciales de una consulta o cuando se quiere procesar los datos de manera incremental.

```bash
npm i pg-cursor
```

```js
const Cursor = require("pg-cursor");
new Cursor(sql, values);

const consulta = new Cursor("select * from usuarios");
const cursor = client.query(consulta);

cursor.read(10, (err, rows) => {
  console.log(rows);
  cursor.close();
});
```

### SQL Injection

Vulnera la base de datos usando CRUD. La solución es usar texto plano parametrizado.

### Texto Plano Parametrizado

- **Texto plano parametrizado**: Es una técnica que implica la creación de consultas SQL con parámetros dinámicos, donde los valores de los parámetros se proporcionan por separado. Esto ayuda a prevenir la inyección SQL y mejora la legibilidad del código.

- **Interpolación**: La interpolación de cadenas de texto en JavaScript es una característica que permite incrustar valores de variables dentro de una cadena utilizando el símbolo `${}`. Esto se puede utilizar para crear consultas SQL con parámetros de manera más dinámica y legible.

```js
pool.query(text[String], values[Array]);

const queryObj = {
  text: '<consultas con parámetros $1,$2, ...',
  values: ['valor1', 'valor2', ...],
};
```

### ROW MODE

Se refiere al modo en que se devuelven los resultados de una consulta en PostgreSQL. En el modo ROW, los resultados de la consulta se devuelven como un conjunto de filas, donde cada fila representa un registro de la tabla. Esto contrasta con otros modos de devolución, como el modo JSON, donde los resultados se devuelven en formato JSON.

### Prepared Statements

Las consultas preparadas o parametrizadas se compilan una sola vez y se guardan en caché.

👨🏽‍💻La principal ventaja de los Prepared Statements es que ayudan a prevenir ataques de inyección SQL, ya que los datos proporcionados por el usuario se tratan como datos, no como parte de la instrucción SQL. Además, pueden mejorar el rendimiento en sistemas que ejecutan la misma consulta múltiples veces, ya que la consulta solo se compila una vez y luego se pueden ejecutar con diferentes valores de parámetros.👨🏽‍💻

- **Prepared Statements**: Son consultas SQL precompiladas que permiten separar el código SQL de los datos o prompt proporcionados por el usuario. Esto se logra utilizando marcadores de posición o índices en la consulta que luego se reemplazan por los valores de los parámetros.

- **queryObj (Objeto de Consulta)**: Se utiliza para estructurar una consulta SQL junto con sus parámetros, donde `text` representa la consulta SQL y `values` representa los valores de los parámetros en un objeto JSON.

```js
const queryObj = {
  text: 'SELECT * FROM estudiantes WHERE rut = $1',
  values: [rut],
};
```

- **object.values** puede darme los valores de los parámetros del array.
- **object.keys** puede darme los nombres de los parámetros del array.

```js
const queryObj = {
  name: 'fetch-user', // prepared statement
  text: `SELECT
    att_id,
    app_clients.cli_name || ' ' || app_clients.cli_lastname AS Cliente,
    att_date,
    att_detail,
    app_employee.emp_name || ' ' || app_employee.emp_lastname AS Ejecutivo
    FROM app_attentions
    INNER JOIN app_clients ON app_attentions.cli_id = app_clients.cli_id
    INNER JOIN app_employee ON app_attentions.emp_id = app_employee.emp_id
  `,
};
```

### Uso de JSON como Argumento de Consulta

Se utiliza un objeto JSON (`queryObj`) para definir el texto de la consulta y los valores de los parámetros. Esto permite separar claramente el texto de la consulta y los valores, lo que mejora la legibilidad del código y evita problemas de seguridad como la inyección SQL.

- **Ejemplo con Texto Plano Parametrizado**:

```js
const queryObj = {
  text: 'SELECT * FROM estudiantes WHERE rut = $1',
  values: [rut],
};
```

- **Explicación del Ejemplo**:

  - `text`: Es una cadena que representa la consulta SQL que se va a ejecutar. En este caso, la consulta busca todos los estudiantes cuyo rut coincide con el valor proporcionado como parámetro.
  - `values`: Es un arreglo que contiene los valores de los parámetros de la consulta. En este ejemplo, `$1` indica que se espera un parámetro en la consulta SQL, y ese valor se toma del primer elemento del arreglo `values`, que en este caso es la variable `rut`.

### PROCESS.ARGV = Redeclarar Variables del Array de la Función con Nuevo Índice Dentro del IF

```js
import pool from "../config/db.js";

const argumento = process.argv.slice(2);
const option = argumento[0]; //------si agrego un nuevo valor se ubicará en el índice 0.-
const gender = argumento[1];
const dob = argumento[2];
const phone = argumento[3];
const email = argumento[4];
const country = argumento[5];
const name = argumento[6];

const addStudent = async (gender, dob, phone, email, country, name) => {
  try {
    const consulta = {  
      text: 'INSERT INTO users (gender, dob, phone, email, country, name) VALUES ($1, $2, $3, $4, $5, $6) returning *',
      values: [gender, dob, phone, email, country, name],
    };
    const res = await pool.query(consulta);
    console.log("Estudiante agregado: ", res.rows[0]);
  } catch (error) {
    console.log(error.code, error.message);    
  }
}

// Con IF o SWITCH definimos un string que al ponerlo en terminal invoca una función u otra
if(option === "add"){       // ubicado índice [0]
  addStudent();
}
if(option === "getEmail"){  // ubicado índice [4]
  getStudentEmail(email);
}

// Terminal
node queries/consultas add

// Para pasar email con índice [4] tendría que anotar los valores de índice [0,1,2,3,4]
node queries/consultas add cosa cosa cosa juan@gmail.com

// Redeclaramos variables con nuevo índice dentro del IF

// Para este ejemplo el array contiene el nombre de cada función: agregar, actualizar, mostrar, eliminar datos
// El array tiene un índice, es el orden en que se muestran los datos en el terminal
// Si quieres modificar datos, ejemplo del índice [4], debes completar datos del índice [0,1,2,3,4]
// Entonces si redeclaras el índice en sus variables dentro del if que invoca esa función 
// de índice [4] a [1], entonces solo anotas el índice [0] y el [1], así agregas lo que necesitas,
// omitiendo los datos o las funciones que no quieres llamar

if(option === "add"){       // ubicado índice [0]
  addStudent();
}
if(option === "getEmail"){  // actual índice [4]
  email = argumento[1];     // nuevo índice [1]
  getStudentEmail(email);
}
```

### Snippets Global

- **alt + shift + flecha abajo**: Copia código.
- **ctrl + alt + flecha abajo**: Selecciona el principio o final de cada línea de código hacia abajo para agregar comillas y coma al final.

Ejemplo:

```json
{
  "Gitignore": {
    "prefix": "gitignore",
    "body": [
      "# Ignorar archivos y carpetas",      
      "node_modules/",
      ".env"      
    ],
    "description": "Snippet para .gitignore"
  }
}
```

---

### **¿Qué es esto?**

```js
const { emisor, receptor, monto } = datos;
const { id: emisorId } = (
  await pool.query(`SELECT * FROM usuarios WHERE nombre = '${emisor}'`)
).rows[0];
// Buscamos el id del receptor
const { id: receptorId } = (
  await pool.query(`SELECT * FROM usuarios WHERE nombre = '${receptor}'`)
).rows[0];
```

---

### **¿Entonces rowMode muestra un objeto como array?**

---

### **petstore.swagger.io para documentar API**

---

### **HATEOAS**

Permite paginar la data, mostrar tantos datos por página.

---

### Generas Nuevo Token Actualizando Página

---

### Estructura Token:

- **color rojo**: Header no se modifica.
- **data**: Color morado.
- **secret key**: Color celeste.

### Función Método `sign` o `verify` (trae data y variables de entornos)

---

### Body = POST = Backend

### Query = GET = Lleva signo `?` porque filtra

### Params = URL




--------------------------------------------------------------------------------------------------------------------
# SPANISH

# Api Rest Full:
(Uso de req.params, req.body y req.query en las operaciones CRUD con solicitudes HTTP.)


# ● req.params: 
              Se utiliza en las operaciones Read (GET), Update (PUT) y Delete (DELETE), para capturar los parámetros 
              de la ruta en la URL, generalmente un ID para buscar en la base de datos, API o en un archivo JSON.

      --ejemplo: //--Read (GET): Para obtener una tarea específica por su ID.//

                app.get('/tasks/:taskId', function(req, res) {
                    let taskId = req.params.taskId;
                    // Buscar la tarea en la base de datos y devolverla//
                });
# ● req.body: 
            Se utiliza en las operaciones Create (POST) y Update (PUT), para capturar para acceder a los datos enviados
             en el cuerpo de la solicitud HTTP, generalmente para agregar o actualizar datos en la base de datos, 
            API o en un archivo JSON.

      --ejemplo: //--Create (POST): Para crear una nueva tarea.//

                app.post('/tasks', function(req, res) {
                    let newTask = req.body;
                    // Agregar la nueva tarea a la base de datos//
                    });
# ● req.query: 
            Se utiliza en la operación Read (GET) para leer los parámetros de consulta en la URL, generalmente para 
            filtrar resultados en una base de datos, API o en un archivo JSON.

      --ejemplo: //--Read (GET): Para obtener tareas que coincidan con un estado específico (ejemplo, completadas).//

                app.get('/tasks', function(req, res) {
                    let status = req.query.status;
                    // Buscar las tareas que coincidan con el estado en la base de datos 
                    y devolverlas//
                });
          
--------------------------------------------------------------------------------------------------------------------                
# ENGLISH

# Api Rest Full:
(Using req.params, req.body, and req.query in CRUD operations with HTTP requests.)


# ● req.params: 
              It is used in Read (GET), Update (PUT) and Delete (DELETE) operations. to capture the route parameters 
              in the URL, usually an ID to search the database, API or a JSON file.              

      --example: //--Read (GET): To get a specific task by its ID.//

                app.get('/tasks/:taskId', function(req, res) {
                    let taskId = req.params.taskId;
                    // Find the task in the database and return it //
                });
# ● req.body:
            It is used in the Create (POST) and Update (PUT) operations, to capture to access the data sent in the 
            body of the HTTP request, usually to add or update data in the database, API or in a JSON file.            

      --example: //--Create (POST): To create a new task.//

                app.post('/tasks', function(req, res) {
                    let newTask = req.body;
                    // Add the new task to the database //
                    });
# ● req.query: 
            Used in the Read (GET) operation to read the query parameters in the URL, usually to filter results in
             a database, API or in a JSON file.            

      --example: //--Read (GET): To get tasks that match a specific state (e.g. completed).//

                app.get('/tasks', function(req, res) {
                    let status = req.query.status;
                    // Find tasks that match the status in the database and return them //
                });

--------------------------------------------------------------------------------------------------------------------
# MVC SPANISH
/*                            MVC ( modelo-vista-controlador )
    ● (frontend = cliente):     
      el index.js (levanta servidor) y este importa archivo middlewares (configura solicitudes json, handlebars, 
      manejo de errores, fileupload, JWT y carpetas estaticas que muestran las vistas de html o hbs en el navegador), 
      y la vista main.hbs enlaza las vistas y los partials (navbar y footer) y el main.hbs enlaza las animaciones con  
      archivos (script.js) y los estilos con archivos (style.css). Ademas hay un script con la logica en cada vista.

    ● (backend = servidor):
      index.js (levanta el servidor) y este importa archivo routes.js (las rutas) y este importa los 
      controllers.js (api rest full) y este importa las consultas.js (consultas sql), y este importa la 
      config el db.js (conexion database) y este importa archivo .env (variables de entorno). 
      Opcionalmente los controllers pueden importar la data de una API o desde archivo json.
*/
# MVC ENGLISH
/*                             MVC ( Model-View-Controller )
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
*/
----------------------------------------------------------------------------------------------------------------