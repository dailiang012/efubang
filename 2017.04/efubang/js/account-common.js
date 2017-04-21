/*
 * @Author: pc
 * @Date:   2017-04-20 09:30:57
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-04-20 12:01:00
 */
(function() {
    $('.first-menu-name').on('click', function() {
        $(this).siblings('.second-menu').toggle();
        if ($(this).siblings('.second-menu').css('display') == 'block') {
            $(this).parent().removeClass().addClass('open-in');
            console.log('hehes');
        } else if ($(this).siblings('.second-menu').css('display') == 'none') {
            $(this).parent().removeClass().addClass('close-out');
        }
    });
    $('.first-menu-name').hover(function() {
        var display = $(this).siblings('.second-menu').css('display');
        if (display == 'block') {
            $(this).parent().removeClass().addClass('open-in');
        }
        if (display == 'none') {
            $(this).parent().removeClass().addClass('close-in');
        }
    }, function() {
        var display = $(this).siblings('.second-menu').css('display');
        if (display == 'block') {
            $(this).parent().removeClass().addClass('open-out');
        }
        if (display == 'none') {
            $(this).parent().removeClass().addClass('close-out');
        }
    });
    $('.first-menu').last().css('border', 'none');

    $('.second-menu li').on('click', function() {
        $('.second-menu li').removeClass();
        $(this).addClass('on');
    });
})();




