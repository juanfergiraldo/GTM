const mongoose = require('mongoose')
const Schema = mongoose.Schema

var solicitud = new Schema({
	_codigo: {type: String}
	codigo_publicacion: {type: String}
	usuario_pide: {type: String}
});

module.exports = mongoose.model('Solicitud', solicitud)