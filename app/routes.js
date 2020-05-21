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

// Type of document
router.get('/types-of-forms/form-types', function (req, res) {
  res.render('types-of-forms/form-types', {
  })
})

router.post('/types-of-forms/form-types', function (req, res) {
  var errors = []
  var value = req.session.data['type']
  if (typeof req.session.data['type'] === 'undefined') {
    errors.push({
      text: 'Select the *type of form that you want to upload* ',
      href: '#type'
    })
    res.render('/types-of-forms/form-types', {
      errorType: true,
      errorList: errors
    })
  } if (value === 'insolvency') {
    res.redirect('insolvency/insolvency')
  } if (value === 'resolutions') {
    res.redirect('../auth-screen')
  } if (value === 'articles') {
    res.redirect('../auth-screen')
  } if (value === 'constitution') {
    res.redirect('../auth-screen')
  } if (value === 'reg') {
    res.redirect('reg/reg')
  } if (value === 'slp') {
    res.redirect('slp/limited-partnerships')
  } if (value === 'sqp') {
    res.redirect('sqp/scottish-limited-partnership')
  }
})

// Insolvency
router.get('/types-of-forms/insolvency/insolvency', function (req, res) {
  res.render('types-of-forms/insolvency/insolvency', {
  })
})

router.post('/types-of-forms/insolvency/insolvency', function (req, res) {
  var errors = []
  var value = req.session.data['typeInsolve']
  if (typeof req.session.data['typeInsolve'] === 'undefined') {
    errors.push({
      text: 'Select the *type of form that you want to upload* ',
      href: '#typeInsolve'
    })
    res.render('types-of-forms/insolvency/insolvency', {
      errorType: true,
      errorList: errors
    })
  } if (value === 'in-admin') {
    res.redirect('in-adminstration')
  } if (value === 'cvam') {
    res.redirect('cvam')
  } if (value === 'mvl') {
    res.redirect('mvl')
  } if (value === 'wuc') {
    res.redirect('wuc')
  } if (value === 'receivership') {
    res.redirect('receivership')
  } if (value === 'cva') {
    res.redirect('cva')
  } if (value === 'in-admin-two') {
    res.redirect('in-admin')
  } if (value === 'receivership-two') {
    res.redirect('receivership-three')
  } if (value === 'liquidation') {
    res.redirect('liquidation')
  } else {
    res.redirect('others')
  }
})

// Reg
router.get('/types-of-forms/reg/reg', function (req, res) {
  res.render('types-of-forms/reg/reg', {
  })
})

router.post('/types-of-forms/reg/reg', function (req, res) {
  var errors = []
  if (typeof req.session.data['reg'] === 'undefined') {
    errors.push({
      text: 'Select the *type of form that you want to upload* ',
      href: '#typeInsolve'
    })
    res.render('types-of-forms/reg/reg', {
      errorType: true,
      errorList: errors
    })
  } else {
    res.redirect('/auth-screen')
  }
})

router.post('/types-of-forms/slp/limited-partnerships', function (req, res) {
  var errors = []
  if (typeof req.session.data['reg'] === 'undefined') {
    errors.push({
      text: 'Select the *type of form that you want to upload* ',
      href: '#typeInsolve'
    })
    res.render('types-of-forms/slp/limited-partnerships', {
      errorType: true,
      errorList: errors
    })
  } else {
    res.redirect('/auth-screen')
  }
})

router.post('/types-of-forms/sqp/scottish-limited-partnerships', function (req, res) {
  var errors = []
  if (typeof req.session.data['reg'] === 'undefined') {
    errors.push({
      text: 'Select the *type of form that you want to upload* ',
      href: '#typeInsolve'
    })
    res.render('types-of-forms/sqp/scottish-limited-partnerships', {
      errorType: true,
      errorList: errors
    })
  } else {
    res.redirect('/auth-screen')
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

// Auth
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

// CVA
router.get('/types-of-forms/insolvency/cva', function (req, res) {
  res.render('types-of-forms/insolvency/cva', {
  })
})

router.post('/types-of-forms/insolvency/cva', function (req, res) {
  res.redirect('../../auth-screen')
})

// CVAM
router.get('/types-of-forms/insolvency/cvam', function (req, res) {
  res.render('types-of-forms/insolvency/cvam', {
  })
})

router.post('/types-of-forms/insolvency/cvam', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/in-admin', function (req, res) {
  res.render('types-of-forms/insolvency/in-admin', {
  })
})

router.post('/types-of-forms/insolvency/in-admin', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/in-adminstration', function (req, res) {
  res.render('types-of-forms/insolvency/in-adminstration', {
  })
})

router.post('/types-of-forms/insolvency/in-adminstration', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/liquidation', function (req, res) {
  res.render('types-of-forms/insolvency/liquidation', {
  })
})

router.post('/types-of-forms/insolvency/liquidation', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/mvl', function (req, res) {
  res.render('types-of-forms/insolvency/mvl', {
  })
})

router.post('/types-of-forms/insolvency/mvl', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/others', function (req, res) {
  res.render('types-of-forms/insolvency/others', {
  })
})

router.post('/types-of-forms/insolvency/others', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/receivership-three', function (req, res) {
  res.render('types-of-forms/insolvency/receivership-three', {
  })
})

router.post('/types-of-forms/insolvency/receivership-three', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/receivership', function (req, res) {
  res.render('types-of-forms/insolvency/receivership', {
  })
})

router.post('/types-of-forms/insolvency/receivership', function (req, res) {
  res.redirect('../../auth-screen')
})

// in-admin
router.get('/types-of-forms/insolvency/wuc', function (req, res) {
  res.render('types-of-forms/insolvency/wuc', {
  })
})

router.post('/types-of-forms/insolvency/wuc', function (req, res) {
  res.redirect('../../auth-screen')
})

module.exports = router
