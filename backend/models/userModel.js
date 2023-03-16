const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

// sign up method - static

userSchema.statics.signup = async function(username, email, password){

    // validation form
    if(!email || !username || !password){
        throw Error('All fields must be filled Please')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not Strong Enough')
    }

    const userExist = await this.findOne({email})

    if(userExist){
        throw Error('Email is Already in use')
    }

    // Hash Password

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // Create the new User
    const user = await this.create({
        username, email, password:hash
    })

    return user
}

// login Method - static

userSchema.statics.login = async function(username, password){

    // validation form

    if(!username || !password){
        throw Error('All fields must be filled Please')
    }

    const user = await this.findOne({username})

    if(!user){
        throw Error('Incorrect Login')
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword){
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model('UserManga', userSchema)