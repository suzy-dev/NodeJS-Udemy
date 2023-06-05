function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log(`Para: ${para}
Corpo: ${corpo}
        
Atenciosamente, Suzana.`)
    callback()
    },8000) //8 segundos
}

enviarEmail("funcionário de uma empresa recebe um salário de R$ 2.000,00", "Matheus@gmail", ()=>{
    console.log("email enviado com sucesso")
})


// apos 8 segundo o "email" é enviado e a mensagem aparece

