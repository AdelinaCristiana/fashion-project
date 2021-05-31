//HAMBURGER MENU
// ____________________________________________________________________
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    mainMenu.style.display= 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%'
}


//SCROLL TO TOP  BUTTON
// ____________________________________________________________________

const toTop = document.querySelector('.to-top');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    } 
});

//OWL CAROUSEL
// ____________________________________________________________________

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
            margin: 0 ,
            nav: true, 
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1

                }
            }
        });
  });


 