var Pois = function (nombre, lat, long) {
    this.nombre = nombre;
    this.lat = lat;
    this.long = long;
}

Pois.pois = [];
Pois.add = function(newPois) {
    Pois.pois.push(newPois)
}

let pois_1 = new Pois("Parque Lezama", -34.629506, -58.370583);
let pois_2 = new Pois("El Obelisco", -34.603697, -58.381629);

Pois.add(pois_1);
Pois.add(pois_2);

module.exports = Pois;
