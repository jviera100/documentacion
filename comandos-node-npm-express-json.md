# //👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻--modulo 6 => linea 331
# //👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻--modulo 7 => linea 622

# terminal Prompt Node de windows
# REPL (read, eval, print, loop) = (leer, evaluar, mostrar)
# shift enter = baja a linea de abajo en consola o terminal prompt
a.- node --version
b.- node -v
  v20.11.1
node
  Welcome to Node.js v20.11.1.
  Type ".help" for more information.
  >
.help
  .break    Sometimes you get stuck, this gets you out
  .clear    Alias for .break
  .editor   Enter editor mode
  .exit     Exit the REPL
  .help     Print this help message
  .load     Load JS from a file into the REPL session
  .save     Save all evaluated commands in this REPL session to a file

  Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
  >
.editor
  // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
  function saludar(nombre) {
  return `hola ${nombre}`;
  }
  console.log(saludar('freeCodeCamp'));
ctrl D
  hola freeCodeCamp
.exit

# terminal visualStudioCode
node soyArchivoJs.js

# modulos built-in (incorporados en node)
# http
# https
# fs (file system)
# os (operating system)
# path

# process
//node_process.js
console.log(process);
terminal
node node_process.js

# process.argv
//node_process_argv.js
console.log(process.argv);
terminal
node node_process_argv.js 6 7
resultado:
ubicacion de aplicacion node
ubicacion archivo .js
6
7

# process.argv.length
//node_process_argv_length.js
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}
terminal
node node_process_argv_length.js 1 2 3 4 5 6 7
resultado:
1
2
3
4
5
6
7

