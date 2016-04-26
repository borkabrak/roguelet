/**
 * A cell is a unit of space in the world.
 *
 *  - a cell has no knowledge of its relationship to the world. (It can't see
 *  what contains it).  It only knows what it contains.
 *
 */

var Cell = function(options) {
    var my = this;
    options = options || {};
    
    /**
     * PROPERTIES
     *
     * contents - array of all objects that currently exist within the cell
     *
     * container - DOM element representation of the cell
     */
    
    my.contents = [];
    my.container = document.createElement("div");
    my.container.classList.add("cell");
    my.container.innerHTML = " . ";
}

Cell.prototype.classname = "Cell";

/**
 * add(object) - include <object> in the cell contents
*/
Cell.prototype.put = function(object) {
    var my = this;
    my.contents.push(object);
    my.container.innerHTML = object.toString();
}

/** 
 *  push() - alias for put()
 */
Cell.prototype.push = Cell.prototype.put;

