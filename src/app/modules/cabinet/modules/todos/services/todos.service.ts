import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})

export class TodosService {
  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.api + '/todos'}`);
  }

  deleteTodo(id: number): any {
    return this.http.delete(`${environment.api + '/todos/' + id}`);
  }

  addTodo(payload: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.api + '/todos'}`, payload);
  }

  updateTodo(payload: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`${environment.api + '/todos/' + id}`, payload);
  }

}
