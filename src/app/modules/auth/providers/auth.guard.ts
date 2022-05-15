import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { TokenService } from '../../../shared/services/token.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router,
              private tokenService: TokenService) { }

  canLoad(route: Route): boolean {
    if (this.tokenService.isUserAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth'], {
        queryParams: {
          returnUrl: 'user-not-logged-in',
        },
      });
      return false;
    }
  }

}
