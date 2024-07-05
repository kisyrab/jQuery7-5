$(function(){
    $(".list1").siblings().css({"border" : "1px solid red"});
    $(".list4_children").parent(".list4").css({"background" : "pink"});
    $(".list4_children").parents(".wrap").css({"background" : "hotpink"});

    $(".wrap").children("h1").css({"color" : "yellow"});
    $(".wrap").children("div").css({"color" : "green"});

    $(".wrap").find("h1").css({"font-size" : "50px"});
    $(".wrap").find("div").css({"border" : "2px solid black"});

    $(".list2").prev().css({padding : "50px"}); //list2번의 바로 앞 태그
    $(".list2").next
    ().css({padding : "50px"}); //list2번의 바로 뒤 태그

}) //j