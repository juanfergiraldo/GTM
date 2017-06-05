
const Solicitud = require('../models/solicitud')

function crearSolicitud(req, res){
    let id = req.params.id
		const solicitud = new Solicitud({
  		codigo_publicacion: id,
		  usuario_pide: req.user
	})

  console.log(solicitud)
  Solicitud.find({codigo_publicacion: id, usuario_pide: req.user}, (err, solicitudEncontrada) => {
    if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    console.log(solicitudEncontrada.length)
		if(!solicitudEncontrada.length){
      solicitud.save((err) => {
    		if (err) res.status(500).send({message: `Error al crear la solicitud: ${err}`})
    		return res.status(201).send({message: 'Se creó exitosamente'})
     	})
    }
    if(solicitudEncontrada.length) return res.status(200).send({message: 'Ya existe la solicitud'})
  })

}

function eliminarSolicitud (req, res){
	let publicacionid = req.params.id

	Solicitud.findById(publicacionid, (err, publicacion) => {
		if(err) res.status(500).send({message: `Error al eliminar la publicación: ${err}`})

		publicacion.remove(err => {
			if(err) res.status(500).send({message: `Error al eliminar la publicación: ${err}`})
			res.status(200).send({message: 'La publicación ha sido eliminada'})
		})
	})
}

module.exports = {
  crearSolicitud,
  eliminarSolicitud
}
