var slideEl = $(".slide--parent");

slideEl.flickity({
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: true,
	pauseAutoPlayOnHover: false
});


// 
new WOW().init();

//

$('.sl').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
	