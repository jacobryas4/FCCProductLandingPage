$(document).ready(function() {

   $(window).on('scroll resize', check_if_in_view);
//    $(window).on('scroll', scrollAnimation);

   $(window).trigger('scroll');

   // OLD CODE FOR NAV ANIMATION, MOVED DOWN IN PAGE IN ATTEMPT TO USE ADDCLASS INSTEAD OF TOGGLECLASS

   // add animation to nav to make it visible once past header img
    // var scrollAnimation = function () {

    //     console.log($(this).scrollTop());

    // //    $(document).scroll(function() {

    // //        $('nav').toggleClass('scrolled', $(this).scrollTop() > ($('.headline').height()) - $('nav').height());
    
    // //    })
        
    //     if ($(this).scrollTop() > ($('.headline').height() - $('nav').height())) {

    //         $('nav').addClass('scrolled');

    //     } else {

    //         $('nav').removeClass('scrolled');

    //     }

    // }

    // scrollAnimation();

    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       
      
      if (scrollTop >= 100) {
        $('nav').addClass('scrolled');
      } else if (scrollTop < 100) {
        $('nav').removeClass('scrolled');
      } 
      
    }); 

})

function check_if_in_view() {
    
    // get elements

    var window_height = $(window).height();

    var window_top_position = $(window).scrollTop();
    
    var window_bottom_position = (window_top_position + window_height);

    var features = $('.feature');

    $.each(features, function() {

        var $element = $(this);

        var element_height = $element.outerHeight();

        var element_top_position = $element.offset().top;

        var element_bottom_position = (element_top_position + element_height);

        // check to see if this current container is within viewport
        
        if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {

            $element.addClass('in-view');

        } else {

            // this makes elements scroll in view again after they scroll out of view
            // $element.removeClass('in-view');

        }

    });

}

// var scrollAnimation = function () {
    
//             console.log($(this).scrollTop());
    
//         //    $(document).scroll(function() {
    
//         //        $('nav').toggleClass('scrolled', $(this).scrollTop() > ($('.headline').height()) - $('nav').height());
        
//         //    })
            
//             if ($(this).scrollTop() > ($('.headline').height() - $('nav').height())) {
    
//                 $('nav').addClass('scrolled');
    
//             } else {
    
//                 $('nav').removeClass('scrolled');
    
//             }
    
//         }