

export class Game {
    players:User[] = [];
    playedQuotes:Quote[] = [];
    dealer:string = "mark";
    picture:{url:string,name:string} = {url:"",name:""};

    constructor(){
        this.players = [{name:'mark',myQuotes:[]}, {name:'alice',myQuotes:[]}, {name:'bob',myQuotes:[]}];
        //this.playedQuotes = [new Quote("tfw you ate the whole pringles can"), new Quote("too many airheads"), new Quote("but seriously y tho")];
        this.playedQuotes = [{chosen:false,text:'tfw you ate the whole pringles can',playerName:'alice'}]
    }
}

export class User{
    name:string = "";
    myQuotes:string[] = [];

    constructor(){
        
    }
}

export class Quote{
    chosen:boolean = false;
    text:string;
    playerName:string;

    constructor(newText:string, player:string){
        this.text = newText;
        this.playerName = player;
    }
}