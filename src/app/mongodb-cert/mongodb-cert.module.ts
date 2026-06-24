import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongodbCertRoutingModule } from './mongodb-cert-routing.module';
import { MongodbCertComponent } from './mongodb-cert.component';


@NgModule({
  declarations: [
    MongodbCertComponent
  ],
  imports: [
    CommonModule,
    MongodbCertRoutingModule
  ]
})
export class MongodbCertModule { }
