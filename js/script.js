$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});

var slideEl = $(".slide--parent");

slideEl.flickity({
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: true,
	pauseAutoPlayOnHover: false
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);