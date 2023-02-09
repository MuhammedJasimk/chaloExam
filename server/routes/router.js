const router = require('express').Router()
const controller = require('../controller/controller')
const multer  = require('multer')
const {storage,upload} =require('../multer')

router.post('/addFile',upload.single('file'),controller.addFile)
router.post('/search',controller.search)
router.get('/download/:id',controller.download)




module.exports = router