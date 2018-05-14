import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../models/game';

import { MessagesService } from './messages.service';
import { Router } from '@angular/router';

@Injectable()
export class GameService {

  Me: User;
  //TODO: put in User
  token:string;
  pic:string
  
  private _api = "http://localhost:8080/game";

  constructor(private http:Http,private messageServer:MessagesService, private router:Router) { }

  login(name:string,pword:string){
    if(pword=="123"){
      //log user in
      this.http.get(this._api + "/quotes", { params : { PlayerID: name } })
      .subscribe(data=> {
        this.Me = { Name: name, ID:data.json().ID, MyQuotes: data.json().quotes };
        this.messageServer.Messages.push({text:"Welcome " + name + "!",type:"success"});
        this.router.navigate(["/game"]);
      })
      //this.Me = {Name:name,ID:0,MyQuotes:[]};
    }
  }

  //TODO: bring all other http calls from component to here.


  oAuthLogin(name:string, token:string, pic:string){
    this.http.get(this._api + "/quotes", { params : { PlayerID: name } })
      .subscribe(data=> {
        this.Me = { Name: name, ID:data.json().ID, MyQuotes: data.json().quotes };
        this.messageServer.Messages.push({text:"Welcome " + name + "!",type:"success"});
        this.token = token;
        this.pic = pic;
        this.router.navigate(["/game"]);
      })
    //this.Me = {Name:name,ID:0,MyQuotes:[]};
    //this.router.navigate(["/game"]);
  }
}
