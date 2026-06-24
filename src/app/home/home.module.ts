import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
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
    NgOptimizedImage
  ],
  providers: []
})
export class HomeModule { }
