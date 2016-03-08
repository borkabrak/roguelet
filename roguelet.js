(function() {
    "use strict";

    require(['world.js', 'player.js', 'cell.js'], function() {

        var world = new World({
            container: "div#map",
            height: 5,
            width: 5,
        });
        world.create();

        var player = new Player({
            name: "Mykul",
        });

        // hoist it to the global scope for debugging
        [ window.world, window.player ] = [ world, player ];

    });

})();
