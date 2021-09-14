import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CabinetResolver } from './providers/cabinet.resolver';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', resolve: [CabinetResolver] },
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
