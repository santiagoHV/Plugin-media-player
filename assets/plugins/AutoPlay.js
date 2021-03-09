function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    if (!player.muted) {
        player.muted = true
    }
    console.log("auto play")
    player.play()
}

export default AutoPlay