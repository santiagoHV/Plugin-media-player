import Mediaplayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/ads';

const video: HTMLElement = document.querySelector("video")
const buttonPlay: HTMLElement = document.getElementById('play')
const buttonMute: HTMLElement = document.getElementById('mute')

const player = new Mediaplayer({
    el: video,
    plugins: [
        new AutoPause(),
        new AutoPlay(),
        new AdsPlugin()
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

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../sw.js').catch(error => {
//         console.log(error.message);
//     });
// }