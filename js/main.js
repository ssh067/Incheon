$(document).ready(function(){
    $(window).scroll(function(){
        $("header").addClass('scroll');
        $('.open_gnb span').addClass('black')

        if($(window).scrollTop() == 0){
            $("header").removeClass('scroll');
            $('.open_gnb span').removeClass('black')
        }
    });
});




$(function(){
    var $menuItem = $('nav li a');
    $menuItem.click(function(){
        var target = $(this).attr('data-');
        var target = $(target).offset().top;
        console.log(target)
        $('html, body').animate({scrollTop:target},400)
    });

$('.s1_top_right .sub1').on('mouseover',function(){
    $('.s1_top_right').mouseleave(function(){
        $('.sub-1').slideUp(0);
    })
    })
$('.s1_top_right .sub2').on('mouseover',function(){
    $('.s1_top_right').mouseleave(function(){
        $('.sub-2').slideUp(0);
    })
    })
$('.s1_top_right .sub3').on('mouseover',function(){
    $('.s1_top_right').mouseleave(function(){
        $('.sub-3').slideUp(0);
    })
    })
$('.s1_top_right .sub4').on('mouseover',function(){
    $('.s1_top_right').mouseleave(function(){
        $('.sub-4').slideUp(0);
    })
    })
})

$('.sub_wrap').on('mouseenter',function(){
    $('.sub').removeClass('none')
    $('.sub').addClass('block')
})
$('.sub_wrap').on('mouseleave',function(){
    $('.sub').removeClass('block')
    $('.sub').addClass('none')
})

$('.bottom li a').click(function(){
    $('.bottom li a').removeClass('hover')
    $(this).addClass('hover')
})


$('.s2_img1 div img').on('mouseover',function(){
    $('.s2_img1 .s3_txt li').slideDown(500);
    $('.s3_txt li').animate({'letter-spacing':'2px'},500,'swing');
})
$('.s2_img2 div img').on('mouseover',function(){
    $('.s2_img2 .s3_txt li').slideDown(500);
    $('.s3_txt li').animate({'letter-spacing':'2px'},500,'swing');
})
$('.s2_img3 div img').on('mouseover',function(){
    $('.s2_img3 .s3_txt li').slideDown(500);
    $('.s3_txt li').animate({'letter-spacing':'2px'},500,'swing');
})
$('.s2_img4 div img').on('mouseover',function(){
    $('.s2_img4 .s3_txt li').slideDown(500);
    $('.s3_txt li').animate({'letter-spacing':'2px'},500,'swing');
})




$('.open_gnb').click(function(){
    $('.logo').toggleClass('open');
    if($('.logo').hasClass('open')){
        $('.sub_wrap').slideDown()
        $('.logo').stop().animate({left:90},500);
    }else{
    $('.logo').stop().animate({left:0},500);
    $('.sub_wrap').slideUp(250,function(){
        $(this).removeAttr('style')})
    }
    $('.open_gnb').toggleClass('open')
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
$(document).ready(function(){
    $('.sec1_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        accessiblility: true,
        arrow: true,
    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})