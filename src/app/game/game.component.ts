import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Game, Quote, User } from '../models/game';

import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me:User;

    private _api = "http://localhost:8080/game";

  constructor(private http: Http, 
              private messageServer:MessagesService, 
              private gameServer:GameService, 
              private router:Router) {
    this.Me = gameServer.Me;
    if(!this.Me) router.navigate(["/login"]);
    this.join(this.Me.Name);
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json() )
  }

  flipPicture(e: MouseEvent){
    this.messageServer.Messages.push({text:"Picture Flipped!",type:"success"});
    this.http.post(this._api + "/picture",{})
        .subscribe();
  }

  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    if( this.MyPlayedQuote() || this.IAmTheDealer() ) return;

    this.messageServer.Messages.push({text:"Subitted quote:" + text,type:"success"});
    
    this.http.post(this._api + "/quotes", { Text: text, PlayerID: this.Me.ID })
      .subscribe(data=> {
          if(data.json().success){
              this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
          }
      },err=>console.log(err)
    );
    this.http.get(this._api + "/quotes", { params: {PlayerID: this.Me.ID} })
    .subscribe(data=> {
      this.Me.MyQuotes.push(data.json().quotes)
    });
  }

  chooseQuote(e: MouseEvent, q: Quote){
    this.http.post(this._api + "/choose", { Text: q.Text })
      .subscribe(); //can just sub, state will update automatically.
  }

  join(name: string){
    this.http.get(this._api + "/quotes", { params : { PlayerID: name } })
    .subscribe(data=> {
      this.Me.MyQuotes = data.json().quotes;
      this.messageServer.Messages.push({text:"Welcome " + name + "!",type:"success"});
    })
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerID == this.Me.ID );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length >= this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.ID == this.Model.DealerID;
}
