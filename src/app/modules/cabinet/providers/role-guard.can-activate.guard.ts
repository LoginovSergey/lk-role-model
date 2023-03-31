import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const role = this.auth.getUserRole;
    if (
      !this.auth.isAuthenticated ||
      role !== expectedRole
    ) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
