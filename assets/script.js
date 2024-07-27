const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideActuel = 0;

const sliderImage = document.getElementById('sliderImage');
const tagLine = document.getElementById('tagLine');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const dots = document.querySelectorAll('.dot');

// DOTS + UPTADE

function updateSlide() {
  const slider = slides[slideActuel];
  sliderImage.setAttribute('src', 'assets/images/slideshow/' + slider.image);
  tagLine.innerHTML = slider.tagLine;


dots.forEach((dot, index) => {
	if (index === slideActuel) {
		dot.classList.add('dot_selected');
	} else {
		dot.classList.remove('dot_selected');
	}
});
}


// Arrow
arrowRight.addEventListener("click", function () {
  slideActuel++;
  if (slideActuel >= slides.length) {
    slideActuel = 0; 
  }
  updateSlide();
});


arrowLeft.addEventListener("click", function () {
  slideActuel--;
  if (slideActuel < 0) {
    slideActuel = slides.length - 1; 
  }
  updateSlide();
});

updateSlide();

