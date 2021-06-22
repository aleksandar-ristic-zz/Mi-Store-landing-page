;(() => {
	;('use strict')

	const header = document.querySelector('.header')
	const heroSection = document.querySelector('.hero-section')

	//* Nav menu
	window.addEventListener('scroll', () => {
		if (
			document.documentElement.scrollTop >= 85 &&
			!header.classList.contains('fixed')
		) {
			header.classList.replace('static', 'fixed')
			heroSection.style.marginTop = '70px'
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
	let selfInterval
	let moveInterval

	document.querySelector('.top-x-ctrl').addEventListener('mousedown', () => {
	  moveInterval= setInterval(() => {
			box.style.transform = `rotateX(${(x += 5)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
		}, 100)
	})
	document.querySelector('.bottom-x-ctrl').addEventListener('mousedown', () => {
		moveInterval= setInterval(() => {	
			box.style.transform = `rotateX(${(x -= 5)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
	}, 100)
	})

	document.querySelector('.left-y-ctrl').addEventListener('mousedown', () => {
		moveInterval= setInterval(() => {	
			box.style.transform = `rotateX(${x}deg) rotateY(${(y -= 5)}deg) rotateZ(${z}deg)`
	}, 100)
	})
	document.querySelector('.right-y-ctrl').addEventListener('mousedown', () => {
		moveInterval= setInterval(() => {	
			box.style.transform = `rotateX(${x}deg) rotateY(${(y += 5)}deg) rotateZ(${z}deg)`
	}, 100)
	})

	document.querySelector('.top-z-ctrl').addEventListener('mousedown', () => {
		moveInterval= setInterval(() => {	
			box.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 5)}deg)`
	}, 100)
	})
	document.querySelector('.bottom-z-ctrl').addEventListener('mousedown', () => {
		moveInterval= setInterval(() => {	
			box.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 5)}deg)`
	}, 100)
	})

	document.querySelectorAll('i[class$="ctrl"').forEach(btn => {
		btn.addEventListener('mouseup', () => {
		clearInterval(moveInterval)
		})
	})

	const playPause = () => {
		if (selfControl) {
			selfInterval = setInterval(() => {
				box.style.transform = `rotateX(${x}deg) rotateY(${y--}deg) rotateZ(${z}deg)`
			}, 100)
		} else {
			clearInterval(selfInterval)
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
	//! laptop section end

	//* Watch Combinations Section *//
	const watchesSection = document.querySelector('.watches-section')
	const watchBands = watchesSection.querySelector('.watches__cases')
	const watchCases = watchesSection.querySelector('.watches__bands')
	const watchNo = watchesSection.querySelectorAll('.watches__cases__img')

	const watchCtrlTop = watchesSection.querySelector('.watches__control__top')
	const watchCtrlRight = watchesSection.querySelector(
		'.watches__control__right'
	)
	const watchCtrlBottom = watchesSection.querySelector(
		'.watches__control__bottom'
	)
	const watchCtrlLeft = watchesSection.querySelector('.watches__control__left')

	// only 1 axis for Y because no trouble with up and bottom margin
	// 2 axis for left and right cause if I put one it either crushes at (87.rem) or skips a few beacuse we jump from marginLeft -something to marginRight that.
	let axisY = 0
	let axisL = 0
	let axisR = 0

	// for blocking button pressing at the last piece of band/case
	// we always start from the middle
	let blockY = Math.floor(watchNo.length / 2)
	let blockX = Math.floor(watchNo.length / 2)
	//* Click controls
	watchCtrlTop.onclick = watchUp
	watchCtrlRight.onclick = watchRight
	watchCtrlBottom.onclick = watchBottom
	watchCtrlLeft.onclick = watchLeft

	//* Arrow Keys
	watchesSection.onkeydown = findKey

	function findKey(e) {
		e.preventDefault()
		const key = e.key

		switch (key) {
			case 'ArrowUp':
				return watchUp()
			case 'ArrowRight':
				return watchRight()
			case 'ArrowDown':
				return watchBottom()
			case 'ArrowLeft':
				return watchLeft()
			default:
				return
		}
	}

	const MAX_WATCH = watchNo.length - 1

	function watchUp() {
		if (blockY === 0) return
		watchBands.style.marginTop = `${(axisY -= 43.75)}rem`
		blockY--
	}
	function watchRight() {
		if (blockX === MAX_WATCH) return
		watchCases.style.marginLeft = `${(axisL -= 43.75)}rem`
		blockX++
	}
	function watchBottom() {
		if (blockY === MAX_WATCH) return
		watchBands.style.marginTop = `${(axisY += 43.75)}rem`
		blockY++
	}
	function watchLeft() {
		if (blockX === 0) return
		watchCases.style.marginRight = `${(axisR -= 43.75)}rem`
		blockX--
	}
	//! watches end

	/* Earbuds Section */
	const earbudsSection = document.querySelector('.earbuds-section')
	const btn = earbudsSection.querySelectorAll('.btn')
	const w50 = earbudsSection.querySelectorAll('.w-50')

	w50.forEach((el, idx) => {
		el.addEventListener('mouseover', () => {
			btn[idx].style.opacity = '1'
			btn[idx].style.transform = 'scale(1)'
		})

		el.addEventListener('mouseout', () => {
			btn[idx].style.opacity = '0'
			btn[idx].style.transform = 'scale(0)'
		})
	})
	//! earbuds end

	/* Back to top Button */
	const heroSectionHeight = heroSection.clientHeight
	const btnBackToTop = document.querySelector('.back-to-top')

	window.addEventListener('scroll', () => {
		if (
			document.documentElement.scrollTop >= heroSectionHeight &&
			btnBackToTop.classList.contains('hide')
		) {
			btnBackToTop.classList.remove('hide')
		}
		if (
			document.documentElement.scrollTop < heroSectionHeight &&
			!btnBackToTop.classList.contains('hide')
		) {
			document.documentElement.style.animation = ''
			btnBackToTop.classList.add('hide')
		}
	})

	btnBackToTop.addEventListener('click', () => {
		document.documentElement.style.animation = 'scroll .8s ease-out forwards'
		document.documentElement.scrollTop = 0
		header.classList.replace('fixed', 'static')
		heroSection.style.marginTop = '0'
	})
})()
