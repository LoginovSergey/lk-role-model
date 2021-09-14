import { Todo } from '../../models/todos-list.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodosService } from '../../services/todos.service';
import { AddTodo, DeleteTodo, GetTodos, SetSelectedTodo, UpdateTodo } from '../actions/todos.actions';
import { tap } from 'rxjs';
import {Inject, Injectable} from "@angular/core";

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

  constructor(@Inject(TodosService) private todoService: TodosService) { }

  @Selector()
  static getTodoList(state: TodoStateModel): any {
    return state.todos;
  }

  @Selector()
  static getSelectedTodo(state: TodoStateModel): any {
    return state.selectedTodo;
  }

  @Action(GetTodos)
  getTodos({ getState, setState}: StateContext<TodoStateModel>): any {
    return this.todoService.fetchTodos().pipe(tap(result => {
      const state = getState();
      setState({
        ...state,
        todos: result,
      });
    }));
  }

  @Action(AddTodo)
  addTodo({ getState, patchState}: StateContext<TodoStateModel>, { payload}: AddTodo): any {
    return this.todoService.addTodo(payload).pipe(tap(result => {
      const state = getState();
      patchState({
        todos: [...state.todos, result],
      });
    }));
  }

  @Action(UpdateTodo)
  updateTodo({ getState, setState}: StateContext<TodoStateModel>, { payload, id}: UpdateTodo): any {
    return this.todoService.updateTodo(payload, id).pipe(tap(result => {
      const state = getState();
      const todoList = [...state.todos];
      const todoIndex = todoList.findIndex(item => item.id === id);
      todoList[todoIndex] = result;
      setState({
        ...state,
        todos: todoList,
      });
    }));
  }


  @Action(DeleteTodo)
  deleteTodo({ getState, setState}: StateContext<TodoStateModel>, { id}: DeleteTodo): any {
    return this.todoService.deleteTodo(id).pipe(tap(() => {
      const state = getState();
      const filteredArray = state.todos.filter(item => item.id !== id);
      setState({
        ...state,
        todos: filteredArray,
      });
    }));
  }

  @Action(SetSelectedTodo)
  setSelectedTodoId({ getState, setState}: StateContext<TodoStateModel>, { payload}: SetSelectedTodo): void {
    const state = getState();
    setState({
      ...state,
      selectedTodo: payload,
    });
  }
}
