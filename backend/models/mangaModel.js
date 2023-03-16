const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mangaSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    link: {
        type: String,
        require: true
    },
    status:{
        type:String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Manga', mangaSchema)