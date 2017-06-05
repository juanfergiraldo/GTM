
const Publicacion = require('../models/publicacion')
const Solicitud = require('../models/solicitud')

function crearPublicacion (req, res){
	/*console.log(req)
	console.log(req.body)
	let imagenFile = req.files.imagen
	if (imagenFile == undefined){
		return res.status(400).send('No se encontró ningún archivo')
	}
	else{
		var nombreImagen = imagenFile.name
		let pathPublicacion = './src/publicacion/'
		// Use the mv() method to place the file somewhere on your server
		imagen.mv(pathPublicacion + nombreImagen, function(err) {
			if (err)	return res.status(500).send({message: `Error al procesar la imagen: ${err}`})
		})
	}*/

	const publicacion = new Publicacion({
		descripcion: req.body.descripcion,
		nombre_producto: req.body.nombre_producto,
		categoria: req.body.categoria,
		usuario_publica: req.user,
		//imagen: nombreImagen
	})
	publicacion.save((err, publicacionStored) => {
		if (err) res.status(500).send({message: `Error al generar la publicacion: ${err}`})
		res.status(201).send({ publicacion: publicacionStored})
 	})
}

function obtenerTodasPublicaciones (req, res){

	Publicacion.find({}).sort({date: 'asc'}).exec(function(err, publicaciones) {
		var pub=publicaciones
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!pub.length) return res.status(404).send({message: 'No existen publicaciones'})
		/*for (i = 0; i < publicaciones.length; i++){				//Método para quitar las publicaciones propias.
			if(publicaciones[i].usuario_publica == req.user){
				publicaciones.splice(i, 1)
			}
		}*/

		for(i = 0; i < pub.length - 1; i++){
				let id = pub[i]._id
				Solicitud.findByPublicacion(id, function(err, solicitudes) {
					if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
					pub[i].solicitudes = solicitudes.length
				})
				//console.log(pub[i])
	  }
		res.status(200).send(pub)
	})
}

function obtenerMisPublicaciones (req, res){
	Publicacion.find({}).sort({date: 'asc'}).exec(function(err, publicaciones) {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!publicaciones) return res.status(404).send('No existen publicaciones')
		for (i = 0; i < publicaciones.length; i++){				//Método para quitar las publicaciones de otros.
			if(publicaciones[i].usuario_publica != req.user){
				publicaciones.splice(i, 1)
			}
		}
		res.status(200).send(publicaciones)
	})
}


function getPublicacion(req, res){
	let publicacionid = req.params.id
	Publicacion.find({_id : publicacionid}, (err, publicacion) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!publicacion) return res.status(404).send('No existen usuarios')

		res.status(200).send({publicacion})
	})
}

function eliminarPublicacion (req, res){
	let publicacionid = req.params.publicacionid

	Publicacion.findById(publicacionid, (err, publicacion) => {
		if(err) res.status(500).send({message: `Error al eliminar la publicación: ${err}`})

		publicacion.remove(err => {
			if(err) res.status(500).send({message: `Error al eliminar la publicación: ${err}`})
			res.status(200).send({message: 'La publicación ha sido eliminada'})
		})
	})
}

function updatePublicacion (req, res){
	let publicacionid = req.body.publicacionid
	let update = req.body

	Publicacion.findByIdAndUpdate(publicacionid, update, (err, publicacionUpdated) => {
		if(err) res.status(500).send({message: `Error al actualizar la publicación: ${err}`})
		res.status(200).send({publicacion: publicacionUpdated})
	})
}



module.exports = {
	obtenerTodasPublicaciones,
	obtenerMisPublicaciones,
	eliminarPublicacion,
	updatePublicacion,
	crearPublicacion,
	getPublicacion
}
