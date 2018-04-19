

<<<<<<< HEAD
export class Game {
    //this class is always replaced by server instance, so initialize to empty stuff.
    players:User[] = [];
    playedQuotes:Quote[] = [];
    dealerID:string = "";
    picture:{url:string,name:string} = {url:"",name:""};
}

export class User{
    ID:string = "";
    name="";
    myQuotes:string[] = [];

    constructor(){
        
    }
}

export class Quote{
    chosen:boolean = false;
    text:string;
    playerID:string;

    constructor(newText:string, player:string){
        this.text = newText;
        this.playerID = player;
    }
=======

export class Game {

    Players: User[] = [];
    DealerId: string;
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerId: string;
    Chosen: boolean = false;
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
}