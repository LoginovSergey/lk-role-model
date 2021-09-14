import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';
import { AddTodo, DeleteTodo, GetTodos, SetSelectedTodo, UpdateTodo } from './todos.actions';

export class TodoStateModel {
  todos!: Todo[];
  selectedTodo!: Todo | null;
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})

@Injectable()
export class TodoState {

  constructor(private todoService: TodosService) {
  }

  @Selector()
  static getTodoList(state: TodoStateModel): any {
    return state.todos;
  }

  @Selector()
  static getSelectedTodo(state: TodoStateModel): any {
    return state.selectedTodo;
  }

  @Action(GetTodos)
  getTodos(ctx: StateContext<TodoStateModel>): any {
    return this.todoService.fetchTodos().pipe(tap(result => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        todos: result,
      });
    }));
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, { payload}: AddTodo): any {
    return this.todoService.addTodo(payload).pipe(tap(result => {
      const state = ctx.getState();
      ctx.patchState({
        todos: [...state.todos, result],
      });
    }));
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, { payload, id}: UpdateTodo): any {
    return this.todoService.updateTodo(payload, id).pipe(tap(result => {
      const state = ctx.getState();
      const todoList = [...state.todos];
      const todoIndex = todoList.findIndex(item => item.id === id);
      todoList[todoIndex] = result;
      ctx.setState({
        ...state,
        todos: todoList,
      });
    }));
  }


  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, { id}: DeleteTodo): any {
    return this.todoService.deleteTodo(id).pipe(tap(() => {
      const state = ctx.getState();
      const filteredArray = state.todos.filter(item => item.id !== id);
      ctx.setState({
        ...state,
        todos: filteredArray,
      });
    }));
  }

  @Action(SetSelectedTodo)
  setSelectedTodoId(ctx: StateContext<TodoStateModel>, { payload}: SetSelectedTodo): any {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedTodo: payload,
    });
  }
}

