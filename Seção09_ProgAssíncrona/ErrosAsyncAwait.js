// tratamento de erros com async e await, usando try e catch

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

async function main(){
    let id = await getId()
    let email = await searchEmailDatabase(id)

    try{
        await sendEmail("Prezados boa tarde",email)
        console.log("Email enviado com sucesso")
    }catch(error){
        console.log(error)
    }
}
// node ErrosAsyncAwait.js

main()