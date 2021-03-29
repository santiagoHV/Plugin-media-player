import Mediaplayer from "../mediaPlayer"

class AutoPlay {
    constructor() {}
    run(player: Mediaplayer) {
        if (!player.media.muted) {
            player.media.muted = true
        }
        console.log("auto play")
        player.play()
    }
}


export default AutoPlay