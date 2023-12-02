import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserComponent } from './user/user.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

const components = [
  ChatboardComponent,
  ChatmessageComponent,
  AvatarComponent,
  UserComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatSelectModule
  ],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
