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
            // console.log('hehes');
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



    /**
     * 根据状态打开或者关闭second-menu的内容
     */
    var $firstMenu = $('.first-menu>div');
    // console.log($firstMenu);
    for (var i = 0; i < $firstMenu.length; i++) {
        if ($($firstMenu[i]).hasClass('open-out') || $($firstMenu[i]).hasClass('open-in')) {
            $($firstMenu[i]).find('.second-menu').css('display', 'block');
        } else if ($($firstMenu[i]).hasClass('close-out') || $($firstMenu[i]).hasClass('close-in')) {
            $($firstMenu[i]).find('.second-menu').css('display', 'none');
        }
    }



    /**
     * tab切换
     */
    $('.tab>ul>li').each(function (index) {
        $(this).on('click', function () {
            $('.tab-content>div').hide().eq(index).show();
            $('.tab li').removeClass('on');
            $(this).removeClass().addClass('on');
        });
    });

    /**
     * 分页选中动效
     */
    var $DomPagination = $('.pagination');
    for (var i = 0; i < $DomPagination.length; i++) {
        //神过滤，勿动
        $($DomPagination[i]).children('li.page-up').nextUntil($('li.page-down').prev()).each(function () {
            $(this).on('click', function () {
                $(this).parent().children('li').removeClass('pagination-active');
                $(this).removeClass().addClass('pagination-active');
            });
        });
    }
})();