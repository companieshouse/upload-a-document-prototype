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

module.exports = router
