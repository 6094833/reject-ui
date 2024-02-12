import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RejectedScanSummaryComponent } from './rejected-scan-summary/rejected-scan-summary.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
  },
  {
    path : 'summary',
    component: RejectedScanSummaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
