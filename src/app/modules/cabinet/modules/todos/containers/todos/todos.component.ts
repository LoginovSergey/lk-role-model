import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { DeleteTodo, GetTodos, SetSelectedTodo } from '../../state/todos.actions';
import { TodoState } from '../../state/todos.state';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosComponent implements OnInit {
  @Select(TodoState.getTodoList) todos: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(payload: Todo): void {
    this.store.dispatch(new SetSelectedTodo(payload));
  }
}
