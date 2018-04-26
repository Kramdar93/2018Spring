import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }


  login(name:string,pword:string){
    this.game.login(name,pword)
  }
}
