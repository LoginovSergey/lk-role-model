import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from './containers/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: TodosComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class TodosRoutingModule { }
