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

var Map = function(options) {
    var my = this;

    if ( options.size ) {
        [ my.width, my.height ] = options.size.split("x");
    }

    // Set properties from options, with defaults
    my.width = options.width      || my.width || 5;
    my.height = options.height    || my.height || 5;
    my.container = document.querySelector(options.container || ".map");

    // Loop through height and width, building contents (data) and container
    // (DOM) 
    
    my.contents = [];
    // for each row..
    for ( var i = 0; i < my.height; i++ ) {

        my.contents[i] = [];

        var row = document.createElement("div");
        row.classList.add("row");

        // for each cell within the current row..
        for ( var j = 0; j < my.width; j++ ) {
            var cell = new Cell();
            my.contents[i][j] = cell;
            row.appendChild(cell.container);
        }

        my.container.appendChild(row);
    };

}

Map.prototype.classname = "Map";

/**
 * at() - return the cell at the given x/y coordinates
 */
Map.prototype.at = function(x,y) {
    var my = this;
    return my.contents[x][y];
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
