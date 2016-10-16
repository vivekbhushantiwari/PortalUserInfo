import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import {UsersServiceProvider} from '../../providers/users-provider';
import {User} from '../../models/user';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
  providers: [UsersServiceProvider]
})
export class UserDetailsPage  {
	login: string;
	user: User = new User;
	loading : any;
	
	constructor(public navCtrl: NavController, navParams: NavParams, usersObj: UsersServiceProvider,  private loadingCtrl: LoadingController) {
		//Retrieve the login value from the navigation parameters
		this.login = navParams.get('login');
		
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.showLoader();
		
		//Get the user details from api
		usersObj.loadDetails(this.login).then( (userData) => {
			this.user = userData
			this.hideLoader();
		});
	}
	
	showLoader(){
		this.loading.present();
	}
	
	hideLoader(){
		 setTimeout(() => {
            this.loading.dismissAll();
          }, 1000);
	}
	
	ionViewDidLoad() {
		console.log('UserDetails Page Loaded');
	}

}
