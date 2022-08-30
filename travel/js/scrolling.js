const navbar = document.querySelector('.nav ul')
const links = navbar.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const section = document.querySelector(link.getAttribute('href'));
        if(section) {
            section.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})