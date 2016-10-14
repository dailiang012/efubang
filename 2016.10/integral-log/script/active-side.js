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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhY3RpdmUtc2lkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGRsID0gJChcIi5idXlfbmF2IGRsXCIpO1xyXG4kZGwuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuZmluZChcImE6Z3QoMilcIikuY3NzKHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxyXG4gICAgfSk7XHJcbn0pO1xyXG4kZGwuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoXCJhXCIpLnNob3coKTtcclxufSwgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoXCJhOmd0KDIpXCIpLmhpZGUoKTtcclxufSk7Il0sImZpbGUiOiJhY3RpdmUtc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
