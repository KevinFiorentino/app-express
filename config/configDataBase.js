const mongoose = require('mongoose');

// mongodb+srv://kevin:kevinmongodb@curso-nodejs.qsx1k.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb://localhost/usuarios

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, err => { 
    if(err) throw new Error(); 
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error en la conexión a la "));

module.exports = db;
