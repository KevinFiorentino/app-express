const MongoDB = require('../model/database/configDataBase');
const Token = require("../model/Token");
const Usuario = require("../model/Usuario");


// Confirmación de email validando el Token
const get = (req, res) => {
    let token = req.params.token;

    Token.findOne({ token: token }, (errToken, token) => {
        if (errToken) return res.status(500).json({ error: errToken });
        if (!token) return res.status(400);
        Usuario.findById(token._userId, (errUser, usuario) => {
            if (errUser) return res.status(500).json({ error: errUser });
            if (usuario.verificado) return res.redirect("/index");
            usuario.verificado = true;
            usuario.save( err => {
                if (err) return res.status(500).json({ error: err });
                //res.redirect("/index")
                console.log("CALLBACK")
                res.status(200).json({ msg: "OK"});
            })
        })
    })
}


module.exports = {
    get
}
