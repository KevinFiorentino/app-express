const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, err => { if(err) throw new Error(); });

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error en la conexión a la "));

