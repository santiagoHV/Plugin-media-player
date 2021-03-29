"use strict";
exports.__esModule = true;
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        console.log("auto play");
        player.play();
    };
    return AutoPlay;
}());
exports["default"] = AutoPlay;
