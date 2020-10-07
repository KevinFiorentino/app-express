const MongoDB = require('../model/database/configDataBase');
const Usuario = require("../model/Usuario");


const get = (req, res) => {
    let user_id = req.param.user_id;

    if (user_id) {
        Usuario.findByUUID(user_id, function(err, user) {
            if (err) res.send(err);
            res.status(200).json({
                Usuario: user
            });
        });
    } else {
        Usuario.getPois(function(err, user) {
            if (err) res.send(err);
            res.status(200).json({
                Usuario: user
            });
        });
    }
}

const post = (req, res) => {
    var usuario = new Usuario({
        nombre: req.body.nombre, 
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    });
    Usuario.add(usuario, function(err, user) {
        if (err) res.send(err);
        res.status(201).json({
            Usuario: user
        });
    })
}

const del = (req, res) => {
    let user_id = req.body.user_id;
    Usuario.removeByUUID(user_id, function(err, del) {
        if (err) res.send(err);
        res.status(200).send(del)
    })
}


module.exports = {
    get,
    post,
    del
}
