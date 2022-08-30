import {
    getTimeOfDay,
    showGreeting
} from './greeting'

import {
    selectLanguage
} from './storage'

const classTime = document.querySelector('.time')
const classDate = document.querySelector('.date')
let selectLanguageTime = 'en'

const changeDateLanguage = () => {
    let currentDate
    let date = new Date()
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
    selectLanguageTime = selectLanguage.value

    if (selectLanguageTime === 'en') {
        currentDate = date.toLocaleDateString('en-GB', options)
        classDate.textContent = currentDate
    } else if ((selectLanguageTime === 'ru')) {
        currentDate = date.toLocaleDateString('ru-RU', options)
        classDate.textContent = currentDate
    }
}

if ((sessionStorage.getItem("selectLanguageTime"))) {
    selectLanguageTime = sessionStorage.getItem("selectLanguageTime")
}

selectLanguage.addEventListener("click", function () {
    sessionStorage.setItem("selectLanguageTime", selectLanguageTime);
})

const showTime = () => {
    setTimeout(showTime, 1000)
    let time = new Date()
    const currentTime = time.toLocaleTimeString();
    classTime.textContent = currentTime
    getTimeOfDay()
    changeDateLanguage()
    // greeting
    showGreeting()


}
showTime()

export {
    showTime
}