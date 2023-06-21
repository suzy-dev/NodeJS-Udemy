const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/pergunta')

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
    Pergunta.findAll({raw: true }).then((perguntas)=>{
        res.render('index.ejs', { perguntas: perguntas})
    })
    
})

app.get("/perguntas", (req, res)=>{
    res.render('perguntas.ejs')
})

app.post("/saveperguntas", (req, res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({titulo: titulo, descricao: descricao}).then(()=>{res.redirect("/home")})
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})