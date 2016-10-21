var $dl = $(".buy_nav dl");
$dl.each(function() {
    $(this).find("a:gt(2)").css({
        display: "none"
    });
});
$dl.hover(function() {
    $(this).find("a").show();
}, function() {
    $(this).find("a:gt(2)").hide();
});