const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const totalImages = slides.length

let activeSlide = 0

rightBtn.addEventListener('click', () => {
	if (activeSlide < totalImages - 1) {
		activeSlide++		
	}
	else {
		activeSlide = 0
	}
	setbgToBody()
})

leftBtn.addEventListener('click', () => {
	if (activeSlide > 0) {
		activeSlide--		
	}
	else {
		activeSlide = totalImages - 1
	}
	setbgToBody()
})

function setbgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage
	setActiveSlide()	
}

function setActiveSlide() {
	slides.forEach(slide => slide.classList.remove('active'))
	slides[activeSlide].classList.add('active')

}

setbgToBody()
