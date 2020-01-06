window.onload = () => {
    $(function () {
        $(window).on('scroll', function () {
            // if ($(window).scrollTop() > 50) {
            //     $('.header--fixed').css({top: 0, opacity: 1, transition: 'opacity ease-in 0.6s'});
            // } else {
            //     $('.header--fixed').css({top: '-9rem', opacity: 0, transition: 'all 0s', transitionDelay: '0.5s'});
            // }
        });
    });

    // ========== SHOW MOBILE MENU ==========
    $('.js--header--mobile__menu-icon').click(() => {
        if ($('.js--header--mobile__menu-icon').hasClass('header--mobile__menu-icon--closed')) {
            $('.js--header--mobile__menu-icon').removeClass('header--mobile__menu-icon--closed').addClass('header--mobile__menu-icon--opened');
            $('.js--header--mobile__menu').css({
                left: 0
            });
            $('.js--bg--overlay').css({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                transition: 'all .4s',
                zIndex: 1
            });
            $('.js--header--mobile').addClass('header--mobile--opened');
        } else {
            $('.js--header--mobile__menu-icon').removeClass('header--mobile__menu-icon--opened').addClass('header--mobile__menu-icon--closed');
            $('.js--header--mobile__menu').css({
                left: '-22rem'
            });
            $('.js--bg--overlay').css({
                backgroundColor: 'unset',
                bottom: 'unset',
                left: 'unset',
                transition: 'all .4s'
            });
            $('.js--header--mobile').removeClass('header--mobile--opened');
        }
    });
};
