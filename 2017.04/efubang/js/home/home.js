(function () {
    /*banner*/
    $(".slideBox").slide({
        mainCell: ".bd ul",
        autoPlay: true
    });

    /*news tab*/
    $(".slideTxtBox").slide();


    /**进度条 */
    var $progressGo = $('.progress-go');
    
    for (var i = 0; i <$progressGo.length;i++ ) {
        var progressWidth=$($progressGo[i]).parent().next().children('.progress-width').text();
        $($progressGo[i]).width(progressWidth);
    }
    
})();