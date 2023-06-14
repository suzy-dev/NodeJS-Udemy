//callback é uma função que é passada como argumento para outra 
//função e é executada após a conclusão de uma determinada operação assíncrona

function doAnyThing(callback){
    console.log("Executando uma operação")
        setTimeout(()=>{   
            console.log("operação concluida")
            callback()}, 8000)
}

function callback(){
    console.log("ação apos a operação ser concluida")
}

doAnyThing(callback)