# process.memoryUsage
console.log(process.memoryUsage());
terminal
node node_process_memoryUsage.js
resultado:
{
  rss: 25198592,
  heapTotal: 4366336,
  heapUsed: 3452984,
  external: 1124397,
  arrayBuffers: 10507
}
# os.type (operating system) = sistema operativo
const os = require('os');
console.log(os.type());
terminal
node node_os_type.js
resultado:
Windows_NT
# os.homedir = usuario principal
const os = require('os');
console.log(os.homedir());
terminal
node node_os_homedir.js
resultado:
C:\Users\jonat
# os.uptime = tiempo ejecucion sistema en segundos
const os = require('os');
console.log(os.uptime());
terminal
node node_os_uptime.js
resultado:
149303.562
# os.userInfo = informacion usuario
const os = require('os');
console.log(os.userInfo());
terminal
node node_os_userInfo.js
resultado:
{
  uid: -1,
  gid: -1,
  username: 'jonat',
  homedir: 'C:\\Users\\jonat',
  shell: null
}
# setTimeout = resultado terminal demora tiempo
function mostrarTema(tema) {
  console.log(`estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema, 1000, 'node.js');
terminal
node node_setTimeout.js
resultado:
estoy aprendiendo node.js
# setImmediate = resultado terminal despues de funciones sincronas es decir al ultimo
function mostrarTema(tema) {
  console.log(`estoy aprendiendo ${tema}`);
}
console.log('antes de setImmediate()');
setImmediate(mostrarTema, 'node.js');
console.log('despues de setImmediate()');
terminal
node node_setImmediate.js
resultado:
antes de setImmediate()
despues de setImmediate()
estoy aprendiendo node.js
# setInterval = repite resultado terminal en rango de tiempo hasta interrumpir con ctrl c
function mostrarTema(tema) {
  console.log(`estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema, 1500, 'node.js');
terminal
node node_setImmediate.js
resultado:
estoy aprendiendo node.js
estoy aprendiendo node.js
estoy aprendiendo node.js
# // -------------------------
# // Versiones asincronas.
# // -------------------------
# FS (system file) module 
metodos de este modulo por defecto son asincronicos, se ejecutan despues de los sincronicos. O agregar sync.
# fs.readFile = leer archivo
const fs = require('fs');
fs.readfile('index.html', 'utf-8', (err, contenido) => { 
  if (err) {
    console.log(err);
  } else {
    console.log(contenido);
  }  
});
# fs.rename = cambia nombre
const fs = require('fs');
fs.rename('index.html', 'main.html', (err) => { 
  if (err) {
    throw err;
  }
    console.log('nombre cambiado exitosamente'); 
});
# fs.appendFile = agrega contenido al final de un archivo
const fs = require('fs');
fs.appendFile('index.html', '<p>hola</p>', (err) => { 
  if (err) {
    throw err;
  }
    console.log('archivo actualizado'); 
});
# fs.writeFile = reemplaza contenido
const fs = require('fs');
fs.writeFile('index.html', 'contenido nuevo', (err) => { 
  if (err) {
    throw err;
  }
    console.log('contenido reemplazado exitosamente'); 
});
# fs.unlink = elimina archivo
const fs = require('fs');
fs.unlink('index.html', (err) => { 
  if (err) {
    throw err;
  }
    console.log('archivo eliminado'); 
});
# // -------------------------
# // Versiones sincronas.
# // -------------------------
const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

fs.renameSync('index.html', 'main.html');

fs.appendFileSync('index.html', '<p>Hola</p>');

fs.writeFileSync('index.html', 'Contenido nuevo');

fs.unlinkSync('main.html');
# // -------------------------
# terminal visualStudioCode
# ver configuracion de json en terminal con npm
# // -------------------------
# npm init
inicia npm con valores modificables
{
  "name": "desafio-evaluado-13-clases-en-es6",   //nombre carpeta
  "version": "1.0.0",                            //version
  "description": "",                             //descripcion
  "main": "index.js",                            //archivo principal
  "scripts":{   
    "test":"echo \"Error: no test specified\" && exit 1"
    },
  "keywords": [],                                 //palabra clave
  "author": "",                                   //autor
  "license": "ISC"                                //licencia  
}
# npm init --yes
inicia npm con valores por defecto
# // -------------------------
# express
# // -------------------------
# //instalar express
//npm install express
● el paquete json queda como "Dependencies"

# //instalar express version
//npm install express@4.15.1
● el paquete json queda como "Dependencies"

# //instalar express save development
//npm install express --save-dev
● el paquete json queda como "devDependencies"

# //desinstalar express
//npm uninstall express

# node_modules: (modulos)
Es una carpeta que se crea en un proyecto de Node.js cuando se instalan paquetes o librerías a través de npm (Node Package Manager). Contiene todos los archivos de los módulos que tu proyecto necesita para funcionar correctamente.
# package.json: (configuracion inicial)
Es un archivo en formato JSON que contiene metadatos relevantes sobre el proyecto, como el nombre, la versión, la descripción, y también lista las dependencias necesarias para que el proyecto funcione. Este archivo es fundamental para gestionar las versiones de los paquetes y asegurar que todos los desarrolladores del proyecto trabajen con las mismas versiones.
# package-lock.json (versiones)
Este archivo también está en formato JSON y se genera automáticamente al instalar paquetes en tu proyecto. Su propósito es mantener un registro exacto de las versiones de cada paquete que se instala, para que cualquier otra persona que trabaje en el proyecto pueda instalar exactamente las mismas versiones, asegurando así la consistencia y evitando conflictos entre paquetes.
# Node: (terminal)
Es como una terminal donde puedes ejecutar JavaScript, que normalmente solo funciona en navegadores web. puedes usar npm y express
# npm : Node Package Manager (herramienta node, tienda e instalador de paquetes)
Es una herramienta de Node que actúa como una tienda para descargar paquetes, que son herramientas o código que otras personas han escrito y que puedes usar en tus proyectos.
# Express: (herramienta node, superpoderes)
Express, o Express.js, Es uno de esos paquetes que puedes obtener de npm. Le da a Node habilidades extra para hacer más fácil la creación de aplicaciones web, móviles8910 y APIs.
# JSON: JavaScript Object Notation (lenguaje)
Es un lenguaje que las computadoras usan para enviar y recibir información de manera organizada. Es muy útil para almacenar información en archivos, como por ejemplo, en el archivo package.json que se utiliza en proyectos de Node.js.
# emmitter
const EventEmitter = require('events');
console.log(EventEmitter)
const emisorProductos = new EventEmitter();
<!-- on(escucha)--compra(eventEmmitter) --regla o parametro = total y numProductos (callback)-->
emisorProductos.on('compra', (total, numProductos) => {
<!-- //-----------------------plantilla = total -->
  console.log('total de la compra $${total}.');
  console.log('numero de productos $${numProductos}.');
});
<!-- //--------------------valor o argumento = 500 -->
emisorProductos.emit('compra', 500, 5);
# promesa
const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {setTimeout(() => {
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
//---------maneja exito promesa
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
//---------maneja rechazo promesa
miPromesa.catch(manejarPromesaCumplida, manejarPromesaRechazada);
# nodemon
herramienta reinicia node cuando detecta cambio
--la g significa global
npm install -g nodemon
# cuando terminal no deja escribir en git
q + enter: cuando ves END y no te deja escribir, ahora te dejara escribir
# cuando terminal no deja escribir en node
servidor en ejecucion y ocupando terminal, cancelar el servidor
ctrl + c
# aplicaciones = dependencias = modulos

# JSON.STRINGIFY = convierte => array a json
El método se utiliza para convertir un objeto o un arreglo de JavaScript a una cadena de texto en formato JSON. Propiedades “message” y "users". null sin filtro o transformacion y 2 es la sangria
ejemplo:
console.log(chalk.underline.bgRedBright.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
# JSON.PARSE = convierte => json a array
hace lo contrario: toma una cadena de texto en formato JSON y la convierte en un objeto o array de JavaScript.
ejemplo:
// Supongamos que tienes una cadena JSON que representa a los usuarios
let cadenaJSON = '{"usuarios":[{"nombre":"Ana","edad":25},{"nombre":"Luis","edad":30}]}';

// Usar JSON.parse para convertir la cadena a un objeto JavaScript
let objetoUsuarios = JSON.parse(cadenaJSON);

// Ahora puedes acceder a las propiedades del objeto
console.log(objetoUsuarios.usuarios[0].nombre); // Salida: Ana

# //--------------------------------------------------------------------------------------------
# //--MODULO 6--------------------------------------
# //--------------------------------------------------------------------------------------------

/*
🚀[desafio_evaluado_26_prueba_modulo_6_club_deportivo2](https://desafio-evaluado-26-prueba-modulo-6-club.onrender.com)
.
*/
//--------------------------------------------------
//--roles de reuniones entre informaticos
//--------------------------------------------------
// Daily Scrum: Es una reunión diaria de no más de 15 minutos donde el equipo de desarrollo sincroniza el trabajo y establece el plan para las próximas 24 horas. Su propósito es evaluar el progreso hacia el objetivo del sprint y adaptar el Sprint Backlog si es necesario12.
// Scrum Diario: Similar al Daily Scrum, es un evento clave en Scrum que fomenta la comunicación, colaboración y transparencia dentro del equipo de desarrollo2.
// Sprint Backlog: Es una lista de tareas seleccionadas del Product Backlog que el equipo se compromete a completar durante el sprint actual. Ayuda a mantener al equipo enfocado y organiza el trabajo que se debe realizar en el sprint34.
// Scrum Master: Es el líder y facilitador del equipo Scrum, encargado de asegurar que se sigan los principios y prácticas de Scrum. Ayuda al equipo a mantenerse enfocado y a mejorar continuamente en el marco de trabajo ágil56.
// Product Owner: Es el representante de los stakeholders dentro del equipo Scrum, responsable de maximizar el valor del producto y de gestionar el Product Backlog. Prioriza las tareas y asegura que las necesidades del cliente se reflejen en el trabajo del equipo78.
// Un stakeholder, o parte interesada, es una persona o grupo que tiene un interés en una empresa o proyecto y que puede ser afectado por sus actividades o decisiones. En el contexto empresarial, los stakeholders pueden incluir empleados, clientes, proveedores, accionistas, inversores, y la comunidad, entre otros12. Son fundamentales para el éxito de una empresa, ya que sus necesidades y opiniones pueden influir en la dirección y estrategias del negocio1.
console.log(chalk.underline.bgCyanBright.bold.italic(JSON.stringify(persona, null, 2)));
console.log(chalk.underline.bgCyanBright.magenta.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
//👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
//---------------------------------------------------
//--estructura carpetas handlebars--
//---------------------------------------------------
//guardar archivo y ejecutar servidor para que actualice
//ctrl d selecciona mas de un elemento y ctrl shift l selecciona todos los elementos o codigos
//html contenido dentro de carpeta public o assets y dejar estatica
//layout o diseños en carpeta views => enlaces
//partialts => css y bootstraps
//botones recorri el array colores desde html o hbs cuando llamas al parcialt botones
//-----req.params es parte de la ruta------------------------
//const color = req.params.color => forma Acceso directo
//const { color } = req.params; => forma Desestructuración
//-----req.query es parte de la consulta que se envia con la ruta => valores filtrando por parametros
 /*app.get('/crear-archivo', (req, res) => {
     const { nombre, contenido } = req.query;
     console.log(nombre, contenido);*/
//---------------------------------------------------
//--terminal con node express y mas dependencias--
//---------------------------------------------------
//--iniciar json => npm init -y => crea json con toda configuracion inicial
//--agrega carpetas modules, json y lock => npm i express o npm install o npm install express --save
//--npm install express@5.0.0-beta.1 --save //ultima version
//--npm install express express-handlebars
//--npm i bootstrap jquery
//--npm i nodemon => queda como dependencia, no usar, porque lo subiria a internet = remoto
//--npm install -g nodemon => global, en el pc
//👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
//--npm i -D nodemon => dependencia de desarrollo, uso local
//--npm i nodemon --save-dev => dependencia de desarrollo, uso local

// Instalación de paquetes necesarios:
// Axios: Para hacer solicitudes a la API Random User.
// UUID: Para generar IDs únicos para cada usuario. si ejecutas console.log nuevamente genera otro ID. Es equivalente a type serial en SQL.
// Moment: Para formatear las fechas.
// Lodash: Para dividir el arreglo de usuarios por sexo.
// Chalk: Para imprimir en la consola con colores.version 5.3 con import
// npm i express express-handlebars bootstrap jquery path chalk@4.1.2 uuid moment lodash axios cli-table3 jimp nodemailer dotenv yargs
//👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
// npm i --- instala todas las dependencias registradas en json ---👨🏽‍💻
// npm i cli-table3 ------
// npm i chalk@5.3.0 ---pide module import
// npm i chalk@4.1.2 ---pide require
//npm uninstall chalk
//npm update chalk@4.1.2
//npm update chalk
//---------------------------------------------------
//--UUID vs date.now()
//---------------------------------------------------
/*
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
*/
//---------------------------------------------------
//--JSON--los scripts invocan al nodemon instalado para cada archivo .js--
//---------------------------------------------------
//scrip de nodemon lo invoca sin instalarlo, me funciona el script o shortcut
/*
 "scripts": {
   "sn": "node index.js",
   "w": "node --watch index.js",
   "n": "nodemon index.js",
   "start": "nodemon --watch index.js"
 },
*/
/*
 "scripts": {
   "sn": "node index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
   "w": "node --watch index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
   "n": "nodemon index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'",
   "start": "nodemon --watch index.js || echo 'Error: No inicio servidor con nodemon, asegúrate que archivo.js existe.'"
 },
 */
// Requerimiento 0: Crear un servidor con Node en el puerto 3000
/*const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  if (req.url == "/inicio" && req.method == "get") {
    res.end("hola mundo! servidor con node js puro");    //.end no .send
  }
})
.listen(port, () => {                                    //.listen no app.listen
  console.log(`🔥Servidor corriendo en el puerto🔥http://localhost:${port}`);
});
*/
// Requerimiento 1: Crear un servidor con Express en el puerto 3000
import express from 'express' //en json debajo de main "type": "module", => asi funciona import = modo nuevo
const express = require('express'); // Importa el módulo Express = modo antiguo
const fs = require('fs');
const path = require("path");
const chalk = require('chalk');
const uuid = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const axios = require('axios');
const table = require('cli-table3');
const jimp = require('jimp');
const nodemailer = require('nodemailer');
require('dotenv').config();
const yargs = require('yargs');
const argv = yargs.command();
moment.locale('es'); // idioma fecha
moment().format('DD-MM-YYYY HH:mm:ss')

const l = console.log; //variable que almacena console.log

// Servir archivos estáticos de Bootstrap y jQuery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // Bootstrap JavaScript
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // Bootstrap CSS

const routes = express.Router //modo nuevo importa rutas
const routes = require('/routes/routes'); //modo antiguo importa rutas
const app = express(); //instanciar express
const port = process.env.PORT || 3000; //Define el puerto del servidor, usa variable de entorno o 3000 por defecto
const exphbs = require("express-handlebars"); //Importa el motor de plantillas express-handlebars

// Requerimiento 2: Definir la carpeta “assets” como carpeta pública del servidor
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));// extension => Define el motor de plantillas con la extensión .hbs
app.set("view engine", ".hbs");// app => Establece Handlebars como el motor de vistas
app.set("views", "./views");// carpeta vista => Define la carpeta de vistas para las plantillas Handlebars
//use = usa todo lo dentro de la carpeta, ejemplo todas las rutas y con get solo la ruta raiz
app.use(express.static('assets')); //middleware => Define la carpeta 'assets' como estática para servir archivos directamente => en html y css no pones assets, en js si lo pones para ruta archivos.
app.use("/bootstrap_css",express.static('./node_modules/bootstrap/dist/css'));// Sirve los archivos CSS de Bootstrap desde node_modules
app.use("/bootstrap_js",express.static('./node_modules/bootstrap/dist/js'));// Sirve los archivos JS de Bootstrap desde node_modules
app.use("/jquery",express.static('./node_modules/jquery/dist'));// Sirve jQuery desde node_modules

// Requerimiento 3: Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"]; //arreglo
//ruta raiz
app.get('/', (req, res) => { //req consulta y res respuesta
  res.send('⭐⭐⭐⭐⭐🎉¡Bienvenido a la página de inicio!🎉⭐⭐⭐⭐⭐');
});// Envía un mensaje de bienvenida
// Renderizar la vista con el parcial Dashboard y los datos de los usuarios
app.get('/', (req, res) => { //req consulta y res respuesta
  res.render('home', { // Renderiza la vista 'home' con los datos de los usuarios
    usuarios: ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"] //arreglo
  }) 
});
/* app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '/views/index.html'));
 });*/

//ruta devuelve json
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({ usuarios });
});
// Requerimiento 4: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario_ruta = req.params.usuario //aqui capturamos el usuario de la ruta dinamica
  const isUser = usuarios.map((u) => u.toLowerCase()).includes(usuario_ruta.toLowerCase()); //aqui verificamos si el nombre de la ruta esta en el array
//tolowercase es para buscar usuario con mayuscula o minuscula
  isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg");     //captura imagen incognita      
  }); 

