"use strict"

/* Bootstrap modal */
const modal = (() => {
    // Login
    $('.callModalLogin').click(function () {
        $('#modalLogin').modal('show');
    })
    // Register
    $('.callModalRegister').click(function () {
        $('#modalRegister').modal('show');
        $('.ui.dropdown')
        .dropdown({
            duration: 0
        });
    })
    // Call register from login
    $('#callRegiterFromLogin').click(function () {
        $('#modalLogin').modal('hide');
        setTimeout(() => {
            $('#modalRegister').modal('show');
        }, 200);
        $('.ui.dropdown')
        .dropdown({
            duration: 0
        });
    })
    // Call login from register
    $('#callLoginFromRegiter').click(function () {
        $('#modalRegister').modal('hide');
        setTimeout(() => {
            $('#modalLogin').modal('show');
        }, 200);
    })
})();

export default modal;