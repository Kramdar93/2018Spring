import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  
  constructor( public messageServer:MessagesService ) {
  }

  ngOnInit() {
  }


  delete(i:number){
    this.messageServer.Messages.splice(i,1);
  }

}
