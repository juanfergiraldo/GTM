//configuración del express


const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const gtm = require('./routes')
const hbs = require('express-handlebars')


app.use(cors())
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/',function (req,res) {
   return res.sendfile('./public/index.html')
})
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs',hbs({
  defaultLayout: 'default',
  extname:'.hbs'
}))
app.set('view engine', '.hbs')

app.use('/gtm', gtm)
app.get('/login',(req, res) => {
  res.render('login')
})
app.get('/signup',(req, res) => {
  res.render('signup')
})
app.get('/publica',(req, res) => {
  res.render('publica')
})


module.exports = app
