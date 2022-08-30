import {
    timeOfDay
} from './greeting'

const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
const searchQuery = document.getElementById('query')
const selectSource = document.querySelector('.select-source')

const searchQueryValue = (e) => {
    if (e.key === 'Enter') {
        selectedSourceVolume()
    }
}

searchQuery.addEventListener('keypress', searchQueryValue)

function getRandomNum(num) {
    return Math.ceil(Math.random() * num);
}
let bgNum = getRandomNum(20)

const getSlideNext = () => {
    if (selectSource.value === 'unsplash') {
        getLinkToImageUnsplash()
    } else if (selectSource.value === 'flickr') {
        getLinkToImageFlickr()
    } else {
        bgNum >= 20 ? bgNum = 1 : bgNum++
        setBg()
    }
}

const getSlidePrev = () => {
    if (selectSource.value === 'unsplash') {
        getLinkToImageUnsplash()
    } else if (selectSource.value === 'flickr') {
        getLinkToImageFlickr()
    } else {
        bgNum <= 1 ? bgNum = 20 : bgNum--
        setBg()
    }
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)

const setBg = () => {
    bgNum < 10 ? bgNum = '0' + bgNum : bgNum = bgNum
    let urlImage = `https://raw.githubusercontent.com/GuschinS/momentum-images/master/${timeOfDay}/${bgNum}.webp`
    const img = new Image();
    img.src = urlImage
    img.onload = () => {
        body.style.backgroundImage = `url(${urlImage})`
    }
}

async function getLinkToImageUnsplash() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchQuery.value}&text=${timeOfDay}&client_id=3mKgh4HDBravBeiJLuTSzprIr89HSuPZjpRYRmPTWpw`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    img.src = data.urls.regular
    img.onload = () => {
        body.style.backgroundImage = `url(${data.urls.regular})`
    }
}

async function getLinkToImageFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04c9ff1ef4477707fc4f331131003136&tags=${searchQuery.value}&text=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    let bgNumFlickr = getRandomNum(data.photos.photo.length)
    img.src = data.photos.photo[bgNumFlickr].url_l
    img.onload = () => {
        body.style.backgroundImage = `url(${data.photos.photo[bgNumFlickr].url_l})`
    }
}

const selectedSourceVolume = () => {
    switch (selectSource.value) {
        case 'github':
            setBg();
            break;
        case 'flickr':
            getLinkToImageFlickr();
            break;
        case 'unsplash':
            getLinkToImageUnsplash();
            break;
    }
}

selectSource.addEventListener('input', selectedSourceVolume)

selectSource.addEventListener("input", function () {
    sessionStorage.setItem("selectSource.value", selectSource.value);
})

selectedSourceVolume()


export {
    getRandomNum
}