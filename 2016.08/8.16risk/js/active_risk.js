$(document).ready(function(){
	$("label").click(function(){
		$(this).parents(".choice").find(".choice_true").css("display","none");
		$(this).find(".choice_true").css("display","block");
	})
})
