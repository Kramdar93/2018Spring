import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
<<<<<<< HEAD
import { Game, Quote, User } from '../models/game';
=======
import { Game, User, Quote } from '../models/game';
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

<<<<<<< HEAD
  model = new Game();

  currentUser = new User();

  private api = "http://localhost:8080/game";

  constructor(private http:Http) {
    this.currentUser.ID = "mark";
    http.get(this.api + "/quotes",{ params:{PlayerID:this.currentUser.ID} })
      .subscribe((data)=>this.currentUser.myQuotes=data.json());
    http.get(this.api + "/state")
      .subscribe((data)=>this.model=data.json());
    setInterval( ()=>this.Refresh(), 1000 );
=======
    Model = new Game();
    Me: User;
    private _api = "http://localhost:8080/game";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  //ToDo: use socket.io
  Refresh(){
    this.http.get(this.api + "/state")
      .subscribe((data)=>this.model=data.json());
  }

  FlipPicture(e:MouseEvent){
    this.http.post(this.api + "/picture",{})
      .subscribe(); //subscribe required in order for message to be sent.
  }

  //include event so we can get more information if needed.
  //mouse event since it will be onclick.
  //todo: refactor into a function in model for data and make this for display
  SubmitQuote(e:MouseEvent, text:string){
    e.preventDefault(); //stops browser from taking default action eg navigate away.

    if (this.MyPlayedQuote()) return; //only do something if we have not played a quote. truthy if one has been found.

    //this.model.playedQuotes.push(new Quote(text, this.currentUser.name)); //this line could be used in model.
    this.http.post(this.api + "/quotes",{Text:text, PlayerID:this.currentUser.ID})
      .subscribe((data)=>{
        if(data.json().success){
          var index = this.currentUser.myQuotes.indexOf(text); //get index of selected quote in myquotes array
          if(index >= 0){ //if we got something
            this.currentUser.myQuotes.splice(index, 1); //remove it
          }
        }
      });
    
    //get a new quote
    this.http.get(this.api + "/quotes",{params:{PlayerID:this.currentUser.ID} })
      .subscribe((data)=>{
        this.currentUser.myQuotes.push(data.json()[0]);
      });
  }

  //skip overly verbose function definition using fat arrow notation
  MyPlayedQuote = () => this.model.playedQuotes.find(x => x.playerID == this.currentUser.ID);
  //no params-----'  '------function def    *note: return value infered from playedQuotes.find

  IsDealer = () => this.model.dealerID == this.currentUser.ID;

  //these really belongs in the model
  ChosenQuote = () => this.model.playedQuotes.find(x => x.chosen);
  IsEveryoneDone = () => this.model.playedQuotes.length == this.model.players.length - 1; //everyone but dealer
=======
  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  flipPicture(e: MouseEvent){
    this.http.post(this._api + "/picture",{})
        .subscribe();
  }

  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    if(this.MyPlayedQuote()) return;

    this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
            }
        });
  }

  login(name: string){
    this.http.get(this._api + "/quotes", { params : { playerId: name } })
    .subscribe(data=> this.Me =  {Name: name, MyQuotes: data.json() } )
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
}
