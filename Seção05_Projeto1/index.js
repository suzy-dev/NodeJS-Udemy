const express = require('express')
const app = express()

app.set('viw engine','ejs')
app.use(express.static('public'))

app.get("/home",(req, res)=>{
    res.render('index.ejs')
})

app.get("/perguntas", (req, res)=>{
    res.render('perguntas.ejs')
})

app.post("/saveperguntas", (req, res)=>{
    res.send("formulario recebido")
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})