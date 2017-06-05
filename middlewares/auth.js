const services = require('../services')

function isAuth (req, res, next){
	if(!req.headers.authorization){
		console.log(req.headers.authorization)
		return res.status(403).send({ message: 'Asegúrate de que tienes permiso para realizar esta acción'})
	}

//split para separar el beater y el tken que componen la cabecera de autorizacion
	const token = req.headers.Authorization.split(" ")[1] //Crea un array por cada espacio que haya. Y se obtiene el token [1]
    services.decodeToken(token) //Va a la promesa declarada en services
    	.then(response => {
    		req.user = response
    		next()
    	})
    	.catch(response => {
    		res.status(response.status)
    	})
}

module.exports = isAuth
