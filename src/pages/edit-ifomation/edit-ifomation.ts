import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the EditIfomationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-ifomation',
  templateUrl: 'edit-ifomation.html',
})
export class EditIfomationPage {

  name:string;
  surname:string;
  age:any;
  email:any;
  address:any;
  cellNo:any;
  company:string;
  duration:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditIfomationPage');
  }

}
