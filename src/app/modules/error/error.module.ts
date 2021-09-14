import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundErrorComponent } from './containers/not-found-error/not-found-error.component';

@NgModule({
  declarations: [
    NotFoundErrorComponent,
  ],
  imports: [
    CommonModule,
  ],
})

export class ErrorModule { }
