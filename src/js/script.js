function index() {
    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true,
            dots: false,
            focusOnSelect: true
        });
        $('.slick-prev').html('<i class="fas fa-chevron-left absolute-middle text-dark"></i>')
        $('.slick-next').html('<i class="fas fa-chevron-right absolute-middle text-dark"></i>')
        const getSrc = $('.slick-active img').attr('src')
        console.log(getSrc)
        $('.main').css({
            'background-image': 'linear-gradient(rgba(13, 106, 227,0.9),rgba(13, 106, 227,.9)),url(' + getSrc + ')'
        })
    });
    $('.btn-navbar-toggler').click(function () {
        $('.btn-navbar-toggler').toggleClass('open')
        $('.navbar-expand').toggleClass('show')
        $('.navbar-brand').toggleClass('change')
        if ($('.navbar-brand').hasClass('change')) {
            $('.navbar-brand img').attr('src', 'src/img/logo/logo-blue.png')
        } else {
            $('.navbar-brand img').attr('src', 'src/img/logo/logo-white.png')
        }
    })

    $('.icon').hover(function () {
        var y = $('img', this).attr('src')
        var newImg = y.replace('.png', '')
        $('img', this).attr('src', newImg + '-blue.png').css('transform', 'scale(1.3)')

    }, function () {
        var y = $('img', this).attr('src')
        var newImg = y.replace('-blue.png', '')
        $('img', this).attr('src', newImg + '.png').css('transform', 'scale(1)')
    })
}


// toggle password
$("body").on('click', '.toggle-password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }

});


// sign in 
$('.sign-in-right').click(function () {
    $('.sign-in-left').addClass('col-md-4').removeClass('col-md-8')
    $('.sign-in-right').addClass('col-md-8').removeClass('col-md-4')
    $('.form-sign-in').addClass('col-md-6').removeClass('col-md-12')
    $('.sign-in-right form').addClass('col-6 offset-3').removeClass('px-6')
    $('.sign-in-qr').css('padding', '3rem 2rem')
    $('.sign-in-qr h2').css({
        'margin-top': '6rem',
        'font-size': '24px'
    })
    $('.sign-in-qr p').css('font-size', '14px')
    $('.btn-sign-up').addClass('col-6 offset-3').removeClass('w-100')
    $('.sign-up-option').removeClass('pt-5')
})
$('.sign-in-left').click(function () {
    $('.sign-in-right').addClass('col-md-4').removeClass('col-md-8')
    $('.sign-in-left').addClass('col-md-8').removeClass('col-md-4')
    $('.sign-in-right form').removeClass('col-6 offset-3').addClass('px-6')
    $('.sign-in-qr h2').css('margin-top', '8rem')
    $('.sign-in-qr').css('padding', '5rem 4rem')
    $('.sign-in-qr h2').css({
        'margin-top': '8rem',
        'font-size': '2rem'
    })
    $('.sign-in-qr p').css('font-size', '16px')
    $('.btn-sign-up').addClass('w-100').removeClass('col-6 offset-3')
    $('.sign-up-option').addClass('pt-5')
})