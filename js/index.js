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

        if ($("#nav-showlist").css("visibility")=="hidden") {
            //如果隐藏 在点击后这个块 显示列表
            $("#nav-showlist").css("visibility", "visible");
        }else{
            //否则 列表隐藏
            $("#nav-showlist").css("visibility", "hidden");
        }
    })

})



