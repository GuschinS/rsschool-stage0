const arr = ['./img/spain.jpg', './img/japan.jpg', './img/usa.jpg']

const spain = document.getElementById('spain')
const japan = document.getElementById('japan')
const usa = document.getElementById('usa')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const center = document.querySelector('.center span')
const rightSpan = document.querySelector('.right span')
const ellipse = document.querySelectorAll('.ellipse')

const changeL = () => {
    left.animate ({
        duration: 5000
    })
    if (spain.getAttribute('src') == arr[0]) {
        spain.src = arr[1]
        japan.src = arr[2]
        usa.src = arr[0]
        center.textContent = 'USA'
        rightSpan.textContent = 'SPAIN'
        ellipseFunction(2)
    }
    else if (spain.getAttribute('src') == arr[1]) {
        spain.src = arr[2]
        japan.src = arr[0]
        usa.src = arr[1]
        center.textContent = 'SPAIN'
        rightSpan.textContent = 'JAPAN'
        ellipseFunction(0)
    }else{
        spain.src = arr[0]
        japan.src = arr[1]
        usa.src = arr[2]
        center.textContent = 'JAPAN'
        rightSpan.textContent = 'USA'
        ellipseFunction(1)
    }
}

const changeR = () => {
    right.animate ({
        duration: 10000
    })
    if (usa.getAttribute('src') == arr[2]) {
        spain.src = arr[2]
        japan.src = arr[0]
        usa.src = arr[1]
        center.textContent = 'SPAIN'
        rightSpan.textContent = 'JAPAN'
        ellipseFunction(0)
    }
    else if (usa.getAttribute('src') == arr[1]) {
        spain.src = arr[1]
        japan.src = arr[2]
        usa.src = arr[0]
        center.textContent = 'USA'
        rightSpan.textContent = 'SPAIN'
        ellipseFunction(2)
    }else{
        spain.src = arr[0]
        japan.src = arr[1]
        usa.src = arr[2]
        center.textContent = 'JAPAN'
        rightSpan.textContent = 'USA'
        ellipseFunction(1)
    }
}

const ellipseFunction = (el) => {
    for (let i = 0; i < ellipse.length; i++) {
        ellipse[i].classList.remove('active')
        ellipse[el].classList.add('active')
    }
}

left.addEventListener('click', changeL)
right.addEventListener('click', changeR)
