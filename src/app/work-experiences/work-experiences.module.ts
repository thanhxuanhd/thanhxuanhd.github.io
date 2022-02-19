import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperiencesRoutingModule } from './work-experiences-routing.module';
import { ThemeModule } from '../theme';
import { WorkExperiencesComponent } from './work-experiences.component';

@NgModule({
  declarations: [WorkExperiencesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    WorkExperiencesRoutingModule
  ]
})
export class WorkExperiencesModule { }
