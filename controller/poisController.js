const Pois = require("../model/Pois");

const get = (req, res) => {
    res.status(200).json({
        pois: Pois.pois
    })
}

const post = (req, res) => {
    let pois = new Pois(req.body.titulo, req.body.lat, req.body.long);
    Pois.add(pois);

    res.status(200).json({
        Pois: pois
    });
} 

const del = (req, res) => {
    
    Pois.remove(req.body.pois_id);

    res.status(200).json({
        message: "Pois borrado correctamente"
    });
} 

module.exports = {
    get,
    post,
    del
}
