const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'cyan', 'yellow', 'purple']

let time = 0
let points = 0

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        points++
        event.target.remove()
        createRandomCircle()
    }
})

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

function startGame() {
    screens[1].classList.add('up')
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: <span class='primary'>${points}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 30)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')

    const color = getRandomColor()
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}