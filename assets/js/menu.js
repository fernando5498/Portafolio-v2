let header = document.getElementById('header')
let burger = document.getElementById('menu-burger')
let menu = document.getElementById('wrapper-menu-movile')
let bgMenu = document.getElementById('bg-fill-menu')
let navbar_links = document.querySelectorAll('.navbar-r .navbar-r__link')
let lastScrollTop = 0
let closeMenu = document.getElementById('close')

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

navbar_links.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('active')
        bgMenu.style.display = 'none'
    })
})

bgMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    bgMenu.style.display = 'none'
})

burger.addEventListener('click', () => {
    menu.classList.add('active')
    bgMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    bgMenu.style.display = 'none'

})