const express = require('express')
const router = express.Router()
const competeController = require('../controllers/adminController/CompeteController')

router.get('/compete/:id', competeController.get)
router.get('/compete', competeController.getAll)
router.post('/compete', competeController.create)
router.put('/compete/:id', competeController.update)
router.delete('/compete/:id', competeController._delete)

module.exports = router
