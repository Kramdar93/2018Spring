

export class Game {
    players:User[] = [];
    playedQuotes:Quote[] = [];
    myQuotes:string[] = [];
    picture:string = "";

    constructor(){
        this.players = [new User("alice"), new User("bob"), new User("charles")];
        this.playedQuotes = [new Quote("tfw you ate the whole pringles can"), new Quote("too many airheads"), new Quote("but seriously y tho")];
        this.myQuotes = ["here come dat boi", "mrw i have social anxiety", "a e s t h e t i c s"];
        this.picture = "https://pbs.twimg.com/profile_images/867104339151736832/hyT0nhB4_400x400.jpg";
    }
}

export class User{
    name:string;

    constructor(newName:string){
        this.name = newName;
    }
}

export class Quote{
    chosen:boolean = false;
    text:string;
    playerName:string;

    constructor(newText:string){
        this.text = newText;
    }
}