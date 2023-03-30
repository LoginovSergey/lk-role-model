import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LayoutComponent {

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }

}
