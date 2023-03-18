const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')
const Book = require('../models/bookModel')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv')

dotenv.config()

const adminProtect = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.admin = await Admin.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})


const addProtect = asyncHandler(async (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            if(token === process.env.JWT_SECRET) {
                next()
            } else {
                res.status(401)
                throw new Error('Not authorized, token failed')
            }
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
})

module.exports = { adminProtect, addProtect }