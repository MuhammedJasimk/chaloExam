const mongoose = require('mongoose')

let docxSchema = new mongoose.Schema({
    data:{
        type:String
    },
    file:{
        type:String
    }
},{timestamps: true})

const docx  = mongoose.model('docx',docxSchema)
module.exports =docx