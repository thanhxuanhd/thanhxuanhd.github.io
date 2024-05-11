import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  year: number;
  constructor() {
    this.year = new Date().getFullYear() - 1993;
  }

  ngOnInit(): void {
  }

}
