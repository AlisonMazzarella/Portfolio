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

    // On hover, adjust the styles of the middle image
    $('.carousel-container').on('mouseenter', '.slick-center', function() {
        $(this).css('transform', 'scale(1.05)'); // Increase the size slightly on hover
        $(this).siblings().not('.slick-center').css('transform', 'scale(0.9)'); // Decrease the size of other slides
    }).on('mouseleave', '.slick-center', function() {
        $(this).add($(this).siblings()).css('transform', 'scale(1)'); // Reset the scale on mouse leave
    });
}

// Entrance animations when the page loads
window.addEventListener('load', (event) => {
    animateEntrance();
    initCarousel(); // Initialize the carousel after the entrance animations
});

function animateEntrance() {
    // Your existing entrance animation function
}