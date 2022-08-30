import {
    elements
} from './change-settings'

const inputName = document.getElementById('name')
const selectLanguage = document.querySelector('select')
const selectSource = document.querySelector('.select-source')

function sessionStorageFunction() {
    if (sessionStorage.getItem("name")) {
        inputName.value = sessionStorage.getItem("name")
    }
    inputName.addEventListener("change", function () {
        sessionStorage.setItem("name", inputName.value);
    });
    if (sessionStorage.getItem("audio")) {
        elements[0].style.opacity = sessionStorage.getItem("audio")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("audio", elements[0].style.opacity);
    })
    if (sessionStorage.getItem("weather")) {
        elements[1].style.opacity = sessionStorage.getItem("weather")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("weather", elements[1].style.opacity);
    })
    if (sessionStorage.getItem("quote")) {
        elements[2].style.opacity = sessionStorage.getItem("quote")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("quote", elements[2].style.opacity);
    })
    if (sessionStorage.getItem("time")) {
        elements[3].style.opacity = sessionStorage.getItem("time")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("time", elements[3].style.opacity);
    })
    if (sessionStorage.getItem("date")) {
        elements[4].style.opacity = sessionStorage.getItem("date")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("date", elements[4].style.opacity);
    })
    if (sessionStorage.getItem("greeting")) {
        elements[5].style.opacity = sessionStorage.getItem("greeting")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("greeting", elements[5].style.opacity);
    })
    if (sessionStorage.getItem("selectLanguage.value")) {
        selectLanguage.value = sessionStorage.getItem("selectLanguage.value")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("selectLanguage.value", selectLanguage.value);
    })
    if (sessionStorage.getItem("selectSource.value")) {
        selectSource.value = sessionStorage.getItem("selectSource.value")
    }
    document.addEventListener("click", function () {
        sessionStorage.setItem("selectSource.value", selectSource.value);
    })

}

export {
    sessionStorageFunction,
    inputName,
    selectLanguage,
    selectSource
}