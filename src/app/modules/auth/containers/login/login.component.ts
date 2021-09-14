import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {

  form: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[78][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$'), Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
  })

  constructor(private router: Router) { }

  login(): void {
    this.router.navigate(['/cabinet/todos'])
  }

}
