import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosListComponent {
  @Input() todo!: Todo[] | null;

  @Output() onEditTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onDeleteTodo: EventEmitter<number> = new EventEmitter<number>();

  editTodo(todo: Todo): void {
    this.onEditTodo.emit(todo);
  }

  deleteTodo(id: number): void {
    this.onDeleteTodo.emit(id);
  }
}
