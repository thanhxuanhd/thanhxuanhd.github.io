import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThemeModule } from '../theme';
import { HomeRoutingModule } from './home-routing.module';
import { WorkTimeComponent } from './work-time/work-time.component';



@NgModule({
  declarations: [
    HomeComponent,
    WorkTimeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemeModule
  ],
  providers: []
})
export class HomeModule { }
