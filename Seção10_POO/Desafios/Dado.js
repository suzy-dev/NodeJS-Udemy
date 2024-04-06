// desafio: crie uma classe para o sistema de cassino, criar objetos dados com varias faces, metodo rolar retonra n aleatorio

class Dados{
    constructor(n_faces){
        this.n_faces = n_faces
    }

    static jogarDado(n_faces){
       const nRandom = Math.floor(Math.random()* n_faces) + 1
       console.log(nRandom) 
    }
}

Dados.jogarDado(6)
Dados.jogarDado(20)
Dados.jogarDado(50)
Dados.jogarDado(120)

// node dado.js