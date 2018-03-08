import { Component } from '@angular/core';

//decorator: TS can label classes with additional information.
@Component({
  selector: 'app-root', //here's the custom html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
