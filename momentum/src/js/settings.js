import imagesSettings from '../assets/svg/settings.svg'
const windowSettingsBackground = document.querySelector('.window-settings-background')
const footer = document.querySelector('.footer')
const windowSettings = document.querySelector('.window-settings')
const divSettings = document.createElement('div')
let settingsHover = document.querySelector('.settings:hover')
let settingsActive = document.querySelector('.settings:active')
let isOpen = false
let settings

const mouseOver = () => {
    divSettings.classList.add('settings:hover')
    settingsHover = document.querySelector('.settings:hover')
    settingsHover.style.opacity = '1'
    settingsHover.style.cursor = 'pointer'
    if (isOpen === false) {
        windowSettings.style.position = 'absolute'
        windowSettings.style.left = '20px'
        windowSettings.style.bottom = '60px'
        windowSettings.style.backgroundColor = `black`
        windowSettings.style.transitionProperty = 'opacity'
        windowSettings.style.opacity = '0'
        windowSettings.style.width = '340px'
        windowSettings.style.height = '475px'
        windowSettings.style.borderRadius = '10px'
    }
}

const mouseOut = () => {
    divSettings.classList.remove('settings:hover')
    divSettings.classList.remove('settings:active')
    settingsHover.style.opacity = '.5'
}

const clickSettings = () => {
    if (isOpen === false) {
        windowSettingsBackground.style.display = 'flex'
        divSettings.classList.add('settings:active')
        settingsActive = document.querySelector('.settings:active')
        settingsHover.style.transform = 'rotate(45deg) scale(1.2)'
        settingsHover.style.transitionDuration = '1000ms'
        windowSettings.style.transitionDuration = '1000ms'
        windowSettings.style.opacity = '.8'
        isOpen = true
    } else if (isOpen === true) {
        windowSettingsBackground.style.display = 'none'
        divSettings.classList.remove('settings:active')
        settingsHover.style.transform = 'rotate(-45deg) scale(1)'
        windowSettings.style.opacity = '0'
        isOpen = false
    }
}

const makeDivSettings = () => {
    divSettings.classList.add('settings')
    footer.append(divSettings)
    settings = document.querySelector('.settings')
    settings.style.position = 'absolute'
    settings.style.left = '20px'
    settings.style.bottom = '20px'
    settings.style.backgroundImage = `url(${imagesSettings})`
    settings.style.width = '20px'
    settings.style.height = '20px'
    settings.style.opacity = '.5'
    settings.addEventListener('mouseover', mouseOver)
    settings.addEventListener('mouseout', mouseOut)
    settings.addEventListener('click', clickSettings)
}
windowSettingsBackground.addEventListener('click', (event) => {
    const closeWindow = event.target.closest('.close-window')
    if (!closeWindow) {
        clickSettings()
    }
})

makeDivSettings()