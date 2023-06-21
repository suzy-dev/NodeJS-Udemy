const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('viw engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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