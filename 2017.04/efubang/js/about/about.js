/*
 * @Author: pc
 * @Date:   2017-04-17 09:02:12
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-04-18 15:44:15
 */

(function () {
    /*切换*/
    $(".slideTxtBox").slide({
        trigger: "click"
    });


    /**
     * 这个轮播控件，可以面向优化
     */
    //所有图片的宽度
    var width = 224 * ($('.pic-list li').length);
    $('.pic-list ul').css('width', width);
    //初始化轮播图的定位
    var left = 0;
    // 轮播控制
    $('.right_control').on('click', function () {
        if (left < 0) {
            $('.pic-list ul').animate({
                'left': left += 224
            });
        }
    });

    $('.left_control').on('click', function () {
        if (left > 896 - width) {
            $('.pic-list ul').animate({
                'left': left -= 224
            });
        }
    });





    $('.fancybox').fancybox();
    $('.fancybox1').fancybox();


    /*地图 */

    ShowMap("map", {
        city: '北京',
        addr: '光华路SOHO一期',
        title: '公司总部',
        lawfirm: '北京财富邦投资理财公司',
        tel: '1362380952x',
        mapx: '',
        pic: '',
        ismove: '0',
        piobj: 'nxp'
    });

    $('#marquee').kxbdSuperMarquee({
        distance: 443,
        time: 2,
        direction: 'left',
        navId: '#mar3Nav',
        btnGo: {
            left: '#goL',
            right: '#goR'
        },
    });


    // 去掉shareholder-list最后一个border-bottom属性
    $('.shareholder-list').last().css('border', 'none');


    /**
     * big-matter年份切换
     */
    $('.year-list').css('display', 'none');
    $('#year16').css('display', 'block');
    $('.tab-controller ul a').on('click', function () {
        $('.year-list').hide();
        $($(this).attr('href')).show();
        $('.tab-controller ul li').removeClass('on');
        $(this).parent().addClass('on');
        return false;
    });
})();