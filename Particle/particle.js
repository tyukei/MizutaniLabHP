$(function () {

    //ページ内スクロール
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //ページトップ
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });

});



window.onload = function () {
    Particles.init(
        {
            selector: '.particle-background',
            sizeVariations: 10,
            color: ['#00bbdd', '#404B69', '#DBEDF3'],
            connectParticles: true
        }
    );
};