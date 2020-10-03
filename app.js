var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var routesPois = require('./routes/routesPois');

var app = express();

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

app.use('/', indexRouter);
app.use('/pois', routesPois);


app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor escuchando en el puerto 8080")
})
