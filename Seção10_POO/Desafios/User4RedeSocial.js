// Classe abstração de um usuários para rede social (instagram)

class UserInstagram {
    constructor(user,name,lastName,followers,followings,profilePicture,biography){
        this.user = user
        this.name = name
        this.lastName = lastName
        this.followers = followers
        this.followings = followings
        this.profilePicture = profilePicture
        this.biography = biography
    }

    PostFeed(file,description){
        console.log(`${file} - ${description}`)
    }

    SendMessagePrivate(user,to,body){
        const CurrentDate = new Date()

        console.log(`
            ${CurrentDate}
            Friend: ${to}
            Message: ${user}: ${body}
        `)
    }

    SendMessageGroup(user,toGroup,body){
        const CurrentDate = new Date()

        console.log(`
            ${CurrentDate}
            Group: ${toGroup}
            Message: ${user}: ${body}
        `)
    }
}

const user1 = new UserInstagram(
    "suzy_araujo15",
    "Suzana",
    "Araujo",
    123,
    320,
    "fotinha.png",
    "Sou uma menina branca de beleza média baixa"
)

console.log(user1.SendMessagePrivate(user1.user,"lis.brandao","Oi gatinha, tudo bem?"))

// node User4RedeSocial.js