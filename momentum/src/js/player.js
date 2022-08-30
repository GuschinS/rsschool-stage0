import {
    playList
} from "./playList";

const play = document.querySelector('.play')
const playNext = document.querySelector('.play-next')
const playPrev = document.querySelector('.play-prev')
const playItem = document.querySelectorAll('.play-item')
const audioTitle = document.querySelector('.audio-title')
const progressBar = document.querySelector('#progress-bar')
const playListContainer = document.querySelector('.play-list')

let isPlay = false;
const audio = new Audio();
let i = 0
let clickItem

const playAudio = () => {
    audio.src = playList[i].src;
    audioTitle.textContent = playList[i].title
    audioTitle.style.opacity = '.8'
    playItem.forEach(el => {
        el.classList.remove('item-active')
        el.classList.remove('click')
    })
    playItem[i].classList.add('item-active')
    playItem[i].classList.add('click')
    audio.play();
}

const pauseAudio = () => {
    audio.pause()
    playItem.forEach(el => {
        el.classList.remove('item-active')
        el.classList.remove('click')
    })
}

const toggleBtn = () => {
    if (isPlay == false) {
        playAudio()
        audio.currentTime = progressBar.value;
        isPlay = true
    } else {
        pauseAudio()
        isPlay = false
    }
    play.classList.toggle('pause');
}

const getNextPlay = () => {
    i === 3 ? i = 0 : i++
    audio.currentTime = 0
    playAudio()
    play.classList.add('pause');
    isPlay = true
}

const getPrevPlay = () => {
    i === 0 ? i = 3 : i--
    audio.currentTime = 0
    playAudio()
    play.classList.add('pause');
    isPlay = true
}
const playSongFromList = (el) => {
    if (el.target && el.target.matches("li.play-item")) {
        clickItem = el.target
        clickItem.classList.toggle('click');
        for (let j = 0; j < playItem.length; j++) {
            if (playItem[j].className === 'play-item click') {
                i = j
                audio.currentTime = 0
                play.classList.add('pause');
                playAudio()
            } else if (playItem[j].className === 'play-item item-active') {
                play.classList.remove('pause');
                pauseAudio()
            }
        }
    }
}

function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.current-time').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (progressBar.value === '0') {
        document.querySelector('.duration-time').style.opacity = '0'
        document.querySelector('.current-time').style.opacity = '0'
        document.querySelector('.span-time').style.opacity = '0'

    } else {
        document.querySelector('.duration-time').innerHTML = (formatTime(Math.floor(audio.duration)));
        document.querySelector('.duration-time').style.opacity = '.8'
        document.querySelector('.current-time').style.opacity = '.8'
        document.querySelector('.span-time').style.opacity = '.8'
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60))
    let sec = Math.floor(seconds - (min * 60))
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    audio.currentTime = progressBar.value;
};

progressBar.addEventListener('input', changeProgressBar)
play.addEventListener('click', toggleBtn)
playNext.addEventListener('click', getNextPlay)
playPrev.addEventListener('click', getPrevPlay)
audio.addEventListener('ended', getNextPlay)
playListContainer.addEventListener('click', playSongFromList)

export {
    audio
}