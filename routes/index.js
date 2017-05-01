
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const gtm = express.Router()

//endpoint enviar todas las publicaciones
gtm.get('/publicacion', publicacionCtrl.getPublicaciones)
//endpoint eliminar publicacion
gtm.delete('/publicacion', publicacionCtrl.deletePublicacion)
//endpoint actualizar publicacion
gtm.put('/publicacion', publicacionCtrl.updatePublicacion)
//endpoint registro usuario
gtm.post('/usuario', usuarioCtrl.guardarUsuario)
//endpoint obtener usuarios
gtm.get('/usuario', usuarioCtrl.getUsuarios)

module.exports = gtm