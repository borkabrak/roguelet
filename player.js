"use strict";
var Player = function(options) {
    var my = this;
    // Import options
    Object.getOwnPropertyNames(options).forEach(function(prop) {
        my[prop] = options[prop];
    });

    // Defaults
    my.name = my.name || "???";
    my.icon = my.icon || "person.svg";
    
}

Player.prototype.toHTML = function() {
    console.log("toHTML")
    var element = document.createElement("img");
    element.classList.add("entity");
    element.src = location.pathname + this.icon;
    return element;
}

Player.prototype.toString = function() {
    console.log("toString")
    return this.name;
}
