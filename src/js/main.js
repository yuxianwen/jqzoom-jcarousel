$(document).ready(function() {
    $("#mycarousel").jcarousel({initCallback:mycarousel_initCallback});
    $(".jqzoom").jqueryzoom({
         xzoom:420,
         yzoom:420,
         offset:10,
         position:"right",
         preload:1,
         lens:1
     });
    function mycarousel_initCallback(carousel){
        $("#mycarousel li").mouseover(function(){
            var JQ_img = $("img",this);
            var image_show = JQ_img.attr("showimg");
            var image_big = JQ_img.attr("bigimg"); 
            //$("#_middleImage").attr("src" + "images" + image_show).attr("bigimg" + "images" +  image_big); 
            $("#_middleImage").attr("src",image_show).attr("bigimg",image_big); 
            $(this).siblings().each(function(){
                $(this).removeClass("cur_on");
            })
            $(this).addClass("cur_on");
        })
    };
 });