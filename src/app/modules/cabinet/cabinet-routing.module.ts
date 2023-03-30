import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CabinetResolver } from './providers/cabinet.resolver';
import { CabinetTodosGuard } from './providers/cabinet-todos.guard';
import { CabinetAdminGuard } from './providers/cabinet-admin.guard';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', resolve: { cabinet: CabinetResolver } },
  { path: '', component: LayoutComponent, children: [
      {
        path: 'todos',
        loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule),
        canLoad: [CabinetTodosGuard],
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canLoad: [CabinetAdminGuard],
      },
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