app.get('/abracadabra/juego/:usuario', (req, res) => { //ruta devuelve imagen incognita
  res.sendFile(__dirname + '/index.html')              //ruta nombre array devuelve html 
});                            //ejemplo: http://localhost:3000/abracadabra/juego/astrid
// Requerimiento 5: Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.
app.get('/abracadabra/conejo/:n', (req, res) => { 
  const n = req.params.n //aqui capturamos el numero de la ruta dinamica
  const numero = Math.floor(Math.random() * (5 - 1)) + 1; //numero aleatorio
  if (n == numero) {
      res.sendFile(__dirname + '/assets/img/conejito.jpg'); // Devolver imagen del Conejo si coincide
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg'); // Devolver imagen de Voldemort si no coincide
  }
}); 
//valida nombre
app.get("/usuario/:nombre", (req, res) => {
  // const nombre = req.params.nombre; // Acceso directo
     const { nombre } = req.params; //Desestructuración
     const test = nombre.match(/^[aeiouAEIOU]/)//(^) al principio => expresion regular 
     test                                      
     ? res.send("Si, tu nombre empieza con una vocal")//?=if
     : res.send("No, tu nombre no empieza con una vocal");//:=else
    });
//redirecciona a otra ruta
app.get("/musica", (req, res) => {
  res.redirect("https://www.spotify.com/cl/");
 }); 
