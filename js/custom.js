/*
* Add your custom js code here.
*/

var map;
var trinitatiskirche = new google.maps.LatLng(50.93356, 6.96069);

function initialize() {

  var stylez = [
    { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#b4b4b4" } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] },{ "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [ { "weight": 0 }, { "color": "#808080" }, { "visibility": "off" } ] },{ "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#636363" } ] },{ "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#d8e3dd" } ] },{ "featureType": "poi.attraction", "stylers": [ { "color": "#808080" }, { "visibility": "off" } ] },{ "featureType": "poi.sports_complex", "stylers": [ { "color": "#808080" }, { "visibility": "off" } ] }
  ];

  var mapOptions = {
    zoom: 16,
    center: trinitatiskirche,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Apps and the City']
    }
  };
  firstmap = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

    var point = trinitatiskirche;
    var marker = new google.maps.Marker ({
        position: point,
        title: 'Trinitatiskirche - Apps and the City',
        map: firstmap,
        icon: 'img/google_marker.png'
    });

  var styledMapOptions = {
      name: "Apps and the City"
  };

  var jayzMapType = new google.maps.StyledMapType(
      stylez, styledMapOptions);

  firstmap.mapTypes.set('Apps and the City', jayzMapType);
  firstmap.setMapTypeId('Apps and the City');
}
