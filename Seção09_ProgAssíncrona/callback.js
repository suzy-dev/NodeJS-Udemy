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

//Callbacks podem ter parametros igual funções normais: 

function doAnyThing2(callback2){
    console.log("Executando uma operação 2")
    temp_segs = 5000
    setTimeout(()=>{
        console.log("operação concluida 2")
        callback2("Ativo", temp_segs/1000)
    }, temp_segs)
}

function callback2(status, tempo){
    console.log(`tempo da operação foi de segundos foi de ${tempo} segundos e o status é ${status}.`)
}

doAnyThing2(callback2)