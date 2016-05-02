"use strict";
var Player = function(options) {
    var my = this;
    my.classname = "Player";

    // Import options
    Object.getOwnPropertyNames(options).forEach(function(prop) {
        my[prop] = options[prop];
    });

    // Defaults
    my.name = my.name || "???";
    my.icon = my.icon || "person.svg";
    
}

Player.prototype.toHTML = function() {
    var element = document.createElement("img");
    element.classList.add("entity");
    element.src = location.pathname + this.icon;
    return element;
}

Player.prototype.toString = function() {
    console.log("toString")
    return this.name;
}


/* step() 
 *  Move the player one space in any direction
 */
Player.prototype.step = function(direction) {
    // direction is ultimately a number, 1-8, like so:
    /*
     *  6   7   8 
     *
     *  5  [P]  1 
     *
     *  4   3   2 
     */

    // If direction given as a word, translate to numerical direction
    if (typeof direction === "string") {
        direction = {

            "RIGHT":       1,
            "R":           1,

            "DOWN-RIGHT":  2,
            "DR":          2,

            "DOWN":        3,
            "D":           3,

            "DOWN-LEFT":   4,
            "DL":          4,

            "LEFT":        5,
            "L":           5,

            "UP-LEFT":     6,
            "UL":          6,

            "UP":          7,
            "U":           7,

            "UP-RIGHT":    8,
            "UR":          8,

        }[direction.toUpperCase()];
    }

    // Each direction corresponds to a particular [x,y] displacement from the
    // current location.  Remember:
    //
    //  * Positive Y is down
    //
    //  * Positive X is to the right
    //
    // (Yes, this is essentially an array, but this expression makes the relationship more clear)
    var displacement = {
        // [y, x]
        1: [0, 1],
        2: [1, 1],
        3: [1, 0],
        4: [1, -1],
        5: [0, -1],
        6: [-1, -1],
        7: [-1, 0],
        8: [-1, 1],
    }[direction];

    var location = map.locationOf(this);
    var [y,x] = [ location[0] + displacement[0], location[1] + displacement[1] ];

    if (map.at(y, x) ) {
        map.moveTo(player, [y, x])
    }
}
