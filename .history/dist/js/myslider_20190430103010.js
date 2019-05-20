window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        
        //Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
        
    })
    console.log('swiper is loaded');
}