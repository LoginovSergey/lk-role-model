import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RoleGuard } from './providers/role-guard.can-activate.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'todos',
        loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule),
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'user',
        },
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin',
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class CabinetRoutingModule { }
