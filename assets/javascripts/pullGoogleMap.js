$(function () {

    function initMap() {

        var location = new google.maps.LatLng(59.383366, 24.934476);

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

    google.maps.event.addDomListener(
        window,
        'load',
        function () {
            //1000 milliseconds == 1 second,
            //play with this til find a happy minimum delay amount
            window.setTimeout(initialize, 1000);
        }
    );
});