import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent
]

const SERVICES = [
  ThemeService
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeModule {
}
