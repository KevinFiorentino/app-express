const MongoDB = require('../model/database/configDataBase');
const Token = require("../model/Token");
const Usuario = require("../model/Usuario");


// Confirmación de email validando el Token
const get = (req, res) => {
    let token = req.params.token;

    console.log(token)
}


module.exports = {
    get
}
