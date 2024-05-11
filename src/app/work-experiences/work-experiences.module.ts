import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperiencesRoutingModule } from './work-experiences-routing.module';
import { WorkExperiencesComponent } from './work-experiences.component';

@NgModule({
  declarations: [WorkExperiencesComponent],
  imports: [
    CommonModule,
    WorkExperiencesRoutingModule
  ]
})
export class WorkExperiencesModule { }
