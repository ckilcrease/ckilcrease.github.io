

$(document).ready(function () {
 /*   'use strict';
    $('.types li').mouseover(function () {
        $('this').fadeTo('fast', 1);
    });
    $('.types li').mouseout(function () {
        $('this').fadeTo('fast', 0.5);
    }); 
    
     *** Doesn't work - fix later ***
    */
    
    $("#list_one li").show();
  //  $("").css("font-size", "22px");
    $(".types li:nth-child(1)").css({opacity: 1});
    $("#list_two li").hide();
    $("#list_three li").hide();
    $("#list_four li").hide();
    
    $(".types li:nth-child(1)").click(function () {
        $("#list_one li").show();
        $(".types li").css({opacity: 0.5});
        $(".types li:nth-child(1)").css({opacity: 1});
        //  $("").css("font-size", "22px");
        $("#list_two li").hide();
        $("#list_three li").hide();
        $("#list_four li").hide();
    });

    $(".types li:nth-child(2)").click(function () {
        $(".types li").css({opacity: 0.5});
        $(".types li:nth-child(2)").css({opacity: 1});
        $("#list_one li").hide();
        //  $("").css("font-size", "22px");
        $("#list_two li").show();
        $("#list_three li").hide();
        $("#list_four li").hide();
    });
    
    
    $(".types li:nth-child(3)").click(function () {
        $(".types li").css({opacity: 0.5});
        $(".types li:nth-child(3)").css({opacity: 1});
        $("#list_one li").hide();
        //  $("").css("font-size", "22px");    
        $("#list_two li").hide();
        $("#list_three li").show();
        $("#list_four li").hide();
    });
    
    $(".types li:nth-child(4)").click(function () {
        $(".types li").css({opacity: 0.5});
        $(".types li:nth-child(4)").css({opacity: 1});
        $("#list_one li").hide();
        //  $("").css("font-size", "22px");
        $("#list_two li").hide();
        $("#list_three li").hide();
        $("#list_four li").show();
    //    $(".types li:nth-child(4)").css({opacity: 1});
    });
    
    
    
    
    
});

