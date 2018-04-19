import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

<<<<<<< HEAD
  //defaults to public property
  messages:string[];

  constructor() {
    this.messages = ['NEW messages feature added.'];
=======
    Messages: string[];
  constructor() {
      this.Messages = ['You can now choose your own pictures.'];
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
  }

  ngOnInit() {
  }

}
