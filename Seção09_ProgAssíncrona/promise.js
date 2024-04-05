function sendEmail(body, whoSend){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                let deuErro = true
                if(!deuErro){
                    resolve()
                }
                else{
                    reject() //errei fui mlk
                }
        },4000)
    })
}

sendEmail("olá mundo","Ellisa").then(()=>{
    return "promessa cumprida"
}).catch(()=>{
    console.log("opss error")
})