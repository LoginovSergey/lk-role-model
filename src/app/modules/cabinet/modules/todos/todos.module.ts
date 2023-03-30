import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';

import { TodosComponent } from './containers/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodosFormComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
  ],
})

export class TodosModule { }
