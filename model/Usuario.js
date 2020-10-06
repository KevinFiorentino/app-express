var mongoose = require('mongoose');
const uuid = require("uuid");

// const Schema = mongoose.Schema;
 
var UsuarioSchema = mongoose.Schema({
    user_id: { type: String, default: uuid.v4() },
    nombre: { type: String },
    apellido: { type: String },
});

UsuarioSchema.statics.createInstance = function(nombre, apellido) {
    return new this({
        nombre: nombre,
        apellido: apellido
    });
}

UsuarioSchema.statics.getUsuarios = (cb) => {
    return this.find({}, cb)
}

UsuarioSchema.statics.add = function(newUser, cb) {
    this.create(newUser, cb);
}

UsuarioSchema.statics.findByUUID = function(user_id, cb) {
    return this.findOne({user_id: user_id}, cb);
}

UsuarioSchema.statics.removeByUUID = function(user_id, cb) {
    return this.deleteOne({user_id: user_id}, cb);
}


module.exports = mongoose.model("Usuario", UsuarioSchema);
