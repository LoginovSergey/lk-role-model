import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router,
              private authService: AuthService) { }

  canLoad(route: Route): boolean {
    console.log(this.authService.isAuthenticated)
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth'], { queryParams: { returnUrl: 'not_logged_in' }});
      return true;
    }
  }
}
