$(document).ready(function () {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      520:{
        items:1
      }
    }
  });

  $('.featured__carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
      },
      480:{
        items:2
      },
      680:{
        items:3,
      },
      1024:{
        items:4
      }
    }
  });

  $('.blog__carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        nav:false,
        margin:8,
      },
      640:{
        items:2,
        nav:false,
        margin:15,
      },
      1300:{
        items:2,
      },
    }
  });

  const iconSearch = document.querySelector('.icons__search');
  const body = document.querySelector('body');

  iconSearch.addEventListener('click', function (event) {
    event.stopPropagation();
    this.classList.add('icons__search--active');
  });

  body.addEventListener('click', function (event) {
    iconSearch.classList.remove('icons__search--active');
  });

});