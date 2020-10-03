// import MapaInteractivo from '@usig-gcba/mapa-interactivo';

const mapaInteractivo = new MapaInteractivo("mapa-id", { 
    center: [-34.62, -58.44],
    zoomControl: true,
    maxZoom: 18,
    minZoom: 10,
});

mapaInteractivo.map.setView([-34.62, -58.44], 13);

var icon = L.icon({
    iconUrl: '../images/marker-icon-violeta.png',
});

$.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:8080/pois",
    success: function(response_api) {

        response_api.pois.forEach(value => {
            L.marker([value.lat, value.long], {icon: icon})
            .addTo(mapaInteractivo.map)
            .bindPopup(`
                <div class="fichaMarkerMapa">
                    <h5>${value.nombre}</h5>
                    <p>Buenos Aires</p>
                </div>`
            );
        });

    }
})

function agregar_punto() {
    let nombre_pois = document.getElementById("nombre_pois").value;
    let direccion_pois = document.getElementById("direccion_pois").value;

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=" + direccion_pois + "&maxOptions=1&geocodificar=TRUE",
        success: function(response_usig) {

            let data = {
                nombre: nombre_pois,
                lat: response_usig.direccionesNormalizadas[0].coordenadas.y,
                long: response_usig.direccionesNormalizadas[0].coordenadas.x
            };

            $.ajax({
                type: "POST",
                dataType: "json",
                data: data,
                url: "http://localhost:8080/pois/agregar",
                success: function(response_api) {

                    L.marker([response_api.Pois.lat, response_api.Pois.long], {icon: icon})
                    .addTo(mapaInteractivo.map)
                    .bindPopup(`
                        <div class="fichaMarkerMapa">
                            <h5>${response_api.Pois.nombre}</h5>
                            <p>Buenos Aires</p>
                        </div>`
                    );

                }
            })
        }
    });

}
