//exports.js
function saludar(nombre) {
    return `hola ${nombre}`;
    }
function saludarHolaMundo() {
    return '¡hola, mundo!';
    }
//1° funcion
module.exports.saludar = saludar;
//.exports = objeto
//.saludar = propiedad
//saludar = funcion

//2° funcion
module.exports.saludarHolaMundo = saludarHolaMundo;
//.exports = objeto
//.saludarHolaMundo = propiedad
//saludarHolaMundo = funcion

//ambas funciones
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};
