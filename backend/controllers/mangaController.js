const Manga = require('../models/mangaModel')
const mongoose = require('mongoose')

// get all mangas
const getAllManga = async (req, res) => {
    const mangas = await Manga.find({}).sort({createdAt: -1})

    res.status(200).json(mangas)
}

// get single mangas
const getSingleManga = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Manga'})
    }

    const manga = await Manga.findById(id)

    if(!manga){
        return res.status(404).json({error: "No such Manga"})
    }

    res.status(200).json(manga)
}

// create a manga
const createManga = async (req, res) => {
    const { img, name, category, link, status } = req.body
    let emptyFields = []

    // validation

    if(!img){
        emptyFields.push('image')
    }
    if(!name){
        emptyFields.push('name')
    }
    if(!category){
        emptyFields.push('category')
    }
    if(!link){
        emptyFields.push('link')
    }
    if(!status){
        emptyFields.push('status')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({
            error: 'Please fill All fields',
            emptyFields
        })
    }

    // create the manga

    try{
        const user_id = req.user._id
        const manga = await Manga.create({
            img, name, category, link, status, user_id
        })
        res.status(200).json(manga)
    }
    catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

// delete a manga
const deleteManga = async (req, res) => {
    const {id} = req.params

    // validation id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Manga'})
    }

    const mangas = await Manga.findOneAndRemove({_id : id})

    if(!mangas){
        return res.status(404).json({
            error: 'No Such Manga'
        })
    }

    res.status(200).json(mangas)
}

module.exports = {
    getAllManga,
    createManga,
    deleteManga,
    getSingleManga
}