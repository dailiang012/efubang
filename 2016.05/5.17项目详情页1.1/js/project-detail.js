/**
 * Created by pc on 2016/4/5.
 */
//进度条开始
$('#bar-lang01').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('.bi-bar').css('height','10px');
//进度条结束

//红包选择开始
function showPic(whichpic){
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("red-packet-text");
    description.textContent=text;
}
$('.red-packet').click(function(){
    $('.xiala_hongbao').toggle();
});
$('.xiala_hongbao li').click(function(){
    $('.xiala_hongbao').css('display','none');
    $('#red-packet-text').css('color','#fdf54c');
    $('.red-packet-pic').attr('src','images/red-packet.jpg');
});
$('.xiala_hongbao .last').click(function(){
    $('.red-packet-pic').attr('src','images/black-packet.jpg');
    $('#red-packet-text').css('color','#757575');
});
//红包选择结束
<!--项目切换开始-->
$('.invest-list a').click(function () {
    $('.content-list>div').hide();
    $($(this).attr('href')).show();
    $('.invest-list a').removeClass('invest-active');
    $(this).addClass('invest-active');
    return false;
});
<!--项目切换结束-->