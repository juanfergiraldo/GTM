//controlador de registros y autenticacion de usuarios
const mongoose = require ('mongoose')
const Usuario = require('../models/usuario')
const service = require	('../services')
const bcrypt = require('bcrypt-nodejs')

function registrarUsuario(req, res){
		const usuario = new Usuario({
		correo: req.body.correo,
		nombre: req.body.nombre,
		usuario: req.body.usuario,
		contrasena: req.body.contrasena
	})
	//console.log(req.body); //Mostrar mediante consola lo que se que está enviando por parámetro en el middleware
	usuario.save((err) => {
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
		return res.status(201).send({message: 'Se creó exitosamente'})
 	})
}

function iniciarSesion(req, res){
	Usuario.findOneByCorreo(req.body.correo, (err, usuario) => {
		if(err) return res.status(500).send({message: err})
		if(!usuario) return res.status(404).send({message: `No existe el usuario`})
		bcrypt.compare(req.body.contrasena, usuario.contrasena, (err, result) => {
				if(result)	{
					var token = service.crearToken(usuario)
					res.status(200).send({
						success: true,
						message: 'Logueado correctamente',
						token: token,
						nom: usuario.usuario
				})
			}
			else { return res.status(422).send({message: `La password no corresponde`}) }
		})
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


module.exports = {
	registrarUsuario,
	iniciarSesion,
	actualizarUsuario
}
