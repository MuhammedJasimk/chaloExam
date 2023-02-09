const Docx = require('../model/test')
var mammoth = require("mammoth");
const fs = require('fs');
const path = require('path');

module.exports = {

    addFile: async (req, res) => {
      
        var result = await mammoth.extractRawText({ path: req.file.path });
        var text = result.value.replace(/\s+/g, ' ').trim()

        console.log(text);
        Docx({
            data: text,
            file: req.file.filename
        }).save()
        res.send({message:"File Added Successfully",status:true})
    },

    search: async (req, res) => {
        console.log(req.body);
        let data = await Docx.find({ data: { $regex: req.body.search, $options: 'i' } })
        console.log(data);
        res.send(data)
    },

    download: (req, res) => {
        console.log(req.params);
        // const file = `../static/post/${req.params.id}`;
        const file = `./static/post/${req.params.id}`;
        res.download(file);
    }
} 