
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Usuario = require('./models/usuario')



const app = express();
const port = process.env.PORT || 3000
//npm para iniciar el server

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post('/gtm/usuario', (req, res) => {
	console.log('POST /gtm/usuario')
	console.log(req.body)

	let user = new Usuario()
		user._id = req.body.id
		user.nombre = req.body.nombre
		user.direccion = req.body.direccion
		user.telefono = req.body.telefono
		user.pais = req.body.pais
		user.genero = req.body.genero
		user.correo = req.body.correo
		user.usuario = req.body.usuario
		user.contrasena = req.body.contrasena

		user.save((err, userStored) => {
			if (err) res.status(500).send({message: `Error al guardar el usuario: ${err}`})
			res.status(200).send({user: userStored})
		})
})


mongoose.connect('mongodb://localhost:27017/gtmdb', (err, res) => {
	if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida.')
	app.listen(port, () => {
	console.log(`API Rest corriendo en http://localhost:${port}`);
	})
})