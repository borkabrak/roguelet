"use strict";

/**
 * The World is an encapsulation of the entire state of the game
 */

var World = function(options) {
    var my = this;

    // Merge given options into this
    Object.getOwnPropertyNames(options).forEach(function(prop) {
        my[prop] = options[prop];
    });

    // If the given container is not an element, use it as a selector to get one
    if ( !(my.container instanceof HTMLElement) ) {
        my.container = document.querySelector(options.container); 
    }

}

World.prototype.create = function() {
    // Build the world's HTML
    var my = this;

    for (var h = 0; h < my.height; h++ ) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        for (var w = 0; w < my.width; w++ ) {
            var cell = document.createElement("div");
            cell.setAttribute("class", "cell");

            // Add cell to row
            row.appendChild(cell);
        }

        // Add row to world
        my.container.appendChild(row);
    }

}
