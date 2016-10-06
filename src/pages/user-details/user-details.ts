import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

// Import GithubUsers provider
import {GithubUsers} from '../../providers/github-users';

// Import User model
import {User} from '../../models/user';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
  providers: [GithubUsers]
})
export class UserDetailsPage  {
	login: string;
	user: User = new User;
	
	constructor(public navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
		// Retrieve the login from the navigation parameters
		this.login = navParams.get('login');
		// Get the user details and log
		githubUsers.loadDetails(this.login).then( user => this.user = user);
	}
	
	ionViewDidLoad() {
		console.log('Hello UserDetails Page');
	}

}
