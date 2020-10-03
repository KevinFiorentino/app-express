var Pois = require("../model/Pois");

exports.pois_list = function(req, res) {
    res.status(200).json({
        pois: Pois.pois
    })
}

exports.pois_create = function(req, res) {
    let pois = new Pois(req.body.nombre, req.body.lat, req.body.long);
    Pois.add(pois);

    res.status(200).json({
        Pois: pois
    });
} 
