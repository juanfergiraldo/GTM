
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs') //Libreria para encriptar la contraseña
const crypto = require('crypto') //A partir de el email me crea un avatar


var usuarioSchema = new Schema({
	correo: {type: String, unique: true, lowercase: true},
	nombre: {type: String},
	avatar: {type: String}, //Se guarda la URL donde es guardada la imagen
	direccion: {type: String, default: ''},
	telefono: {type: String, default: ''},
	pais: {type: String, default: ''},
	genero: {type: String, enum: ['Masculino','Femenino','Indefinido']},
	usuario: {type: String, unique: true, lowercase: true},
	contrasena: {type: String}, //con select = false evitamos que la contraseña sea enviada al cliente
	fecha_registro: {type: Date, default: Date.now()},
	ultimo_login: Date
})

/*usuarioSchema.pre('save', function(next){ //Algoritmo para codificar la contraseña antes de ser guardada
	let user = this
	if (!user.isModified('contrasena')) return next()

	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err)
		bcrypt.hash(user.contrasena, salt, null, (err, hash) => { //Método de creació de hash
			if (err) return next(err)
			user.contrasena = hash
			next()
		})
	})
})*/

usuarioSchema.statics.findOneByCorreo = function(correo, callback){
    this.findOne({correo: new RegExp(correo, 'i')}, callback);
};

usuarioSchema.methods.gravatar = function(){ //A partir de un email nos devuelve un avatar por defecto, si no está registrado
	if(!this.correo)
		return `https://gravatar.com/avatar/?s=200&d=retro`
	const md5 = crypto.createHash('md5').update(this.correo).digest('hex') //En caso de que ya esté registrado en gravatar
	return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

/*usuarioSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};*/

module.exports = mongoose.model('Usuario', usuarioSchema)
