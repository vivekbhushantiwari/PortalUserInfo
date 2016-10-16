import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

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
		console.log('Repos Page Loaded');
		this.hideLoader();
	}

}
