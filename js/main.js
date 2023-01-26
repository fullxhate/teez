$(function (){
    $('.main__book-link').on('click', function () {
        $('.main__form').fadeIn(297).css('display', 'block');
    });

    $("#form").submit(function (e) {
        e.preventDefault();
        let form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "send.php",
            data: form_data,
            success: function () {

                alert("Ваше сообщение отправлено!");
            }
        });
    });
    $('.header__burger').on('click', function () {
        $('.header__menu , .header__burger').toggleClass('active');
        $('.header__menu').slideToggle(300).css('display', 'block')
    });
});
$(document).mouseup(function (e) {
    let block = $(".main__form");
    if (!block.is(e.target) && block.has(e.target).length === 0) {
        block.hide();
    }
});
let swiper = new Swiper('.swiper', {
    loop: false,
    trueMode: true,
    slidesPerView: 'auto',
    spaceBetween: 17,
    slidesPerGroup: 1,
    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,
    WatchSlidesProgress: true,
    mousewheel: {
        sensitivity: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },




    breakpoints: {

        320: {
            slidesPerView: 'auto',
            loop: false,
            trueMode: true,
            slidesOffsetAfter: 0,
            slidesPerGroup: 1,
            pagination : {
                el : '.swiper-pagination'
            },

            480: {
                slidesPerView: 'auto',
                loop: false,
                trueMode: true,
                slidesOffsetAfter: 0,
                slidesPerGroup: 1,
                pagination : {
                    el : '.swiper-pagination'
                },




            },
            992: {
                slidesPerView: 'auto',
                loop: false,
                trueMode: true,
                slidesOffsetAfter: 0,
                slidesPerGroup: 1,
                pagination : {
                    el : '.swiper-pagination'
                },

            },
        }


    }
});