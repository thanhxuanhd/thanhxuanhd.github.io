import { ChangeDetectorRef, EventEmitter, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeChanged: EventEmitter<string> = new EventEmitter<string>();
  theme = new BehaviorSubject<string>('light');

  constructor() {
    let theme = localStorage.getItem('theme') ?? 'light'; // Get the theme from local storage or set it to 'light' if there is no theme in local storage
    this.theme = new BehaviorSubject<string>(theme);
    localStorage.setItem('theme', this.theme.value); // Store the selected theme in local storage
    this.theme.next(theme);
  }

  switchTheme(): void {
    let theme = this.theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Store the selected theme in local storage
    this.theme.next(theme);
  }

  isDarkMode(): boolean {
    return this.theme.value === 'light' ? false : true;
  }
}
