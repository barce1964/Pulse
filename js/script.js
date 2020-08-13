// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         //arrows: false,
//         speed: 1500,
//         // slidesToShow: 1,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         // fade: true,
//         // cssEase: 'linear',
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     // dots: true,
//                     arrows: false,
//                     slidesToShow: 1,
//                     autoplay: true,
//                     autoplaySpeed: 2000,
//                     fade: true,
//                     cssEase: 'linear'
//                 }
//             }
//         ]
//       });
//   });



const slider = tns({
    container: '.carousel__inner',
    //gutter: 30,
    items: 1,
    slideBy: 'page',
    controls: false,
    autoplay: false,
    nav: false, 
    speed: 2000,
    responsive: {
        575: {
            gutter: 15,
            items: 1,
            touch: true
         },
        767: {
            gutter: 20,
            items: 1
         },
        991: {
            gutter: 25,
            items: 1
         },
        1200: {
            gutter: 30,
            items: 1
        }
     }
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
  });