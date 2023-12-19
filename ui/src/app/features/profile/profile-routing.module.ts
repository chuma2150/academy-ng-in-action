import { NgModule } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
import { SettingsComponent } from './settings';
import { ProfileComponent } from './profile.component';
import { hasUserGuard } from 'src/app/guards';
import { currentUserResolver } from './current-user.resolver';

export interface ProfileParams extends Params {
  username?: string;
}
type UserNameParam = keyof Pick<ProfileParams, 'username'>

const userNameParam: UserNameParam = 'username';

const routes: Routes = [
  {
    path: 'profile/edit',
    component: SettingsComponent,
    canActivate: [hasUserGuard],
    resolve: {
      user: currentUserResolver,
    },
  },
  {
    path: `profile/:${userNameParam}`,
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
