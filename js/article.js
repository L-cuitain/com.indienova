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


    //创建 下拉列表 点击事件
    $("#nav-getlist").click(function () {
        //判断列表是否隐藏
        if ($("#nav-showlist").css("display")=="none"){
            //如果隐藏 在点击后这个块 显示列表
            $("#nav-showlist").css("display", "block");
            $("nav").css("height","13.2rem");
            $(".nav-gray-click").css("top","50%");
        }else{
            //否则 列表隐藏
            $("#nav-showlist").css("display", "none");
            $("nav").css("height","2.75rem");
            $(".nav-gray-click").css("top","20.6%");
        }
    })


    //创建 下拉列表 点击事件
    $("#nav-gray-getlist").click(function () {
        //判断列表是否隐藏
        if ($("#nav-gray-list").css("display")=="none"){
            //如果隐藏 在点击后这个块 显示列表
            $("#nav-gray-list").css("display", "block");
            $("#nav-gray-getlist").css("backgroundColor", "#888888");
        }else{
            //否则 列表隐藏
            $("#nav-gray-list").css("display", "none");
            $("#nav-gray-getlist").css("backgroundColor", "#aaaaaa");
        }
    })


    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed:300,
        autoplay : {
            delay:3000
        },
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        keyboard: {
            enabled: true,
          },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }) 


      $(".icon-search3").click(function(){
        $(".icon-line-cross").fadeIn(500);
        $(".search").fadeIn(500);
        $(".icon-search3").fadeOut(500);
        $(".nav-left").fadeOut(500);
        $(".nav-center").fadeOut(500);
      })
      $(".icon-line-cross").click(function(){
          $(".icon-line-cross").fadeOut(500);
          $(".search").fadeOut(500);
          $(".icon-search3").fadeIn(500);
          $(".nav-left").fadeIn(500);
          $(".nav-center").fadeIn(500);
    })
})


