
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')


function crearToken(usuario){
	const payload = {
		sub: usuario._id,
		iat: moment().unix(),					//fecha del momento en formato unix
		exp: moment().add(14, 'days').unix,
	}

	return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token){		//uso de promesas de forma nativa, dentro del propio lenguaje, sin terceros
	const decoded = new Promise((resolve, reject) => {    	//decoded tendra una promesa, si se resuelve => token codificado
		try{											  	//sino, un mensaje diferente
			const payload = jwt.decode(token, config.SECRET_TOKEN)

			if(payload.exp <= moment.unix()){
				reject({
					status: 401,
					message: 'Token expirado'
				})
			}
			resolve(payload.sub)  //id del usuario

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