import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  year: number;

  constructor() {
    this.year = new Date().getFullYear() - 1993;
  }

}
