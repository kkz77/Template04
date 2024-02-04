$(function () {
    var pathname = window.location.pathname.match(/([^\/]*)\/*$/)[1]
    $('.nav > ul >li > a[href="'+pathname+'"]').addClass('active');

    //nav link active

    
    let plus= '<i class="fa-regular fa-square-plus"></i>';
    let minus= '<i class="fa-regular fa-square-minus"></i>';
    $('.blk:last-child .accordion-content').css('display','block')
    $('.blk:last-child .plus-minus').html(minus)
    $('.accordion-title').click(function(){
        if($('.accordion-content').is(':visible')){
            $('.accordion-content').slideUp(300);
            $('.plus-minus').html(plus)
        }
        if($(this).next('.accordion-content').is(':visible')){
            $(this).next('.accordion-content').slideUp(300);
            $(this).children('.plus-minus').html(plus)
        }
        else{
            $(this).next('.accordion-content').slideDown(300);
            $(this).children('.plus-minus').html(minus)
        }
    })

    // tab-accordion

   
    $('.menu-trigger').on('click',function(){
        var rightVal = 0;
        if($(this).hasClass('active')){
            rightVal = -800;
            $(this).removeClass('active');
            $('.nav').css('display','none')
        }else{
            $(this).addClass('active');
            $('.nav').css('display','block')
        }

        $('#global-navi').stop().animate({
            right: rightVal
        }, 200);
    });

    //hamburger
})