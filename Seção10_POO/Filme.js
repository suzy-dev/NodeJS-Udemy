// Atributos: titulo, ano, sinopse, diretor, genero, diretor, atores[]
// metodos: reproduzir, pausar, avançar, fechar. 
// Boa prática: todo file classe deve começar com letra maiuscula
// dentro do constructor se define os atributos

class Filme{
    constructor(){
        this.titulo = ''
        this.ano = 0
        this.duracao = 0
        this.sinopse = ''
        this.diretor = ''
        this.genero = ''
        this.elenco = []
    }
    
    Reproduzir(){
        console.log(`Reproduzindo o filme ${this.Filme.titulo}`)
    }

    Pausar(){
        console.log(`Filme pausado ||`)
    }

    Avançar(){
        console.log(`Avançando o filme >>`)
    }

    Fechar(){
        console.log(`Fechando o filme XX`)
    }
}
