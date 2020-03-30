/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $('.js-button').click(function () {
    $('.js-button').css('display', 'none')
    $('.payment-reference').css('display', 'block')
  })
})
