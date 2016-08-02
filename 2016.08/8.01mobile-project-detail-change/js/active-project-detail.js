
//关闭按钮
$("#close-popup-pic").on("click",function(){
	$("#red-popup").css("display","none");
})
//取消按钮
$("#btn-false").on("click",function(){
	$("#red-popup").css("display","none");
	$("#right-center").text("选择红包");
})
//确认按钮
$("#btn-true").on("click",function(){
	$("#red-popup").css("display","none");
})
//投资按钮
$("#invest-btn").on("click",function(){
	$("#red-popup").css("display","block");
	$("#btn-true").attr("href","www.gogle.com");
})
//切换图片状态
$(".your-choice").on("click",function(){
	$(".choice-pic").attr("src","./images/invest/click-false.png")
	var pic=$(this).find(".choice-pic").attr("src");
	if(pic.indexOf("false")>-1){
		$(this).find(".choice-pic").attr("src","./images/invest/click-true.png");
	}else{
		$(this).find(".choice-pic").attr("src","./images/invest/click-false.png");
	}
})
//切换文字状态
$(".use-choice").on("click",function(){
	var red_text=$(this).find(".choice-text").text()+"元红包";
	$("#right-center").text(red_text);
})
$(".no-use").on("click",function(){
	$("#right-center").text("不使用红包");
})
//开启弹窗
$("#right-center").on("click",function(){
	$("#red-popup").css("display","block");
	$("#btn-true").attr("href","javascript:void(0)");
})
































