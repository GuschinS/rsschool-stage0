import {
    audio
} from "./player";

const volumeIcon = document.querySelector('.volume-icon');
const soundVolume = document.getElementById("sound-volume");

const toggleVolume = () => {
    volumeIcon.classList.toggle('icono-volumeMute')
    volumeIcon.classList.toggle('icono-volumeHigh')
    audio.muted === false ? audio.muted = true : audio.muted = false
}
const soundVolumeControl = () => {
    audio.volume= soundVolume.value;
}

volumeIcon.addEventListener('click', toggleVolume)
soundVolume.addEventListener('input', soundVolumeControl)