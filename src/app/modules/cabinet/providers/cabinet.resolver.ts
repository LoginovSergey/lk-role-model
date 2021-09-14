import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class CabinetResolver implements Resolve<boolean> {
  userRole = this.authService.getUserRole;
  constructor(private authService: AuthService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.userRole === 'admin') {
      this.router.navigate(['/cabinet', 'admin']);
    } else if (this.userRole === 'user') {
      this.router.navigate(['/cabinet', 'todos']);
    }
    return of(true);
  }

}
