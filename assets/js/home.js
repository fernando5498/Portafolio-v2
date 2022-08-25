let itemExperience = document.querySelectorAll('.item-experience')
let experienceContent = document.querySelectorAll('.item-experience__content')
let sliderSubHeading = document.getElementById('slider-sub-heading')
let sliderSubHeadingItem = document.querySelectorAll('.sub-heading-item')
let btnNext = document.getElementById('btn-next')
let btnPrev = document.getElementById('btn-prev')

/* --------------------- EXPERIENCE --------------------- */
itemExperience.forEach(item => {
    item.addEventListener('click', () => {
        item.lastElementChild.classList.toggle('active')
        item.firstElementChild.classList.toggle('active')
    })
})


/* ----------------- SLIDERS SUB HEADING ---------------- */

sliderSubHeading.lastElementChild.style.left = "100%"


btnNext.addEventListener('click', () => {
    sliderSubHeading.lastElementChild.style.left = "-100%"
    sliderSubHeading.lastElementChild.style.position = "relative"
    sliderSubHeading.firstElementChild.style.left = "-150%"
})
btnPrev.addEventListener('click', () => {
    sliderSubHeading.lastElementChild.style.left = "100%"

    sliderSubHeading.firstElementChild.style.left = "0%"
})