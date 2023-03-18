const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const generateToken = require('../utils/generateToken')
const passwordValidator = require('../utils/passwordValidator')

const addAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    passwordValidator(password)

    const admin = await Admin.create({
        name,
        email,
        password,
    })

    if(admin) {
        res.status(201).json(admin)
    } else {
        res.status(400)
        throw new Error('Invalid admin data')
    }
})

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.json({
            message: 'Invalid email or password'
        }).status(401)
        throw new Error('Invalid email or password')
    }
})

module.exports = {
    addAdmin,
    loginAdmin
}
