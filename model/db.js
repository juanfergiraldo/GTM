Schema = moongose.Schema;

var usuario = new Schema({
	_id: {type: String},
	nombre: {type: String},
	direccion: {type: String},
	telefono: {type: String},
	pais: {type: String},
	correo: {type: String},
	usuario: {type: String},
	contrasena: {type: String}
});

var publicacion = new Schema({
	_codigo: {type: String},
	fecha_publicado: {type: Date, default: Date.now},
	fecha_caducado: {type: Date, default: Date.now},
	descripcion: {type: String},
	nombre_producto: {type: String},
	imagen: {data: Buffer, contentType: String},
	categoria: {type: String},
	usuario_publica: {type: String}
})

var solicitud = new Schema({
	_codigo: {type: String}
	codigo_publicacion: {type: String}
	usuario_pide: {type: String}
})