(function() {
    "use strict";

    require(['world.js'], function() {
        var world = new World({
            container: "div#world",
            height: 5,
            width: 5,
        });

        world.create();

        // hoist it to the global scope for debugging
        window.world = world;

    });

})();
