const mongoose = require('mongoose')
const Schema = mongoose.Schema

var solicitudSchema = new Schema({
	codigo_publicacion: {type: String},
	usuario_pide: {type: String}
})

solicitudSchema.statics.findByPublicacion = function(codigo_publicacion, callback){
    this.find({codigo_publicacion: new RegExp(codigo_publicacion, 'i')}, callback);
};

module.exports = mongoose.model('Solicitud', solicitudSchema)
