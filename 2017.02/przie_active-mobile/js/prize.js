$(function() {

    /*获奖记录轮播*/
    //获奖记录的宽度
    var num = $('.prize_list li').width();
    // console.log(num);
    var width = num * ($('.prize_list li').length);
    $('.prize_list ul').css('width', width);
    var prize_list_w = $('.prize_list').width();
    // console.log(prize_list_w);
    //初始化轮播图的定位
    var left = 0;
    // 轮播控制
    $('.right_control').on('click', function() {
        if (left > prize_list_w - width) {
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
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize1.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }, {
            prize: 'images/popup_prize5.png'
        }];
        popup.bindDomImage();
        popup.bindEvent();
    });
    /*一个奖励*/
    /*  $('.db_zhuan_center').on('click', function() {
          prize_popup.style.display = 'block';
          var popup = new Popup();
          popup.images = [{ prize: 'images/popup_prize1.png' }];
          popup.bindDomImage_one();
          popup.bindEvent();
      });*/
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

    // window.ontouchstart = function(e) { e.preventDefault(); };
    /*手机气泡*/
    var packet_img = $('.packet_img')[0];
    var packet_text = $('.packet_text')[0];

    packet_img.addEventListener('touchstart', function(e) {
        e.preventDefault();
        $(packet_text).animate({
            width: '155px'
        });
    });
    packet_img.addEventListener('touchend', function(e) {
        e.preventDefault();
        $(packet_text).animate({
            width: '0px'
        });
    });

});
