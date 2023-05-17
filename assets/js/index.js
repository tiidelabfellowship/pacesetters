let menuBtn = document.querySelector('.fa-bars');
let navLinks = document.querySelector('.navbar');

menuBtn.addEventListener('click', function(){
    console.log("clicked")
    navLinks.classList.toggle('show');
});







var swiper = new Swiper(".slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
loop: true,
});






// date update
document.getElementById(copyright).appendChild(
    document.createTextNode(new Date().getFullYear(
    )))