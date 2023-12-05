import { ListComponent } from './list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasUserGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [HasUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule { }
