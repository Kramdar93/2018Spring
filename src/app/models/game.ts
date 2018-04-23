


export class Game {

    Players: User[] = [];
    DealerID: number;
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [];
}

export class User {
    Name: string;
    ID: number;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerID: number;
    Chosen: boolean = false;
}