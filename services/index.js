
const jwt = require('jwt-simple') //Librería utilizada para codificar y decodificar los tokens
const moment = require('moment') //Librería para simplficar el manejo de fechas
const config = require('../config')

function crearToken(usuario){
	const payload = {
		nom: usuario.usuario,
		sub: usuario._id,		//NEL
		iat: moment().unix(),					//fecha del momento en que se crea el token en formato unix
		exp: moment().add(14, 'days').unix //fecha de expiración del token
	}
	return jwt.encode(payload, config.SECRET_TOKEN) //Llama el token desde el módilo config
}

function decodeToken(token){		//uso de promesas de forma nativa, dentro del propio lenguaje, sin terceros
	const decoded = new Promise((resolve, reject) => {    	//decoded tendra una promesa, si se resuelve => token codificado
		try{											  	//si no, un mensaje diferente
			const payload = jwt.decode(token, config.SECRET_TOKEN) //Decodifica el token y lo guarda en payload

			if(payload.exp <= moment.unix()){ //Ver si el token ha expirado
				reject({
					status: 401,
					message: 'Token expirado'
				})
			}
			resolve(payload.sub)  //id del usuario
			next(); //Para que proceda
		} catch (err){
			reject({
				status: 500,
				message: 'Token invalidado'
			})
		}
	})
	return decoded
}


module.exports = {
	crearToken,
	decodeToken
}
