

export class Game {
    players:User[] = [];
    playedQuotes:Quote[] = [];
    myQuotes:string[] = [];
    picture:string = "";

    constructor(){
        this.players = [{name:'alice'}, {name:'bob'}, {name:'charlie'}];
        //this.playedQuotes = [new Quote("tfw you ate the whole pringles can"), new Quote("too many airheads"), new Quote("but seriously y tho")];
        this.playedQuotes = [{chosen:false,text:'tfw you ate the whole pringles can',playerName:'jerry136'}]
        this.myQuotes = ["here come dat boi", "mrw i have social anxiety", "a e s t h e t i c s"];
        this.picture = "https://pbs.twimg.com/profile_images/867104339151736832/hyT0nhB4_400x400.jpg";
    }
}

export class User{
    name:string;

    constructor(){
        this.name = 'mark';
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