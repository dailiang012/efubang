// JavaScript Document
/*数据图插件开始*/
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
/*新导航二级*/
$('.nav_02>li').hover(function(){	
	$(this).children('.nav_xia').slideDown(200);
},function(){
	$(this).children('.nav_xia').slideUp(10);	
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
/*充值方式点击*/
$('.fangshi>li').click(function(){
	$('.fangshi>li').removeClass('dangqian02')
	$(this).addClass('dangqian02')
});

/*日期插件*/
!function(){
laydate.skin('danlan');//切换皮肤，请查看skins下面皮肤库
laydate({elem: '#demo'});//绑定元素
}();
!function(){
laydate.skin('danlan');//切换皮肤，请查看skins下面皮肤库
laydate({elem: '#demo2'});//绑定元素
}();
//日期范围限制
var start = {
    elem: '#start',
    format: 'YYYY-MM-DD',
    min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas //将结束日的初始值设定为开始日
    }
};
var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，充值开始日的最大日期
    }
};
laydate(start);
laydate(end);
//自定义日期格式
laydate({
    elem: '#test1',
    format: 'YYYY年MM月DD日',
    festival: true, //显示节日
    choose: function(datas){ //选择日期完毕的回调
        alert('得到：'+datas);
    }
});
//日期范围限定在昨天到明天
laydate({
    elem: '#hello3',
    min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
    max: laydate.now(+1) //+1代表明天，+2代表后天，以此类推
});

