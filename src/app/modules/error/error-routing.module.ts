import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundErrorComponent } from './containers/not-found-error/not-found-error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notFound' },
  { path: 'notFound', pathMatch: 'full', component: NotFoundErrorComponent },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class ErrorRoutingModule { }
