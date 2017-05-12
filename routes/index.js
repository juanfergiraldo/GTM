
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()


//endpoint generar publicacion
gtm.post('/publicacion', publicacionCtrl.createPublicacion)
//endpoint enviar todas las publicaciones  PARA VER COLECCIONES DE LA DB
gtm.get('/publicacion', publicacionCtrl.getPublicaciones)
//endpoint eliminar publicacion
gtm.delete('/publicacion', publicacionCtrl.deletePublicacion)
//endpoint actualizar publicacion
gtm.put('/publicacion', publicacionCtrl.updatePublicacion)


//enpoint para ver todos los usuarios PARA VER COLECCIONES DE LA DB
gtm.get('/usuarios', usuarioCtrl.getUsuarios)
//endpoint registro usuario
gtm.post('/signup', usuarioCtrl.registro)
//endpoint para login
gtm.post('/signin', usuarioCtrl.iniciarSesion)

//para probar el middleware de comprobación
gtm.get('/private', auth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = gtm
