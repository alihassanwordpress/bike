const bikeData = [
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-1.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-2.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-3.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-4.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-5.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-6.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-7.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "bike-8.png",
        tag: "Free Cancellation",
    },
];

// Function to create bike box element
const createBikeBox = (bike) => `
      <div class="bike-box">
                <img src="${bike.image}" alt="" class="box-img">
                <div class="title-price">
                    <div class="title-data">
                        <h2>${bike.name}</h2>
                        <p>${bike.type}</p>
                    </div>
                    <h3 class="bike-price">$${bike.price}<span>/hour</span></h3>
                </div>
                <a href="#" class="book-btn">Book Bikes</a>
                <span class="tag">${bike.tag}</span>
            </div>
`;

const bikeContent = document.querySelector('.bikes-content');

// Create bike box and show in bikeContent div 
bikeData.forEach((bike) => {
    const bikeBoxHtml = createBikeBox(bike);
    bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
});

// Initialize Swiper
var swiper = new Swiper(".destination-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//create with AI
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100; // 100% width per slide
    slides.style.transform = `translateX(${offset}%)`;
}


// Menu 
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('move');
    });
});
