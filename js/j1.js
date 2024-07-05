$(function(){
    
    // $(".view li").hide();
    // $(".view li:nth-child(1)").show();
    
    // $(".view li").hide();
    // $(".view li").eq(0).show();

    $(".view li").eq(0).siblings().hide();


    $(".btn li").click(function(){
        var n = $(this).index();
        console.log("n :" , n);
        
        // $(".view li").hide();
        // $(".view li").eq(n).show();
        // $(".view li").slideUp(시간);
        // $(".view li").eq(n).slideDown(시간);

        $(".view li").fadeOut();
        $(".view li").eq(n).fadeIn();

        $(".btn li").removeClass("on")
        $(this).addClass("on");
    })
    
    

}) //j