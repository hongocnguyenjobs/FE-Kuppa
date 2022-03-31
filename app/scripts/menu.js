"use strict";

/* Main menu */
const menu = (() => {
    // Menu mobile
    $('#callHeaderMobileMenu').click(function () {
        let menu = $('#headerMobileMenu');
        if (!menu.hasClass('active')) {
            menu.addClass('active ');
        } else {
            menu.removeClass('active ');
        }
    });
    $(window).scroll(function() {
        var menu = $('.check-hang');
        if ($(window).scrollTop() >= 100) {
            if (!menu.hasClass('show-hang')) {
                menu.addClass('show-hang', 1000, "easeOutBounce");
            }
        } else {
            if (menu.hasClass('show-hang')) {
                menu.removeClass('show-hang', 1000, "easeOutBounce");
            }
        }
    });
})();

export default menu;