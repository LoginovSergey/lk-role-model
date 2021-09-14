import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from './containers/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodosComponent },
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

export class TodosRoutingModule { }
