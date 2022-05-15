import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from '../models/login-form.model';
import { Token } from '../../../shared/models/token.model';
import { TokenService } from '../../../shared/services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private _http: HttpClient,
              private tokenService: TokenService,
              private router: Router) { }

  login(loginForm: LoginForm): Observable<Token> {
    return this._http.get<Token>(`assets/token.json`);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: 'user-logout',
      },
    })
  }

}
