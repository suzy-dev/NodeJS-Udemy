//Método find, encontrar um registro dentro de um array: 

const twisted_fate = {
    nome: "Tobias Felix",
    poder_de_habilidade: 76,
    qtd_skins: 10,
    maestria: true
}

const jinx = {
    nome: "Powder",
    poder_de_habilidade: 90,
    qtd_skins: 12,
    maestria: false
}

const kaisa = {
    nome: "Kaisa Filha do Vazio",
    poder_de_habilidade: 80,
    qtd_skins: 5,
    maestria: true
}

const wild_rift_champions = [jinx,twisted_fate,kaisa]
const championsMaestria = wild_rift_champions.find(champ => champ.maestria === true)
const poderDeHabilidadeAlto = wild_rift_champions.find(champ => champ.poder_de_habilidade > 85)
console.log(championsMaestria)
console.log(poderDeHabilidadeAlto)