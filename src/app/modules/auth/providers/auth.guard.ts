import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    // if (this.jwtService.isAuthenticated === true) {
    //   return true;
    // } else {
      this.router.navigate(['/auth'], { queryParams: { returnUrl: 'not_logged_in' }});
      return true;
    // }
  }
}
