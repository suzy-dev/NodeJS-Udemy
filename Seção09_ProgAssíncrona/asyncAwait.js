function GetUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
                {name:"suzana",idade:20,cpf:"0651595455"},
                {name:"ellisa",idade:19,cpf:"8754595455"}, 
                {name:"leticia",idade:98,cpf:"8754595455"}
             ])
        },3000)
    })
}

async function main(){
    let user = await GetUsers()
    console.log(user)
}
main()

// node asyncAwait.js