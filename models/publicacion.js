
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-easy-auto-increment')


var publicacionSchema = new Schema({
	descripcion: {type: String},
	nombre_producto: {type: String},
	//imagen: {data: String},
	categoria: {type: String},
	usuario_publica: {type: String},
	solicitudes: {type: Number, default: 0},
	fecha_publicado: {type: Date, default: Date.now},
	fecha_caducado: {type: Date, default: new Date(+new Date() + 7*24*60*60*1000)} // Date in one week from now
})

publicacionSchema.statics.findByPublicador = function(usuario_publica, callback){
    this.find({usuario_publica: new RegExp(usuario_publica, 'i')}, callback);
};

module.exports = mongoose.model('Publicacion', publicacionSchema)
