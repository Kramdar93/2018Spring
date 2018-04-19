import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, Quote, User } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me: User;
    private _api = "http://localhost:8080/game";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

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

    this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.ID })
      .subscribe(data=> {
          if(data.json().success){
              this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
          }
      });
    this.http.get(this._api + "/quotes", { params: {PlayerId: this.Me.ID} })
    .subscribe(data=> {
      this.Me.MyQuotes.push(data.json().quotes)
    });
  }

  chooseQuote(e: MouseEvent, q: Quote){
    this.http.post(this._api + "/choose", { Text: q.Text })
      .subscribe(); //can just sub, state will update automatically.
  }

  login(name: string){
    this.http.get(this._api + "/quotes", { params : { PlayerId: name } })
      .subscribe(data=> {
        this.Me = { Name: name, ID:data.json().id, MyQuotes: data.json().quotes };
      })
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.ID );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length >= this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.ID == this.Model.DealerId;
}
