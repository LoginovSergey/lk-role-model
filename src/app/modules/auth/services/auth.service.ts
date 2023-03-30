import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

import { LoginFormModel } from '../models/login-form.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private router: Router) { }

  get isAuthenticated(): boolean {
    return sessionStorage.getItem('lk-role-model') !== null;
  }

  get getUserRole(): string | null {
    return sessionStorage.getItem('lk-role-model__role');
  }

  login(form: LoginFormModel): Observable<string> {
    let arrOfRoles = ['admin', 'user'];
    let randomRole = arrOfRoles[(Math.floor(Math.random() * arrOfRoles.length))];
    return new Observable<string>((observer: Subscriber<string>) => {
      observer.next(randomRole);
      observer.complete();
    })
  }

  logout(): void {
    sessionStorage.removeItem('lk-role-model');
    sessionStorage.removeItem('lk-role-model__role');
    this.router.navigate(['/auth'])
  }

}
