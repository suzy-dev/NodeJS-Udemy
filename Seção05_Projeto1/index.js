const express = require('express')
const app = express()

app.set('viw engine','ejs')

app.get("/home/:nome/:linguagem",(req, res)=>{
    let nome = req.params.nome
    let linguagem = req.params.linguagem
    let exibirSucesso = () => {
        return true
    }
    let exibirError = () => {
        return false
    }
    res.render('index.ejs', {
        nome: nome,
        linguagem: linguagem,
        error: exibirError(),
        sucesso: exibirSucesso()
    })
})

app.get("/guide", (req, res)=>{
    res.render('guide.ejs')
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})