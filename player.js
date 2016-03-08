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
