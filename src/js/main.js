// alert('Kod JS podpięty prawidłowo')

// Navbar - Scroll-reveal
let prevScrollpos = window.pageYOffset
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset

	if (currentScrollPos < 80) {
		document.querySelector('.navbar').classList.remove('scroll-down')
	} else if (prevScrollpos > currentScrollPos) {
		document.querySelector('.navbar').classList.remove('scroll-down')
		document.querySelector('.navbar').classList.add('scroll-up')
	} else {
		document.querySelector('.navbar').classList.remove('scroll-up')
		document.querySelector('.navbar').classList.add('scroll-down')
	}
	prevScrollpos = currentScrollPos
}

// Burger button - MENU
// const nav = document.querySelector('.nav')
// const burgerBtn = document.querySelector('.burger-btn')
// const navItems = document.querySelectorAll('.nav__item')

// const handleNav = () => {
// 	nav.classList.toggle('nav--active')
// 	navItems.forEach(item => {
// 		item.addEventListener('click', () => {
// 			nav.classList.remove('nav--active')
// 		})
// 	})
// }

// burgerBtn.addEventListener('click', handleNav)

// Alert i kopiowanie treści do schowka
// function showAlert(message, duration) {
// 	const alertBox = document.createElement('div')
// 	alertBox.classList.add('alert')
// 	alertBox.textContent = message
// 	document.body.appendChild(alertBox)
// 	setTimeout(function () {
// 		alertBox.remove()
// 	}, duration)
// }

// function copyToClipboard(elementId) {
// 	const copyText = document.getElementById(elementId).textContent
// 	navigator.clipboard
// 		.writeText(copyText)
// 		.then(() => {
// 			// confirm('Tekst został skopiowany do schowka.')
// 			showAlert('Kod produktu skopiowany do schowka!', 1500)
// 		})
// 		.catch(err => {
// 			console.error('Wystąpił błąd podczas kopiowania do schowka: ', err)
// 		})
// }

// Burger button - mój

const burgerBtn = document.querySelector('.burger-btn')
const burgerIcon = document.querySelector('.burger-btn__icon')
const sideNav = document.querySelector('.side-nav')
const navbar = document.querySelector('.navbar')

const navAction = () => {
	burgerIcon.classList.toggle('active')
	sideNav.classList.toggle('visible')
	// navbar.classList.toggle('gradient')
}

burgerBtn.addEventListener('click', navAction)
