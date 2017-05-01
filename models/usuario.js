const mongoose = require('mongoose')  
const Schema = mongoose.Schema
    
var usuario = new Schema({
	_id: {type: String},
	nombre: {type: String},
	direccion: {type: String},
	telefono: {type: String},
	pais: {type: String},
	genero: {type: String, enum: ['Masculino','Femenino','Indefinido']},
	correo: {type: String},
	usuario: {type: String},
	contrasena: {type: String},
	imagen: {type: String}  //data: Buffer, contentType: String
});

module.exports = mongoose.model('Usuario', usuario)
