import Mediaplayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const buttonPlay = document.getElementById('play')
const buttonMute = document.getElementById('mute')

const player = new Mediaplayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
})

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => {
    if (player.media.muted) {
        player.unmute()
    } else {
        player.mute()
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    });
}