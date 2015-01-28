function main(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
    });
    $('.arrow-next').click(function(){
        var currentSlide=$('.active-slide');
        var nextSlide=currentSlide.next();
        var currentDot=$('.active-dot');
        var nextDot=currentDot.next();
        if(nextSlide.length==0){
            nextSlide=$('.slide').first();
            nextDot=$('.dot').first();
        }
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        currentDot.removeClass('active-dot');
        nextSlide.fadeIn(600);
        nextSlide.addClass('active-slide');
        nextDot.addClass('active-dot');
    });
    $('.arrow-prev').click(function(){
        var currentSlide=$('.active-slide');
        var currentDot=$('.active-dot');
        var prevSlide=currentSlide.prev();
        var prevDot=currentDot.prev();
        if(prevSlide.length==0){
            prevSlide=$('.slide').last();
            prevDot=$('.dot').last();
        }
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        currentDot.removeClass('active-dot');
        prevSlide.fadeIn(600);
        prevSlide.addClass('active-slide');
        prevDot.addClass('active-dot');
    });
}
$(document).ready(main);
