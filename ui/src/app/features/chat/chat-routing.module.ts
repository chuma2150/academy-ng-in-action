import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { HasUserGuard } from 'src/app/guards';

export const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [() => inject(HasUserGuard).canActivate()],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule { }
