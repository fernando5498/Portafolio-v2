var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	direction: "vertical",
	keyboard: true,
	loop: true,
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

let bg = document.querySelector(".proyects-preview")
let itemTitle = document.querySelector(".proyect-content__title")
let itemTime = document.querySelector(".proyect-content__time")
let itemDescrp = document.querySelector(".proyect-content__description")
/* ------------------------ BTNS ----------------------- */
let itemSite = document.getElementById("btn-site")
let itemGit = document.getElementById("btn-github")
let btnPlay = document.getElementById("btn-play")
let btnVolver = document.getElementById("btn-volver")
/* ---------------------- IMAGENENS --------------------- */

let technologiesIcons = document.querySelector(".technologies-icons")
let html = `<img src="assets/img/icons/html.svg">`
let css = `<img src="assets/img/icons/css-icon.svg">`
let sass = `<img src="assets/img/icons/sass-icon.svg">`
let bootstrap = `<img src="assets/img/icons/bootstrap-icon.svg">`
let js = `<img src="assets/img/icons/js-icon.svg">`
let illust = `<img src="assets/img/icons/illustrator-icon.svg">`
let premi = `<img src="assets/img/icons/premiere-icon.svg">`
let afterE = `<img src="assets/img/icons/afterEffects-icon.svg">`

function bgPreviewContent() {
	let item = document.querySelector(".swiper-slide-active")
	let img = item.firstElementChild.src
	let title = item.dataset.title
	let time = item.dataset.time
	let description = item.dataset.description
	let site = item.dataset.site
	let git = item.dataset.github
	let ulrVid = item.dataset.video

	/* --------------------- Accion -------------------- */

	bg.style.backgroundImage = "url(" + img + ")"
	bg.style.animate
	itemTitle.innerHTML = title
	itemTime.innerHTML = time
	itemDescrp.innerHTML = description
	itemSite.href = site
	itemGit.href = git
	/* ---------------- FILTRO PARA VIDEO --------------- */

	if (item.dataset.video) {
		itemGit.style.display = "none"
		itemSite.style.display = "none"
		document.getElementById("btn-play").classList.remove("d-none")
		document.querySelector(
			".container-video iframe"
		).src = `https://www.youtube.com/embed/${ulrVid}`
	} else {
		itemGit.style.display = "flex"
		itemSite.style.display = "flex"
		document.getElementById("btn-play").classList.add("d-none")
	}
	/* --------------------- ICONOS --------------------- */
	if (item.dataset.etiqueta == "html,css") {
		technologiesIcons.innerHTML = html + css
	}
	if (item.dataset.etiqueta == "html,css,js") {
		technologiesIcons.innerHTML = html + css + js
	}
	if (item.dataset.etiqueta == "html,css,sass,js") {
		technologiesIcons.innerHTML = html + css + sass + js
	}
	if (item.dataset.etiqueta == "html,css,sass,bootstrap,js") {
		technologiesIcons.innerHTML = html + css + sass + bootstrap + js
	}
	if (item.dataset.etiqueta == "illustrator,premiere") {
		technologiesIcons.innerHTML = illust + premi
	}
	if (item.dataset.etiqueta == "illustrator,premiere,after") {
		technologiesIcons.innerHTML = illust + premi + afterE
	}
	if (item.dataset.etiqueta == "premiere,after") {
		technologiesIcons.innerHTML = premi + afterE
	}
}

document.querySelector(".swiper").addEventListener("mouseout", bgPreviewContent)
document
	.querySelector(".proyects-preview-container")
	.addEventListener("mouseout", bgPreviewContent)
document.querySelector(".swiper").addEventListener("touchstart", bgPreviewContent)
document.querySelector(".swiper").addEventListener("touchend", bgPreviewContent)
document
	.querySelector(".proyects-preview-container")
	.addEventListener("touchstart", bgPreviewContent)

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
	}, 2000)
})

btnVolver.addEventListener("click", () => {
	document.querySelector(".proyect-content").style.left = "0%"
	document.querySelector(".swiper").style.right = "0%"
	document.querySelector(".technologies-icons").style.bottom = "5%"
	document.querySelector(".proyects-preview").classList.remove("video-preview")

	document.querySelector(".container-video").style.opacity = "0"
	document.querySelector(".container-video").style.pointerEvents = "none"
	btnVolver.style.left = "-100%"
})

btnVolver.addEventListener("touchend", () => {
	document.querySelector(".proyect-content").style.left = "0%"
	document.querySelector(".swiper").style.right = "0%"
	document.querySelector(".technologies-icons").style.bottom = "5%"
	document.querySelector(".proyects-preview").classList.remove("video-preview")

	document.querySelector(".container-video").style.opacity = "0"
	document.querySelector(".container-video").style.pointerEvents = "none"
	document.querySelector(".container-video iframe").src = `https://www.youtube.com/`
	btnVolver.style.left = "-100%"
})
