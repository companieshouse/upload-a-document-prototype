module.exports = function (router) {
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
}
