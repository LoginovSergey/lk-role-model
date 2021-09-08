import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';

import { UsersListModel } from '../models/users-list.model';

@Injectable({
  providedIn: 'root',
})

export class AdminService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<UsersListModel[]> {
    return this.http.get<UsersListModel[]>(`${environment.api + '/users'}`)
  }
}
