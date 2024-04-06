// composição é importante para manutenção e para evitar repetição de código

class ManipuladorDeArquivos {
    constructor(file){
        this.file = file
        this.leitor = new Leitor(file)
        this.escritor = new Escritor(file)
        this.deletor = new Deletor(file)

    }
}

class Leitor{
    constructor(file){
        this.file = file
    }

    ler(){
        console.log("lendo o arquivo " + this.file)
    }

}

class Escritor{
    constructor(file){
        this.file = file
    }

    escrever(){
        console.log("arquivo escrito com sucesso "+ this.file)
    }
}

class Deletor {
    constructor(file){
        this.file = file
    }

    deletar(){
        console.log("Arquivo deletado "+ this.file)
    }
}

const manipulador = new ManipuladorDeArquivos("file.png")

manipulador.deletor.deletar()
manipulador.escritor.escrever()
manipulador.leitor.ler()

// node composicao.js
