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
            maxParticles: 50,
            sizeVariations: 50,
            speed: 0.3,
            color: ['#D0D0D0', '#FFE5B4', '#BBBBBB'],
            connectParticles: true,
            minDistance: 300,
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