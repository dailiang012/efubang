// JavaScript Document
/*新导航二级*/
$('.nav_02>li').hover(function(){	
	$(this).children('.nav_xia').stop().slideDown(200);
},function(){
	$(this).children('.nav_xia').stop().slideUp(200);	
});
/*新导航三级*/	
$('.list_nav>li').click(function(){
	$('.list_nav>li').css('background','rgba(0,0,0,0)');	
	$(this).css('background','rgba(0,0,0,0.3)');	
});
/*页面内部转换*/		
$('.xuanxiang li a').click(function(e) {<!--点击导航-->
	$('.neirong>div').hide()<!--导航所有的内容消失-->
	$($(this).attr('href')).show()<!--导航对应的内容显示-->
	$('.xuanxiang a').removeClass('dangqian')<!--导航自身的样式被移除-->
	$(this).addClass('dangqian')<!--导航的样式移入-->
	return false
});