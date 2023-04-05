// alert('Kod JS podpięty prawidłowo')
// ============================================================================
// Navbar - Scroll-reveal
// let prevScrollpos = window.pageYOffset
// window.onscroll = function () {
// 	let currentScrollPos = window.pageYOffset

// 	if (currentScrollPos < 100) {
// 		document.querySelector('.navbar').classList.remove('scroll-down')
// 	} else if (prevScrollpos > currentScrollPos) {
// 		document.querySelector('.navbar').classList.remove('scroll-down')
// 		document.querySelector('.navbar').classList.add('scroll-up')
// 	} else {
// 		document.querySelector('.navbar').classList.remove('scroll-up')
// 		document.querySelector('.navbar').classList.add('scroll-down')
// 	}
// 	prevScrollpos = currentScrollPos
// }
// ============================================================================
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
// ============================================================================
// ScrollSpy
const homeTab = document.querySelector('.home-scroll')
const aboutusTab = document.querySelector('.aboutus-scroll')
const offerTab = document.querySelector('.offer-scroll')
const contactTab = document.querySelector('.contact-scroll')

window.onscroll = () => {
	let currentScrollPos = window.pageYOffset

	if (currentScrollPos < 412) {
		homeTab.classList.add('scroll-active')
		aboutusTab.classList.remove('scroll-active')
		offerTab.classList.remove('scroll-active')
		contactTab.classList.remove('scroll-active')
	} else if (currentScrollPos > 412 && currentScrollPos < 600) {
		homeTab.classList.remove('scroll-active')
		aboutusTab.classList.add('scroll-active')
	} else {
		homeTab.classList.remove('scroll-active')
	}
}
// ============================================================================
