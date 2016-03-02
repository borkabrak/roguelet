(function() {
    "use strict";

    require(['map.js'], function() {
        var map = new Map({
            container: "div#map",
            height: 5,
            width: 5,
        });

        map.create();
        console.log("Map.create() done."); 

        window.map = map;

    });

})();
