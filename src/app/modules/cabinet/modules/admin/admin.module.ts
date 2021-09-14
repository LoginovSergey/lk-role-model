import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './containers/admin/admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})

export class AdminModule { }
