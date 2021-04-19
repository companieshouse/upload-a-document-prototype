module.exports = function (router) {
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
}
