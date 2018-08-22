import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from './../../providers/services/services';
import { HomePage } from './../home/home';
import { ProfilePage } from './../profile/profile';
import { DetailsPage } from './../details/details';
/**
 * Generated class for the CodeTribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-tribe',
  templateUrl: 'code-tribe.html',
})
export class CodeTribePage {
  tribers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private server: ServicesProvider) {
    this.tribers = this.server.getCodeTribers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodeTribePage');
  }
  logOut() {
    this.navCtrl.push(HomePage);
  }

  Details(index:number){
  this.server.addDetails(index);
  this.navCtrl.push(DetailsPage)
  }
  
Profile(index:number){

  this.navCtrl.push(ProfilePage);
  
  }
}
