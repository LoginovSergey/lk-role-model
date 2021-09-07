import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cabinet' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./modules/cabinet/cabinet.module').then(m => m.CabinetModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/error/error.module').then( m => m.ErrorModule),
  },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule { }
