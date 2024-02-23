import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./features/chat').then(m => m.ChatModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./features/list').then(m => m.ListModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login').then(m => m.LoginModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./features/main').then(m => m.MainModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile').then(m => m.ProfileModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
