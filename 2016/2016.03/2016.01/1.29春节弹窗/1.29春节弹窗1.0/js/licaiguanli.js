// JavaScript Document

/*                            一级导航               */
$('#zhanghao').hover(function() {
	$('#jiben').css('background-color','#eee')
	$('#licai').css('background-color','#eee')
	$('#zhanghao').css('background-color','#fff')
	$('.jibenshezhi').css('display','none')
	$('.licaiguanli').css('display','none')
	$('.wodezhanghao').css('display','block')	
},function(){});
$('#licai').hover(function() {
	$('#jiben').css('background-color','#eee')
	$('#zhanghao').css('background-color','#eee')
	$('#licai').css('background-color','#fff')
	$('.jibenshezhi').css('display','none')
	$('.licaiguanli').css('display','block')
	$('.wodezhanghao').css('display','none')	
},function(){});
$('#jiben').hover(function() {
	$('#licai').css('background-color','#eee')
	$('#zhanghao').css('background-color','#eee')
	$('#jiben').css('background-color','#fff')
	$('.jibenshezhi').css('display','block')
	$('.licaiguanli').css('display','none')
	$('.wodezhanghao').css('display','none')	
},function(){});