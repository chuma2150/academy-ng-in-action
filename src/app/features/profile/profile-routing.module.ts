import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { HasUserGuard } from '../../guards/has-user/has-user.guard';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'profile/:username',
    component: ProfileComponent,
    canActivate: [HasUserGuard]
  },
  {
    path: 'profile/:username/edit',
    component: SettingsComponent,
    canActivate: [HasUserGuard]
  },
  {
    path: 'profile',
    redirectTo: 'profile/',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
