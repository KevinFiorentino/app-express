const express = require('express');
const router = express.Router();
const path = require('path');

/* Login */
router.get('/login', function (req, res) {
    //res.sendFile('/home/kevin/KevinWorkspace/app-express/public/login.html');
    res.sendFile(process.cwd()+'/public/login.html');
});

/* Singup */
router.get('/singup', function (req, res, next) {
    res.sendFile(process.cwd()+'/public/singup.html');
});

/* Home page */
router.get('/', function (req, res, next) {
    res.sendFile(process.cwd()+'/public/index.html');
});

module.exports = router;
