import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../shared/modules/material.module';

import { LoginComponent } from './containers/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
})

export class AuthModule { }
