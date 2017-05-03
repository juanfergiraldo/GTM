
const Publicacion = require('../models/publicacion')


function getPublicaciones (req, res){
	Publicacion.find({}, (err, publicaciones) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!publicaciones) return res.status(404).send('No existen publicaciones')

		res.status(200).send(publicaciones)
	})
}

function deletePublicacion (req, res){
	let publicacionid = req.body.publicacionid

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

function createPublicacion (req, res){	
	const publicacion = new Publicacion({		
		descripcion: req.body.descripcion,
		nombre_producto: req.body.nombre_producto,
		categoria: req.body.categoria
		//usuario_que_publica: req.user
		//imagen: req.body.imagen	
	})

	publicacion.save((err, publicacionStored) => {
		if (err) res.status(500).send({message: `Error al generar la publicacion: ${err}`})
		res.status(200).send({ publicacion: publicacionStored}) 
 	})
}

module.exports = {
	getPublicaciones,
	deletePublicacion,
	updatePublicacion,
	createPublicacion
}