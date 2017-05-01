const moongose = require('moongose');
const Schema = moongose.Schema;


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

mongoose.model('Publicacion', publicacion)