const moongose = require('moongose')
const Schema = moongose.Schema

var solicitud = new Schema({
	_codigo: {type: String}
	codigo_publicacion: {type: String}
	usuario_pide: {type: String}
});

mongoose.model('Solicitud', solicitud)