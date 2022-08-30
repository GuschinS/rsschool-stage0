const arrow_l = document.querySelector('.arrow_l')
const arrow_r = document.querySelector('.arrow_r')
const spainM = document.querySelector('.small .spain')
const japanM = document.querySelector('.small .japan')
const usaM = document.querySelector('.small .usa')
const ellipseMobile = document.querySelectorAll('.ellipse')

let countL = 0
let countR = 0

const ellipseFunctionMobile = (el) => {
    for (let i = 0; i < ellipseMobile.length; i++) {
        ellipseMobile[i].classList.remove('active')
        ellipseMobile[el].classList.add('active')
    }
}

if (window.innerWidth <= 390) {
    ellipseFunctionMobile(0)
}

const goLeft = () => {
    if (countR === 1) {
        countL = 2
        countR = 0
    }
    else if (countR === 2) {
        countL = 1
        countR = 0
    }
    if (countL === 0) {
        spainM.animate([{
                transform: 'translate3D(0, 0, 0)'
            },
            {
                transform: 'translate3D(-390px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        japanM.animate([{
                transform: 'translate3D(0, 0, 0)'
            },
            {
                transform: 'translate3D(-390px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countL += 1
        ellipseFunctionMobile(1)
    } else if (countL === 1) {
        japanM.animate([{
                transform: 'translate3D(-390px, 0, 0)'
            },
            {
                transform: 'translate3D(-780px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        usaM.animate([{
                transform: 'translate3D(-390px, 0, 0)'
            },
            {
                transform: 'translate3D(-780px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countL += 1
        ellipseFunctionMobile(2)
    } else {
        spainM.animate([{
                transform: 'translate3D(390px, 0, 0)'
            },
            {
                transform: 'translate3D(0, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        usaM.animate([{
                transform: 'translate3D(-780px, 0, 0)'
            },
            {
                transform: 'translate3D(-1170px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countL = 0
        ellipseFunctionMobile(0)
    }
}

const goRight = () => {
    if (countL === 1) {
        countR = 2
        countL = 0
    }
    else if (countL === 2) {
        countR = 1
        countL = 0
    }
    if (countR === 0) {
        spainM.animate([{
                transform: 'translate3D(0, 0, 0)'
            },
            {
                transform: 'translate3D(390px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        usaM.animate([{
                transform: 'translate3D(-1170px, 0, 0)'
            },
            {
                transform: 'translate3D(-780px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countR += 1
        ellipseFunctionMobile(2)
    } else if (countR === 1) {
        usaM.animate([{
                transform: 'translate3D(-780px, 0, 0)'
            },
            {
                transform: 'translate3D(-390px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        japanM.animate([{
                transform: 'translate3D(-780px, 0, 0)'
            },
            {
                transform: 'translate3D(-390px, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countR += 1
        ellipseFunctionMobile(1)
    } else {
        japanM.animate([{
                transform: 'translate3D(-390px, 0, 0)'
            },
            {
                transform: 'translate3D(0, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        spainM.animate([{
                transform: 'translate3D(-390px, 0, 0)'
            },
            {
                transform: 'translate3D(0, 0, 0)'
            }
        ], {
            duration: 500,
            fill: "forwards"
        })
        countR = 0
        ellipseFunctionMobile(0)
    }
}

arrow_l.addEventListener('click', goLeft)
arrow_r.addEventListener('click', goRight)