import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})

export class AuthModule { }
