import { NgModule } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { hasUserGuard } from 'src/app/guards';
import { currentUserResolver } from './current-user.resolver';
import { ReactiveSettingsComponent } from './reactive-settings';

export interface ProfileParams extends Params {
  username?: string;
}
type UserNameParam = keyof Pick<ProfileParams, 'username'>

const userNameParam: UserNameParam = 'username';

const routes: Routes = [
  {
    path: 'edit',
    component: ReactiveSettingsComponent,
    canActivate: [hasUserGuard],
    resolve: {
      user: currentUserResolver,
    },
  },
  {
    path: `:${userNameParam}`,
    component: ProfileComponent,
    canActivate: [hasUserGuard],
  },
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
