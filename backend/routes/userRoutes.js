const express = require('express')
const {
    userLogin,
    userSignup
} = require('../controllers/userController')

const router = express.Router()

// Login User
router.post('/login', userLogin)

// SignUp User
router.post('/signup', userSignup)

module.exports = router