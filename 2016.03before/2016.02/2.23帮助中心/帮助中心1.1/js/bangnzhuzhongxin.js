// JavaScript Document

/*页面内部转换*/		
$('.xuanxiang li a').click(function(e) {<!--点击导航-->
	$('.neirong>div').hide()<!--导航所有的内容消失-->
	$($(this).attr('href')).show()<!--导航对应的内容显示-->
	$('.xuanxiang a').removeClass('dangqian')<!--导航自身的样式被移除-->
	$(this).addClass('dangqian')<!--导航的样式移入-->
	return false
});
$('.question').click(function(){
	var srcchange = $(this).find('img').attr('src');  
	if(srcchange.indexOf("03.png") > 0 )    
	{
		$(this).find('img').attr('src','images/active_pic_06.png');
	}else{
		$(this).find('img').attr('src','images/active_pic_03.png');	
	}
	//$('.answer').hide()
	$(this).parents('li').children('.answer').toggle()    //show()
	return false
});

var srcchange = $('.question').find('img').attr('src');
console.log(srcchange)    //"images/active_pic_03.png"字符串
console.log(typeof(srcchange))   //string
