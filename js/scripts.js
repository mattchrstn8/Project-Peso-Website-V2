(function ($) {
  'use strict';
  function toggleDropdown(e) {}
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on(
    'click',
    function () {
      $('.offcanvas-collapse').toggleClass('open');
    }
  );
  //Adding functionality when user click the nav icon when it in mobile view
  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
  });
  $('#js-rotating').Morphext({
    animation: 'fadeIn',
    separator: ',',
    speed: 2000,
    complete: function () {},
  });
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
  });
  $('.filters-button-group').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
})(jQuery);
