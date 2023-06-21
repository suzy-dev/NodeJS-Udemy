const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const modelPergunta = require('./database/pergunta')

//Database
connection
.authenticate()
.then(()=>{
    console.log("conexão feita com o banco de dados")
})
.catch((msgError)=>{
    console.log(msgError)
})

//app.set -> express use EJS como View engine
app.set('viw engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes:
app.get("/home",(req, res)=>{
    res.render('index.ejs')
})

app.get("/perguntas", (req, res)=>{
    res.render('perguntas.ejs')
})

app.post("/saveperguntas", (req, res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send("Encontre um velho rico ou vire tiktoker")
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})