const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
  req.session.destroy()
  res.render('index', {
  })
})

// Sign in
router.get('/sign-in', function (req, res) {
  res.render('sign-in', {
  })
})

router.post('/sign-in', function (req, res) {
  var errors = []
  if (req.session.data['sign-in'] === '') {
    errors.push({
      text: 'Enter the company number',
      href: '#sign-in'
    })
    res.render('sign-in', {
      errorNum: true,
      errorList: errors
    })
  } else {
    res.redirect('company-number')
  }
})

// Company number
router.get('/company-number', function (req, res) {
  res.render('company-number', {
  })
})

router.post('/company-number', function (req, res) {
  var errors = []
  if (req.session.data['company-number'] === '') {
    errors.push({
      text: 'Enter the company number',
      href: '#company-number'
    })
    res.render('company-number', {
      errorNum: true,
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
  if (req.session.data['authNumber'] === '') {
    errors.push({
      text: 'Enter the company authentication number',
      href: '#auth-number'
    })
    res.render('auth-screen', {
      errorAuth: true,
      errorList: errors
    })
  } else {
    res.redirect('upload-accounts')
  }
})

module.exports = router
