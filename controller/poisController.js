const Pois = require("../model/Pois");

const pois_list = (req, res) => {
    res.status(200).json({
        pois: Pois.pois
    })
}

const pois_create = (req, res) => {
    let pois = new Pois(req.body.titulo, req.body.lat, req.body.long);
    Pois.add(pois);

    res.status(200).json({
        Pois: pois
    });
} 

const pois_delete = (req, res) => {
    
    Pois.remove(req.body.pois_id);

    res.status(200).json({
        message: "Pois borrado correctamente"
    });
} 

module.exports = {
    pois_list,
    pois_create,
    pois_delete
}
