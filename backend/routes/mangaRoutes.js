const express = require('express')
const { getAllManga, createManga, deleteManga, getSingleManga } = require('../controllers/mangaController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// middleware
router.use(requireAuth)

// get all manga
router.get('/', getAllManga)

// create manga
router.post('/', createManga)

// delete manga
router.delete('/:id', deleteManga)

// get Signle manga
router.get('/:id', getSingleManga)

module.exports = router