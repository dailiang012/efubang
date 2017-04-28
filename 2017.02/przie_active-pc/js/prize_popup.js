function Popup() {
    this.images = [];
    this.msg='你好';
}
Popup.prototype = {
    /*十个奖品弹窗*/
    bindDomImage: function() {
        var str = '';
        str += '<div class="prize_popup_content_ten"> ';
        str += '<div class="close_popup close_popup_ten"></div>';
        str += '<div class="popup_list">';
        str += '<ul>';
        str += '<li><img src="' + this.images[0].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[1].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[2].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[3].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[4].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[5].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[6].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[7].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[8].prize + '" alt="奖品"></li>';
        str += '<li><img src="' + this.images[9].prize + '" alt="奖品"></li>';
        str += '</ul>';
        str += '<div class="other">';
        str += '<p>额外奖品</p>';
        str += '<div class="other_prize"><img src="' + this.images[10].prize + '" alt="奖品"></div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        $('#prize_popup').html(str);
        $('.popup_list img').hide();
        // console.log('hah');
        $('.close_popup').on('click', function() {
            $('#prize_popup').css('display', 'none');
        });
    },

    /*一个奖品弹窗*/
    bindDomImage_one: function() {
        var str = '';
        str += '<div class="prize_popup_content_one"> ';
        str += '<div class="close_popup close_popup_one"></div>';
        str += '<div class="popup_list">';
        str += '<div class="prize_img"><img src="' + this.images[0].prize + '" alt="奖品"></div>';
        str += '</div>';
        str += '</div>';
        $('#prize_popup').html(str);
        $('.popup_list img').hide();
        // console.log('hah');
        $('.close_popup').on('click', function() {
            $('#prize_popup').css('display', 'none');
        });
    },
    /*没有奖品弹窗*/
    bindDomImage_msg: function() {
        var str = '';
        str += '<div class="prize_popup_content_msg"> ';
        str += '<div class="close_popup close_popup_msg"></div>';
        str += '<div class="popup_list">'+this.msg+'</div>';
        str += '</div>';
        $('#prize_popup').html(str);
        $('.popup_list img').hide();
        // console.log('hah');
        $('.close_popup').on('click', function() {
            $('#prize_popup').css('display', 'none');
        });
    },
    /*十个奖品依次显示*/
    bindEvent: function() {
        var img = $('.popup_list img');
        var i = 0;
        var t = setInterval(function() {
            $(img[i]).fadeIn(300).css('display', 'inline-block');
            i++;
            if (i > img.length - 1) {
                clearInterval(t);
            }
        }, 200);
    }
};
