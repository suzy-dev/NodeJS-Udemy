const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

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
app.post("/saveresposta",(req, res)=>{
    let resposta = req.body.resposta
    Resposta.create({ resposta:resposta }).then(()=>{res.redirect("/home")})
})
//Rota da singlePergunta
app.get("/home/:id",(req, res)=>{
    let id = req.params.id
    Pergunta.findOne({ where: {id: id} }).then((perguntas) => {
        perguntas != undefined ? res.render("singlePergunta.ejs",{perguntas:perguntas}) : res.redirect("/home")
    })
})

app.listen(8080,()=>{
    console.log(`Servidor aberto na porta 8080`)
})