import express from 'express'
import bodyParser from 'body-parser'
import connection from './database/database.js'
const porta = 8080
const app = express()

import articlesController from './articles/articlesController.js'
import categoriesController from './categories/categoriesController.js'

import Category from './categories/Category.js'
import Article from './articles/Article.js'

// View Engine EJS
app.set('view engine', 'ejs')
app.set('views','views')

// Static
app.use(express.static('public'))

// Body Parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Database
connection
.authenticate()
.then(() => {console.log("connection database sucessful")})
.catch((error) => {console.log(error)})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.use("/", categoriesController)
app.use("/", articlesController)

app.listen(porta, () => {
    console.log(`server opened in localhost:${porta}/`)
})