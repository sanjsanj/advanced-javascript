var Mapper = (function () {

    var init, 
        initializeMap, 
        getPosition, 
        positionSuccess, 
        positionError,
        gMap,
        button = document.getElementById("find-me"),
        mapWrapper = document.getElementById("map-wrapper"), 
        mapOptions = {
            center: new google.maps.LatLng(45, 5),
            zoom: 2
        };

    init = function () {
        // Set up event handlers
    };
       
    initializeMap = function () {
        // Create map instance
    };    

    getPosition = function (event) {
        // Retrieve user's location
        event.preventDefault();
    };    
    
    positionSuccess = function (position) {
        // Success callback for geolocation
    };
    
    positionError = function (err) {
        // Error callback for geolocation
    };

    return {
        init: init
    };

})();

Mapper.init();
