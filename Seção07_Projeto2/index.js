import express from 'express'
import bodyParser from 'body-parser'
import connection from './database/database.js'
import slugify from 'slugify'
const porta = 8085
const app = express()

import articlesController from './articles/articlesController.js'
import categoriesController from './categories/categoriesController.js'

import Category from './categories/Category.js'
import Article from './articles/Article.js'

// View Engine EJS
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body Parser - Middlewares 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Database
connection
.authenticate()
.then(() => {console.log("connection database sucessful")})
.catch((error) => {console.log(error)})

app.get("/", (req, res) => {
    Article.findAll({
        include : [{model: Category}]
    }).then((articles) => {
        res.render("index.ejs", {articles : articles})
    })
})

app.get("/about", (req, res) => {
     res.render("aboutPage.ejs") 
})

app.use("/", categoriesController)
app.use("/", articlesController)

app.listen(porta, () => {
 console.log(`server opened in localhost:${porta}/`)
})