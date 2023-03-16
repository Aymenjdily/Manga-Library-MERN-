const express = require('express')
const { getAllManga } = require('../controllers/mangaController')

const router = express.Router()

// Get All manga
router.get('/', getAllManga)


module.exports = router