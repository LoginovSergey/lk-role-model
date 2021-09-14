import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { TodoState } from '../../state/todos.state';
import { AddTodo } from '../../state/todos.actions';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosFormComponent implements OnInit {
  @Select(TodoState.getSelectedTodo) selectedTodo!: Observable<Todo>;
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store) {
    this.todoForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.selectedTodo.subscribe(todo => {
      if (todo) {
        this.todoForm.patchValue({
          id: todo.id,
          userId: todo.userId,
          title: todo.title,
        });
      }
    })
  }

  clearForm(): void {
    this.todoForm.reset();
    // this.store.dispatch(new SetSelectedTodo(null));
  }

  addTodo(): void {
    this.store.dispatch(new AddTodo(this.todoForm.value)).subscribe(() => {
      this.clearForm();
    })
  }

}
