"use strict";
exports.__esModule = true;
var Mediaplayer = /** @class */ (function () {
    function Mediaplayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    Mediaplayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    Mediaplayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    Mediaplayer.prototype.play = function () {
        this.media.play();
    };
    Mediaplayer.prototype.pause = function () {
        this.media.pause();
    };
    Mediaplayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    };
    Mediaplayer.prototype.mute = function () {
        this.media.muted = true;
    };
    Mediaplayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    return Mediaplayer;
}());
exports["default"] = Mediaplayer;
