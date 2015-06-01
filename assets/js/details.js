var map;
function initialize() {
        var myLatlng = new google.maps.LatLng(52.3640300, 4.8696900);
        var mapOptions = {
            zoom: 10,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Penthouse room with magnificent view.'
        });
}

google.maps.event.addDomListener(window, 'load', initialize);


