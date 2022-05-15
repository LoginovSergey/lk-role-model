import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TokenService {

  get isUserAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: any): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

}
