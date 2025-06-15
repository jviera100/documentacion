//require.js
//objeto require
const exports = require("./exports.js");
//objeto exports = modulo requerido

//propiedades require
const {saludar, saludarHolaMundo} = require("./exports.js");
//propiedad saludar = modulo requerido
//propiedad saludarHolaMundo = modulo requerido

//1° funcion
console.log(exports.saludar('freeCodeCamp'));
//objeto exports = modulo requerido
//propiedad saludar = funcion exportada

//2° funcion
console.log(exports.saludarHolaMundo());
//objeto exports = modulo requerido
//propiedad saludarHolaMundo = funcion exportada

