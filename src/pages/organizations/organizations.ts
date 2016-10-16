import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class OrganizationsPage {
	loading : any;
	constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.showLoader();
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
		console.log('Organizations Page Loaded');
		this.hideLoader();
	}

}
