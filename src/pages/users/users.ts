import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import GithubUsers provider
import {GithubUsers} from '../../providers/github-users';

// Import User model
import {User} from '../../models/user';

// Import User's Details Page
import {UserDetailsPage} from '../user-details/user-details';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  // Add the GithubUsers provider as part of our page component
  providers: [GithubUsers]
})
export class UsersPage {
	  // Declare users as an array of User model
	  users: User[];
	 
	constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
		githubUsers.load().then((usersArr)=> {
			// User arrow function notation
			// Log the returned github users		
			
			this.users = usersArr;
			//console.log(this.users);
		});
	}
	  
	// Navigate to user details page with the login as a parameter  
	goToDetails(event, login) {
		this.navCtrl.push(UserDetailsPage, {
			login: login
		});
	}
	
	// Search for user's from github  
	// Handle input event from search bar
	onSearch(eventRef:any) {
		let searhStr = eventRef.target.value;

		// We will only perform the search if we have 3 or more characters
		if (searhStr.trim() == '' || searhStr.trim().length < 3) {
			// Get github users and assign to local user's variable
			// Load original users in this case
			this.githubUsers.load().then(users => this.users = users);
		} else {
			// Get the searched users from github
			this.githubUsers.searchUsers(searhStr).then(users => this.users = users);
		}
	}
	
		
	ionViewDidLoad() {
		console.log('Users Page Loded');
	}
}
