import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  toggleMenu: boolean = false;
  isDarkTheme: boolean = false;
  themeSubscription: Subscription = new Subscription();
  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkMode();
    this.themeSubscription = this.themeService.theme.subscribe(theme => {
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  onToggleMenu($event: any) {
    $event.preventDefault();
    this.toggleMenu = !this.toggleMenu;
  }

  switchTheme(): void {
    this.themeService.switchTheme();
    this.isDarkTheme = this.themeService.isDarkMode();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
