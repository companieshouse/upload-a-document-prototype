module.exports = function (router) {
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
}
