
var gMap;

function initMap() {
    // create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Add a marker for Canoe Bay, WI
    var marker = new google.maps.Marker({position:{lat:45.33,lng:-91.49},
    map:gMap});

    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615},
    map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // check if Canoe Bay is currently displayed map
    if (gMap.getBounds().contains({lat:45.33,lng:-91.49})) {
        inBounds = true;
    }

    console.log('inBounds:'+inBounds+' zoomLevel:'+zoomLevel);
}

function initApplication() {
    console.log("Map Mania Lite - Starting");
}