import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) { }

  canLoad(route: Route): boolean {
    return this.authService.isAuthenticated;
  }
}
