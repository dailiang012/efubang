
function initial(){
	var close=document.getElementById("close-popup-pic");	//关闭按钮
	var btn_false=document.getElementById("btn-false");	//取消按钮
	var btn_true=document.getElementById("btn-true");	//确认按钮
	var right_center=document.getElementById("right-center")	//打开弹窗
	popup=document.getElementById("red-popup");

	close.addEventListener("click",close_click,false);
	right_center.addEventListener("click",open_click,false);
	btn_false.addEventListener("click",close_click,false);
	btn_true.addEventListener("click",true_click,false);




}

//关闭弹窗
function close_click(e){
	popup.style.display="none";
}
//打开弹窗
function open_click(e){
	popup.style.display="block";
}

//确认按钮
function true_click(e){
	close_click();
}



//勾选图片切换
function pic_change(){

}


/*
*点击选项,获取到选项的下标,
* 获取到同样下标的图片,然后将图片的状态切换
 */
/*
*这该是一个方法,每点击一个选项的时候,都运行一下这个方法
 */

var red_list=document.getElementsByClassName("red-list");
for(var i=0;i<red_list.length;i++){
	red_list[i].addEventListener("click",pic_change,false);
	var indexs=i;
}


window.addEventListener("load",initial,false);	




























