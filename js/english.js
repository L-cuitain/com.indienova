$(function () {
    //创建 切换中英语言 点击事件
    $("#btn_language").click(function () {
        //判断列表是否隐藏
        if ($("#btn_change").is(":hidden")) {
            //如果隐藏 在点击后这个块颜色改变  显示列表
            $("#btn_language").css("backgroundColor", "#eeeeee");
            $("#btn_change").css("display", "block");
        }else{
            //否则 列表隐藏
            $("#btn_language").css("backgroundColor", "#fff");
            $("#btn_change").css("display", "none");
        }
    })

     // 轮播图
     var mySwiper = new Swiper('.swiper-container',{
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        direction : 'vertical',
        speed:300,
      autoplay : {
        delay:3000
      },

      keyboard: {
        enabled: true,
      },
      
      grabCursor : true,
      
      effect : 'coverflow',
      centeredSlides: true,
    })


    $('.login-click').click(function() {
        $('.login-form-mask').fadeIn(100);
        $('.login').slideDown(200);
    })
        $('.close').click(function() {
        $('.login-form-mask').fadeOut(100);
        $('.login').slideUp(200);
    })
})