import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

//declare var window: Window & {onGoogleYoloLoad:Function}
declare var googleyolo:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private game:GameService) {
    
  }

  ngOnInit() {
  }


  login(name:string,pword:string){
    this.game.login(name,pword)
  }

  googleLogin(){
    /*window.onGoogleYoloLoad = (googleyolo:any) => {
      // The 'googleyolo' object is ready for use.
    };*/
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
        //"googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "62226211914-m4nfhcsm4t9j22anisu4hn62v4h4p9m8.apps.googleusercontent.com"
        }
      ]
    }).then((credentials:any)=>{
      //console.log(credentials);
      this.game.oAuthLogin(credentials.displayName,credentials.idToken,credentials.profilePicture);
    });
  }
}
