const settingItemContainer = document.querySelector('.setting-item-container')
const toggleSlider = document.querySelectorAll('.toggle-slider')
const toggleSwitch = document.querySelectorAll('.toggle-switch')
const elementPlayer = document.querySelector('.player')
const elementWeather = document.querySelector('.weather')
const elementQuotes = document.querySelector('.quotes')
const elementTime = document.querySelector('.time')
const elementDate = document.querySelector('.date')
const elementGreeting = document.querySelector('.greeting-container')
const elementTodo = document.querySelector('.todo-container')
let elements = [elementPlayer, elementWeather, elementQuotes, elementTime, elementDate, elementGreeting, elementTodo]
const changeViewToggleSlider = () => {
    for (let i = 0; i < toggleSlider.length; i++) {
        if (toggleSlider[i].className === 'toggle-slider on') {
            toggleSwitch[i].style.left = '12px'
            toggleSwitch[i].style.transition = '300ms'
            elements[i].style.opacity = '.9'
            elements[i].style.transition = '400ms'

        } else if (toggleSlider[i].className === 'toggle-slider off') {
            toggleSwitch[i].style.left = '-12px'
            toggleSwitch[i].style.transition = '300ms'
            elements[i].style.opacity = '0'
            elements[i].style.transition = '400ms'
        }
    }
}

const changeSettings = (el) => {
    if (el.target && el.target.matches('.toggle-slider')) {
        let changeItem = el.target
        changeItem.classList.toggle('on');
        changeItem.classList.toggle('off');
    }
    changeViewToggleSlider()
}

settingItemContainer.addEventListener('click', changeSettings)

// if (sessionStorage.getItem("toggleSlider")) {
//     toggleSlider.className = JSON.parse(sessionStorage.getItem("toggleSlider"));
//     changeViewToggleSlider()
// }
// const selectedLanguage = () => {
//     document.addEventListener("click", function () {
//         sessionStorage.setItem("toggleSlider", JSON.stringify(toggleSlider.className));
// })
// }


if ((sessionStorage.getItem("toggleSlider[0].className"))) {
    toggleSlider[0].className = sessionStorage.getItem("toggleSlider[0].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[1].className"))) {
    toggleSlider[1].className = sessionStorage.getItem("toggleSlider[1].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[2].className"))) {
    toggleSlider[2].className = sessionStorage.getItem("toggleSlider[2].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[3].className"))) {
    toggleSlider[3].className = sessionStorage.getItem("toggleSlider[3].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[4].className"))) {
    toggleSlider[4].className = sessionStorage.getItem("toggleSlider[4].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[5].className"))) {
    toggleSlider[5].className = sessionStorage.getItem("toggleSlider[5].className")
    changeViewToggleSlider()
}
if ((sessionStorage.getItem("toggleSlider[6].className"))) {
    toggleSlider[6].className = sessionStorage.getItem("toggleSlider[6].className")
    changeViewToggleSlider()
}

settingItemContainer.addEventListener("click", function () {
    sessionStorage.setItem("toggleSlider[0].className", toggleSlider[0].className);
    sessionStorage.setItem("toggleSlider[1].className", toggleSlider[1].className);
    sessionStorage.setItem("toggleSlider[2].className", toggleSlider[2].className);
    sessionStorage.setItem("toggleSlider[3].className", toggleSlider[3].className);
    sessionStorage.setItem("toggleSlider[4].className", toggleSlider[4].className);
    sessionStorage.setItem("toggleSlider[5].className", toggleSlider[5].className);
    sessionStorage.setItem("toggleSlider[6].className", toggleSlider[6].className);
})

export {
    changeSettings,
    elements,
    toggleSlider,
    toggleSwitch
}