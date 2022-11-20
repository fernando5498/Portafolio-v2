/* ----------------- DATOS DE PROYECTOS ----------------- */
let proyectList = [
    {
        type: "website",
        title: "Travel React",
        time: "19-Noviembre-2022",
        content:
            "Proyecto personal con React, estoy experimentando cómo funciona este Framework y me ha gustado, este es solo uno de los primeros que he hecho pero buscare retos más complicados para subir mi nivel.",
        url: "https://test-travel-react.netlify.app/",
        github: "https://github.com/fernando5498/Travel-React",
        image: "assets/proyectos/react/travel-react.webp",
        tags: ["html", "css", "sass", "react"]
    },
    {
        type: "website",
        title: "Travel & Hotells",
        time: "28-Octubre-2022",
        content:
            `Este es uno de los proyectos que realice con el Bootcamp y prueba técnica de <a class='link' href='https://silveraenterprises.com/' target='_blank'>SilverEnterpise</a>, aprendí demasiado con ellos, incluyendo el manejo de Shopify y la creación de secciones dinámicas con liquid, está página es solo la base del sitio original.`,
        url: "https://travelhotells.netlify.app/",
        github: "https://github.com/fernando5498/Travek-Hotells",
        image: "assets/proyectos/js/travelhotells.webp",
        tags: ["html", "css", "sass", "js"]
    },
    {
        type: "website",
        title: "Wallpapers",
        time: "7-diciembre-2021",
        content:
            "Creada con Html,Css y JavaScript, me inspire con diferentes diseños e implemente videos en bucle de alta calidad.",
        url: "assets/proyectos/js/Pagina-Wallpaper/index.html",
        github: "https://github.com/fernando5498/Pagina-Wallpaper",
        image: "assets/img/home/flor.webp",
        tags: ["html", "css", "js"]
    },

    {
        type: "website",
        title: "Evulus Tokens",
        time: "19-Febrero-2022",
        content:
            "Apoye en la creación de algunas secciones de la página oficial de Evulus, trabaje de manera FreeLancer y todo fue creado en base a bootstrap,html,css y javaScript.",
        url: "assets/proyectos/js/Evulus/index.html",
        github: "https://github.com/fernando5498/evulus-Inicio",
        image: "assets/img/home/evulus-home.webp",
        tags: ["html", "css", "sass", "bootstrap"]
    },
    {
        type: "website",
        title: "Mi Antiguo Portafolio",
        time: "24-Julio-2022",
        content:
            "Fue el primer portafolio que realice, tarde muchísimo tiempo pero logre terminarlo, hasta ahora es uno de los proyectos con el que logro ver mi progreso pero me gustó mucho.",
        url: "assets/proyectos/js/Portafolio-Principal/index.html",
        github: "https://github.com/fernando5498/Segundo-Portafolio",
        image: "assets/proyectos/js/Portafolio-Principal/primer-portafolio.webp",
        tags: ["html", "css", "sass", "bootstrap"]
    },
    {
        type: "video",
        title: "Two Feet I Feel Like I'm Drowning",
        time: "3-Enero-2022",
        content:
            "Siempre me ha gustado la musica y me encantaria seguir creando videos asi por mi cuenta, lo cree con after effects.",
        url: "https://www.youtube.com/embed/HcxUKjzbFhQ",
        image: "assets/img/home/two_feet-poster.webp",
        tags: ["premiere", "after-effects"]
    },
    {
        type: "video",
        title: "Video para RedesTopk",
        time: "19-octubre-2021",
        content:
            "Video Creado con Illustrator, After effects, Premiere y montado por Redestopk en su canal Oficial de Youtube, si gustan visiten su canal con el boton de abajo.",
        url: "https://www.youtube.com/embed/yh-xzSoGBNA",
        image: "assets/img/home/redestopk1.webp",
        tags: ["premiere", "after-effects"]
    },
    {
        type: "video",
        title: "RedesTopk Marketing",
        time: "1-octubre-2021",
        content:
            "Tuve la oportunidad de crearles un video a RedesTopk, les invito a visitar su canal es una empresa dedicada al Marketing.",
        url: "https://www.youtube.com/embed/W8mErtIAuwE",
        image: "assets/img/home/redestopk.webp",
        tags: ["premiere", "after-effects", "illustrator"]
    },
]
// Funcion para crear iconos tiene las url de las imagenes
function listIcons(array, father) {
    let icons = [
        {
            title: "html",
            url: "assets/img/icons/html.svg"
        },
        {
            title: "css",
            url: "assets/img/icons/css-icon.svg"
        },
        {
            title: "sass",
            url: "assets/img/icons/sass-icon.svg"
        },
        {
            title: "bootstrap",
            url: "assets/img/icons/bootstrap-icon.svg"
        },
        {
            title: "js",
            url: "assets/img/icons/js-icon.svg"
        },
        {
            title: "php",
            url: "assets/img/icons/php-icon.svg"
        },
        {
            title: "react",
            url: "assets/img/icons/react-icon.svg"
        },
        {
            title: "illustrator",
            url: "assets/img/icons/illustrator-icon.svg"
        },
        {
            title: "premiere",
            url: "assets/img/icons/premiere-icon.svg"
        },
        {
            title: "after-effects",
            url: "assets/img/icons/afterEffects-icon.svg"
        },

    ]
    let container = []
    array.forEach(tag => {
        icons.forEach(icon => {
            if (tag === icon.title) {
                let img = `<img data-tippy-content="${icon.title}" class="tooltip-ra" src="${icon.url}"/>`
                container.push(img)
            }
        })
    })

    let string = container.toString()
    father.innerHTML = string.replace(/,/g, "")
}

