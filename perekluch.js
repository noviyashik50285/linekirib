$(document).ready(function(){ 
    $(".poyaischkn1").click(function(){
        $(".pokaz1").show();
        $(".pokaz2").hide();
        $(".pokaz3").hide();
        $(".pokaz4").hide();
    }); 
    $(".poyaischkn2").click(function(){
        $(".pokaz1").hide();
        $(".pokaz2").show();
        $(".pokaz3").hide();
        $(".pokaz4").hide();
    });
    $(".poyaischkn3").click(function(){
        $(".pokaz1").hide();
        $(".pokaz2").hide();
        $(".pokaz3").show();
        $("body").css('background-color', 'rgb(138, 169, 146)');        
        $(".pokaz4").hide();
    });
    $(".poyaischkn4").click(function(){
        $(".pokaz1").hide();
        $(".pokaz2").hide();
        $(".pokaz3").hide();
        $(".pokaz4").show();
    });
});
