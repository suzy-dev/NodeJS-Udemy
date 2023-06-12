const express = require('express')
const app = express()

app.set('viw engine','ejs')
app.use(express.static('public'))

app.get("/home",(req, res)=>{
    res.render('index.ejs')
})

app.get("/guide", (req, res)=>{
    res.render('guide.ejs')
})

app.listen(8080,()=>{
    console.log("Servidor Aberto ..")
})