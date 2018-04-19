<<<<<<< HEAD
//import browsermodule since this will ultimately be clientside
=======
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';


<<<<<<< HEAD
=======

>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
<<<<<<< HEAD
      { path:'home', component: HomeComponent },
      { path:'game', component: GameComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'} //pathmatch 'full' only matches if  exactly path
=======
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'}
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
