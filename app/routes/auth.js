module.exports = function (router) {
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
}
