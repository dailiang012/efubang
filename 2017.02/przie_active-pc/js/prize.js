$(function() {

    /*获奖记录轮播*/
    //获奖记录的宽度
    var width = 174 * ($('.prize_list li').length);
    $('.prize_list ul').css('width', width);
    //初始化轮播图的定位
    var left = 0;
    // 轮播控制
    $('.right_control').on('click', function() {
        if (left > 870 - width) {
            $('.prize_list ul').animate({
                'left': left -= 174
            });
        }
    });

    $('.left_control').on('click', function() {
        if (left < 0) {
            $('.prize_list ul').animate({
                'left': left += 174
            });
        }
    });


    /*弹窗*/
    var prize_popup = $('#prize_popup')[0];
    /*十个奖励*/
    $('#ten_button').on('click', function() {
        prize_popup.style.display = 'block';
        var popup = new Popup();
        popup.images = [{
            prize: 'images/popup_prize1.png'
        }, {
            prize: 'images/popup_prize2.png'
        }, {
            prize: 'images/popup_prize3.png'
        }, {
            prize: 'images/popup_prize4.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize6.png'
        }, {
            prize: 'images/popup_prize4.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize6.png'
        }, {
            prize: 'images/popup_prize1.png'
        }, {
            prize: 'images/popup_prize2.png'
        }];
        popup.bindDomImage();
        popup.bindEvent();
    });
    /*一个奖励*/
    // $('.db_zhuan_center').on('click', function() {
    //     prize_popup.style.display = 'block';
    //     var popup = new Popup();
    //     popup.images = [{ prize: 'images/popup_prize5.png' }];
    //     popup.bindDomImage_one();
    //     popup.bindEvent();
    // });
    /*没有奖励*/
    $('.db_zhuan_center').on('click', function() {
        prize_popup.style.display = 'block';
        var popup = new Popup();
        popup.msg = '万里黄沙打发发送到发送到发送打算发的说法';
        popup.images = [{
            prize: 'images/popup_prize5.png'
        }];
        popup.bindDomImage_msg();
    });

    /*气泡消息动画*/
    // var dir = 1;
    // var init = $('#msg_box')[0].offsetTop; 
    // console.log(init);
    // (function() {
    //     var css = {
    //         'top': init - 5 + 'px'
    //     };
    //     if (dir == 1) {
    //         dir = 0;
    //         css.top = init + 'px';
    //     } else {
    //         dir = 1;
    //     }

    //     $('#msg_box').animate(css, arguments.callee);
    // })();
    /*气泡消息动画*/
    var packet_text = $('.packet_text');
    $('.packet_img').hover(function() {
        packet_text.animate({
            width: '311px'
        });
    }, function() {
        packet_text.animate({
            width: '0px'
        });
    });
});
