
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()

//endpoint enviar todas las publicaciones
gtm.get('/publicacion', publicacionCtrl.getPublicaciones)
//endpoint eliminar publicacion
gtm.delete('/publicacion', publicacionCtrl.deletePublicacion)
//endpoint actualizar publicacion
gtm.put('/publicacion', publicacionCtrl.updatePublicacion)
//endpoint registro usuario
//gtm.post('/usuario', usuarioCtrl) //poner bien
//endpoint obtener usuarios
//gtm.get('/usuario', usuarioCtrl)
//para probar el middleware de comprobación
gtm.get('/private', auth.isAuth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})	

module.exports = gtm