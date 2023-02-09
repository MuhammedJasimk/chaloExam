const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/post')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        console.log('ext');
        console.log(ext);
        if (ext !== '.docx') {
            return cb(new Error('Only .docx files are allowed'));
        }
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = { storage, upload }; 