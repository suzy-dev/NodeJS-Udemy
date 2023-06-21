//Tratamento de erros com callback

function sendEmail(){
    setTimeout(()=>{
        console.log("Operação está sendo executada. .")
    }, 6000)
    let error = false

    if(error){
        console.error("Operação falhou!")
    }
    else{
        callback()
    }
}

 