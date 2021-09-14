import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class CabinetAdminGuard implements CanLoad {
  constructor(private router: Router,
              private authService: AuthService) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    let userRole = this.authService.getUserRole;
    if (userRole === 'admin') {
      return of(true);
    } else {
      this.router.navigate(['/']);
      return of(false)
    }
  }
}
