


  
  document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.row');
    var msnry = new Masonry(elem, {
      itemSelector: '.col',
      percentPosition: true
    });
  });

$(document).ready(function () {

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 800);
    }
  });

  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#backToTop').fadeIn(300);
    } else {
      $('#backToTop').fadeOut(300);
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  
  var darkModeToggle = $('#darkModeToggle');
  var storedTheme = localStorage.getItem('theme') || 'light';
  $('html').attr('data-theme', storedTheme);

  if (storedTheme === 'dark') {
    darkModeToggle.prop('checked', true);
  }

  darkModeToggle.change(function () {
    var theme = $(this).prop('checked') ? 'dark' : 'light';
    $('html').attr('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#mainNav').addClass('shadow-sm');
    } else {
      $('#mainNav').removeClass('shadow-sm');
    }
  });

});