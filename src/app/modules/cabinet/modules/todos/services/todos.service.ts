import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})

export class TodosService {
  constructor(private readonly _http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${environment.api + '/todos'}`);
  }

  deleteTodo(id: number): any {
    return this._http.delete(`${environment.api + '/todos/' + id}`);
  }

  addTodo(payload: Todo): Observable<Todo> {
    return this._http.post<Todo>(`${environment.api + '/todos'}`, payload);
  }

  updateTodo(payload: Todo, id: number): Observable<Todo> {
    return this._http.put<Todo>(`${environment.api + '/todos/' + id}`, payload);
  }

}
