/**
 * Created by pc on 2016/4/5.
 */
//筛选开始
$('#project-status a').click(function(){
    $('#project-status a').removeClass('filtrate-active');
    $(this).addClass('filtrate-active');
});
$('#project-type a').click(function(){
    $('#project-type a').removeClass('filtrate-active');
    $(this).addClass('filtrate-active');
});
$('#project-rate a').click(function(){
    $('#project-rate a').removeClass('filtrate-active');
    $(this).addClass('filtrate-active');
});
$('#project-time a').click(function(){
    $('#project-time a').removeClass('filtrate-active');
    $(this).addClass('filtrate-active');
});
//筛选结束
//数据读条开始
$('#bar-short01,#bar-short02,#bar-short03,#bar-short04,#bar-short05,#bar-short06,#bar-short07,#bar-short08,#bar-short09').barIndicator({
    counterStep:1,
    milestones:false,
    horBarHeight:20,
    animTime:1000,
    horLabelPos: 'right'
});
$('.bi-bar').css('height','6px');
//数据读条结束