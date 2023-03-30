import { RouterModule, Routes } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { AuthGuard } from './modules/auth/providers/auth.guard';
import { AuthService } from './modules/auth/services/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cabinet',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./modules/cabinet/cabinet.module').then(m => m.CabinetModule),
    canLoad: [() => inject(AuthService).isAuthenticated],
  },
  {
    path: '**',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthGuard,
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule { }
