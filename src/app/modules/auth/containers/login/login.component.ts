import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { LoginFormModel } from '../../models/login-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent implements OnDestroy {
  subscriptions$: Subscription = new Subscription();

  form: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[78][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$'), Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
  })

  constructor(private service: AuthService,
              private router: Router) { }

  login(formValue: LoginFormModel): void {
    this.form.disable();
    this.subscriptions$.add(this.service.login(formValue).subscribe(res => {
      this.form.enable();
      sessionStorage.setItem('lk-role-model', 'authenticated-token');
      sessionStorage.setItem('lk-role-model__role', res);
      this.router.navigate(['/cabinet']);
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe()
  }

}
