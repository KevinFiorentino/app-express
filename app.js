const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const sassMiddleware = require('node-sass-middleware');

const indexRouter = require('./routes/index');
const routesPois = require('./routes/routesPois');
const routesUsuarios = require('./routes/routesUsuarios');
const routesToken = require('./routes/routesToken');

const app = express();

// Configuración de Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.options('*', cors());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));


// Rutas de la API
app.use('/', indexRouter);
app.use('/pois', routesPois);
app.use('/users', routesUsuarios);
app.use('/token', routesToken);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})


module.exports = app;
