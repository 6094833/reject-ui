import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path : '',
    component: BaseComponent,
    children: [
      {
        path : 'home',
        loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path : '',
        redirectTo: 'home',
        pathMatch : 'full'
      }
    ]
  },
  // {
  //   path : '**',
  //   redirectTo: '', // TODO : Should redirect to wildcard page
  //   pathMatch : 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
