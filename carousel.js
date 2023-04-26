let next = document.querySelector('button[data-carousel-next]');
let prev = document.querySelector('button[data-carousel-prev]');
let slides = document.querySelector('.carousel__content');
// let carouselInfo = document.querySelector('.carousel__info');
let carousel = document.querySelector('.carousel');
let startSlide = document.querySelector("div[data-carousel='slide']");

let sectionIndex = 0;
let slidesLen = slides.children.length;

function reset() {
	for (let i = 0; i < slides.children.length; i++) {
		slides.children[i].style.zIndex = 0;
        slides.children[i].style.opacity=0;
        slides.children[sectionIndex].classList.remove('animate');
	}
}

let intervalId;
function startShow() {
	intervalId = setInterval(function () {
		reset();
		sectionIndex = sectionIndex < slidesLen - 1 ? sectionIndex + 1 : 0;
		slides.children[sectionIndex].style.zIndex = 1;
        slides.children[sectionIndex].style.opacity=1;
        slides.children[sectionIndex].classList.add('animate');
	}, 3000);
}

if (startSlide) {
	startShow();
	carousel.addEventListener('mouseover', () => {
		console.log('mouseover');
		clearInterval(intervalId);
	});

	carousel.addEventListener('mouseout', () => {
		startShow();
	});
}

next.addEventListener('click', () => {
	reset();
	sectionIndex = sectionIndex < slidesLen - 1 ? sectionIndex + 1 : 0;
	slides.children[sectionIndex].style.zIndex = 1;
    slides.children[sectionIndex].style.opacity=1;
    slides.children[sectionIndex].classList.add('animate');
});

prev.addEventListener('click', () => {
	reset();
	sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : slidesLen - 1;
	slides.children[sectionIndex].style.zIndex = 1;
    slides.children[sectionIndex].style.opacity=1;
    slides.children[sectionIndex].classList.add('animate');
});
