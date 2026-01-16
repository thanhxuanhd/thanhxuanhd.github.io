import {effect, Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  public darkMode = signal(localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Effect to update the DOM and localStorage whenever darkMode signal changes
    effect(() => {
      if (this.darkMode()) {
        this.renderer.addClass(document.documentElement, 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(document.documentElement, 'dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  switchTheme(): void {
    this.darkMode.update(value => !value);
  }

  isDarkMode(): boolean {
    return this.darkMode();
  }
}
