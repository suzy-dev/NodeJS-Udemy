import express from 'express'
import bodyParser from 'body-parser'
import connection from './database/database.js'
const porta = 8080
const app = express()

// View Engine EJS
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body Parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(porta, () => {
    console.log(`server openen in localhost:${porta}/`)
})