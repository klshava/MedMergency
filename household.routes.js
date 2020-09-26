module.exports = app => {
  const households = require('../controllers/household.controller.js')

  var router = require('express').Router()

  router.post('/create', households.create)
  router.get('/:id', households.findOne)
  router.get('/', households.findAll)
  router.post('/:id/expense', households.createExpense)
  router.post('/join', households.join)
  router.get('/bill', households.findBill)

  app.use('/api/household', router)
}
