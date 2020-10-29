// $(document).ready(function() {
//     $(this).children(".blocks").slideDown('1000');
// });

$(document).ready(function() {
    // block1
    $('.block1').mouseenter(function(){
        $(this).children('.block1_title').fadeIn("300");
    });

    $('.block1').mouseleave(function(){
        $(this).children('.block1_title').fadeOut("300");
    });

    // block2
    $('.block2').mouseenter(function(){
        $(this).children('.block2_title').fadeIn("300");
    });

    $('.block2').mouseleave(function(){
        $(this).children('.block2_title').fadeOut("300");
    });

    // block3
    $('.block3').mouseenter(function(){
        $(this).children('.block3_title').fadeIn("300");
    });

    $('.block3').mouseleave(function(){
        $(this).children('.block3_title').fadeOut("300");
    });
    
    // block4
    $('.block4').mouseenter(function(){
        $(this).children('.block4_title').fadeIn("300");
    });

    $('.block4').mouseleave(function(){
        $(this).children('.block4_title').fadeOut("300");
    });
});
