import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { HasUserGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: 'profile/:username',
    component: ProfileComponent,
    canActivate: [() => inject(HasUserGuard).canActivate()],
  },
  {
    path: 'profile',
    redirectTo: 'profile/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
