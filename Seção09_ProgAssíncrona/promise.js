function sendEmail(body, whoSend){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                let deuErro = false
                if(!deuErro){
                    resolve({time:5,to:"suzana"})
                }
                else{
                    reject() //errei fui mlk
                }
        },2000)
    })
}

sendEmail("olá mundo","Ellisa").then((dados)=>{
    console.log(`
    tempo de envio: ${dados.time}
    para: ${dados.to}
    `) 
}).catch(()=>{
    console.log("opss error")
})