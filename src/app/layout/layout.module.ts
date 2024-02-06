import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LayoutModule { }
