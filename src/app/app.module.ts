import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';
import {LoginModule} from './views/login/login.module';
import {RegistrationModule} from './views/registration/registration.module';
import {LayoutModule} from './layouts/layout.module';
import {UsersModule} from './views/users/users.module';

import {DashboardComponent} from './views/dashboard/dashboard.component'
import {Layouts} from './app.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { layout: Layouts.Main },
    children: [
      {
        path: 'campaigns',
        loadChildren: () => import('./views/campaigns/campaign-manager.module').then(module => module.CampaignManagerModule)
      }
  	]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
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
