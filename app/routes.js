const express = require('express')
const router = express.Router()

require('./routes/forms.js')(router)

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
  var emailHasError = false
  var passwordHasError = false
  if (req.session.data['email'] === '') {
    emailHasError = true
    errors.push({
      text: 'Enter your email address',
      href: '#email-error'
    })
  }
  if (req.session.data['password'] === '') {
    passwordHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#password-error'
    })
  }
  if (emailHasError || passwordHasError) {
    res.render('sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
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
  var str = req.session.data['company-number']
  var n = str.length

  if (req.session.data['company-number'] === '') {
    errors.push({
      text: 'Enter the company number',
      href: '#company-number'
    })
    res.render('company-number', {
      errorNum: true,
      errorList: errors
    })
  } else if (n !== 8) {
    errors.push({
      text: 'Company number must be 8 characters ',
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

// Authentication
router.get('/auth-screen', function (req, res) {
  res.render('auth-screen', {
  })
})

router.post('/auth-screen', function (req, res) {
  var errors = []
  if (req.session.data['authNumber'] === '') {
    errors.push({
      text: 'Enter the company authentication code',
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

// Proposed company name
router.get('/proposed-company-name', function (req, res) {
  res.render('proposed-company-name', {
  })
})

// Proposed company name page when the user submits the data
router.post('/proposed-company-name', function (req, res) {
  var errors = []
  // Create if condition the user hasn't selected a radio option
  if (typeof req.session.data['proposedName'] === 'undefined') {
    errors.push({
      text: 'Select yes if you are uploading a document to register a Scottish limited partnership or a Scottish qualifying partnership',
      href: '#proposedName'
    })
    res.render('proposed-company-name', {
      errorproposedName: true,
      errorList: errors
    })
    return
  // Create if condition the user has selected yes for the radio but hasn't entered a proposed name
  } if (req.session.data['proposedName'] === 'yes' && req.session.data['proposedNameInput'] === '') {
    errors.push({
      text: 'Enter the proposed name of the firm or partnership',
      href: '#proposedNameInput'
    })
    res.render('proposed-company-name', {
      errorproposedNameInput: true,
      errorList: errors,
      proposedName: true
    })
    return
  // Create if condition the user selects no
  } if (req.session.data['proposedName'] === 'no') {
    // Redirect the user to the drop out page
    res.redirect('/sqp-exit.html')
  } else {
    // If everything is fine go to the form types page
    res.redirect('/types-of-forms/form-types-sqp')
  }
})

module.exports = router
