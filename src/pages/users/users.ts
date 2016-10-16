import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';

import {UsersServiceProvider} from '../../providers/users-provider';
import {User} from '../../models/user';

import {UserDetailsPage} from '../user-details/user-details';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html', 
  providers: [UsersServiceProvider]
})
export class UsersPage {
	  
	users: User[]; // It will store the user list
	loading : any;
	constructor(public navCtrl: NavController, private usersObj: UsersServiceProvider, private loadingCtrl: LoadingController) {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.showLoader();
		usersObj.load().then((usersArr)=> {
			this.users = usersArr;
			this.hideLoader();
		});
	}
	  
	// Navigate to user details page with the login as a parameter  
	goToDetails(event, login) {
		this.navCtrl.push(UserDetailsPage, {
			login: login
		});
	}
	
	
	// Search input handler
	onSearch(eventRef:any) {
		let searhStr = eventRef.target.value;
		// We will only perform the search if we have 3 or more characters
		if (searhStr.trim() == '' || searhStr.trim().length < 3) {
			// Load previously serached users
			this.usersObj.load().then(users => this.users = users);
		} else {
			// Get the searched users from api
			this.usersObj.searchUsers(searhStr).then((users) => {
				this.users = users;
			});
		}
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
		console.log('Users Page Loded');
	}
}
