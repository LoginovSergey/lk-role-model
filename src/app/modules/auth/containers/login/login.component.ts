import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  })

}
