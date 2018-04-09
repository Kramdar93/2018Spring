

export class Game {
    players:User[] = [];
    playedQuotes:Quote[] = [];
    dealer:string = "mark";
    picture:string = "";

    constructor(){
        this.players = [{name:'mark',myQuotes:[]}, {name:'alice',myQuotes:[]}, {name:'bob',myQuotes:[]}];
        //this.playedQuotes = [new Quote("tfw you ate the whole pringles can"), new Quote("too many airheads"), new Quote("but seriously y tho")];
        this.playedQuotes = [{chosen:false,text:'tfw you ate the whole pringles can',playerName:'alice'}]
        
        this.picture = "https://pbs.twimg.com/profile_images/867104339151736832/hyT0nhB4_400x400.jpg";
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