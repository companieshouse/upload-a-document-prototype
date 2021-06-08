const express = require('express')
const router = express.Router()

require('./routes/auth.js')(router)
require('./routes/company-number.js')(router)
require('./routes/forms.js')(router)
require('./routes/proposed-company-name.js')(router)
require('./routes/sign-in.js')(router)

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
  req.session.destroy()
  res.render('index', {
  })
})

// Authentication
router.get('upload-documents', function (req, res) {
  res.render('upload-documents', {
  })
})

router.post('/upload-documents', function (req, res) {
  var errors = []
  if (req.session.data['authNumber'] === '') {
    errors.push({
      text: 'Enter the company authentication code',
      href: '#auth-number'
    })
    res.render('upload-documents', {
      errorAuth: true,
      errorList: errors
    })
  } if (req.session.data['formType'] === 'SH19 - Statement of capital when reducing capital in a company') {
    res.redirect('sh19-delivery')
  } else {
    res.redirect('check')
  }
})

// SH19 Delivery
router.get('sh19-delivery', function (req, res) {
  res.render('sh19-delivery', {
  })
})

router.post('/sh19-delivery', function (req, res) {
  var errors = []
  if (typeof req.session.data['delivery'] === 'undefined') {
    errors.push({
      text: 'Select the service you require',
      href: '#delivery'
    })
    res.render('sh19-delivery', {
      errorDelivery: true,
      errorList: errors
    })
  } else {
    res.redirect('check')
  }
})

router.get('/check', function (req, res) {
  res.render('check', {
    company: req.session.company,
    companyIncorp: req.session.companyIncorp
  })
})

router.get('/confirmation', function (req, res) {
  res.render('confirmation', {
    company: req.session.company,
    companyIncorp: req.session.companyIncorp
  })
})

module.exports = router
