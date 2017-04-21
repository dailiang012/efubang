(function () {
    /**
     * header导航
     */
    $('#bang-nav a').click(function () {
        $('#bang-nav a').removeClass('nav-active');
        $(this).addClass('nav-active');
    });


    /**
     * menu侧边栏导航
     */
    $('.first-menu-name').on('click', function () {
        $(this).siblings('.second-menu').toggle();
        if ($(this).siblings('.second-menu').css('display') == 'block') {
            $(this).parent().removeClass().addClass('open-in');
            console.log('hehes');
        } else if ($(this).siblings('.second-menu').css('display') == 'none') {
            $(this).parent().removeClass().addClass('close-out');
        }
    });
    $('.first-menu-name').hover(function () {
        var display = $(this).siblings('.second-menu').css('display');
        if (display == 'block') {
            $(this).parent().removeClass().addClass('open-in');
        }
        if (display == 'none') {
            $(this).parent().removeClass().addClass('close-in');
        }
    }, function () {
        var display = $(this).siblings('.second-menu').css('display');
        if (display == 'block') {
            $(this).parent().removeClass().addClass('open-out');
        }
        if (display == 'none') {
            $(this).parent().removeClass().addClass('close-out');
        }
    });
    $('.first-menu').last().css('border', 'none');

    $('.second-menu li').on('click', function () {
        $('.second-menu li').removeClass();
        $(this).addClass('on');
    });
})();