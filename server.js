
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
//npm para iniciar el server


mongoose.connect(config.db, (err, res) => {
	if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida.')
	app.listen(config.port, () => {
	console.log(`API Rest corriendo en http://localhost:${config.port}`);
	})
})


/*endpoint verificar login
app.post('gtm/login', (req, res) => {

})*/

/*//endpoint registro publicacion
app.post('/gtm/formpublicacion', (req, res) => {
	console.log('POST /gtm/datospublicacion')
	console.log(req.body)

	let publicacion = new Publicacion()
		publicacion.descripcion = req.body.descripcion
		publicacion.nombre_producto = req.body.nombre_producto
		publicacion.imagen = req.body.imagen
		publicacion.categoria = req.body.categoria
		publicacion.usuario_publica = req.body.usuario_publica
})*/






