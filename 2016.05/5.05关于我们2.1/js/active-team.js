/**
 * Created by pc on 2016/4/5.
 */
//百度地图开始
ShowMap("map",{city:'北京',addr:'光华路SOHO一期',title:'公司总部',lawfirm:'北京财富邦投资理财公司',tel:'',mapx:'',pic:'',ismove:'0',piobj:'nxp'});
//百度地图结束
//导航开始
$('#bang-nav a').click(function(){
    $('#bang-nav a').removeClass('nav-active');
    $(this).addClass('nav-active');
});
//导航结束
//轮播图开始
    jQuery(".slideBox").slide({
        mainCell:".bd ul",
        autoPlay:true
    });

$(document).ready(function() {
    $('.fancybox').fancybox();
});
//轮播图结束
