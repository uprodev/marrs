jQuery(document).ready(function ($) {

  /*lang*/
  $(window).on('load', function (e){
    if($('.lang-wrap ul li:first-child').hasClass()){
      $('.lang-wrap ul').addClass('is-left')
    };



  });

  $(window).on('load', function (e){
    if($('*').is('.home')){
      $('.bg-img-section .video-desk').get(0).play();
      $('.bg-img-section .video-mob').get(0).play();
    }
    if($('*').is('.bg-design')){
      $('.bg-design').addClass('is-load')
    }

  })

  /*slider*/
  var swiperTop = new Swiper(".top-slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: ".top-pagination",
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
  });

  /* mob menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    if($('.open-menu').hasClass('is-active')){
      $('.open-menu').removeClass('is-active');
      $('html').removeClass('is-menu');
      $.fancybox.close();
    } else{
      $('.open-menu').addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
        afterClose:function(e){
          $('.open-menu').removeClass('is-active');
          $('html').removeClass('is-menu');
        },
        beforeShow:function(e){
          $('html').addClass('is-menu');
        },
      });
    }
  });

  /*move top*/

  $(document).on('click', '.top-site', function (e) {
    $('html, body').stop().animate({scrollTop:0},'slow', 'swing');
  });

  /*show/hide video*/
/*  if(window.innerWidth > 1279){
    $(document).on('mouseover', '.bg-img-section', function (e){
      setTimeout(function() {
        $('.bg-img-section video').get(0).play();
        $('.bg-img-section').addClass('is-play');
      }, 500);
    });

    $(document).on('mouseout', '.bg-img-section', function (e){
      setTimeout(function() {
        $('.bg-img-section video').get(0).pause();
        $('.bg-img-section').removeClass('is-play');
      }, 500);
    });
  }else{
    $('.bg-img-section video').get(0).play();
  };*/


  /*accordion*/
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

  /*fancybox*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
  });


  /*slider*/
  var swiperProject = new Swiper(".project-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1279: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

    },
  });


  /*datapicker*/
  const localeEn = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  }

  new AirDatepicker('.data1', {
    locale: localeEn,

  });
  new AirDatepicker('.date-form', {
    locale: localeEn,
    timepicker: true,
    minutesStep: 5,
    autoClose: true,
  });



