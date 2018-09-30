import './wow.min';
import jQuery from 'jquery';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/carousel';

new WOW().init();

(function($) {
  $(document).ready(function() {
    let cakeImg = $('.cake-img');
    let cakeModal = $('#cake-modal');
    let activeLogo = $('.has-active-logo');
    let scrollToButton = $('.scroll-to-button');

    let sliderControl = $('.slider-control');
    let slides = document.querySelectorAll('img.slide');

    $.each(slides, function(i, slide) {
      $(slide).attr('data-order', i + 1);
    });

    // Header slider
    sliderControl.click(function() {
      let direction = $(this).attr('data-slide');
      $('img.slide.active').fadeOut('fast', function() {
        let nextOrder;
        let prevSlide = $(this);
        let prevOrder = Number(prevSlide.attr('data-order'));

        if (direction === 'prev') {
          nextOrder = (slides.length == prevOrder ? 1 : prevOrder + 1) - 1;
        } else {
          nextOrder = (prevOrder == 1 ? slides.length : prevOrder - 1) - 1;
        }

        prevSlide.removeClass('active');
        $(slides[nextOrder])
          .fadeIn('slow', function() {
            $(this).addClass('active');
          })
          .css('display', 'block');
      });
    });

    // Show cakes modal
    cakeImg.click(function() {
      cakeModal.modal('show');
    });

    // Scroll to block
    scrollToButton.click(function() {
      let scrollBlock = `.${$(this).attr('data-scroll')}`;
      $('html, body').animate(
        {
          scrollTop: $(scrollBlock).offset().top
        },
        1000
      );
    });

    // Change logos src on hover
    activeLogo.hover(
      function() {
        let activeLogoSrc = $(this)
          .attr('src')
          .replace('min', 'active-min');
        $(this).attr('src', activeLogoSrc);
      },
      function() {
        let usualLogoSrc = $(this)
          .attr('src')
          .replace('active-min', 'min');
        $(this).attr('src', usualLogoSrc);
      }
    );
  });
})(jQuery);
