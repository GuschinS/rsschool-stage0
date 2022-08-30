const accountButton = document.querySelector('.btn-login');
const accountButtonMobile = document.querySelector('.account');
const popupContainer = document.querySelector('.popup_container');
const popup = document.querySelector('.popup');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const nameForme = document.querySelector('.name_form h2');
const inputAlert = document.querySelector('.input_alert');
const fb = document.querySelector('.fb');
const gg = document.querySelector('.gg');
const or = document.querySelector('.or');
const fup = document.querySelector('.fup');
const dha = document.querySelector('.dha');
const dhaP = document.querySelector('.dha p');
const dhaStrong = document.querySelector('.dha strong');
const signIn = document.querySelector('.dha a')

const openPopup = () => {
    popupContainer.style.display = 'flex'
}

const closePopup = () => {
    popupContainer.style.display = ''
}

accountButton.addEventListener('click', openPopup)
accountButtonMobile.addEventListener('click', openPopup)

popupContainer.addEventListener('click', (event) => {
    const popup = event.target.closest('.popup')
    if (!popup) {
        closePopup()
    }
})

const openAlert = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    alert(`E-mail: ${email},\nPassword: ${password}`)
}

let count = 0
const login = () => {
    if (count === 0) {
        fb.style.display = 'none'
        gg.style.display = 'none'
        or.style.display = 'none'
        nameForme.textContent = 'Create account'
        nameForme.style.paddingLeft = '50px'
        popup.style.height = '436px'
        inputAlert.textContent = 'Sign Up'
        fup.style.display = 'none'
        dha.style.marginTop = '22px'
        dhaP.textContent = 'Already have an account?'
        dhaStrong.textContent = 'Log In'
        count += 1
    }else{
        fb.style.display = 'flex'
        gg.style.display = 'flex'
        or.style.display = 'flex'
        inputAlert.textContent = 'Sign In'
        nameForme.textContent = 'Log in to your account'
        nameForme.style.paddingLeft = '0'
        popup.style.height = '660px'
        fup.style.display = 'flex'
        dha.style.marginTop = '0'
        dhaP.textContent = 'Don’t have an account?'
        dhaStrong.textContent = 'Register'
        count = 0
    }
}

signIn.addEventListener('click', login)