// import {
//     getRandomNum
// } from './slider'

// const test = document.querySelector('.weather-icon')
// let i = 0

// test.style.cursor = 'pointer'

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '717d1ee7d4msh862fde6611023f9p101041jsnb25768499c1a',
//         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
// };
// const audio = new Audio();
// async function playAudioS() {
//     const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1E37E5sYSYV1Cr&offset=0&limit=100';
//     const res = await fetch(url, options);
//     const data = await res.json();
//     audio.src = data.items[i].track.preview_url;
    
//         audio.play()

// }

// const getNextPlay = () => {
//     i === 99 ? i = 0 : i++
//     audio.currentTime = 0

//     playAudioS()

    // play.classList.add('pause');
    // isPlay = true
// }
// test.addEventListener('click', getNextPlay)
// audio.addEventListener('ended', getNextPlay);
