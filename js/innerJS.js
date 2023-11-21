// const slides = document.querySelector('.slide');
// const slideItems = document.querySelectorAll('.slide-item');
// const swipelist = document.querySelector('.slide');
// let currentIndex = 0;

// function showNext() {
//   currentIndex = (currentIndex + 1) % 2;
//   updateCarousel();
// }

// function showPrev() {
//   currentIndex = (currentIndex - 1 + 2) % 2;
//   updateCarousel();
// }

// function updateCarousel() {
//   const newPosition = -currentIndex * 100 + '%';
// //   slides.style.transform = 'translateX(' + newPosition + ')';
// }

// setInterval(showNext, 1000);

// const initSlider = ()=>{
//  const imageList = document.querySelector(".slide-wapper .image-list");


//  const handleSlideButton = ()=>{
//   slideButton[0].style.display = imageList.scrollLeft <= 0? "none" : "block";
//   slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//  }
//  imageList.addEventListener("scroll", ()=>{
//   handleSlideButton();
//  });
// }
// window.addEventListener("load", initSlider);

document.addEventListener("DOMContentLoaded", function () {
    const imageList = document.querySelector(".image-list");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    scrollbarThumb.style.display = "none";

    imageList.addEventListener("scroll", function () {
        scrollbarThumb.style.display = "block";
        const scrollPercentage = (imageList.scrollLeft / (imageList.scrollWidth - imageList.clientWidth)) * 100;
        const thumbWidthPercentage = scrollPercentage;

        scrollbarThumb.style.width = thumbWidthPercentage + "%";
    });
});
