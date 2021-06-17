;(() => {
	'use strict'

	const header = document.querySelector('.header')
	const heroSection = document.querySelector('.hero-section')

	//* Nav menu
	window.addEventListener('scroll', () => {
		if (
			document.documentElement.scrollTop >= 85 &&
			!header.classList.contains('fixed')
		) {
			header.classList.replace('static', 'fixed')
			heroSection.style.marginTop = '76px'
		}
		if (
			document.documentElement.scrollTop < 85 &&
			header.classList.contains('fixed')
		) {
			header.classList.replace('fixed', 'static')
			heroSection.style.marginTop = '0'
		}
	})

	//* Phone showcase *//
	const box = document.querySelector('.phone-case')
	let x = 0
	let y = 20
	let z = 0
	let selfControl = true
	let interval

	document.querySelector('.top-x-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
	})
	document.querySelector('.bottom-x-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
	})

	document.querySelector('.left-y-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`
	})
	document.querySelector('.right-y-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`
	})

	document.querySelector('.top-z-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`
	})
	document.querySelector('.bottom-z-ctrl').addEventListener('click', () => {
		box.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`
	})

	const playPause = () => {
		if (selfControl) {
			interval = setInterval(() => {
				box.style.transform = `rotateX(${x}deg) rotateY(${y--}deg) rotateZ(${z}deg)`
			}, 200)
		} else {
			clearInterval(interval)
		}
	}

	playPause()

	document.querySelector('.controls').addEventListener('mouseover', () => {
		selfControl = false
		playPause()
	})

	document.querySelector('.controls').addEventListener('mouseout', () => {
		selfControl = true
		playPause()
	})
	//! phone showcase end

	//* Hover effect in phone section *//
	const phoneSection = document.querySelector('.phone-section')
	const phoneImages = phoneSection.querySelectorAll('img[class*="pocophone"]')
	const learnMoreBtn = phoneSection.querySelector('.learn-more')
	const startShopBtn = phoneSection.querySelector('.start-shop')

	learnMoreBtn.addEventListener('mouseover', () => {
		phoneImages[0].style.opacity = '0'
		phoneImages[0].style.animation = ''
		phoneImages[1].style.animation = 'slide .5s .1s ease-in forwards'
		phoneImages[2].style.opacity = '0'
		phoneImages[2].style.animation = ''
	})
	startShopBtn.addEventListener('mouseover', () => {
		phoneImages[0].style.opacity = '0'
		phoneImages[0].style.animation = ''
		phoneImages[1].style.opacity = '0'
		phoneImages[1].style.animation = ''
		phoneImages[2].style.animation = 'slide .5s .1s ease-in forwards'
	})

	phoneSection.querySelectorAll('.phone-btn').forEach(btn => {
		btn.addEventListener('mouseleave', () => {
			phoneImages[0].style.animation = 'slide .5s .1s ease-in forwards'
			phoneImages[1].style.opacity = '0'
			phoneImages[1].style.animation = ''
			phoneImages[2].style.opacity = '0'
			phoneImages[2].style.animation = ''
		})
	})
	//! phones section end

	//* Laptop Section *//
	const laptopSection = document.querySelector('.laptop-section')

	window.addEventListener('scroll', () => {
		if (
			window.pageYOffset + window.innerHeight >=
			laptopSection.offsetTop + (laptopSection.offsetHeight / 3) * 2
		) {
			laptopSection.classList.add('change')
		}
	})
})()
