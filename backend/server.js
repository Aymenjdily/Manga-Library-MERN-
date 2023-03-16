require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const mangaRoutes = require('./routes/mangaRoutes')
const userRoutes = require('./routes/userRoutes')
const libraryRoutes = require('./routes/libraryRoutes')

// Middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/manga', mangaRoutes)
app.use('/api/user', userRoutes)
app.use('/api/getmanga', libraryRoutes)

// Conntect to DB and Listening on Port
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
       console.log(`Connected to DB & Listening on Port : ${process.env.PORT}`)
    })
}).catch((error) => {console.log(error)})