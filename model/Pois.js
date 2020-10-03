const uuid = require("uuid");

var Pois = function (nombre, lat, long) {
    this.pois_id = uuid.v4();
    this.nombre = nombre;
    this.lat = lat;
    this.long = long;
}

Pois.pois = [];
Pois.add = function(newPois) {
    Pois.pois.push(newPois);
}

Pois.remove = function(pois_id) {
    Pois.pois.forEach( (v, i) => {
        if (v.pois_id == pois_id) {
            Pois.pois.splice(i, 1);
            return true;
        }
    })
}

let pois_1 = new Pois("Parque Lezama", -34.629506, -58.370583);
let pois_2 = new Pois("El Obelisco", -34.603697, -58.381629);

Pois.add(pois_1);
Pois.add(pois_2);

module.exports = Pois;
