import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RejectedScanSummaryComponent } from './rejected-scan-summary/rejected-scan-summary.component';

@NgModule({
  declarations: [
    HomeComponent,
    RejectedScanSummaryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
// TODO Change Home to Query Rejection Scan