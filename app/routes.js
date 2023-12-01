//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

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

// Show session data and URLs in the terminal  
router.use((req, res, next) => {  
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
  next()  
}) 
