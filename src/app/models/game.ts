

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
}