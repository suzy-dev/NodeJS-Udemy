//Spread Operator é um atalho para digitar muitas informações "..."

const usuario = {
    nome: "suzana", 
    idade: 19, 
    curso: "Ciencia da Computação",
    gmail: "su@gmail.com",
    semestre: 2,
    estagiando: true
}

const newUserUDF = {
    ...usuario      //spreed operator
}

console.log(newUserUDF)
