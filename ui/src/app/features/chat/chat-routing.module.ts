import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { HasUserGuard } from 'src/app/guards';

export const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [HasUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule { }
