

const topItems = document.querySelectorAll('.show');
const botItems = document.querySelectorAll('.hide');

topItems.forEach((item, i) =>{
    item.addEventListener("click", function() {
        botItems[i].classList.toggle("active") 
    })
    
})



$(".show").on("click", function() {
  const currentText = $(this).text();
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
  arrows : false,
  autoplay: true,
  autoplaySpeed: 4000,
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

  ]
});

//

$('.tsl').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows : false,
});