//valida color
app.use("/colores/:color", (req, res, next) => {
  const { color } = req.params;
  color == "Azul" ? next() : res.send("No es azúl");
 });
app.get("/colores/:color", (req, res, next) => {
  res.send("Si, es azúl")
});
// Requerimiento 6: Crear una ruta genérica que devuelva un mensaje para rutas no definidas
app.get('*', (req, res) => { //ultima ruta la generica 
  res.send("<center><h1>🤣🤣🤣🤣🤣Esta página no existe...🤣🤣🤣🤣🤣 </h1></center>");
});//windows + . = inserta iconos

// Requerimiento 7: Crear una ruta para obtener los datos de la API: https://jsonplaceholder.typicode.com/users
/*
const UserApi = 'https://jsonplaceholder.typicode.com/users'
app.get('/usuarios', async (req, res) => {
try {
  const userApi = await axios.get(UserApi);
  const data = userApi.data.results[0];.name.first;
  const id = uuidv4().slide(0 ,6);
  const tiempo = moment().format(formato);
  usuarios.push({id, name: data.name.first, tiempo});
  res.json({usuarios});  
} catch (error) {
  console.error('Error al obtener los datos de la API:', error);  
}
const usuariosXgenero = _.partition(usuarios');
*/

// Iniciar el servidor => muestra enlace ruta string e invoca numero de port
app.listen(port, () => { 
  console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
});//levantarmiento servidor
app.listen(PORT, () => { 
  console.log(chalk.underline.bgCyanBright.magenta.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});
// levanto desde JS
// levanto servidor => node index
// cancelo servidor => ctrl c  => te deja volver a escribir en terminal 

//----levanto desde packageJSON----
//--A)--sin watch (con start): automatizar levantamiento servidor con cancelacion en terminal
/*
"scripts": {
  "start": "node index.js"
},
*/
//--terminal-- => npm start <= --npm nombre_script -- con start no se digita run

//--B)--con watch (con server): automatizar levantamiento servidor automaticamente, sin cancelacion en terminal
/*
"scripts": {
 "server": "node --watch index.js"
},
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--C)--Con nodemon (con server):
/*
"scripts": {
  "server": "nodemon index.js"
}
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--D)--Con nodemon y watch (con server):
/*
"scripts": {
  "server": "nodemon --watch index.js"
}
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//----THUNDER CLIENT--
//usar extencion de visual thunder client o postman para usar la url en visual

//----GITIGNORE--
//para ignorar carpeta node_modules para no subir a github en archivo gitignore digitar node_modules/*
# //----------------------------------------------------------------------------------------------------
# //---------------MODULO 7---------------------------------------------------------------------------
# //----------------------------------------------------------------------------------------------------
# NPM i PG => instala dependencia o modulo o aplicacion PG
# PG.POOL
# PG.STRING => texto plano
# PG.CLIENT
# RESULT.ROWS => formato filas
# RESULT.FIELDS => valor tabla
# PROCESS.ARGV => captura argumentos
# max => maximo de clientes
# MIN => minimo de clientes para que pool inicie consultas
# idleTimeoutMillis => tiempo de inactividad
# connectionTimeoutMillis => tiempo de espera para conectar nuevo cliente
# SSL => boleano si la conexión a la base de datos soporta un protocolo de transporte encriptado

# conexion base de datos

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

# PG-CURSOR
npm i pg-cursor
const Cursor = require("pg-cursor")
new Cursor(sql, values)

const consulta = new Cursor("select * from usuarios")
const cursor = client.query(consulta);

cursor.read(10, (err, rows) => {
console.log(rows);
cursor.close()
});
# texto plano parametrizado
pool.query(text[String], values[Array])

JSON
{
 text: '<consultas con parámetros $1,$2, ...',
 values: ['valor1', 'valor2', ...],
};

# ROW MODE
registros retornados de objeto a arreglo
# Prepared Statements
declaraciones preparadas, que hace referencia al manejo de una memoria caché

const queryObj = {
const queryObj = {
name: 'fetch-user', // prepared statement
text: `SELECT
att_id,
app_clients.cli_name||' '||app_clients.cli_lastname as Cliente,
att_date,
att_detail,
app_employee.emp_name||' '||app_employee.emp_lastname as Ejecutivo
FROM app_attentions
INNER JOIN app_clients
ON app_attentions.cli_id = app_clients.cli_id
INNER JOIN app_employee
ON app_attentions.emp_id = app_employee.emp_id
`,
}
}

