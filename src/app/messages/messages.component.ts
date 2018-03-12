import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //defaults to public property
  messages:string[];

  constructor() {
    this.messages = ['NEW messages feature added.'];
  }

  ngOnInit() {
  }

}
