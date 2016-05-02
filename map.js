"use strict";

/**
 * Map
 *
 *  Tracks and outputs contents of the game world.
 *
 *  Recognized options:
 *
 *    - size (<width>x<height>, e.g. '4x3')
 *
 *        OR
 *
 *      width
 *          AND
 *      height
 *
 *    - container
 */

/* Map constructor */
var Map = function(options) {
    var my = this;
    my.classname = "Map";

    if ( options.size ) {
        [ my.width, my.height ] = options.size.split("x");
    }

    // Set properties from options, with defaults
    my.width = options.width      || my.width || 5;
    my.height = options.height    || my.height || 5;
    my.container = document.querySelector(options.container || ".map");

    // Build contents (internal object) and corresponding DOM elements.
    my.contents = [];
    // Rows
    for ( var i = 0; i < my.height; i++ ) {
        my.contents[i] = [];
        var row = document.createElement("div");
        row.classList.add("row");

        // Cells
        for ( var j = 0; j < my.width; j++ ) {
            var cell = new Cell();
            my.contents[i][j] = cell;
            // attach cell to row
            row.appendChild(cell.container);
        }

        // Attach row to DOM
        my.container.appendChild(row);
    };

}

/**
 * at() - return the cell at the given x/y coordinates
 */
Map.prototype.at = function(x,y) {

    // Allow argument form: at([x, y])
    if (x.constructor === Array) { y = x[1]; x = x[0]; }

    // The ternary prevents an error if x is undefined
    return this.contents[x] ?  this.contents[x][y] : undefined;
}

/**
 * show()
 *  Sync the DOM to the current contents
 * 
 */
Map.prototype.show = function() {
    var my = this;
    
    // Create the map Node
    my.contents.forEach(function(rowData) {
        var rowNode = document.createElement("div");
        rowNode.classList.add("row");
        console.log("row:%o", rowData);

        rowData.forEach(function(cellData) {
            console.log("cellData:%o", cellData);
            rowNode.appendChild(cellData.container);
        });
        
        my.container.appendChild(rowNode);

    });
}

/*
 * locationOf()
 *  Return the [x,y] coordinates of the object (or undefined if object does not
 *  exist on the map)
 */
Map.prototype.locationOf = function(object) {
    for( var y = 0; y < this.height; y++ ) {
        for( var x = 0; x < this.height; x++ ) {
            if (this.contents[y][x].contents.indexOf(object) > -1) return [y, x];
        }
    }
}

Map.prototype.moveTo = function(object, destination) {
    this.at(destination[0], destination[1]).put(this.remove(object))
}

/* 
 * remove()
 *
 *  Remove the given object from the map 
 *  Return the result of calling the cell's own remove()
 * 
 */
Map.prototype.remove = function(object) {
    console.log("this:%o", this);
    return this.at(this.locationOf(object)).remove(object);
}
