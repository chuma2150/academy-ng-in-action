import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasUserGuard } from 'src/app/guards';
import { SettingsComponent } from './settings';
import { ProfileComponent } from './profile.component';
import { CurrentUserResolver } from './current-user.resolver';

const routes: Routes = [
  {
    path: 'profile/edit',
    component: SettingsComponent,
    canActivate: [HasUserGuard],
    resolve: {
      user: CurrentUserResolver,
    },
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    canActivate: [HasUserGuard],
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
