//configuración del express


const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const gtm = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/gtm', gtm)

module.exports = app 