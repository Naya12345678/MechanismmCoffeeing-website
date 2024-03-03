// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// Menu Open CLose
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
// CLose Menu On ScroLL
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};
// ScroLLReaveL Animation
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-text", { origin: 'left' });
animate.reveal(".home-img", { origin: 'bottom' });
animate.reveal(".menu-img, .youtubechannel-box", { intervel: 100 });