
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()

gtm.post('/pruebaimagen', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.')

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err)

    res.send('File uploaded!')
  })
})

//enpoint prueba imagen
/*gtm.post('/upload',  function(req, res) {
	const imagen = new Imagen({
		imagen: req.files
	})
	imagen.save((err, imagen) => {
		if (err) res.status(500).send({message: `Error al generar la imagen: ${err}`})
		res.status(201).send({imagen})
 	})
})*/
//endpoint generar publicacion
gtm.post('/pruebaimagen', auth, publicacionCtrl.crearPublicacion)
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
gtm.put('/perfil', auth, usuarioCtrl.actualizarUsuario)

//para probar el middleware de comprobación
gtm.get('/private', auth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = gtm
