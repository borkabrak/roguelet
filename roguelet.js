"use strict";
(function() {

    // Convenience functions
    
    // Selection -> node
    Window.qs = function(selector) { return document.querySelector(selector); }
    Window.qsa = function(selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); }

    require(['map.js', 'cell.js', 'player.js'], function() {

        // create the map
        var map = new Map({
            container: ".map",
            height: 5,
            width: 5,
        });

        // create a player character
        var player = new Player({
            name: "PlayerGuy",
        });

        // Put the player on the map
        // map.at(1,2).put(player);

        // Drop some debug info
        console.log("map: %o\nplayer: %o", map, player);
        
        window.map = map;
        window.player = player;
    });

})();
