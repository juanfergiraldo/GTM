//controlador de registros y autenticacion de usuarios
const mongoose = require ('mongoose')
const Usuario = require('../models/usuario')
const service = require	('../services')
const auth = require('../middlewares/auth')


function registrarUsuario(req, res){ //No se requiere la constraseña ya que en la base de datos se hashea para no exponerla
		const usuario = new Usuario({
		correo: req.body.correo,
		nombre: req.body.nombre,
		usuario: req.body.usuario,
		contrasena: req.body.contrasena
	})
	//console.log(req.body); //Mostrar mediante consola lo que se que está enviando por parámetro en el middleware
	usuario.save((err) => {
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
		return res.status(201).send({message: 'Se creó exitosamente'}) //Se crea el token en el módulo service
 	})
}

function iniciarSesion(req, res){
	Usuario.findOneByCorreo(req.body.correo, (err, usuario) => {
		if(err) return res.status(500).send({message: err})
		if(!usuario) return res.status(404).send({message: `No existe el usuario`})
		if(usuario.contrasena == req.body.contrasena){
				var token = service.crearToken(usuario)
				res.status(200).send({
					success: true,
					message: 'Logueado correctamente',
					token: token
			})
		}else{
			return res.status(422).send({message: `La password no corresponde`})
		}
	})
}

function actualizarUsuario(req, res){
	let actual = req.body
	//console.log(service.decodeToken(token)) //no se hace uso del decode acá porque ya esta en req.user
	let usuarioId = req.user
	Usuario.findByIdAndUpdate(usuarioId, actual, (err, usuarioActualizado) => {
		if(err) res.status(500).send({message: `Error al actualizar la publicación: ${err}`})
		res.status(200).send({usuarioActualizado})
	})
}

function obtenerUsuarios(req, res){
	Usuario.find({}, (err, usuarios) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!usuarios) return res.status(404).send('No existen usuarios')

		res.status(200).send(usuarios)
	})
}

module.exports = {
	registrarUsuario,
	iniciarSesion,
	actualizarUsuario,
	obtenerUsuarios
}
