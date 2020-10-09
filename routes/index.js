var express = require('express');
var router = express.Router();

/* Login */
router.get('/login', function (req, res, next) {
    res.render('login', {});
});

/* Singup */
router.get('/singup', function (req, res, next) {
    res.render('singup', {});
});

/* Home page */
router.get('/', function (req, res, next) {
    res.render('index', {});
});

module.exports = router;
