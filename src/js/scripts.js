$(document).ready(function () {

  $('h1,h2,h3,h4,h5,h6').each(function() {
    var $this = $(this);
    var link = '<span class="icon-link"></span>';

    if ($this.attr('id')) {
      $this.prepend(link);
    }
  });

  $(function() {
    var $toggle = $('[data-js="nav-toggle"]');
    var $nav = $('[data-js="nav-sidebar"]');

    $toggle.click(function(e) {
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $this.addClass('active');
        $nav.fadeIn(350);
      } else {
        $this.removeClass('active');
        $nav.fadeOut(350);
      }
    });
  });

  $(function() {
    var $main = $('[data-js="main"]');


  });

  $(function() {
    $('a[href="#"]').click(function(e) {
      $('html,body').animate({
        scrollTop: 0
      }, 400);

      e.preventDefault();
    });
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 400);
        }
      }

      e.preventDefault();
    });
  });

  var $nav = $('[data-js="nav-list"]');
  var $navItem = $('[data-js="nav-list"] li');
  var $navLink = $('[data-js="nav-list"] a');
  var $section = $('section');
  var navChildren = $navItem.children();
  var navArray = [];

  for (var i = 0; i < navChildren.length; i++) {
    var navChild = navChildren[i];
    var navHref = $(navChild).attr('href');

    navArray.push(navHref);
  }

  $(window).scroll(function() {
    var winPos = $(window).scrollTop();
    var winH = $(window).height();
    var docH = $(document).height();

    for (var i = 0; i < navArray.length; i++) {
      var Id = navArray[i];
      var $sec = $('[data-js="' + Id + '"]');
      var secH = $sec.height();
      var secPos = $sec.offset().top - 64;

      if (winPos >= secPos && winPos < (secPos + secH)) {
        $('a[href="' + Id + '"]').addClass('nav-active');
      } else {
        $('a[href="' + Id + '"]').removeClass('nav-active');
      }
    }

    if (winPos + winH == docH) {
      var $navItemLast = $('[data-js="nav-list"] li:last-child a');

      if (!$navItemLast.hasClass('nav-active')) {
        var navCurr = $('.nav-active').attr('href');

        $('a[href="' + navCurr + '"]').removeClass('nav-active');
        $navItemLast.addClass('nav-active');
      }
    }

  });

  var d = new Date();
  var n = d.getFullYear();
  var $copyright = $('[data-js="copyright"]');
  $copyright.html('Copyright &copy; ' + n + ' <a href="http://www.modernhealthcare.com">Modern Healthcare</a>');

});
