import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { LoginFormModel } from '../../models/login-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent implements OnDestroy {

  form: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
  })

  private destroy$ = new Subject<void>()

  constructor(
    private service: AuthService,
    private _router: Router
  ) { }

  login(formValue: LoginFormModel): void {
    this.form.disable();
    this.service.login(formValue)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((res: string) => {
      this.form.enable();
      sessionStorage.setItem('lk-role-model', 'authenticated-token');
      sessionStorage.setItem('lk-role-model__role', res);
      if (res === 'admin') {
        this._router.navigate(['cabinet', 'admin']);
      } else if (res === 'user') {
        this._router.navigate(['cabinet', 'todos']);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
