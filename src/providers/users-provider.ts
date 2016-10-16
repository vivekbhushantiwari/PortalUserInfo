import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from '../models/user'

@Injectable()
export class UsersServiceProvider {
	usersList: any = null;

	constructor(public http: Http) {
		console.log('UsersServiceProvider constructor');
	} 

	load() {
		if (this.usersList) {
			//users loaded 
			return Promise.resolve(this.usersList);
		}

		// get the users list using api
		return new Promise(resolve => {
			this.http.get('https://api.github.com/users').map(res => <Array<User>>(res.json()))
				.subscribe(data => {				 
				  this.usersList = data;
				  resolve(this.usersList);
			});
		});
	}
	
	// Get perticular user's details
	loadDetails(login: string) {
		
		return new Promise<User>(resolve => {
			this.http.get(`https://api.github.com/users/${login}`).map(res => <User>(res.json()))
			.subscribe(userData => {
				resolve(userData);
			});
		});
	}
	
	// Search for users using api
	searchUsers(searchParam: string) {		
		return new Promise<Array<User>>(resolve => {			
			this.http.get(`https://api.github.com/search/users?q=${searchParam}`)
			.map(res => <Array<User>>(res.json().items))
					.subscribe(
						(srachedUsers) => {resolve(srachedUsers);},
						(err) => {this.logError(err);}
					);
		});
	}
	
	 logError(err: any) {
        console.log(err);
    }

}
