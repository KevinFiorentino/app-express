const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const sassMiddleware = require('node-sass-middleware');
const passport = require('./config/passport');
const session = require('express-session');

const indexRouter = require('./routes/index');
const routesPois = require('./routes/routesPois');
const routesUsuarios = require('./routes/routesUsuarios');
const routesToken = require('./routes/routesToken');

const app = express();


// Configuración Passport-Express
const storeSession = new session.MemoryStore;
app.use(session({
    cookie: { maxAge: 86000 }, 
    store: storeSession,
    saveUninitialized: true,
    resave: 'true',
    secret: 'kevin_secret'
}));

// Configuración de Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize())
app.use(passport.session())
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
