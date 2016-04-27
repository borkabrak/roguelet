"use strict";
(function() {

    // Convenience functions
    
    // Shortcuts for element selection
    window.qs = function(selector) { return document.querySelector(selector); }
    window.qsa = function(selector) { 
        // Return as an array instead of a NodeList
        return Array.prototype.slice.call(document.querySelectorAll(selector)); 
    }

    require(['map.js', 'cell.js', 'player.js'], function() {

        // create the map
        var map = new Map({ });

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
