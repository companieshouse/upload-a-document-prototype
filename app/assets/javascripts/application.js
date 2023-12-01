//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


$(document).ready(function () {
  $('.hide').click(function () {
    $('.govuk-radios__hint').toggle()
  })
})

const btn = document.querySelector('.btn-toggle')
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

const currentTheme = localStorage.getItem('theme')
if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
} else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme')
}

btn.addEventListener('click', function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark'
  } else {
    document.body.classList.toggle('dark-theme')
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light'
  }
  localStorage.setItem('theme', theme)
})
