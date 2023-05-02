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
            selector: '.particle-background-white',
            maxParticles: 100,
            sizeVariations: 15,
            speed: 3,
            color: ['#FFE5B4', '#00796B', '#BBBBBB'],
            connectParticles: false,
            // レスポンシブ用ブレイクポイントとパーティクル値を配列で設定できる
            responsive: [
                {
                breakpoint: 768,
                options: {
                    maxParticles: 10,
                }
                },
            ]
        }
    );
};