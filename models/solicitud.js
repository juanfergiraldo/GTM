const mongoose = require('mongoose')
const Schema = mongoose.Schema

var solicitudSchema = new Schema({
	codigo: {type: String}
	codigo_publicacion: {type: String}
	usuario_pide: {type: String}
});

module.exports = mongoose.model('Solicitud', solicitudSchema)
