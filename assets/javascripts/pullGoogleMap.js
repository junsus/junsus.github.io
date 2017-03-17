$(function () {

    function initMap() {
        var uluru = {lat: 59.4194687, lng: 24.8243323};

        var location = new google.maps.LatLng(uluru);

        var mapCanvas = document.getElementById('google-map');
        var mapOptions = {
            center: location,
            zoom: 15,
            panControl: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });


    }

    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.trigger(map, 'resize');
});