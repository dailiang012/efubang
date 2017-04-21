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
/*$('.dingwei').click(function(){
	$('.baiduditu').toggle();	
});*/
$('.zhenshu li a').fancybox();

function setAdd(v){
	document.getElementById("show").innerHTML = v;
}
getBDAddress(setAdd);

ShowMap("map",{city:'北京',addr:'光华路SOHO一期',title:'公司总部',lawfirm:'北京财富邦投资理财公司',tel:'1362380952x',mapx:'',pic:'',ismove:'0',piobj:'nxp'});


	$('#marquee').kxbdSuperMarquee({
		distance:443,
		time:2,
		direction: 'left',
		navId:'#mar3Nav',
		btnGo:{left:'#goL',right:'#goR'},
	});