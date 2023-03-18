const express = require('express')
const { addAdmin, loginAdmin } = require('../controllers/adminController')
const { addProtect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/addAdmin').post(addProtect ,addAdmin)
router.route('/loginAdmin').post(loginAdmin)

module.exports = router