//Forma reduzida de escrever uma função: 

function IMC(altura, peso){
    return (altura ** peso)/5
}
console.log(IMC(3,7.5).toFixed(2))

//esta mesma função usando arrow function: 

let IMC2 = (altura, peso) => console.log((altura**peso)/3)
