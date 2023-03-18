const express = require('express')
const { getBooks, addBooks, deleteBooks, updateBooks } = require('../controllers/bookController')
const { adminProtect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/getBooks').get(adminProtect ,getBooks)
router.route('/addBooks').post(addBooks)
router.route('/deleteBooks/:id').delete(deleteBooks)
router.route('/updateBooks/:id').put(updateBooks)

module.exports = router