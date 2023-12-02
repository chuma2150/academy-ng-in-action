import { ProfileViewComponent } from './profile-view/profile-view.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserComponent } from './user/user.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AgePipe } from './profile-view/age.pipe';

const components = [
  ChatboardComponent,
  ChatmessageComponent,
  AvatarComponent,
  UserComponent,
  ProfileViewComponent,
  AgePipe,
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
