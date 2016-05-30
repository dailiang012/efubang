// JavaScript Document
/*环形数据图开始*/
var doughnutData = [
				{
					value: 92910,
					color:"#40ace1",
					highlight: "#5bc2f4",
					label: "可用余额"
				},
				{
					value: 7100,
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "冻结总额"
				},
				{
					value: 7100,
					color: "#7cc379",
					highlight: "#8ed98b",
					label: "待收总额"
				},

			];

			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
			};
/*环形数据图结束*/
/*账户详情-vip切换*/
$('.xuanzhong').click(function(){
	$('.vip_true').css('display','none');
	$('.vip_xiangqing').removeClass('active_bot');
	$('.xuanzhong').addClass('active_bot');
	$('.list').css('display','block');	
});
$('.vip_xiangqing').click(function(){
	$('.list').css('display','none');
	$('.xuanzhong').removeClass('active_bot');
	$('.vip_xiangqing').addClass('active_bot');
	$('.vip_true').css('display','block');
});
/*新导航二级*/
$('.nav_02>li').hover(function(){	
	$(this).children('.nav_xia').stop().slideDown(200);
},function(){
	$(this).children('.nav_xia').stop().slideUp(200);	
});
/*新导航三级*/	
$('.list_nav>li').click(function(){
	$('.list_nav>li').css('background','#4aacaa');
	$(this).css('background','#51bbb9');
});

$('.xuanxiang li a').click(function(e) {
	$('.neirong>div').hide()
	$($(this).attr('href')).show()
	$('.xuanxiang a').removeClass('dangqian')
	$(this).addClass('dangqian')
	return false
});

