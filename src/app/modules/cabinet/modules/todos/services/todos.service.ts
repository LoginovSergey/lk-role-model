import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/todos-list.model';

@Injectable({
  providedIn: 'root',
})

export class TodosService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  deleteTodo(id: number): any {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addTodo(payload: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', payload);
  }

  updateTodo(payload: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, payload);
  }

}
