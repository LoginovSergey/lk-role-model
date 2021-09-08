import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {

  form: FormGroup = new FormGroup({
    phone: new FormControl('', []),
    password: new FormControl('', [Validators.minLength(5), Validators.maxLength(15)]),
  })

  constructor(private router: Router) { }

  login(): void {
    this.router.navigate(['/cabinet'])
  }

}
