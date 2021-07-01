import { MatCardModule } from '@angular/material/card';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListModule} from './../list/list.module';
import {ComponentsModule} from '../../components/components.module';
import {ProfileResolverRoutingModule} from './profile-resolver-routing.module';
import {ProfileResolverComponent} from './profile-resolver.component';
import {ProfileResolverWrapperComponent} from './profile-resolver.wrapper.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule,
    ListModule,
    ProfileResolverRoutingModule
  ],
  declarations: [
    ProfileResolverComponent,
    ProfileResolverWrapperComponent
  ]
})
export class ProfileResolverModule {
}
