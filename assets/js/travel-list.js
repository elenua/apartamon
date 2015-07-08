$(document).ready(function() {

  $('.short-description').expander({
    slicePoint: 100,
    expandSpeed: 0
  });

});


function initialize() {

    var mapCenterLatlng = new google.maps.LatLng(52.3740300, 4.8896900);

    var mapOptions = {
            zoom: 10,
    center: mapCenterLatlng
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var markerLatlng = new google.maps.LatLng(52.4040300, 4.8596900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });

    var markerLatlng = new google.maps.LatLng(52.3740300, 4.8396900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });

    var markerLatlng = new google.maps.LatLng(52.3340300, 4.9096900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });			

    var markerLatlng = new google.maps.LatLng(52.3540300, 4.8896900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		

    var markerLatlng = new google.maps.LatLng(52.3740300, 4.8096900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		

    var markerLatlng = new google.maps.LatLng(52.3440300, 4.8496900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		

    var markerLatlng = new google.maps.LatLng(52.3040300, 4.8296900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		
    var markerLatlng = new google.maps.LatLng(52.3640300, 4.8696900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		

    var markerLatlng = new google.maps.LatLng(52.3640300, 4.896900);
    var marker = new google.maps.Marker({
    position: markerLatlng,
    map: map,
    title: 'Apartment title'
    });		 

}

google.maps.event.addDomListener(window, 'load', initialize);


