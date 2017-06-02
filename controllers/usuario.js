//controlador de registros y autenticacion de usuarios
const mongoose = require ('mongoose')
const Usuario = require('../models/usuario')
const service = require	('../services')


function registro(req, res){ //No se requiere la constraseña ya que en la base de datos se hashea para no exponerla
	const usuario = new Usuario({
		correo: req.body.correo,
		nombre: req.body.nombre,
		usuario: req.body.usuario,
		contrasena: req.body.contrasena
	})
	console.log(req.body); //Mostrar mediante consola lo que se que está enviando por parámetro en el middleware
	usuario.save((err) => {
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
		return res.status(201).send({token: service.crearToken(usuario)}) //Se crea el token en el módulo service
 	})
}

/*function iniciarSesion(req, res){
	/*Usuario.find({usuario: req.body.usuario}, (err, u) => { //Vía AJAX
		if(err) return res.status(500).send({message: err})
		if(!usuario) return res.status(404).send({message: `No existe el usuario`})

		console.log(req.body);
=======
function iniciarSesion(req, res){
	Usuario.find({ email: req.body.email}, (err, usuario) => {		//probar con otras passwords
		if(err) return res.status(500).send({message: err})
		if(!usuario) return res.status(404).send({message: `No existe el usuario`})

		var sesion = usuario			//usuario en sesion
>>>>>>> b19598e06c21e54b9344647ec3c28c6a8b940398
		req.usuario = usuario
		res.status(200).send({
			message: 'Logueado correctamente',
			token: service.crearToken(usuario)
	})

	Usuario.find({correo: req.body.correo}, (err, usuario) => {
		if(err) return res.status(500).send({message: err})
		if(!usuario) return res.status(404).send({message: `No existe el usuario`})

		req.usuario = usuario
		res.status(200).send({
			message: 'Logueado correctamente',
			token: service.crearToken(usuario),
		})
	})
}*/

function iniciarSesion($auth, $location) {
    var vm = this;
    this.login = function(){
        $auth.login({
            correo: vm.correo,
            contrasena: vm.contrasena
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path("homeini")
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
        });
    }
}

/*function updateUsuario (req, res){
	let usuarioid = req.body.publicacionid
	let update = req.body

	Publicacion.findByIdAndUpdate(publicacionid, update, (err, publicacionUpdated) => {
		if(err) res.status(500).send({message: `Error al actualizar la publicación: ${err}`})
		res.status(200).send({publicacion: publicacionUpdated})
	})
}*/

function getUsuario(req, res){
	let usuarioNick = req.params.usuarioNick

	Usuario.findByUsuario(usuarioNick, (err, usuario) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!usuarios) return res.status(404).send('No existen usuarios')

		res.status(200).send({usuario})
	})
}

module.exports = {
	registro,
	iniciarSesion,
	getUsuario
}
