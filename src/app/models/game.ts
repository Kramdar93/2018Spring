


export class Game {

    Players: User[] = [];
    DealerId: number;
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
    PlayerId: number;
    Chosen: boolean = false;
}