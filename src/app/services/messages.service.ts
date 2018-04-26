import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  //can be extended to more complex message class
  Messages:{text:string,type:'success'|'danger'}[];  

  constructor() { 
    this.Messages = [
      {text:"We're in the service now!",type:"success"}, 
      {text:"New Message!",type:"danger"},
      {text:"blah",type:"success"},
      {text:"blah2",type:"danger"},
      {text:"blah3",type:"success"}
    ];
    //can be extended to track how relevant messages are & remove unnecessary ones.
  }

}
