import {
    inputName,
    selectLanguage
} from "./storage";

const greetingTranslation = {
    'ru': ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
    'en': ['Good morning', 'Good afternoon', 'Good evening', 'Good night']
}

const classGreeting = document.querySelector('.greeting') //welcome field
let timeOfDay = ''

let selectLanguageGreeting  = 'en'
if ((sessionStorage.getItem("selectLanguageGreeting"))) {
    selectLanguageGreeting = sessionStorage.getItem("selectLanguageGreeting")
}
const selectedLanguage = () => {
    selectLanguageGreeting = selectLanguage.value
    showGreeting()
        selectLanguage.addEventListener("click", function () {
        sessionStorage.setItem("selectLanguageGreeting", selectLanguageGreeting);
    })
}
selectLanguage.addEventListener('click', selectedLanguage)

//the function changes the greeting depending on the time of day and outputs it
const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours()
    if (hours < 6) {
        timeOfDay = 'night'
    }
    if (hours < 12 && hours >= 6) {
        timeOfDay = 'morning'
    }
    if (hours < 18 && hours >= 12) {
        timeOfDay = 'afternoon'
    }
    if (hours >= 18) {
        timeOfDay = 'evening'
    }
}

const showGreeting = () => {
    let greetingText = `Good ${timeOfDay}`;
    let indexElement = greetingTranslation.en.indexOf(greetingText)
    classGreeting.textContent = greetingTranslation[selectLanguageGreeting][indexElement]
    if (selectLanguageGreeting === 'en') {
        inputName.placeholder = '[Enter Name]'
    } else if (selectLanguageGreeting === 'ru') {
        inputName.placeholder = '[Введите имя]'
    }
}

showGreeting(selectLanguageGreeting)

// function clears input fields on click
const cleaningInputName = () => {
    inputName.value = ''
}

inputName.addEventListener('click', cleaningInputName)

export {
    showGreeting,
    getTimeOfDay,
    timeOfDay
}