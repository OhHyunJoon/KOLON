$(function(){
    // header
    $('header .nav .menu').mouseenter(function(){
        delay = setTimeout(function(){
            $('header .nav .menu .sub-menu').css({
                'height' : '314px',
                'overflow' : 'visible'
            })
        },500)
        $('.header-bg').slideDown(600)
    })
    $('header .nav .menu').mouseleave(function(){
            $('header .nav .menu .sub-menu').css({
                'height' : '0',
                'overflow' : 'hidden'
            })
        $('.header-bg').css('display', 'none')
    })

    $('.bt').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })
    $('.bttn img').click(function(e){
        e.preventDefault();
        $('.textt').toggle()
    })
    $('.inner .nav').mouseenter(function(){
        $('.border').show()
    })
    $('.inner .nav').mouseleave(function(){
        $('.border').hide()
    })
    $('.btn_more').click(function(){
        $('.btn_more').hide()
        $('.content-item6').show()
        $('.content-item7').show()
        $('.content-item8').show()
        $('.content-item9').show()
        $('.content-item10').show()
        $('.content-item10').show()
        $('.content-warp3').height(1334)
    })
})