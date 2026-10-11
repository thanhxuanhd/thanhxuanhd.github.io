import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HeaderComponent {
  toggleMenu = false;

  constructor(private readonly themeService: ThemeService) {}

  get isDarkTheme(): boolean {
    return this.themeService.darkMode();
  }

  onToggleMenu(): void {
    this.toggleMenu = !this.toggleMenu;
  }

  switchTheme(): void {
    this.themeService.switchTheme();
  }
}
