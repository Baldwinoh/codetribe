import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from './../register/register';
import { CodeTribePage } from './../code-tribe/code-tribe';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
password:string;
username:string;

  constructor(public navCtrl: NavController) {
  }

login(){


this.navCtrl.push(ProfilePage);
}
register(){
  this.navCtrl.push(RegisterPage); 
  }
  goToTribers(){
    this.navCtrl.push(CodeTribePage)
  }
}
