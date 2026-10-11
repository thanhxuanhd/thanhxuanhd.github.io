import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const darkMode = signal(false);
  const themeService = {
    darkMode,
    switchTheme: jasmine.createSpy('switchTheme').and.callFake(() => {
      darkMode.update(value => !value);
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [CommonModule, RouterLink, RouterLinkActive],
      providers: [
        provideRouter([]),
        { provide: ThemeService, useValue: themeService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    darkMode.set(false);
    themeService.switchTheme.calls.reset();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps the mobile menu expanded state and accessible label in sync', () => {
    const menuButton: HTMLButtonElement = fixture.nativeElement.querySelector('[aria-controls="mobile-menu"]');

    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    menuButton.click();
    fixture.detectChanges();

    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(menuButton.textContent).toContain('Close menu');
  });

  it('updates the theme button when the theme signal changes', () => {
    const themeButton: HTMLButtonElement = fixture.nativeElement.querySelector('[aria-label="Switch to dark theme"]');

    themeButton.click();
    fixture.detectChanges();

    expect(themeService.switchTheme).toHaveBeenCalled();
    expect(fixture.nativeElement.querySelector('[aria-label="Switch to light theme"]')).toBeTruthy();
  });
});
