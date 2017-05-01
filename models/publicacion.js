const mongoose = require('mongoose')
const Schema = mongoose.Schema

var publicacion = new Schema({
	_codigo: {type: String},
	fecha_publicado: {type: Date, default: Date.now},
	fecha_caducado: {type: Date, default: Date.now},
	descripcion: {type: String},
	nombre_producto: {type: String},
	imagen: {data: Buffer, contentType: String},
	categoria: {type: String},
	usuario_publica: {type: String}
});

module.exports = mongoose.model('Publicacion', publicacion)