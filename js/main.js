$(function () {
  if ($(window).scrollTop() > 20) {
    $('.sticky-top').css('background-color', '#212C50')
  } else {
    $('.sticky-top').css('background-color', 'transparent')
  }
  $(document).on('scroll', function () {
    if ($(window).scrollTop() > 20) {
      $('.sticky-top').css('background-color', '#212C50');
      if ($('.dash-toggle').attr('aria-expanded') == 'true') {
        $('.my-dash-nav').css('background-color', '#293661');

        e.preventDefault();
      } else {
        $('.my-dash-nav').css('background-color', '#212C50');
      }
    }
  })


  // video player 
  $(document).on('click', 'body', function () {
    if ($('body').hasClass('modal-open')) {
      // $('videoIframe').attr('src', '')
      var value = $('#videoIframe').attr('data-src');
      $('#videoIframe').attr('src', value);
    }
  })





  // navigation

  $(document).on('click', '.navbar-nav .nav-link', function () {
    $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
  })


  /* Select Api */
  $(document).on('change', '.select-new', function () {

    if ($('#SelectAPIS').val() == 'Custom API') {
      $('.new-card-select').removeClass('d-none')
    } else {
      $('.new-card-select').addClass('d-none')
    }
  })
  $(document).on('click', '.akamai-api', function () {
    console.log('dd');
      $('#SelectAPIS #Akamai').attr('selected','selected').siblings().removeAttr('selected');
      $('.new-card-select').addClass('d-none')
  })
  $(document).on('click', '.tickets-api', function () {
    console.log('dd');
      $('#SelectAPIS #Tickets').attr('selected','selected').siblings().removeAttr('selected');
      $('.new-card-select').addClass('d-none')

  })
  $(document).on('click', '.custom-api', function () {
    console.log('dd');
      $('#SelectAPIS #customAPI').attr('selected','selected').siblings().removeAttr('selected');
      $('.new-card-select').removeClass('d-none')
  })

});