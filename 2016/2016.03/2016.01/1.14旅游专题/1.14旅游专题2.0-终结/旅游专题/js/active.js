// JavaScript Document
 $(function(){
       var prev=$(".prev");
       var next=$(".next");
       var box_li=$(".box .box-con li");
       var box_ul=$(".box .box-con ul");

      box_li.eq(0).stop().animate({left:0},30);
      box_li.eq(1).stop().animate({
      	width:410,
      	height:410,
      	left:191,
      	top:35
      },100);
      box_li.eq(2).stop().animate({
        width:480,
        height:480,
        left:433,
        top:0
      },100).css("z-index",50);

     box_li.eq(3).stop().animate({
     	width:410,
     	height:410,
     	left:713,
     	top:35
     },100).next().css("z-index",20);
   box_li.eq(4).stop().animate({left:1014},30);
    //初始化位置
  next.click(function(){
  	 box_li=$(".box .box-con li");
     box_li.eq(0).stop().animate({left:-500},30,function(){
     	box_li.eq(0).css("left",1014).appendTo(box_ul);
     });
     box_li.eq(1).stop().animate({
     	width:334,
     	height:334,
     	left:0,
     	top:74
     },100);
     box_li.eq(2).stop().animate({	
        width:410,
     	height:410,
     	left:191,
     	top:35
     },100).css("z-index",30);

     box_li.eq(3).stop().animate({
     	width:480,
        height:480,
        left:433,
        top:0
    },100).css("z-index",50);
     box_li.eq(4).stop().animate({
     	width:410,
      	height:410,
      	left:713,
      	top:35
     },100).css("z-index",31);
     box_li.eq(5).stop().animate({left:1014}).css("z-index",20);
    

  });
//向右点击滑动
  prev.click(function(){
  	box_li=$(".box .box-con li");
  	$(".box .box-con li:last").prependTo(box_ul).css("left",-1041).stop().animate({left:0},30);
     box_li.eq(4).stop().animate({
     	width:334,
     	height:334,
     	left:0,
     	top:74
     },100);
     box_li.eq(3).stop().animate({
       width:334,
     	height:334,
     	left:1014,
     	top:74
     },100).css("z-index",20);
     box_li.eq(2).stop().animate({
     	width:410,
     	height:410,
     	left:713,
     	top:35
     },100).css("z-index",30);
     box_li.eq(1).stop().animate({
     	width:480,
        height:480,
        left:433,
        top:0
     },100).css("z-index",50);
     box_li.eq(0).stop().animate({
     	width:410,
     	height:410,
     	left:191,
     	top:35
     },100).css("z-index",30);

  });
  //向左滑动

    })
	
/*                             box1                  开始*/		
	$(function(){
       var prev=$(".prev");
       var next=$(".next");
       var box_li=$(".box1 .box-con li");
       var box_ul=$(".box1 .box-con ul");

      box_li.eq(0).stop().animate({left:0},100);
      box_li.eq(1).stop().animate({
      	width:410,
      	height:410,
      	left:191,
      	top:35
      },500);
      box_li.eq(2).stop().animate({
        width:480,
        height:480,
        left:433,
        top:0
      },500).css("z-index",50);

     box_li.eq(3).stop().animate({
     	width:410,
     	height:410,
     	left:713,
     	top:35
     },500).next().css("z-index",20);
	 box_li.eq(4).stop().animate({
     	width:334,
     	height:334,
     	left:1014,
     	top:74
     },500).next().css("z-index",19);
	 box_li.eq(5).stop().animate({
     	width:334,
     	height:334,
     	left:1014,
     	top:74
     },500).next().css("z-index",18);
	 box_li.eq(6).stop().animate({
     	width:334,
     	height:334,
     	left:1014,
     	top:74
     },500).next().css("z-index",17);

    //初始化位置
  next.click(function(){
  	 box_li=$(".box1 .box-con li");
     box_li.eq(0).stop().animate({left:-500},30,function(){
     	box_li.eq(0).css("left",2000).appendTo(box_ul);
     });
     box_li.eq(1).stop().animate({
     	width:334,
     	height:334,
     	left:0,
     	top:74
     },200);
     box_li.eq(2).stop().animate({	
        width:410,
     	height:410,
     	left:191,
     	top:35
     },200).css("z-index",30);

     box_li.eq(3).stop().animate({
     	width:480,
        height:480,
        left:433,
        top:0
    },200).css("z-index",50);
     box_li.eq(4).stop().animate({
     	width:410,
      	height:410,
      	left:713,
      	top:35
     },200).css("z-index",31);
     box_li.eq(5).stop().animate({
     	width:334,
      	height:334,
      	left:1014,
      	top:74
		 },30).css("z-index",20);
     box_li.eq(6).stop().animate({
     	width:334,
      	height:334,
      	left:1014,
      	top:74
		 },30).css("z-index",19);
    

  });
//向右点击滑动
  prev.click(function(){
  	box_li=$(".box1 .box-con li");
  	$(".box1 .box-con li:last").prependTo(box_ul).css("left",-1041).stop().animate({left:0},30);
     box_li.eq(6).stop().animate({
     	width:334,
      	height:334,
      	left:0,
      	top:74
		 },200).css("z-index",19);
     box_li.eq(5).stop().animate({
     	width:334,
      	height:334,
      	left:1014,
      	top:74
		 },200).css("z-index",20);
     box_li.eq(4).stop().animate({
     	width:334,
     	height:334,
     	left:1014,
     	top:74
     },200).css("z-index",21);
     box_li.eq(3).stop().animate({
       width:334,
     	height:334,
     	left:1014,
     	top:74
     },200).css("z-index",22);
     box_li.eq(2).stop().animate({
     	width:410,
     	height:410,
     	left:713,
     	top:35
     },200).css("z-index",30);
     box_li.eq(1).stop().animate({
     	width:480,
        height:480,
        left:433,
        top:0
     },200).css("z-index",50);
     box_li.eq(0).stop().animate({
     	width:410,
     	height:410,
     	left:191,
     	top:35
     },200).css("z-index",30);

  });
  //向左滑动

    })