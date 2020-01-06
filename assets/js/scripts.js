window.onload = () => {
    // ========== SHOW MOBILE MENU AND ADD BACKGROUND OVERLAY ==========
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
    // ========== SHOW SECTION INFOS ==========
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 300) {
            $('.js--section-infos').css({
                opacity: 1,
                transition: 'all .4s'
            });
        }
    });
    // ========== SHOW SECTION INFOS ==========
    const cards = document.getElementById('cards');
    const cardsLength = $('#cards').children().length;
    const animationDelay = 0.2;
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 1000) {
            $('.js--section-cards').css({
                marginTop: 0,
                opacity: 1,
                transition: 'all 1s'
            });
            for (let i = 1; i < cardsLength; i++) {
                cards.children[i].style.opacity = 1;
                cards.children[i].style.marginTop = 0;
                cards.children[i].style.transition = 'all .2s linear ' + animationDelay * (i - 0.5) + 's';
            }
        }
    });
};
