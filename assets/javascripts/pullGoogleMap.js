$(function () {

    function initMap() {

        var location = new google.maps.LatLng(59.4194687,24.8243323,15);

        var mapCanvas = document.getElementById('google-map');
        var mapOptions = {
            center: location,
            zoom: 15,
            panControl: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.trigger(map, 'resize');
});