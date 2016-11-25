var Mapper = (function () {

    var init,
        initializeMap,
        getPosition,
        positionSuccess,
        positionError,
        gMap,
        callbackMade = false,
        button = document.getElementById("find-me"),
        mapWrapper = document.getElementById("map-wrapper"),
        mapOptions = {
            center: new google.maps.LatLng(45, 5),
            zoom: 2
        };

    init = function () {
        window.onload = function () {
            initializeMap();
        };

        button.addEventListener("click", getPosition);
    };

    initializeMap = function () {
        gMap = new google.maps.Map(mapWrapper, mapOptions);
    };

    getPosition = function (event) {
        event.preventDefault();
        mapWrapper.classList.add("loading");
        navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

        setTimeout(function () {
            if (callbackMade) {
            } else {
                mapWrapper.classList.remove("loading");
            };
        }, 5000);
    };

    positionSuccess = function (position) {
        var userLat, userLng, newLocation, marker;

        callbackMade = true;
        // (1) Get user's coords from "position" object
        userLat = position.coords.latitude;
        userLng = position.coords.longitude;
        // Create LatLng object for marker
        newLocation = new google.maps.LatLng(userLat, userLng);
        // (2) Create marker and add to map
        marker = new google.maps.Marker({
            position: newLocation,
            map: gMap
        });
        // (3) Adjust the zoom
        gMap.setZoom(16);
        // (4) Center the map on user's location
        gMap.setCenter(newLocation);
        mapWrapper.classList.remove("loading");
    };

    positionError = function (err) {
        callbackMade = true;
        alert(err.message);
    };

    return {
        init: init
    };
})();

Mapper.init();
