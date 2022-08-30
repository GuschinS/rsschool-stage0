const mobileWidth = window.matchMedia("(max-width: 390px)")

const burgerMenu = () => {
  const nav = document.getElementById('myLinks')
  const start = document.querySelector('.menu')
  const close = document.querySelector('.close')
  const bm = document.querySelectorAll('.bm')

  // menu opening animation

  const openMenu = () => {
    nav.animate([{
        transform: 'translate3D(0, -35px, 0)'
      },
      {
        transform: 'translate3D(-175px, -35px, 0)'
      }
    ], {
      duration: 500,
      fill: "forwards"
    })
    nav.classList.add('open')
  }

  // menu closing animation

  const closeMenu = () => {
    nav.animate([{
        transform: 'translate3D(-175px, -35px, 0)'
      },
      {
        transform: 'translate3D(0, -35px, 0)'
      }
    ], {
      duration: 500,
      fill: "forwards"
    })
    nav.classList.remove('open')
  }

  start.addEventListener('click', openMenu)
  close.addEventListener('click', closeMenu)

  // clicking on a link

  bm.forEach((link) => {
    link.addEventListener('click', closeMenu, false)
  })

  // clicking outside the menu

  document.addEventListener('click', (e) => {
    const a = e.composedPath().includes(nav);
    const b = e.composedPath().includes(start);
    if (nav.classList.value === 'nav open') {
      if (!a && !b) {
        closeMenu();
      }
    }
  })

  // pressing esc

  document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
      closeMenu();
    }
  })
}

if (mobileWidth.matches) {
  burgerMenu()
} else {
  mobileWidth.addEventListener('change', event => {
    if (!event.matches) {
      window.location.reload()
    } else {
      burgerMenu()
    }
  })
}
