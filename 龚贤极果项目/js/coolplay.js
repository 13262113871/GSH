$('.new').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.hot').removeClass('bottom');
    $('.sort').removeClass('bottom');
    $('.there').hide();
    $.ajax({
     url:"http://192.168.1.5:3000/play/new",
     dataType:"json",
     data:"get",
     success:function(res){
        console.log(res);
        var shownew_one = doT.template($('#newone').text());
        $('.new_one').html(shownew_one(res[0]));
        var shownew_two = doT.template($('#newtwo').text());
        $('.new_two').html(shownew_two(res[1]));
     }
    });
 });
/* 最热 */
 $('.hot').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.new').removeClass('bottom');
    $('.sort').removeClass('bottom');
    $('.there').hide();
    $.ajax({
        url:"http://192.168.1.15:3000/play/new",
        dataType:"json",
        data:"get",
        success:function(res){
            var showhot_one = doT.template($('#hotone').text());
            $('.new_one').html(showhot_one(res[2]));
            var showhot_two = doT.template($('#hottwo').text());
            $('.new_two').html(showhot_two(res[3]));


        }
 })
 })

 /* 品类 */
 $('.sort').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.new').removeClass('bottom');
    $('.hot').removeClass('bottom');
    $('.there').show();
 });