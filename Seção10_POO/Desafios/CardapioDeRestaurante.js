//Comida para um sistema de cardápio 

class CardapioJanta{
    constructor(){
        this.Carnes = ['Picanha', 'Alcatra', 'Cupim','Linguiça']
        this.Acompanhamentos = ['arroz', 'feijão', 'vinagrete', 'farofa']
    }
}

class CardapioDoces{
    constructor(){
        this.Bolos = ['bolo de chocolate','bolo de morango']  
        this.Sorvetes = ['sorvete de baunilha','sorvete napolitano']      
    }
}

class CardapioBebidas{
    constructor(){
        this.Agua = ['água com gás','água sem gás']
        this.Cerveja = ['bhrama','itaipava','bohemia']
        this.Refrigerante = ['coca-cola','guaraná','sprite']
    }
}

class CardapioRestaurante{
    constructor(){
        this.ObjectMenus = {
            CardapioBebidas,
            CardapioDoces,
            CardapioJanta,
        }    
    }
    getObjectCardapioBebidas(){
        return this.ObjectMenus.CardapioBebidas
    }
    getObjectCardapioDoces(){
        return this.ObjectMenus.CardapioDoces
    }
    getObjectCardapioJanta(){
        return this.ObjectMenus.CardapioJanta
    }
}

const desserts = new CardapioDoces()
console.log(desserts)

const dinner = new CardapioJanta()
console.log(dinner)

const drinks = new CardapioBebidas()
console.log(drinks)


