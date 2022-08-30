import {
    selectLanguage
} from "./storage";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const inputCity = document.querySelector('.city')
let selectLanguageValue = 'en'

if (sessionStorage.getItem("city")) {
    inputCity.value = sessionStorage.getItem("city")
}

document.addEventListener("click", function () {
    sessionStorage.setItem("selectLanguageValue", selectLanguageValue);
})
if ((sessionStorage.getItem("selectLanguageValue"))) {
    selectLanguageValue = sessionStorage.getItem("selectLanguageValue")
}
const selectedLanguage = () => {
    selectLanguageValue = selectLanguage.value
    getWeather()
}
selectLanguage.addEventListener('click', selectedLanguage)

async function getWeather() {
    const weatherError = document.querySelector('.weather-error')
    try {
        weatherError.textContent = ''
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=${selectLanguageValue}&appid=1456c6c765857041e51e7e0147d1da6d&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        if (selectLanguageValue === 'en') {
            windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
            inputCity.value = data.name
        } else if (selectLanguageValue === 'ru') {
            windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность воздуха: ${Math.round(data.main.humidity)} %`;
            inputCity.value = data.name
        }
    } catch {
        temperature.textContent = ''
        weatherDescription.textContent = ''
        windSpeed.textContent = ''
        humidity.textContent = ''
        if (selectLanguageValue === 'en') {
            weatherError.textContent = 'This city is not found'
            // alert('This city is not found')
        } else if (selectLanguageValue === 'ru') {
            weatherError.textContent = 'Город не найден'
            // alert('Город не найден')
        }
    }
}

getWeather()

inputCity.addEventListener('change', function () {
    getWeather()
    sessionStorage.setItem("city", inputCity.value);
})