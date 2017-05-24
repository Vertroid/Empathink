/**
 * Created by hanshiqiang1 on 2017/2/21.
 */
//console.log("系统高度:"+$(window).height());
//console.log("系统宽度:"+$(window).width());
//var h=($(window).height()-48-60);
//var w=($(window).width()-1260);
//console.log(h);
//console.log(w);
//$('#content').height(h);
//$('#content').css({"margin-left":"w/2"});
$(function () {
    var pages={
        '关于我们':'About',
        '业务单元':'Unit',
        '服务案例':'Service',
        '团队':'Team',
        '加入我们':'Join',
        '联系我们':'Contact'
    };
    //底部导航

    var shFirst=true;
    var activeIndex=$('.active').index();
    //弹框显示
    var enter=function (title) {

        if(shFirst){
            shFirst=false;
            $('#contenter').stop().delay(2000).fadeIn(1000);
        }else{
            $('#contenter').stop().delay(1500).fadeIn(1000);
        }
        $('#mainContent').load('html/'+pages[title]+'.html');
    };

    //底部导航切换事件
    $('#nav .show').on('click',function () {
        $('#footer').css({"display":"none"})
        $(this).addClass('active').siblings().removeClass('active');

        //导航切换
        ($('#container-navs ').children().length>1)?$('#container-navs li:last-child').remove():'';

        var title=$(this).text();
        // $('#container-navs').append('<li><small>>> </small><span>'+title+'</span></li>');
        // $('.liudong').html(title);
        $('#contenter').scrollTop(0);


        // 控制摄像头拉近

        var currentIndex=$(this).index();

        switchFocus(currentIndex);

        //切换弹框内容
        ((currentIndex!=activeIndex)&&(currentIndex!=props.index)) ? enter(title):'';

        activeIndex=currentIndex;

    });

    // $('#logo').click(function(){
    //     $('#nav').css({"display":"block"})
    // })
    //关闭按钮
    // var shut=function () {
    //     $('#container-nav').stop().fadeOut(100);
    //     $('#contenter').stop().fadeOut(500);
    //     $('.show').removeClass('active');
    //     $('#footer').fadeOut(500).delay(1000).fadeIn(1500);
    //     onLeave();
    // };
    //
    // $('#home').click(shut);
    // $('#logo').click(shut);



});