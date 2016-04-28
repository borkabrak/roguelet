"use strict";

(function() {

    /** Convenience functions **/
    
    // Shortcuts for element selection
    window.qs = function(selector) { return document.querySelector(selector); }

    window.qsa = function(selector) { 
        // Return an array instead of a NodeList, mainly for the native array functions
        return Array.prototype.slice.call(document.querySelectorAll(selector)); 
    }

    // Recalculate cell height to be proprotional to its width.
    // There really ought to be a better way to do this..
    window.adjustCellHeight = function() {
        qsa(".cell").forEach(function(cell) {
            var [magnitude, units] = /^([\d.]+)(.*)$/.exec(getComputedStyle(cell)['width']).splice(1,2);
            cell.style.height = ( magnitude / Config.cell.aspect_ratio + units );
        });
    };
    
    // Resize the cell height when the width changes.
    window.addEventListener('resize', adjustCellHeight);

    require([

        'config.js',
        'map.js',
        'cell.js',
        'player.js'

    ], function() {

        // create the map
        var map = new Map({ 
            size: '4x4',
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
        adjustCellHeight();
    });

})();