function bgPreviewContent() {
    proyectList.forEach(infoProyects => {
        let item = document.querySelector(".swiper-slide-active")
        if (infoProyects.title == item.firstElementChild.dataset.id) {
            switch (infoProyects.type) {
                case "website":
                    document.getElementById('btn-site').href = infoProyects.url
                    document.getElementById('btn-github').href = infoProyects.github
                    document.getElementById('btn-site').style.display = "flex"
                    document.getElementById('btn-github').style.display = "flex"
                    document.getElementById("btn-play").classList.add("d-none")
                    break;
                case "video":
                    document.getElementById('btn-site').style.display = "none"
                    document.getElementById('btn-github').style.display = "none"
                    document.getElementById("btn-play").classList.remove("d-none")
                    let iframeVid = `<iframe src="${infoProyects.url}?autohide=1" title="YouTube video player" data-title="${infoProyects.title}" frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>`
                    let IframeHtml = document.querySelector(".iframe-vid iframe")
                    // filtro para que el video de youtube no se recarge y realize excesivas solicitudes a youtube 
                    if (IframeHtml) {
                        if (IframeHtml.dataset.title !== infoProyects.title) {
                            document.querySelector(".iframe-vid").innerHTML = iframeVid
                        }
                    } else {
                        document.querySelector(".iframe-vid").innerHTML = iframeVid
                    }

                    break
                default:
                    break;
            }
            document.querySelector('.proyect-content__title').innerHTML = infoProyects.title
            document.querySelector('.proyect-content__time').innerHTML = infoProyects.time
            document.querySelector('.proyect-content__description').innerHTML = infoProyects.content
            document.querySelector(".proyects-preview").style.backgroundImage = "url(" + infoProyects.image + ")"
            // iconos 
            let technologiesIcons = document.querySelector(".technologies-icons")
            listIcons(infoProyects.tags, technologiesIcons)

        }
    })
}

function Proyects() {
    proyectList.forEach((proyect) => {
        // crea las imagenes 
        const imageProyect = document.createElement('div')
        imageProyect.classList.add('swiper-slide')
        imageProyect.innerHTML = `<img class="proyect-slider__item" data-id="${proyect.title}" src='${proyect.image}' alt='${proyect.title}' loading='lazy'>`
        document.getElementById("container-swiper").appendChild(imageProyect)

        // llena la descripcion y enlaces
        imageProyect.addEventListener('click', bgPreviewContent)
        document.querySelector(".swiper").addEventListener("mouseout", bgPreviewContent)
        document.querySelector(".proyects-preview-container").addEventListener("mouseout", bgPreviewContent)
        document.querySelector(".swiper").addEventListener("touchstart", bgPreviewContent)
        document.querySelector(".swiper").addEventListener("touchend", bgPreviewContent)
        document.querySelector(".proyects-preview-container").addEventListener("touchstart", bgPreviewContent)

    })
}
Proyects()

// Verifica si hay contenido en la seccion de proyectos sino para añadirlo 
let info = document.querySelector('.proyect-content__title')
if (info.textContent === "") {
    document.querySelector('.proyect-content__title').innerHTML = proyectList[0].title
    document.querySelector('.proyect-content__time').innerHTML = proyectList[0].time
    document.querySelector('.proyect-content__description').innerHTML = proyectList[0].content
    document.querySelector(".proyects-preview").style.backgroundImage = "url(" + proyectList[0].image + ")"
}

// botones y animacion para los videos 

/* ------------------------ BTNS ----------------------- */
let btnPlay = document.getElementById("btn-play")
let btnVolver = document.getElementById("btn-volver")

btnPlay.addEventListener("click", () => {
    document.querySelector(".proyect-content").style.left = "-150%"
    document.querySelector(".swiper").style.right = "-150%"
    document.querySelector(".technologies-icons").style.bottom = "-10%"
    document.querySelector(".proyects-preview").classList.add("video-preview")
    document.querySelector(".container-video").style.opacity = "1"
    document.querySelector(".container-video").style.pointerEvents = "auto"
    setTimeout(() => {
        btnVolver.style.left = "0"
        btnVolver.style.animation = "hoverVolver 5s 1"
    }, 1500)
})


btnVolver.addEventListener("click", () => {
    document.querySelector(".proyect-content").style.left = "0%"
    document.querySelector(".swiper").style.right = "0%"
    document.querySelector(".technologies-icons").style.bottom = "5%"
    document.querySelector(".proyects-preview").classList.remove("video-preview")
    document.querySelector(".container-video").style.opacity = "0"
    document.querySelector(".container-video").style.pointerEvents = "none"
    // cambiamos las propiedad del video para cortar la reproduccion y cambiamos el titulo para que la condicion del video de falso y lo corrija 
    document.querySelector(".container-video iframe").src = `https://www.youtube.com/`
    document.querySelector(".container-video iframe").dataset.title = ""
    btnVolver.style.left = "-100%"
})



import "./Modules/menu.js"
import "./Modules/home.js"

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    direction: "vertical",
    keyboard: true,
    loop: true,
    longSwipes: false,
    longSwipesMs: 600,
    speed: 300,
    slideToClickedSlide: true,
    spaceBetween: 230,
    breakpoints: {
        200: {
            direction: "horizontal",
        },

        992: {},
    },

    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
})
swiper.on('slideChange', function () {
    bgPreviewContent()
});
/* ----------------------- TOLLTIP ---------------------- */

tippy('.tooltip-ra', {
    content: 'My tooltip!',
});