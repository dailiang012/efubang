$(document).ready(function() {
  var next = $(".next"); //下一题按钮
  var up = $(".up"); //上一题按钮
  var btn_submit=$("button[name=btn_submit]");//提交按钮
  var question = $(".question");
  var num = 1; //表示第一题
  var num_total = 20; //总共的题目数
  // 选项点击功能
  $("label").click(function() {
    //设置图片的切换
    $(this).parents(".choice").find(".choice_pic").css({
      "background-image": "url('./images/click_false.png')"
    });
    $(this).find(".choice_pic").css({
      "background-image": "url('./images/click_true.png')"
    });
    //设置radio的checked属性
    $(this).parents(".choice").find("input:radio").removeAttr("checked");
    $(this).siblings('input:radio').attr("checked", "true");
  });
  //验证是否有选项被点击,如果点击,运行"下一题"功能,否则运行
  function test_radio() {
    $(".question" + num).find("input:radio").each(function() {
      if ($(this).attr("checked")) {
        next_btn();
      }
    })
  }
  //切换两个按钮的大小
  function change_btn() {
    if (num == 1) {
      next.css("width", "100%");
      up.css("width", "0");
        btn_submit.css("width","0");
    } else if (num >= 20) {
      next.css("width", "0");
      up.css("width", "0");
        btn_submit.css("width","100%");
    } else {
      next.css("width", "45%");
      up.css("width", "45%");
    }
  }
  //按钮的公共功能
  function btn_work() {
    question.css("display", "none");
    $(".question" + num).css("display", "block");
  }
  //下一题功能
  function next_btn() {
    num += 1;
    console.log(num);
    change_btn();
    if (num <= num_total) {
      btn_work();
    } /*else if (num > num_total) {
      //提交后跳转链接
      window.location.href = 'risk_mobile_submit.html';
    }*/
  }
  //上一题功能
  function up_btn() {
    num -= 1;
    console.log(num);
    change_btn();
    if (num >= 0) {
      btn_work();
    }
  }
  //"下一题"按钮控制
  next.on("click", test_radio);
  //"上一题"按钮控制
  up.on("click", up_btn);


  /*弹窗*/
  $(".nav-return").click(function(){
    $(".popup").css("display","block");
  })
  $('.no').add('.yes').click(function(){
    $('.popup').css('display','none')
  });
});
