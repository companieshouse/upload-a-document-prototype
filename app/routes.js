const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
  req.session.destroy()
  res.render('index', {
  })
})

// Company number
router.get('/company-number', function (req, res) {
  res.render('company-number', {
  })
})

router.post('/company-number', function (req, res) {
  var errors = []
  if (typeof req.session.data['company-number'] === 'undefined') {
    errors.push({
      text: 'Error text',
      href: '#company-number'
    })
    res.render('company-number', {
      errorType: true,
      errorList: errors
    })
  } else {
    res.redirect('confirm-company')
  }
})

// Auth
router.get('/auth-screen', function (req, res) {
  res.render('auth-screen', {
  })
})

router.post('/auth-screen', function (req, res) {
  var errors = []
  if (typeof req.session.data['auth'] === 'undefined') {
    errors.push({
      text: 'Error message',
      href: '#auth'
    })
    res.render('auth-screen', {
      errorType: true,
      errorList: errors
    })
  } else {
    res.redirect('types-of-accounts')
  }
})

module.exports = router
