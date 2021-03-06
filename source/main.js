$(document).ready(function() {

	//Burger menu
	$('.burger').click(function() {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

	// Next Slide
	$('.next').click(function() {
		let currentImage = $('.img.curry');
		let currentImageIndex = $('.img.curry').index();
		let nextImageIndex = currentImageIndex + 1;
		let nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');

		if( nextImageIndex == ($('.img:last').index() + 1)) {
			$('.img').eq(0).fadeIn(1000);
			$('.img').eq(0).addClass('curry');
		} else{
			nextImage.fadeIn(1000);
			nextImage.addClass('curry');
		}
	})

	//Previous Slide
	$('.prev').click(function() {
		let currentImage = $('.img.curry');
		let currentImageIndex = $('.img.curry').index();
		let prevImageIndex = currentImageIndex - 1;
		let pervImage = $('.img').eq(prevImageIndex);

		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');

		pervImage.fadeIn(1000);
		pervImage.addClass('curry');
	});
})

const anchors = document.querySelectorAll('a[href*="#"]');

for ( let anchor of anchors ) {
	anchor.addEventListener('click', function  (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView( {
			behavior: 'smooth',
			block: 'start'
		});
	})
}

const procents = document.querySelectorAll('.procent');
