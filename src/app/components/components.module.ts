import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatboardComponent} from './chatboard/chatboard.component';
import {ChatmessageComponent} from './chatmessage/chatmessage.component';
import {AvatarComponent} from './avatar/avatar.component';
import {UserComponent} from './user/user.component';
import {MatListModule, MatSelectModule} from '@angular/material';

const components = [
  ChatboardComponent,
  ChatmessageComponent,
  AvatarComponent,
  UserComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatSelectModule
  ],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
