/* 手机号的验证 */
$('#phone').on('focus', function () {
    $(this).css('color', 'black');
    $(this).val('');
});
$('#phone').on('blur', function () {
    if ($(this).val() == '') {
        $(this).val('手机号码不能为空！');
        $(this).css('color', 'red');
      
    }
    else if ($(this).val().search(/^1[3578]\d{9}$/) == -1) {
        $(this).val('请输入正确的手机号码!');
        $(this).css('color', 'red')
      
    } else {
        $(this).css('color', 'black')
    };
});

/* 图片验证码的验证 */
$('#imgCode').on('focus', function () {
    $(this).val('');
    $(this).css('color', 'black');
});
$('#imgCode').on('blur', function () {
    var rescode = $(this).val() == 'r2B7' || $(this).val() == 'R2b7' || $(this).val() == 'r2b7';
    //   console.log(rescode)
    if ($(this).val() == '') {
        $(this).val('请输入验证码！');
        $(this).css('color', 'red');
    }
    else if (rescode == false) {
        $(this).val('验证码输入错误！');
        $(this).css('color', 'red');
      
    };
});

/* 数字验证码 */
/* 点击获取验证码并且不能二次点击 */
var yzm_val = $('#yzm').text();
var num = 10; //为方便演示将倒计时改为十秒
var timeid = null;
$('#yzm').on('click', function () {
    $(this).attr('disabled', true); //限制不可二次点击
    timeid = setInterval(function () {
        num--;
        $('#yzm').css('backgroundColor', 'gray');
        $('#yzm').text(num + '秒后获取验证码');
        if (num < 0) {
            num = 10;
            clearInterval(timeid);
            $('#yzm').text('重新获取验证码');
            $('#yzm').css('backgroundColor', 'red');
            $('#yzm').attr('disabled', false);
        };
    }, 1000);
});

//在此处没有做验证码的验证
$('#four').on('focus', function () {
    $(this).val('');
});

/* 用户名的验证，2-4位纯汉字 */
$('#username').on('focus', function () {
    $(this).val('');
    $(this).css('color', 'black');
})
$('#username').on('blur',function(){
    // console.log(99);
    if($(this).val()==''){
        $(this).val('用户名不能为空！');
        $(this).css('color', 'red');
      }
    else if($(this).val().search(/^[\u4e00-\u9fa5]{2,4}$/) == -1){
        $(this).val('用户名错误！2-4个汉字');
        $(this).css('color', 'red');
      
      };
});

/* 验证密码 不能包含空格、回车、换行、中文字符，其他都可以，长度6到16位 */
$('#password').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
var pass=$('#password').val().search(/^[^\s\u4e00-\u9fa5]{6,16}$/);
// console.log(pass);
$('#password').on('blur',function(){
    if($(this).val()==''){
        $(this).val('密码不能为空！');
        $(this).css('color', 'red');
      }
   else if(pass!=-1){
        $(this).css('color', 'red');
        $(this).val('6-16位,不含有汉字，空格等特殊字符');
       
    }
});

/* 验证密码是否一致 */
$('#re_password').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
$('#re_password').on('blur',function(){
    
    if($('#re_password').val()!=$('#password').val()){
        $(this).css('color', 'red');
        $(this).val('两次密码不一致！'); 
       
    }
});

