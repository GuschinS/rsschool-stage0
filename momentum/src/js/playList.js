import firstSong from '../assets/sounds/Aqua Caelestis.mp3'
import secondSong from '../assets/sounds/Ennio Morricone.mp3'
import thirdSong from '../assets/sounds/River Flows In You.mp3'
import fourthSong from '../assets/sounds/Summer Wind.mp3'

const playListContainer = document.querySelector('.play-list')
const playList = [{
        title: 'Aqua Caelestis',
        src: firstSong,
        duration: '00:58'
    },
    {
        title: 'Ennio Morricone',
        src: secondSong,
        duration: '03:50'
    },
    {
        title: 'River Flows In You',
        src: thirdSong,
        duration: '03:50'
    },
    {
        title: 'Summer Wind',
        src: fourthSong,
        duration: '03:50'
    }
]

playList.forEach(el => {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = el.title
    playListContainer.append(li)
})

export { playList };