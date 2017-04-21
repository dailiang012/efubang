/**
 * 上传文件
 */
(function () {
    var image = '';
    var file = document.getElementById("file");
    var fileName = document.getElementById("fileName");
    var DomBtnDeletFile = document.getElementById('deleteFile');
    fileName.innerHTML = '文件名：' + file.value;

    function handleFile() {
        var path = file.value;
        var num = path.lastIndexOf('\\');
        var name = path.substring(num + 1);
        fileName.innerHTML = '文件名：' + name;
        preview(file);

    }

    function preview(file) {
        var prevDiv = document.getElementById('preview');
        if (file.files && file.files[0]) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
            }
            reader.readAsDataURL(file.files[0]);
        } else {
            prevDiv.innerHTML =
                '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' +
                file.value + '\'"></div>';
        }
    }

    function deleteFile() {
        file.value = null;
        handleFile();
    }
    file.onchange = handleFile;
    DomBtnDeletFile.onclick = deleteFile;
})();

(function () {
    $("label").click(function () {
        $(this).parents(".choice").find(".choice_true").css("display", "none");
        $(this).find(".choice_true").css("display", "block");
        //设置radio的checked属性
        $(this).parents(".choice").find("input:radio").removeAttr("checked");
        $(this).siblings('input:radio').attr("checked", "true");
    })
})();