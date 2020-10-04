const mongoose = require('mongoose');
const uuid = require("uuid");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UsuarioSchema = new Schema({
    user_id: String,
    nombre: String,
    apellido: String
});

UsuarioSchema.statics.getUsuarios = (cb) => {
    return this.find({}, cb)
}

UsuarioSchema.statics.createUsuario = (nombre, apellido) => {
    return new this({
        user_id: uuid.v4(),
        nombre: nombre,
        apellido, apellido
    });
}


module.exports = mongoose.model("Usuarios", UsuarioSchema);
