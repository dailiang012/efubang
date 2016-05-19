/**
 * Created by pc on 2016/4/5.
 */
//导航开始
$('#bang-nav a').click(function(){
    $('#bang-nav a').removeClass('nav-active');
    $(this).addClass('nav-active');
});
//导航结束
<!--轮播图开始-->
    $(function () {
        $(".flexslider").flexslider({
            slideshowSpeed: 20000, //展示时间间隔ms
            animationSpeed: 400, //滚动时间ms
            touch: true //是否支持触屏滑动
        });
    });
<!--轮播图结束-->

//数据读条开始
$('#bar-lang01').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-lang02').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short01').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short02').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short03').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short04').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short05').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('#bar-short06').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('.bi-bar').css('height','10px');
//数据读条结束