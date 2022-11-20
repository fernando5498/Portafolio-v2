let loader = document.getElementById('preload')
let loaderbg = document.querySelector('.preload__bg')
let loaderImg = document.getElementById('logo-preload')
let logo = document.querySelector('.logo')
let positionLogo = logo.getBoundingClientRect()
let imgcomponet = document.createElement('img')
imgcomponet.src = 'assets/img/loader.gif'
imgcomponet.alt = 'logo'


window.addEventListener('load', () => {
    loaderImg.style.left = positionLogo.x + 10 + "px"
    loaderImg.style.top = positionLogo.y + 15 + "px"
    loaderImg.style.width = "20px"
    logo.appendChild(imgcomponet)
    loaderbg.style.opacity = "0"
    document.querySelector('.wrapper-content-page').classList.remove('d-none')
    document.querySelector('.body').classList.remove('overflow-hidden')
    /* ------------------------- WOW ------------------------ */
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    /* ----------------------- TOLLTIP ---------------------- */

    tippy('.tooltip-ra', {
        content: 'My tooltip!',
    });
    /* ----------------------- SWIPER ----------------------- */

    document.getElementById('header').classList.add('animate__animated')
    document.getElementById('header').classList.add('animate__fadeInDown')




    window.addEventListener('scroll', () => {
        loader.style.display = "none"
    })
});