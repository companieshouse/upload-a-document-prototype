module.exports = function (router) {
  // Authentication
  router.get('/auth/auth-screen', function (req, res) {
    res.render('auth/auth-screen', {
    })
  })

  router.post('/auth/auth-screen', function (req, res) {
    var errors = []
    if (req.session.data['authNumber'] === '') {
      errors.push({
        text: 'Enter the company authentication code',
        href: '#auth-number'
      })
      res.render('auth/auth-screen', {
        errorAuth: true,
        errorList: errors
      })
    } else {
      res.redirect('../upload-documents')
    }
  })
}
