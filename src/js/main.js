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

// Burger button - mój

const burgerBtn = document.querySelector('.burger-btn')
const burgerIcon = document.querySelector('.burger-btn__icon')
const sideNav = document.querySelector('.side-nav')
const navbar = document.querySelector('.navbar')
const navItems = document.querySelectorAll('.nav-item')

const navAction = () => {
	burgerIcon.classList.toggle('active')
	sideNav.classList.toggle('visible')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			burgerIcon.classList.add('active')
			sideNav.classList.remove('visible')
		})
	})
}

burgerBtn.addEventListener('click', navAction)
