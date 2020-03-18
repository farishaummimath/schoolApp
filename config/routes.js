const express = require('express')
const router = express.Router()
const schoolsController = require('../app/controllers/schoolsController')

// School CRUD Operations
router.get('/schools',schoolsController.list)
router.post('/schools',schoolsController.create)
router.get('/schools/:id',schoolsController.show)
router.put('/schools/:id',schoolsController.update)
router.delete('/schools/:id',schoolsController.destroy)

module.exports = router