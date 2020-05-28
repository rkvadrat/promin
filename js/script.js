var slideEl = $(".slide--parent");

slideEl.flickity({
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
});

//

const topItems = document.querySelectorAll('.show');
const botItems = document.querySelectorAll('.hide');

//Используем цикл forEach чтоб пройти по всем элемента массива(списка)
topItems.forEach((item, i) =>{
    item.addEventListener("click", function() {
        // Тут делаем так чтоб при уходе с элемента класс также удалялся у соотв. эл. botItems
        botItems[i].classList.toggle("active") 
    })
    
})



$(".show").on("click", function() {
  var currentText = $(this).text();
  if(currentText === "Показати менше"){
      $('.hidden').show();
      $(this).text("Показати більше");
  } else {
      $('.hidden').hide();
      $(this).text("Показати менше");
  };
});
//
new WOW().init();

//

$('.sl').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


