import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './containers/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users-list' },
  { path: 'users-list', component: AdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AdminRoutingModule { }
