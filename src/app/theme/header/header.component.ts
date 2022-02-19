import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu($event: any) {
    $event.preventDefault();
    this.toggleMenu = !this.toggleMenu;
  }

}
