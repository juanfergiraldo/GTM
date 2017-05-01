
const Usuario = require('../models/usuario')


function guardarUsuario (req, res){
	console.log('POST /gtm/datosusuario')
	console.log(req.body)

	let user = new Usuario()		
		user._correo = req.body.correo
		user.nombre = req.body.nombre
		user.direccion = req.body.direccion
		user.telefono = req.body.telefono
		user.pais = req.body.pais
		user.genero = req.body.genero
		user.usuario = req.body.usuario
		user.contrasena = req.body.contrasena

		user.save((err, userStored) => {
			if (err) res.status(500).send({message: `Error al guardar el usuario: ${err}`})
			res.status(200).send({user: userStored})
		})
}

function getUsuarios (req, res){
	Usuario.find({}, (err, usuarios) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!usuarios) return res.status(404).send('No existen usuarios')

		res.status(200).send(usuarios)
	})
}


module.exports = {guardarUsuario, getUsuarios}