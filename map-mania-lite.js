
var gMap;

function initMap() {
    // create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});
}

function initApplication() {
    console.log("Map Mania Lite - Starting");
}