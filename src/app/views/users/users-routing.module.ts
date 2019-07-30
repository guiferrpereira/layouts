import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { UsersComponent } from './users.component';
import { Layouts } from '../../app.component'

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { layout: Layouts.Main }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
