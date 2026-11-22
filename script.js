// File: script.js
$(document).ready(function () {
    let count = 0;

    $('.add-to-cart').click(function () {
        
        count++;
        $('#cart-count').text(count);

        
        let cakeName = $(this).data('name');

        
        $('#toast-msg')
            .stop(true, true)
            .text('Đã thêm "' + cakeName + '" vào giỏ hàng!')
            .fadeIn(300)
            .delay(1500)
            .fadeOut(400);

        
        let btn = $(this);
        btn.text('✔ Đã thêm').css('background-color', '#2b9348');
        setTimeout(function () {
            btn.text('Thêm vào giỏ').css('background-color', '#ff758f');
        }, 800);
    });
});
