$(document).ready(function() {
	
	new WOW().init();
	M.AutoInit()
	
	var nav = $('.second-page .navbar');
	$(nav).hide();
	$('body').addClass('fixed');

    $('.scroll-button').on('click','a', function (event) {
        event.preventDefault();
        $('body').removeClass('fixed');
        var block  = $(this).attr('href'),
        top = $(block).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	
    });

	var FirstPageHeight = $('.first-page').height();
 	$(window).scroll(function () {
		if ($(this).scrollTop() > FirstPageHeight) {
			nav.addClass('fixed-navbar');
			nav.fadeIn(800);
		} else {
			nav.removeClass('fixed-navbar');
			nav.fadeOut(800);
		}
	});
	
	var menu = $('.menu ul');
	menu.hide();
	var iconMenu = $('.menu-icon .material-icons');
	$('.menu-icon .btn-floating').on('click', function () {
		if (iconMenu.text() === 'menu') {
		iconMenu.text('close');
		} else {
		iconMenu.text('menu');
		}
		menu.fadeToggle();
	});
	
	var horizontalSlider = $('.regular');
	
	horizontalSlider.slick({
		infinite: false
    });
		
	horizontalSlider.on('afterChange', function(event, slick, currentSlide){
		$('.horizontal .circle').removeClass('selected');
		if (currentSlide === 0) {
			$('.horizontal .num-0').addClass('selected'); 
		} else if (currentSlide === 1) {
			$('.horizontal .num-1').addClass('selected'); 
		} else {
			$('.horizontal .num-2').addClass('selected'); 
		}
    });
	
	horizontalSlider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));
	
	var verticalSlider = $('.vertical-center');
	
	verticalSlider.slick({
		vertical: true,
		infinite: false,
		arrows: false,
      });
	
	verticalSlider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));
	
	verticalSlider.on('afterChange', function(event, slick, currentSlide){
		$('.vertical .circle').removeClass('selected');
		if (currentSlide == 0) {
			$('.vertical .num-0').addClass('selected'); 
		} else if (currentSlide == 1) {
			$('.vertical .num-1').addClass('selected'); 
		} else {
			$('.vertical .num-2').addClass('selected'); 
		}
    });
	
	$('.circle').on('click', function() {
		var slideIndex = $(this).index();
		verticalSlider.slick('slickGoTo', parseInt(slideIndex));
		horizontalSlider.slick('slickGoTo', parseInt(slideIndex));
	});
	
});