
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()


//endpoint generar publicacion
gtm.post('/publicacion', publicacionCtrl.createPublicacion)
//endpoint enviar todas las publicaciones  PARA VER COLECCIONES DE LA DB
gtm.get('/publicacion', publicacionCtrl.getPublicaciones)
//endpoint para las publicaciones hechas por el usuario
gtm.get('/publicacion/', publicacionCtrl.getPublicacion)
//endpoint eliminar publicacion
gtm.delete('/publicacion', publicacionCtrl.deletePublicacion)
//endpoint actualizar publicacion
gtm.put('/publicacion', publicacionCtrl.updatePublicacion)


//enpoint para ver todos los usuarios PARA VER COLECCIONES DE LA DB
gtm.get('/usuarios', usuarioCtrl.getUsuarios)
//endpoint para un usuario
gtm.get('/perfil/:usuarioNick', usuarioCtrl.getUsuario)   //falta implementarlo
//endpoint registro usuario
gtm.post('/signup', usuarioCtrl.registro)
//endpoint para login
gtm.post('/signin', usuarioCtrl.iniciarSesion)
//endpoint para modificar perfil
//gtm.put('/perfil', usuarioCtrl.updateUsuario) //falta implementarlo

//para probar el middleware de comprobación
gtm.get('/private', auth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = gtm
