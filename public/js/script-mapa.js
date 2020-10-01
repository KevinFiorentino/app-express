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

L.marker([-34.629506, -58.370583], {icon: icon})
.addTo(mapaInteractivo.map)
.bindPopup(`
    <div class="fichaMarkerMapa">
        <h4>Parque Lezama</h4>
        <p>Buenos Aires</p>
    </div>`
);
