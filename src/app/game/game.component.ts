import { Component, OnInit } from '@angular/core';
import { Game, Quote, User } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model = new Game();

  currentUser = new User();

  constructor() { }

  ngOnInit() {
  }

  //include event so we can get more information if needed.
  //mouse event since it will be onclick.
  //todo: refactor into a function in model for data and make this for display
  SubmitQuote(e:MouseEvent, text:string){
    e.preventDefault; //stops browser from taking default action eg navigate away.

    if (!this.MyPlayedQuote()) //only do something if we have not played a quote. truthy if one has been found.
    {
      this.model.playedQuotes.push(new Quote(text, this.currentUser.name)); //this line could be used in model.

      var index = this.model.myQuotes.indexOf(text); //get index of selected quote in myquotes array
      if(index >= 0){ //if we got something
        this.model.myQuotes.splice(index, 1); //remove it
      }
    }
  }

  MyPlayedQuote(): Quote | null { // * | null needed in case strict checking is enabled since we may not find a quote -> null obj.
    return this.model.playedQuotes.find(x => x.playerName == this.currentUser.name);
  }

}
