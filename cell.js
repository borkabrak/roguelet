/**
 * A cell is a unit of space in the world.
 *
 *  - a cell has no knowledge of its relationship to the world.  It only knows
 *  what it contains, but even treats them as black boxes.  It can do things to
 *  them like burn or levitate, but it doesn't see internals, and can't call
 *  object-specific methods on its contents.
 */

var Cell = function(content) {
    var my = this;
    my.content = [];

    my.place(content);
}

Cell.prototype.place = function(object) {
    var my = this;
    my.content.push(object);
}

Cell.prototype.show = function() {
}
