
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()

/*gtm.post('/pruebaimagen', function(req, res){
	console.log(req.files.sampleFile.name)
  if (req.files.sampleFile == undefined){
		return res.status(400).send('No files were uploaded.')
	}
	else{
	  let sampleFile = req.files.sampleFile
		let nombreFile = req.files.sampleFile.name
		let pathProducto = './src/publicacion/'
	  // Use the mv() method to place the file somewhere on your server
	  sampleFile.mv(pathProducto + nombreFile, function(err) {
	    if (err)
	      return res.status(500).send(err)

	    res.send('File uploaded!')
	  })
	}
})*/

//endpoint generar publicacion
gtm.post('/publicacion', auth, publicacionCtrl.crearPublicacion)
//endpoint enviar todas las publicaciones
gtm.get('/publicacion', auth, publicacionCtrl.obtenerTodasPublicaciones)
//enpoint para ver todas las publicaciones del usuario en sesion
gtm.get('/misPublicaciones', auth, publicacionCtrl.obtenerMisPublicaciones)
//endpoint para las publicaciones hechas por el usuario
gtm.get('/publicacion/', auth, publicacionCtrl.getPublicacion)
//endpoint eliminar publicacion
gtm.delete('/publicacion/:publicacionid', auth, publicacionCtrl.eliminarPublicacion)
//endpoint actualizar publicacion


//endpoint para un usuario
gtm.post('/signUp', usuarioCtrl.registrarUsuario)
//endpoint para login
gtm.post('/signIn', usuarioCtrl.iniciarSesion)
//endpoint para modificar perfil
gtm.put('/perfil', usuarioCtrl.actualizarUsuario)

//para probar el middleware de comprobación
gtm.get('/private', auth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})
//Obtener el nombre del usuario
gtm.get('/homelog', usuarioCtrl.getNombre)

module.exports = gtm
