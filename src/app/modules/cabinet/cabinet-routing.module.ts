import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: '', component: LayoutComponent, children: [
      { path: 'todos', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule) },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
    ],
  },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class CabinetRoutingModule { }
