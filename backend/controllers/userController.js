const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// Create the user Token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})
}

// Login User

const userLogin = async (req, res) => {
    const {username, password} = req.body

    try{
        const user = await User.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({
            username, token
        })
    }
    catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

// Sign Up User

const userSignup = async (req, res) => {
    const {username, email, password} = req.body
    
    try{
        const user = await User.signup(username, email, password)

        const token = createToken(user._id)

        res.status(200).json({
            username, token
        })
    }
    catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {
    userLogin,
    userSignup
}