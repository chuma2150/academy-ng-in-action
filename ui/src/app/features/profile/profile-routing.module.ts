import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings';
import { ProfileComponent } from './profile.component';
import { hasUserGuard } from 'src/app/guards';
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
    canActivate: [hasUserGuard],
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
