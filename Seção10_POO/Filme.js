// Atributos: titulo, ano, sinopse, diretor, genero, diretor, atores[]
// metodos: reproduzir, pausar, avançar, fechar. 
// Boa prática: todo file classe deve começar com letra maiuscula
// dentro do constructor se define os atributos
//instancia === objeto
class Filme{
    constructor(){
        this.titulo = ''
        this.ano = 0
        this.duracaoMin = 0
        this.sinopse = ''
        this.diretor = ''
        this.genero = []
        this.elenco = []
    }
    
    Reproduzir(){
        console.log(`Reproduzindo o filme. . .`)
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

var VingadoresUltimato = new Filme()
var StarWarsVingancaSith = new Filme()

VingadoresUltimato.Reproduzir()
StarWarsVingancaSith.Avançar()

VingadoresUltimato = {
    titulo: "Vingadores: Ultimato",
    ano: 2019 , 
    duracaoMin: 180,
    sinopse: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.", 
    diretor: "Joe Russo",
    genero: ['Ação','Ficção Científica','Fantasia'],
    elenco: ['Chris Hemsworth','Chris Evans','Robert Downey Jr.','Scarlett Johansson']
}
console.log(VingadoresUltimato)


