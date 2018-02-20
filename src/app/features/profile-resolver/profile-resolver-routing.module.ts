import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HasUserGuard} from '../../guards/has-user/has-user.guard';
import {ProfileResolverComponent} from './profile-resolver.component';
import {UserResolver} from '../../guards/user-resolver/user.resolver';
import {ProfileResolverWrapperComponent} from './profile-resolver.wrapper.component';

const routes: Routes = [
  {
    path: 'profile-resolver/:profile',
    component: ProfileResolverWrapperComponent,
    canActivate: [HasUserGuard],
    resolve: {user: UserResolver}
  },
  {
    path: 'profile-resolver',
    component: ProfileResolverComponent,
    canActivate: [HasUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileResolverRoutingModule {
}
