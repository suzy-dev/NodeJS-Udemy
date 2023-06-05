const express = require('express')
const app = express()

                                          
app.get("/home/:nome?",(req,res)=>{      //parametro opcional /:nome? 
    const nome = req.params.nome         //parametro obrigatorio /:nome
        if(nome){
            res.send("Welcom to Home Page " + nome)
        }
        else{
            res.send("Welcom to Home Page ")
        }
})

app.get("/User/:nome",(req,res)=>{  
    res.send("Welcome to User Page " + req.params.nome)  //req - dados enviados pelo usuario
})                                                       //res - resposta do servidor para o usuario 

app.listen(8000,(erro)=>{
    if(erro){
        console.error("ERROR")
    }
    else{
        console.log("SUCCESSFUL SERVER")
    }
})



