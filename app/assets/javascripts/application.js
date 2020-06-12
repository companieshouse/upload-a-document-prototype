/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $('.hide').click(function () {
    $('.govuk-radios__hint').toggle()
  })
  $('input[name="supporting-documents"]').on('change', function () {
    if ($(this).val() === 'no') {
      $('.test').text('Submit document')
    } else {
      $('.test').text('Continue')
    }
  })
})
