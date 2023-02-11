const slides = document.querySelectorAll('.slide')

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

const clearActiveClasses = () => {
    slides.forEach((el) => el.classList.remove('active'))
}