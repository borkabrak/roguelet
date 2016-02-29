"use strict";

function Map(container) {
    var my = this;

    // Normalize the container into an HTMLElement
    my.container = (container instanceof HTMLElement) ? container : document.querySelector(container);
    if ( !(my.container instanceof HTMLElement) ) {
        console.error("Invalid container: Could not find HTMLElement %o", container);
        return;
    }
    
    console.log("container good");
    
}

Map.prototype.create = function() {
   console.log("Map.create().."); 
}
