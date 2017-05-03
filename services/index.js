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
module.exports = crearToken