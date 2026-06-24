import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MongodbCertComponent } from './mongodb-cert.component';

const routes: Routes = [
  { path: '', component: MongodbCertComponent, title: 'MongoDB Certification' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongodbCertRoutingModule { }
