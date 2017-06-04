//configuración del express


const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const gtm = require('./routes')
const hbs = require('express-handlebars')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')

app.use(fileUpload())
app.use(cors())
app.use(morgan('dev'))
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/',function (req,res) {
   return res.sendfile('./public/index.html') //Página de inicio por defecto.
})
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs',hbs({ // Ya no se necesita
  defaultLayout: 'default',
  extname:'.hbs'
}))
app.set('view engine', '.hbs') //Tampoco

app.use('/gtm', gtm)
app.get('/signin',(req, res) => {
  res.render('signin')
})
app.get('/signup',(req, res) => {
  res.render('signup')
})
app.get('/publica',(req, res) => {
  res.render('publica')
})


module.exports = app
