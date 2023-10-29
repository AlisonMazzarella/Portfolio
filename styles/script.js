function initCarousel() {
    $('.carousel-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.carousel-container').on('mouseenter', '.slick-slide', function() {
        $('.slick-slide').removeClass('scaled-down scaled-up'); // Reset styles for all slides
        $(this).addClass('scaled-up'); // Pop-up the hovered slide
        $('.slick-slide').not(this).addClass('scaled-down'); // Scale down other slides
    }).on('mouseleave', function() {
        $('.slick-slide').removeClass('scaled-down scaled-up'); // Reset styles on mouse leave
    });
}

window.addEventListener('load', (event) => {
    animateEntrance();
    initCarousel(); // Initialize the carousel after the entrance animations
});

function animateEntrance() {
    // Your existing entrance animation function
}