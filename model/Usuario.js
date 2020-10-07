const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const uuid = require("uuid");
const bcrypt = require("bcrypt")
const Pois = require("./Pois.js")


const validateEmail = function(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email)
}

const UsuarioSchema = new mongoose.Schema({
    user_id: { 
        type: String, 
        default: uuid.v4() 
    },
    nombre: { 
        type: String,
        trim: true,
        require: [ true, "El nombre es obligatorio." ]
    },
    apellido: { 
        type: String,
        trim: true,
        require: [ true, "El apellido es obligatorio." ]
    },
    email: {
        type: String,
        trim: true,
        require: [ true, "El email es obligatorio." ],
        lowercase: true,
        unique: true,
        validate: [ validateEmail, "Por favor, ingrese un correo electrónico válido" ],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
    },
    password: {
        type: String,
        required: [ true, "El password es obligatorio." ]
    },
    passwordResetToken: {
        type: String
    },
    passwordResetTokenExpires: {
        type: String,
    },
    verificado: {
        type: Boolean,
        default: false
    },
    _poisIds: { 
        type: [ mongoose.Schema.Types.ObjectId ], 
        ref: 'Pois',
        default: [] 
    }
});

UsuarioSchema.statics.createInstance = function(nombre, apellido, email, password) {
    return new this({
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    });
}

UsuarioSchema.statics.getUsuarios = function(cb) {
    return this.find({}, cb);
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


const saltRounds = 12;

UsuarioSchema.pre("save", function(next) {
    if(this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, saltRounds);
        next();
    }
})

UsuarioSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

UsuarioSchema.plugin(uniqueValidator, { message: "El {PATH} ya existe con otro usuario." })


module.exports = mongoose.model("Usuario", UsuarioSchema);
