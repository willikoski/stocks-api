const express = require('express')
const router = express.Router()
const stockCtrl = require('../../controllers/api/stocks')

// Index
router.get('/', stockCtrl.index)
// Create
router.post('/', stockCtrl.create)
// Show
router.get('/:id', stockCtrl.show)

module.exports = router