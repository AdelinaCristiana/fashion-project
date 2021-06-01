//HAMBURGER MENU
// ____________________________________________________________________
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const StickyMenu = document.querySelector("header");


openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);


function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  StickyMenu.classList.add("sticky-menu");
}

function close() {
  mainMenu.style.top = "-100vh";
  StickyMenu.classList.remove("sticky-menu");
}


//SCROLL TO TOP  BUTTON
// ____________________________________________________________________

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


//OWL CAROUSEL
// ____________________________________________________________________

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});

//Mobile menu link scroll
// ____________________________________________________________________
$(document).ready(function () {
    $('.nav-item a[href^="#"]').on("click", function () {
        $(".mainMenu").addClass("d-none"); 
        $("header").addClass("reset-position"); 
        if($(window).width() < 1024)
        //If is less than 1024 do this size
        {
          $(".d-none").css("display", "none");
          $(".reset-position").css("position", "static");
        }
      });
});