$(".hover-block-popup").on('click', function (e){
    $(this).hide();
    $(this).find('video').get(0).play();
  });

  /*menu anim*/
  if($('*').is('.home-nav')){
    $('.home-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }
  if($('*').is('.design-nav')){
    $('.design-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }
  if($('*').is('.cases-nav')){
    $('.cases-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }

  if($('*').is('.ticket-nav')){
    $('.ticket-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }

  if($('*').is('.about-nav')){
    $('.about-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }
  if($('*').is('.contact-nav')){
    $('.contact-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }

  if($('*').is('.article-nav')){
    $('.article-nav').onePageNav({
      scrollThreshold: 0.01,
    });
  }

  if($('*').is('.case-inner-nav')){
    $('.case-nav-active').onePageNav({
      scrollThreshold: 0.01,
    });

    $(document).on('click', '.case-head .tabs-menu li', function (e){
      let item = $(this).index() + 1;
      $('.case-inner-nav').removeClass('case-nav-active');
      $(".case-inner-nav-"+ item).addClass('case-nav-active');

      $('.case-nav-active').onePageNav({
        scrollThreshold: 0.01,
      });
      //new 23-01-24
      $('.grid').isotope( 'reloadItems' ).isotope();

    });



  }






  /*fix block*/
  $('.csticky').fixTo('.csticky-holder', {
    top: 100,
    useNativeSticky:true
  });


  $(window).scroll(function () {

    if($('*').is('.about-title')){
      if($(this).scrollTop() > 900) {
        $('.about-title').addClass('is-hide')
      } else {
        $('.about-title').removeClass('is-hide')
      }
    }

  });


 /* home anim*/
  $(document).scroll(function() {

    /*page home*/
    if($('*').is('.home-nav')) {
      if($('.home-nav .item-pre-footer').hasClass('current') || $('.home-nav .item-footer').hasClass('current') || $('.home-nav .item-about').hasClass('current')){
        $('.pre-footer').addClass('is-visible');
      }else{
        $('.pre-footer').removeClass('is-visible');
      };


      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };

    }

    /*page case*/
    if($('*').is('.cases-nav')) {
      if($('.cases-nav .item-pre-footer').hasClass('current') || $('.cases-nav .item-footer').hasClass('current')){
        $('.pre-footer').addClass('is-visible');
      }else{
        $('.pre-footer').removeClass('is-visible');
      };

    }

    /*page ticket*/
    if($('*').is('.ticket-nav')) {

      if($('.form-section').hasClass('current') || $('.item-footer').hasClass('current')){
        $('.form-section').addClass('is-visible');
      }else{
        $('.form-section').removeClass('is-visible');
      };

      if($('.item-work2').hasClass('current') || $('.item-work1').hasClass('current')){
        $('.work-wrap').addClass('is-active');
      }else{
        $('.work-wrap').removeClass('is-active');
      };

      if($('.item-ticket-title').hasClass('current')){
        $('body').removeClass('is-viz');
      }else{
        $('body').addClass('is-viz');
      };
    }


    /*page about*/
    if($('*').is('.about-nav')) {
      if($('.item-passion').hasClass('current') || $('.item-footer').hasClass('current') || $('.item-crew').hasClass('current')){
        $('.passion').addClass('is-visible');
      }else{
        $('.passion').removeClass('is-visible');
      };


      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };



    }



    /*page contact*/
    if($('*').is('.contact-nav')) {

      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };

    }

    /*article*/
    if($('*').is('.article-nav')) {

      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
      }else{
        $('header').removeClass('black');
      };

    }


    /*case inner page*/
    if($('*').is('.case-nav-active.case-inner-nav-1')) {

      if($('.case-inner-nav-1 .item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };

    }

    if($('*').is('.case-nav-active.case-inner-nav-2')) {

      if($('.case-inner-nav-2 .item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');

      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');

      };

    }

    if($('*').is('.case-nav-active.case-inner-nav-3')) {
      if($('.case-inner-nav-3 .item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
        console.log(11)
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
        console.log(12)
      };

    }



    /*page web-design || page ticket*/
    if($('*').is('.design-nav') || $('*').is('.ticket-nav')){
      if($('.item-pre-footer').hasClass('current') || $('.item-footer').hasClass('current') || $('.item-about').hasClass('current') || $('.item-reviews').hasClass('current')){
        $('.form-section').addClass('is-visible');
      }else{
        $('.form-section').removeClass('is-visible');
      };


      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };
    }

    /*anim-bg*/
    if($('*').is('.web-design')){
      var st = $(this).scrollTop(),
        //MOVE BLOCK
        topBlock = $('.web-design-1').offset().top,
        scrollLeft = -(st + topBlock)/5 - 100,
        scale = st/0.99986 - st + 1,
        translate = 'translate3d( ' + '-50%' + ', ' + scrollLeft + 'px, ' + 0 + ')scale('+ scale +')',
        anim = 'all 0.1s ease';

      $('.bg-design img').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
        ' -webkit-transition': anim,
        'transition': anim
      });
    }

  });



  /*footer */
  function myfun() {
    var h = parseInt($('.footer').css('height'));
    $(".footer-wrap").css('padding-bottom', h);

    var width = parseInt($('.team .right .item figure').css('width')),
      h1 = width;
    $(".team .right .item figure").css('height', h1);
  };

  $( window ).resize(myfun);
  $( document ).ready(myfun);


  /*guiz1*/
  $(document).on('click', '.input-wrap-rocket', function (e){
    $('.input-wrap-rocket').removeClass('is-click');
    $(this).addClass('is-click');
    $(this).prevAll().addClass('is-click')
  })


  $(document).on('click', '.quiz-1 .next-step-1', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').index();
    if(item > -1){
      $('.quiz-1 .item').removeClass('item-active');
      $('.quiz-1 .item-2').addClass('item-active item-0');
    }
  });
  $(document).on('click', '.quiz-1 .next-step-2', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').closest('.input-wrap').index();

    if(item === 1){
      $('.quiz-1 .item').removeClass('item-active');
      $('.quiz-1 .item-3-1').addClass('item-active item-0');
    }else if(item === 2){
      $('.quiz-1 .item').removeClass('item-active');
      $('.quiz-1 .item-3-2').addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-1 .next-step-3', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').closest('.input-wrap').index();
    if(item === 1){
      $('.quiz-1 .item').removeClass('item-active');
      $('.quiz-1 .item-4-1').addClass('item-active item-0');
    }else if(item === 2){
      $('.quiz-1 .item').removeClass('item-active');
      $('.quiz-1 .item-4-2').addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-1 .next-step-default', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').index(),
        index = $(this).closest('.item').index() + 2;
    if(item > -1){
      $('.quiz-1 .item').removeClass('item-active');
      $(".quiz-1 .item:nth-child("+ index +")").addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-1 .next-step-file', function (e){
    e.preventDefault();
    let index = $(this).closest('.item').index() + 2;
    $('.quiz-1 .item').removeClass('item-active');
    $(".quiz-1 .item:nth-child("+ index +")").addClass('item-active item-0');
  });


  /*guiz2*/

  $(document).on('click', '.quiz-2 .next-step-1', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').closest('.input-wrap').index();

    if(item === 1){
      $('.quiz-2 .item').removeClass('item-active');
      $('.quiz-2 .item-2-1').addClass('item-active item-0');
    }else if(item === 2){
      $('.quiz-2 .item').removeClass('item-active');
      $('.quiz-2 .item-2-2').addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-2 .next-step-2', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').closest('.input-wrap').index();

    if(item === 1){
      $('.quiz-2 .item').removeClass('item-active');
      $('.quiz-2 .item-3-1').addClass('item-active item-0');
    }else if(item === 2){
      $('.quiz-2 .item').removeClass('item-active');
      $('.quiz-2 .item-3-2').addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-2 .next-step-default', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').index(),
      index = $(this).closest('.item').index() + 2;
    if(item > -1){
      $('.quiz-2 .item').removeClass('item-active');
      $(".quiz-2 .item:nth-child("+ index +")").addClass('item-active item-0');
    }
  });

  $(document).on('click', '.quiz-2 .next-step-file', function (e){
    e.preventDefault();
    let index = $(this).closest('.item').index() + 2;
    $('.quiz-2 .item').removeClass('item-active');
    $(".quiz-2 .item:nth-child("+ index +")").addClass('item-active item-0');
  });


  /*guiz3*/
  /*$(document).on('click', '.quiz-3 .next-step-default', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').index(),
      index = $(this).closest('.item').index() + 1,
      h = window.innerHeight,
      scrollTop = -h * index,
      scrollTopH2 = h * index/2,
      scrollTopH2Mob = h * index/3,
      translate = 'translate3d(' +0+ ', ' + scrollTop + 'px, ' + 0 + ')',
      translateH2 = 'translate3d('+ scrollTopH2 + 'px, ' +0+ ', '  + 0 + ')',
      translateH2Mob = 'translate3d('+ scrollTopH2Mob + 'px, ' +0+ ', '  + 0 + ')',
      index2 = $(this).closest('.item').index() + 2;

    if(item > -1){
      $('.quiz-3 .item').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
      });
      $(".form-section-quiz-3 .form-step .item").removeClass('item-active');
      $(".form-section-quiz-3 .form-step .item:nth-child(" + index2 + ")").addClass('item-active');
      if(window.innerWidth > 991){
        $('.form-section-quiz-3 .line-mars .wrap').css({
          '-webkit-transform': translateH2,
          '-moz-transform': translateH2,
          'transform': translateH2
        });
      }else{
        $('.form-section-quiz-3 .line-mars .wrap').css({
          '-webkit-transform': translateH2Mob,
          '-moz-transform': translateH2Mob,
          'transform': translateH2Mob
        });
      }
    }


    if($('.quiz-3 .item-1').hasClass('item-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('item-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  });

  $(document).on('click', '.quiz-3 .next-step-text', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input').val(),
      index = $(this).closest('.item').index() + 1,
      h = window.innerHeight,
      scrollTop = -h * index,
      scrollTopH2 = h * index/2,
      scrollTopH2Mob = h * index/3,
      translate = 'translate3d(' +0+ ', ' + scrollTop + 'px, ' + 0 + ')',
      translateH2 = 'translate3d('+ scrollTopH2 + 'px, ' +0+ ', '  + 0 + ')',
      translateH2Mob = 'translate3d('+ scrollTopH2Mob + 'px, ' +0+ ', '  + 0 + ')',
      index2 = $(this).closest('.item').index() + 2;

    if(item.length>5){
      $('.quiz-3 .item').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
      });
      $(".form-section-quiz-3 .form-step .item").removeClass('item-active');
      $(".form-section-quiz-3 .form-step .item:nth-child(" + index2 + ")").addClass('item-active');
      if(window.innerWidth > 991){
        $('.form-section-quiz-3 .line-mars .wrap').css({
          '-webkit-transform': translateH2,
          '-moz-transform': translateH2,
          'transform': translateH2
        });
      }else{
        $('.form-section-quiz-3 .line-mars .wrap').css({
          '-webkit-transform': translateH2Mob,
          '-moz-transform': translateH2Mob,
          'transform': translateH2Mob
        });
      }

    }

    if($('.quiz-3 .item-1').hasClass('item-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('item-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  });*/

  $(window).on('load', function (e){
    $('.form-section-quiz-3').css('max-height', window.innerHeight);
  });


  $(document).on('click', '.quiz-3 .next-step-default', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input:checked').index();
        console.log(item)
    if(item > -1){
      swiperQuiz.slideNext();
    }


    if($('.quiz-3 .item-1').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  });

  $(document).on('click', '.quiz-3 .next-step-text', function (e){
    e.preventDefault();
    let item = $(this).closest('.item').find('input').val();

    if(item.length>5){
      swiperQuiz.slideNext();
    }

    if($('.quiz-3 .item-1').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  });

  var swiperQuiz = new Swiper(".quiz-slider-3", {
    direction: "vertical",
    allowTouchMove:false,
    speed: 2000,
  });

  swiperQuiz.on('slideChange', function () {
    let item = swiperQuiz.activeIndex,
      scrollTopH2 = item*300
    translateH2 = 'translate3d('+ scrollTopH2 + 'px, ' +0+ ', '  + 0 + ')',

      $('.form-section-quiz-3 .line-mars .wrap').css({
        '-webkit-transform': translateH2,
        '-moz-transform': translateH2,
        'transform': translateH2
      });

  })


  $(document).on('click', '.form-section-quiz-3 .next a', function (e){
    e.preventDefault();
    swiperQuiz.slideNext();

    if($('.quiz-3 .item-1').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  })

  $(document).on('click', '.form-section-quiz-3 .prev a', function (e){
    e.preventDefault();
    swiperQuiz.slidePrev();

    if($('.quiz-3 .item-1').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .prev').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .prev').removeClass('disabled')
    }

    if($('.quiz-3 .item:last-child').hasClass('swiper-slide-active')){
      $('.form-section-quiz-3 .next').addClass('disabled')
    }else{
      $('.form-section-quiz-3 .next').removeClass('disabled')
    }
  })






  /*input file*/
  $('input:file').change(function(){
    $this = $(this);
    $name = $this.val().replace('C:\\fakepath\\', '');
    $('#file-info').text($name).show();
  });


  /*video project*/
  var selected = [];
  if(window.innerWidth > 1279){
    $(document).on('mouseover', '.project-video .video-wrap', function (e){
      $(this).find('video').get(0).play();
      $(this).find('img').hide();
      $(this).closest('.item').addClass('is-play');
    });

    $(document).on('mouseout', '.project-video .video-wrap', function (e){
      $(this).find('video').get(0).pause();
      $('.project-video .video-wrap img').show();
      $('.project-video .item').removeClass('is-play');
    });
  }else {
   /* $('.project-video .video-wrap video').get(0).play();*/
    $('.project-video .video-wrap img').hide();
    $('.project-video .video-wrap').closest('.item').addClass('is-play');

    $('.about .content .item.is-play').each(function() {
      selected.push($(this).find('video').get(0).play());
    });
  }

 /* video play*/



  /*show text*/
  $(document).on('click', '.more', function (e){
    e.preventDefault();
    $(this).css({
      opacity:0,
      zIndex:-1,
    });
    $(this).closest('.link-wrap').siblings('p').slideDown()
  });

  /*team popup*/  /*team popup*/
  $(document).on('click', '.team-fancybox', function (e){
    e.preventDefault();

    let item = $(this).attr('href');
    $.fancybox.open( $(item), {
      touch:false,
      autoFocus:false,
      animationDuration : 600,
      animationEffect   : 'slide-in-out',
      beforeShow : function(e){
        $('body').addClass('is-white');
        $('.cursor').addClass('is-active');
        $('header').addClass('black');
      },
      afterClose: function () {
        $('body').removeClass('is-white');
        $('.cursor').removeClass('is-active');
        $('header').removeClass('black');
      }
    });
  });



  if(window.innerWidth> 991){
    $(document).on('click', '.close-team', function (e){
      e.preventDefault();
      $.fancybox.close();
    });
  }else{
    $(document).on('click', '.close-team-mob', function (e){
      e.preventDefault();
      $.fancybox.close();
    });
  }


  var cursor = $(".cursor"),
      cursorDrag = $('.cursor-drag');

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
    cursorDrag.css({
      top: e.clientY - cursor.height(),
      left: e.clientX- cursor.width()
    });
  });

  $('.crew .slider-wrap')
    .mouseleave(function () {
      cursor.css({
        opacity: "0"
      });
    })
    .mouseenter(function () {
      cursor.css({
        opacity: "1"
      });
    });


  /*ticket video popup cursor*/
  $(".ticket-title .content-width figure a").hover(function(e) {
    let item = $(this).find('span').addClass('is-move'),
        element = $('.ticket-title .content-width figure');

    $(window).mousemove(function (e) {
      let win = $(window).scrollTop();
      $('.is-move').css({
        top: e.clientY-element.offset().top + win,
        left: e.clientX-element.offset().left,
      });
    });

  }, function() {
    $('.content-width figure a span').removeClass("is-move").css({
      top: 50+"%",
      left:50+"%",
    });
  });

  /*slider*/
  var swiperTeam = new Swiper(".slider-team", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      767: {
        spaceBetween: 30,
      },

    },
  });

  $(document).on('click', '.next-slide', function (e){
    e.preventDefault();
    swiperTeam.slideNext();
  });



//TABS
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        if($("body").hasClass('single-project')){
          let index = document.URL.toString().slice(-1);
          if(index == 0 || index == 1 || index == 2){
            showPage(index);
          }else{
            showPage(0);
          }
        }else{
          showPage(0);
        }

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
          $('body,html').animate({scrollTop: 0}, 0);

          $(".info-case .wrap").unstick();

          $(".info-case .wrap").sticky({
            topSpacing:0,
            bottomSpacing:1000,
            zIndex:2
          });
          $(".full-img img").unstick();
          $(".full-img img").sticky({
            topSpacing:0,
            bottomSpacing:1000,
            zIndex:1
          });


          //$('body,html').animate({scrollTop: 0}, 300);
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();


 /* item sticky*/
  if(window.innerWidth>991){
    $(".case-head .menu-wrap").sticky({
      topSpacing:20,
      zIndex:999991
    });
  }else{
    $(".case-head .menu-wrap").sticky({
      topSpacing:10,
      zIndex:999991
    });
  }

  $(".skill .bg-mob").sticky({
    topSpacing:200,
    bottomSpacing:1000
  });
  $(".info-case .wrap").sticky({
    topSpacing:0,
    bottomSpacing:1000,
    zIndex:2
  });
  $(".full-img img").sticky({
    topSpacing:0,
    bottomSpacing:1000,
    zIndex:1
  });





  /* animation*/
  AOS.init({
    disable: 'mobile',
  });


 /* form label*/
  $('.input-wrap input, .input-wrap-text textarea').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active');
    }
  });
  $('.input-wrap input, .input-wrap-text textarea').focus(function (e) {
    $(this).siblings('label').addClass('is-focus')
  });
  $('.input-wrap input, .input-wrap-text textarea').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus')
  });

  $('.date-form').focus(function (e) {
    $(this).siblings('label').addClass('is-date')
  });

 /* cutt text*/
  $('.blog-text').Cuttr({
    truncate: 'words',
    length: 25
  });



  /*scroll on mobile*/
  $(document).on('click', '.tabs-menu li', function (e){
    $('.solution-3 .line-1 .item-2 ').scrollLeft(75);
    $('.objective figure .line-2 ').scrollLeft(85);
    $('.objective-3-2 figure .line-3 ').scrollLeft(85);
    $('.objective-3-2 figure .line-4 ').scrollLeft(85);
  });

  if($('*').is('.page-case')){
    if(window.innerWidth < 991){
      $(document).scroll(function() {
        let windowTop = $(window).scrollTop();

        if(windowTop > 200){
          $('body').addClass('hide-header');

        }else{
          $('body').removeClass('hide-header');

        }
      });


    }
  }


  document.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.quiz-2 .item').removeClass('item-active');
    $('.quiz-2 .item-9-1').addClass('item-active');
    $('.quiz-1 .item').removeClass('item-active');
    $('.quiz-1 .item-9-1').addClass('item-active');
  }, false );






  //new 23.01.24
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  })

});


