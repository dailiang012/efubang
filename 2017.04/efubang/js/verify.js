$(function() {


    // 开户银行验证
    function checkBankName() {
        if ($('select[name="drawBank"]').val() === "") {
            $('.bank-tip').text('请选择开户银行');
            return false;
        } else {
            return true;
        }
    }
    $('select[name="drawBank"]').blur(function() {
        if ($('select[name="drawBank"]').val() !== "") {
            $('.bank-tip').text('');
        }
    });
    // 银行卡号验证
    function checkBankNum() {
        if ($('input[name="bank-num"]').val() === "") {
            $('.bank-num-tip').text('请填写银行卡号');
            return false;
        } else {
            return true;
        }
    }
    $('input[name="bank-num"]').blur(function() {
        if ($('input[name="bank-num"]').val() !== "") {
            $('.bank-num-tip').text('');
        }
    });

    // 确认银行卡号验证
    function checkBankNumSecond() {
        if ($('input[name="sure-bank-num"]').val() === "") {
            $('.sure-bank-num-tip').text('请再次输入银行卡号');
            return false;
        } else if ($('input[name="sure-bank-num"]').val() === $('input[name="bank-num"]').val()) {
            return true;
        }
    }
    $('input[name="sure-bank-num"]').keyup(function() {
        if ($('input[name="sure-bank-num"]').val() != $('input[name="bank-num"]').val()) {
            $('.sure-bank-num-tip').text('两次输入不一致');
        } else if ($('input[name="sure-bank-num"]').val() === $('input[name="bank-num"]').val()) {
            $('.sure-bank-num-tip').text('');
        }
    });


    // 开户行地址验证
    function checkBankWhere() {
        b = false;
        var $DomBankWhere = $('.card-where select');
        for (var i = 0; i < $DomBankWhere.length; i++) {
            if ($($DomBankWhere[i]).val() === '') {
                $('.card-where-tip').text('请选择开户行地址');
                b = false;
            } else {
                b = true;
            }
        }
        return b;
    }
    $('.card-where select').blur(function() {
        if (checkBankWhere()) {
            $('.card-where-tip').text('');
        }
    });

    //提交前的验证
    $('input[type="button"]').on('click', function() {
        var BankName = checkBankName();
        var BankNum = checkBankNum();
        var BankNumSecond = checkBankNumSecond();
        var BankWhere = checkBankWhere();
        if (BankName && BankNum && BankNumSecond && BankWhere) {
            $('form').submit();
        }
    });

});
