$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
    });

    let $btn = $('.up');

    function scrollBtn() {
        let top = $(this).scrollTop();

        if(top > 180) {
            $btn.fadeIn(400);
        } else {
            $btn.fadeOut(400);
        }
        console.log(top);
    }

    scrollBtn();
    
    $(document).on('scroll', scrollBtn);

    $btn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
});
