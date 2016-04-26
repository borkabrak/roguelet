"use strict";

var to_a = function(list) {
    return Array.prototype.slice.call(list);
}

var qs = function(selector) {
    return document.querySelector(selector);
};

var qsa = function(selector) {
    return to_a(document.querySelectorAll(selector));
};
