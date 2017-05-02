/*
 * @Author: pc
 * @Date:   2017-05-02 15:45:13
 * @Last Modified by:   pc
 * @Last Modified time: 2017-05-02 16:01:11
 */

$(function() {
    /**
     * 用户名
     */
    var $userName = $('input[name="userName"]');
    $($userName).focus(function(event) {
        /* Act on the event */
        if ($($userName).val() === '请输入用户名') {
            $($userName).val('');
        }
    });
    $($userName).blur(function() {
        if ($($userName).val() === '') {
            $($userName).val('请输入用户名');
        }
    });

    /**
     * 密码
     */
    var $userPassword = $('input[name="userPassword"]');
    $($userPassword).focus(function(event) {
        /* Act on the event */
        if ($($userPassword).val() === '请输入密码') {
            $($userPassword).val('');
        }
    });
    $($userPassword).blur(function() {
        if ($($userPassword).val() === '') {
            $($userPassword).val('请输入密码');
        }
    });

    /**
     * 验证码
     */
    var $verificationCode = $('input[name="verificationCode"]');
    $($verificationCode).focus(function(event) {
        /* Act on the event */
        if ($($verificationCode).val() === '请输入验证码') {
            $($verificationCode).val('');
        }
    });
    $($verificationCode).blur(function() {
        if ($($verificationCode).val() === '') {
            $($verificationCode).val('请输入验证码');
        }
    });
});
