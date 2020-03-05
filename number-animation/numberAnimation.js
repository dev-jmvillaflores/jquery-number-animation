/*
Plugin Name: Number Animation
version: 1.0
Author: Jovan Villaflores
*/
(function ($){
    var span =  $("<span class='na-number'></span>");
    $(".na-control").append(span);

    $.fn.numberAnimationStyle = function(option){
        var settings = $.extend({
            color: "black",
            fontSize: "20px",
            fontFamily: "",
            margin: "1px",
            textAlign: "left",
            letterSpacing: "2px"
        },option);
        return this.css({
            "color" : settings.color,
            "font-size": settings.fontSize,
            "font-family": settings.fontFamily,
            "margin": settings.margin,
            "text-align": settings.textAlign,
            "letter-spacing": settings.letterSpacing
        });
    }
    $.fn.numberAnimationSet = function(option){
        var settings = $.extend({
            fromValue: 290000,
            toValue: 30000,
            duration: 10000,
        },option);
        
        return this.text(function () {
            var $this = $(this);
            jQuery({ Counter: settings.fromValue }).animate({ Counter: settings.toValue }, {
            duration: settings.duration,
            easing: false,
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
          });
        });  
    }
})(jQuery);