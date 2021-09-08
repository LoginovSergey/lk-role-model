import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';

import { TodosListModel } from '../models/todos-list.model';

@Injectable({
  providedIn: 'root',
})

export class TodosService {

  constructor(private http: HttpClient) { }

  getTodosList(): Observable<TodosListModel[]> {
    return this.http.get<TodosListModel[]>(`${environment.api + '/todos'}`)
  }

}
