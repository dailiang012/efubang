var $video_box = $(".video_left"); //视屏外结构
//将所有节目都加载进来
for (var i = 0; i < embed_src.length; i++) {
    var $ul = $("<ul></ul>");
    for (var k = 0; k < embed_src[i].length; k++) {
        console.log("k=" + k);
        var $li = $("<li></li>");
        $li.text(embed_src[i][k].title);
        $li.attr("title", embed_src[i][k].src);
        $ul.append($li); //将文档片段加入页面
    }
    $(".video_list").append($ul);
}
//节目列表切换效果
function change_list(j) {
    $(".video_list ul").css("z-index", "0");
    $(".video_list ul").eq(j).css("z-index", "10");
};

// 月份选择
$(".time_change li").each(function(j) {
    $(this).click(function() {
        change_list(j);
    });
});
//默认页面
$(".time_change li:nth-child(2)").click();
//节目操做
$(".video_list li").each(function(n) {
    $(this).click(function() {
        $(".video_list li").css({
            "color": "#dfdfdf"
        });
        $(this).css({
            "color": "#ffbc0b"
        });
        var li_title = $(this).attr("title");
        var embed = '<embed src="' + li_title + '" allowFullScreen="true" quality="high" width="763" height="454" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash">';
        $video_box.html("");
        $video_box.html(embed);
    });
});
//设置日期选择的右边线
$(".time_change li:not(li:last-child)").css({
    "border-right": "1px solid #626262"
});