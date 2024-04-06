// ter uma classe mae e uma classe filha / reutilizar código
class Animal {

    constructor(nome,idade,raca,preco){
        this.nome = nome
        this.idade = idade
        this.raca = raca
        this.preco = preco
    }

    checarEstoque(){
        return 10
    }
}

class Cachorro extends Animal {

}

const dog = new Cachorro("laila",15,"pinscher",120)
console.log(dog)

