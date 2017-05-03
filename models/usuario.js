const mongoose = require('mongoose')  
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs') //libreria para encriptar
const crypto = require('crypto')


var usuario = new Schema({
	correo: {type: String, unique: true, lowercase: true},
	nombre: {type: String},
	avatar: {type: String},
	direccion: {type: String, default: ''},
	telefono: {type: String, default: ''},
	pais: {type: String, default: ''},
	genero: {type: String, enum: ['Masculino','Femenino','Indefinido']},
	usuario: {type: String},
	contrasena: {type: String, select: false},
	//imagen: {type: String},  //data: Buffer, contentType: String
	fecha_registro: {type: Date, default: Date.now()}
});

usuario.pre('save', (next)=> {
	let usuario = this
	if(!usuario.isModified('contrasena'))
		return next()
	bcrypt.genSalt(10, (err, salt) => {
		if (err)
			return next(err)
		bcrypt.hash(usuario.contrasena, salt, null, (err, hash) => {
			if (err)
				return next(err)		
			usuario.contrasena = hash
			next()

		})

		
	})
})

usuario.methods.gravatar = function(){
	if(!this.correo)
		return `https://gravatar.com/avatar/?s=200&d=retro`
	const md5 = crypto.createHash('md5').update(this.correo).digest('hex')
	return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('Usuario', usuario)
