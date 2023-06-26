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

//Routes views:
app.get("/home",(req, res)=>{
    Pergunta.findAll({raw: true, order:[['id','DESC']]}).then((pergunta)=>{  //DESC - decrescente, ASC - crescente
        res.render('home.ejs', { pergunta: pergunta})
    })
    
})
app.get("/perguntar", (req, res)=>{
    res.render('perguntar.ejs')
})
app.get("/home/:id",(req, res)=>{
    let id = req.params.id
    Pergunta.findOne({ where: {id:id} }).then((pergunta) => {
        if(pergunta!=undefined){
            Resposta.findAll({ where: {perguntaId: id}, order: [['id','DESC']]})
            .then((resposta) => {
                res.render("singlePergunta.ejs",{ pergunta:pergunta, resposta:resposta })
            })
        }else{
            res.redirect("/home/")
        }
    })
})

//Action dos Formulários
app.post("/saveperguntas", (req, res)=>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({titulo: titulo, descricao: descricao}).then(() => {res.redirect("/home")})
})
app.post("/saverespostas",(req, res)=>{
    let perguntaId = req.body.perguntaId
    let resposta = req.body.resposta
    Resposta.create({ resposta:resposta, perguntaId: perguntaId }).then(() => {res.redirect("/home/"+perguntaId)})
})

//Abrindo o servidor
app.listen(8080,()=>{
    console.log(`Servidor aberto na porta 8080`)
})