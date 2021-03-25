module.exports = function (router) {
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
      res.redirect('insolvency')
    } if (value === 'resolutions') {
      res.redirect('resolutions/resolutions')
    } if (value === 'articles') {
      res.redirect('../auth-screen')
    } if (value === 'limited-companies') {
      res.redirect('limited')
    } if (value === 'lp') {
      res.redirect('lp/limited-partnerships')
    } if (value === 'slp') {
      res.redirect('slp/scottish-limited-partnership')
    } if (value === 'reg') {
      res.redirect('reg/reg')
    } if (value === 'spij') {
    res.redirect('spi')
  } if (value === 'sqp') {
    res.redirect('sqp')
  } if (value === 'constitution') {
    res.redirect('constitution/change-of-constitution')
  } if (value === 'share') {
    res.redirect('shares/shares')
  } if (value === 'res-articles') {
    res.redirect('res-articles')
  } if (value === 'articles and resolutions') {
    res.redirect('articles-and-resolutions')
  }
  })

// Type of document
  router.get('/types-of-forms/form-types-sqp', function (req, res) {
    res.render('types-of-forms/form-types-sqp', {
    })
  })

  router.post('/types-of-forms/form-types-sqp', function (req, res) {
    var errors = []
    var value = req.session.data['type']
    if (typeof req.session.data['type'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#type'
      })
      res.render('/types-of-forms/form-types-sqp', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'spij') {
      res.redirect('spi')
    } if (value === 'sqp') {
      res.redirect('sqp')
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
      res.render('/types-of-forms/insolvency/insolvency', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'cvam') {
      res.redirect('cvam')
    } if (value === 'cva') {
      res.redirect('cva')
    } if (value === 'in-admin') {
      res.redirect('in-adminstration')
    } if (value === 'receivership') {
      res.redirect('receivership')
    } if (value === 'mva') {
      res.redirect('mva')
    } if (value === 'wuc') {
      res.redirect('wuc')
    } if (value === 'committees') {
      res.redirect('committees')
    } if (value === 'notice-of-disclaimer') {
    res.redirect('notice-of-disclaimer')
  } if (value === 'exempting-property') {
    res.redirect('exempting-property')
  } else {
    res.redirect('others')
  }
  })

// Insolvency document types
  router.get('/types-of-forms/insolvency', function (req, res) {
    res.render('types-of-forms/insolvency', {
    })
  })

  router.post('/types-of-forms/insolvency', function (req, res) {
    var errors = []
    var value = req.session.data['typeI']
    if (typeof req.session.data['typeI'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/insolvency', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'AD01') {
      res.redirect('change-of-address')
    } if (value === 'insolvency') {
      res.redirect('insolvency/insolvency')
    } if (value === 'insolvency-old') {
      res.redirect('insolvency-1986/insolvency')
    } if (value === 'overseas') {
      res.redirect('overseas/overseas')
    } if (value === 'llp') {
      res.redirect('llp/llp')
    } if (value === 'others') {
      res.redirect('others')
    } if (value === 'moratorium') {
      res.redirect('moratorium')
    } if (value === 'ini') {
    res.redirect('ini')
  } if (value === 'resolutions') {
    res.redirect('resolutions')
  } else {
    res.redirect('insolvency-scot/insolvency')
  }
  })

// Northern Ireland insolvency forms
  router.get('/types-of-forms/ini', function (req, res) {
    res.render('types-of-forms/ini', {
    })
  })

  router.post('/types-of-forms/ini', function (req, res) {
    var errors = []
    var value = req.session.data['typeIni']
    if (typeof req.session.data['typeIni'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/ini', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'cvam') {
      res.redirect('northern-ireland/cvam')
    } if (value === 'in-admin') {
      res.redirect('northern-ireland/in-adminstration')
    } if (value === 'receivership') {
      res.redirect('northern-ireland/receivership')
    } if (value === 'liquidation') {
      res.redirect('northern-ireland/liquidation')
    } if (value === 'mvl') {
      res.redirect('northern-ireland/mvl')
    } if (value === 'euni') {
      res.redirect('northern-ireland/euni')
    } else {
      res.redirect('northern-ireland/euni')
    }
  })

  router.get('/types-of-forms/resolutions', function (req, res) {
    res.render('types-of-forms/resolutions', {
    })
  })

  router.post('/types-of-forms/resolutions', function (req, res) {
    var errors = []
    var value = req.session.data['typeRes']
    if (typeof req.session.data['typeRes'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/resolutions', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'erwu') {
      res.redirect('insolvency-resolutions/erwu')
    } if (value === 'srwu') {
      res.redirect('insolvency-resolutions/srwu')
    } else {
      res.redirect('insolvency-resolutions/srwu')
    }
  })

  router.get('/types-of-forms/shares/shares', function (req, res) {
    res.render('types-of-forms/shares/shares', {
    })
  })

  router.post('/types-of-forms/shares/shares', function (req, res) {
    var errors = []
    var value = req.session.data['SH']
    if (typeof req.session.data['SH'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/shares/shares', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'shares-sh19') {
      res.redirect('shares-sh19')
    } else {
      res.redirect('shares-other')
    }
  })
  router.get('/types-of-forms/articles-and-resolutions', function (req, res) {
    res.render('types-of-forms/articles-and-resolutions', {
    })
  })

  router.post('/types-of-forms/articles-and-resolutions', function (req, res) {
    var errors = []
    var value = req.session.data['articles-and-resolutions']
    if (typeof req.session.data['articles-and-resolutions'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#articles-and-resolutions'
      })
      res.render('types-of-forms/articles-and-resolutions', {
        errorType: true,
        errorList: errors
      })
    } else {
      res.redirect('../auth-screen')
    }
  })

  router.post('/types-of-forms/insolvency-1986/insolvency', function (req, res) {
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
    } if (value === 'notice-of-disclaimer') {
      res.redirect('notice-of-disclaimer')
    } if (value === 'cvam') {
      res.redirect('cvam')
    } if (value === 'in-admin') {
      res.redirect('in-admin')
    } if (value === 'receivership') {
      res.redirect('receivership')
    } if (value === 'liquidation') {
      res.redirect('liquidation')
    } if (value === 'liquidation-ews') {
      res.redirect('liquidation-ews')
    } else {
      res.redirect('others')
    }
  })

  router.post('/types-of-forms/insolvency-scot/insolvency', function (req, res) {
    var errors = []
    var value = req.session.data['typeInsolveS']
    if (typeof req.session.data['typeInsolveS'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/insolvency-scot/insolvency', {
        errorType: true,
        errorList: errors
      })
    } if (value === 'in-admin') {
      res.redirect('in-admin')
    } if (value === 'committees') {
      res.redirect('committees')
    } if (value === 'cva') {
      res.redirect('cva')
    } if (value === 'cvam') {
      res.redirect('cvam')
    } if (value === 'exempting') {
      res.redirect('exempting')
    } if (value === 'mvl') {
      res.redirect('mvl')
    } if (value === 'receivership') {
      res.redirect('receivership')
    } if (value === 'wuc') {
    res.redirect('wuc')
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

// SLP Forms
  router.post('/types-of-forms/slp/scottish-limited-partnership', function (req, res) {
    res.redirect('/upload-accounts')
  })

  router.post('/types-of-forms/sqp/sqp-forms', function (req, res) {
    res.redirect('/upload-accounts')
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

  router.post('/types-of-forms/shares/shares-sh19', function (req, res) {
    var errors = []
    if (typeof req.session.data['SH-sh19'] === 'undefined') {
      errors.push({
        text: 'Select the *type of form that you want to upload* ',
        href: '#typeInsolve'
      })
      res.render('types-of-forms/shares/shares-sh19', {
        errorType: true,
        errorList: errors
      })
    } else {
      res.redirect('/auth-screen')
    }
  })

// SQP Forms
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

  router.post('/types-of-forms/resolutions/resolutions', function (req, res) {
    res.redirect('/auth-screen')
  })

  router.get('/types-of-forms/constitution/change-of-constitution', function (req, res) {
    res.render('types-of-forms/constitution/change-of-constitution', {
    })
  })

  router.post('/types-of-forms/constitution/change-of-constitution', function (req, res) {
    var errors = []
    var value = req.session.data['cc']
    if (req.session.data['cc'] === '') {
      errors.push({
        text: 'Enter the company authentication code',
        href: '#auth-number'
      })
      res.render('types-of-forms/constitution/change-of-constitution', {
        errorAuth: true,
        errorList: errors
      })
    } if (value === 'resolution') {
      res.redirect('../resolutions/resolutions')
    } else {
      res.redirect('../../auth-screen')
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

// Insolvency - Adminstration Forms
  router.get('/types-of-forms/insolvency/in-adminstration', function (req, res) {
    res.render('types-of-forms/insolvency/in-adminstration', {
    })
  })

  router.post('/types-of-forms/insolvency/in-adminstration', function (req, res) {
    res.redirect('../../auth-screen')
  })

// Insolvency - Liquidation Forms
  router.get('/types-of-forms/insolvency/liquidation', function (req, res) {
    res.render('types-of-forms/insolvency/liquidation', {
    })
  })

  router.post('/types-of-forms/insolvency/liquidation', function (req, res) {
    res.redirect('../../auth-screen')
  })

// Insolvency - Receivership Forms
  router.get('/types-of-forms/insolvency/receivership', function (req, res) {
    res.render('types-of-forms/insolvency/receivership', {
    })
  })

  router.post('/types-of-forms/insolvency/receivership', function (req, res) {
    res.redirect('../../auth-screen')
  })

// Insolvency - WUC Forms
  router.get('/types-of-forms/insolvency/wuc', function (req, res) {
    res.render('types-of-forms/insolvency/wuc', {
    })
  })

  router.post('/types-of-forms/insolvency/wuc', function (req, res) {
    res.redirect('../../auth-screen')
  })
}
