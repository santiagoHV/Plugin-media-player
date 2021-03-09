function Mediaplayer(config) {
    this.media = config.el
    this.isPlaying = false
    this.plugins = config.plugins || []

    this._initPlugins()
}

Mediaplayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted
        },

        set muted(value) {
            if (value) {
                this.media.muted = true
            } else {
                this.media.muted = false
            }
        }
    }

    this.plugins.forEach(plugin => {
        plugin.run(player)
    });
}


Mediaplayer.prototype.play = function() {
    this.media.play();
};

Mediaplayer.prototype.pause = function() {
    this.media.pause();
};

Mediaplayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

Mediaplayer.prototype.mute = function() {
    this.media.muted = true
}

Mediaplayer.prototype.unmute = function() {
    this.media.muted = false
}

export default Mediaplayer