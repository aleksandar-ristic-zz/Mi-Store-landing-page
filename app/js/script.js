;(() => {
	'use strict'

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
})()
