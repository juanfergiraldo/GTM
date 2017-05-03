//controlador de registros y autenticacion de usuarios

const mongoose = require('mongoose')
const Usuario = require('../models/usuario')
const service = require	('../services')

function registro(req, res){
	const usuario = new usuario({
		correo: req.body.correo,
		nombre: req.body.nombre,
		usuario: req.body.usuario,
		contrasena: req.body.contrasena
		//imagen: req.body.imagen	
	})

	usuario.save((err) => {
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
		return res.status(200).send({token: service.crearToken(usuario)})
 	})
}

function iniciarSesion(req, res){
	
}

module.exports = {
	registro, 
	iniciarSesion
}

