import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyLayoutComponent } from '../../layouts/footer-only-layout/footer-only-layout.component';
import { RegistrationComponent } from './registration.component';
import { Layouts } from '../../app.component'

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { layout: Layouts.FooterOnly }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
