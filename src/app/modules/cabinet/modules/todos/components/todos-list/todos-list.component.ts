import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoState } from '../../state/state/todos.state';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todos-list.model';
import { Select, Store } from '@ngxs/store';
import { DeleteTodo, GetTodos, SetSelectedTodo } from '../../state/actions/todos.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos!: Observable<Todo[]>;

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
