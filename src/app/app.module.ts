import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import {UsersPage} from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import {OrganizationsPage} from '../pages/organizations/organizations';

import {UserDetailsPage} from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
	UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
	UserDetailsPage
  ],
  providers: []
})
export class AppModule {}
