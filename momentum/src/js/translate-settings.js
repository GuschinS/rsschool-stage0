import {
    selectLanguage
} from "./storage";

const hThree = document.querySelector('h3')
const languageSpan = document.querySelector('.language-span')
const sourceSpan = document.querySelector('.source-span')
const queryName = document.querySelector('.query-name')
const settingName = document.querySelectorAll('.setting-name')
const query = document.getElementById('query')

const changeLanguageMenu = () => {
    if (selectLanguage.value === 'ru') {
        hThree.textContent = 'Настройки'
        languageSpan.textContent = ' Язык'
        sourceSpan.textContent = 'Источник изображений'
        queryName.textContent = 'Поиск'
        settingName[0].textContent = 'Аудио плеер'
        settingName[1].textContent = 'Погода'
        settingName[2].textContent = 'Цитата'
        settingName[3].textContent = 'Время'
        settingName[4].textContent = 'Дата'
        settingName[5].textContent = 'Приветствие'
        query.placeholder = 'Введите тег'
    }
    else if (selectLanguage.value === 'en') {
        hThree.textContent = 'Settings'
        languageSpan.textContent = ' Language'
        sourceSpan.textContent = 'Background image source'
        queryName.textContent = 'Search'
        settingName[0].textContent = 'Audio player'
        settingName[1].textContent = 'Weather'
        settingName[2].textContent = 'Quote'
        settingName[3].textContent = 'Time'
        settingName[4].textContent = 'Date'
        settingName[5].textContent = 'Greeting'
        query.placeholder = 'Enter tag'

    }
}

document.addEventListener('click', changeLanguageMenu)

// const selectLanguage = document.querySelector('select')

// if ((sessionStorage.getItem("selectLanguage.value"))) {
//     selectLanguage.value = sessionStorage.getItem("selectLanguage.value")
//     console.log('selectLanguage.value0: ', selectLanguage.value);
// }
// const selectedLanguage = () => {
//     selectLanguage = selectLanguage.value
//     console.log('selectLanguage: ', selectLanguage);
//     getQuotes()
//     showGreeting()
//     getWeather()
//     selectLanguage.value.addEventListener("click", function () {
//         console.log('selectLanguage.value1: ', selectLanguage.value);
//         sessionStorage.setItem("selectLanguage", selectLanguage.value);
//     })
// }
// selectLanguage.addEventListener('input', selectedLanguage)

// export { selectLanguage }