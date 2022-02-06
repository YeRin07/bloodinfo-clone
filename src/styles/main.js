/* 헤더메뉴 마우스 오버일 때 */
$(document).ready(function(){
    $(".nav>li").mouseover(function(){ 
        $(this).children("ul").stop().slideDown(); 
    }); 
        $(".nav>li").mouseleave(function(){
        $(this).children("ul").stop().slideUp(); 
    }); 
});


/* 탭 메뉴 */
$(document).ready(function(){
    $(".tab_menu li").click(function(){
        var idx = $(this).index();
        $(".tab_menu > li").removeClass("on");
        $(".tab_menu > li").eq(idx).addClass("on");
    })
})