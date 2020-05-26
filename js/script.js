var slideEl = $(".slide--parent");

slideEl.flickity({
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
});

//
new WOW().init();

//

$('.sl').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});