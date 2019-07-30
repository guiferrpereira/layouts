import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyLayoutComponent } from '../../layouts/footer-only-layout/footer-only-layout.component';
import { LoginComponent } from './login.component';
import { Layouts } from '../../app.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { layout: Layouts.FooterOnly }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
