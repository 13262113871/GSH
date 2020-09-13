$(function(){

$('.xin').on('click',function(){
    $('.inner_2').hide();
    $('.inner_1').show();
    $('.hot').removeClass('back_red');
    $(this).addClass('back_red');
})
$('.hot').on('click',function(){
    $('.inner_1').hide();
    $('.inner_2').show();
    $('.xin').removeClass('back_red');
    $(this).addClass('back_red');

})

$('.gengduo').on('click',function(){
    $(this).find('img').attr('src','./img/img1/loading-icon.gif');
})
















})