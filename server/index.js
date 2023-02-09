const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const connection = require('./db')
const router = require('./routes/router')
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


connection() 
app.use(cors())

app.use('/',router)

let port = process.env.PORT||8080
app.listen(port ,()=>{
console.log(`listening port ${port}`);
})