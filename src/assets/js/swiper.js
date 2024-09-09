var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Prevent auto slideshow from being stopped when user interacts with the slider
    },
    pagination: {
        el: '.swiper-pagination',
    },
    effect: 'coverflow', // Specify the animation effect ('fade' in this case)
    // fadeEffect: {
    //     crossFade: true // Enable cross-fade animation
    // }
});