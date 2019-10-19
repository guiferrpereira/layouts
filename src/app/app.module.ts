import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';
import {LoginModule} from './views/login/login.module';
import {RegistrationModule} from './views/registration/registration.module';
import {LayoutModule} from './layouts/layout.module';
import {UsersModule} from './views/users/users.module';
import {Layouts} from './app.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/registration',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    LayoutModule,
    LoginModule,
    RegistrationModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
