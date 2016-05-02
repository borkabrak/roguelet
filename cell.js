/**
 * A cell is a unit of space in the world.
 *
 *  - a cell has no knowledge of its relationship to the world. (It can't see
 *  what contains it).  It only knows what it contains.
 *
 */

var Cell = function(options) {

    this.classname = "Cell";

    options = options || {};

    /**
     * PROPERTIES
     *
     * contents - array of all objects that currently exist within the cell
     *
     * container - DOM element representation of the cell
     */

    this.contents = [];
    this.container = document.createElement("div");
    this.container.classList.add("cell");
    this.container.innerHTML = Config.HTML.empty;
}

/**
 * add(object) - include <object> in the cell contents
*/
Cell.prototype.put = function(object) {

    // add to contents array
    this.contents.push(object);

    this.show();

}

/**
 *  push() - alias for put()
 */
Cell.prototype.push = Cell.prototype.put;

Cell.prototype.toString = function() {
    return this.contents.toString()
}

Cell.prototype.remove = function(object) {
    if (this.contents.indexOf(object) > -1) {

        // Remove from contents array
        this.contents = this.contents.filter(function(obj) { obj !== object });
        // Remove from DOM
        this.show();

        return object;
    }
    return undefined;
}

/* show()
 *  Update container with current state of contents
 */
Cell.prototype.show = function() {
    // Empty first
    this.container.innerHTML = Config.HTML.empty;

    // Add one element to DOM
    //   For now, just the last one in the contents array
    if (this.contents.length < 1)  { return };

    var object = this.contents[this.contents.length - 1];

    switch (true) {

        case( typeof object.toHTML === "function" ):
            this.container.appendChild(object.toHTML());
            break;

        default:
            this.container.innerHTML = object.toString();

    }
}
