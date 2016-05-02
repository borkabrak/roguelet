// Constants and such, for easy configuration
//  (Hrm.. this is probably overkill at this point..)
//
"use strict";
var Config = {

    // HTML to use for various content
    HTML: {
        // An empty cell
        empty: '&nbsp;',
    },

    // Cell-specific config
    cell: {
        // Cell aspect ratio (width over height)
        aspect_ratio: 1,
    },

    // Key commands
    keymap: {

        // Movement - eight directions, modelled on nethack
        'l': () => player.step("right"),
        'n': () => player.step("down-right"),
        'j': () => player.step("down"),
        'b': () => player.step("down-left"),
        'h': () => player.step("left"),
        'y': () => player.step("up-left"),
        'k': () => player.step("up"),
        'u': () => player.step("up-right"),

        // useful for debugging
        'c': () => console.clear(),
    },
}
