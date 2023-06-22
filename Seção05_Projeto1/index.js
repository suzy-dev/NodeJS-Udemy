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
    Pergunta.findAll({raw: true, order:[['id','DESC']]}).then((perguntas)=>{  //DESC - decrescente, ASC - crescente
        res.render('home.ejs', { perguntas: perguntas})
    })
    
})

app.get("/perguntar", (req, res)=>{
    res.render('perguntar.ejs')
})

app.post("/saveperguntas", (req, res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({titulo: titulo, descricao: descricao}).then(() => {res.redirect("/home")})
})

app.get("/home/:id",(req, res)=>{
    let id = req.params.id
    Pergunta.findOne({ where: {id: id} }).then((perguntas) => {
        perguntas != undefined ? res.render("pergunta.ejs") : res.redirect("/home")
    })
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})