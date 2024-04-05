function getId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function searchEmailDatabase(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("suzana@email.com")
        },2000)
    })
}


function sendEmail(body, whoSend){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                let deuErro = false
                if(!deuErro){
                    resolve({time:5,to:"suzana"})
                }
                else{
                    reject("fila cheia") //errei fui mlk
                }
        },2000)
    })
}

// sendEmail("olá mundo","Ellisa").then(({time, to})=>{  //desestruturação de object
//     console.log(`
//     tempo de envio: ${time}
//     para: ${to}
//     `) 
// }).catch((err)=>{
//     console.log("Erro: " + err)
// })     // crtl + k + c comentar bloco/descomentar

console.log("iniciando...")
getId().then((id)=>{
    searchEmailDatabase(id).then((email)=>{
        sendEmail("ola como vai",email)
    }).then(()=>{
        console.log("email enviado para o usuario id: " + id)
    }).catch(err => console.log(err))
})