let itemExperience = document.querySelectorAll('.item-experience')
let experienceContent = document.querySelectorAll('.item-experience__content')
let sliderSubHeading = document.getElementById('slider-sub-heading')
let btnNext = document.getElementById('btn-next')
let btnPrev = document.getElementById('btn-prev')


/* --------------------- EXPERIENCE --------------------- */
itemExperience.forEach(item => {
    item.addEventListener('click', () => {
        item.lastElementChild.classList.toggle('active');
        item.firstElementChild.classList.toggle('active')

        itemExperience.forEach(item2 => {
            if (item2 !== item) {
                item2.lastElementChild.classList.remove('active');
                item2.firstElementChild.classList.remove('active')
            } else {
                console.log('hola');
            }
        })
    })
})

/* ----------------- SLIDERS SUB HEADING ---------------- */

sliderSubHeading.lastElementChild.style.left = "100%"
sliderSubHeading.style.transition = "all 600ms"
sliderSubHeading.lastElementChild.style.display = "none"
window.addEventListener('load', () => {
    let hFirsItemCurse = sliderSubHeading.children[0].getBoundingClientRect().height
    sliderSubHeading.style.height = hFirsItemCurse + "px"
})

btnNext.addEventListener('click', () => {
    sliderSubHeading.lastElementChild.style.display = "block"
    sliderSubHeading.style.transform = "translateX(-100%)"
    sliderSubHeading.firstElementChild.style.left = "-100%"
    sliderSubHeading.lastElementChild.style.left = "0%"
    let height2Div = sliderSubHeading.lastElementChild.getBoundingClientRect().height;
    sliderSubHeading.style.height = height2Div + "px"

})
btnPrev.addEventListener('click', () => {
    sliderSubHeading.style.transform = "translateX(0%)"
    sliderSubHeading.firstElementChild.style.left = "0%"
    sliderSubHeading.lastElementChild.style.left = "100%"
    let height1Div = sliderSubHeading.firstElementChild.getBoundingClientRect().height;
    sliderSubHeading.style.height = height1Div + "px"
    setTimeout(() => {
        sliderSubHeading.lastElementChild.style.display = "none"
    }, 600);
})