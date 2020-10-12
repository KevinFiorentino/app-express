const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('../config/passport');


/* Login */
router.get('/login', function (req, res) {
    //res.sendFile('/home/kevin/KevinWorkspace/app-express/public/login.html');
    res.sendFile(process.cwd()+'/public/login.html');
});

/* API Login */
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, usuario, info) {
        if (err) return next(err)
        if (!usuario) res.sendFile(process.cwd()+'/public/login.html');
        req.logIn(usuario, function(err) {
            if (err) return next(err);
            res.sendFile(process.cwd()+'/public/index.html');
        });
    })(req, res, next);
})

/* API Logout */
router.get('/logout', function(req, res) {
    req.logOut();
    res.sendFile(process.cwd()+'/public/login.html');
})

/* Singup */
router.get('/singup', function (req, res, next) {
    res.sendFile(process.cwd()+'/public/singup.html');
});

/* Home page */
router.get('/', loggedIn, function (req, res, next) {
    res.sendFile(process.cwd()+'/public/index.html');
});


function loggedIn(req, res, next) {
    console.log("LOGGEDIN")
    if (req.user) {
        next();
    }
    else {
        console.log("Usuario no logeado")
        res.redirect("/login")
    }
}


module.exports = router;
