
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-easy-auto-increment')


var publicacionSchema = new Schema({
	fecha_publicado: {type: Date, default: Date.now},
	fecha_caducado: {type: Date, default: Date.now + 7*24*60*60*1000},
	descripcion: {type: String},
	nombre_producto: {type: String},
	//imagen: {data: Buffer, contentType: String},
	categoria: {type: String},
	usuario_publica: {type: String}
})

publicacionSchema.plugin(autoIncrement, {field: 'codigo', collection: 'Counters'})

module.exports = mongoose.model('Publicacion', publicacionSchema)