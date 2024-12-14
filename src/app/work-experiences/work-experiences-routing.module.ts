import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkExperiencesComponent } from './work-experiences.component';

const routes: Routes = [
  { path: '', component: WorkExperiencesComponent, title: 'Experience'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperiencesRoutingModule { }
