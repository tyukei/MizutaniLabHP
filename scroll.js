/* smooth scroll */
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + 100
            }, 1000);
        }
    });
});

/* active navigation item */
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('nav ul li.active').removeClass('active');
                $('nav ul li').eq(i).addClass('active');
            }
        });
    }).scroll();
});
