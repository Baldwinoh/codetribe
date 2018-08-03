import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { EditIfomationPage } from '../edit-ifomation/edit-ifomation';
import { ServicesProvider } from './../../providers/services/services';
import { HomePage } from '../home/home';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  name:string;
  surname:string;
  age:any;
  email:any;
  address:any;
  cellNo:any;
  company:string;
  duration:any;
 deatilsInfo=[];

  public credentialsFG:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,private service:ServicesProvider) {
    this.deatilsInfo=this.service.getDetail();
    
    this.credentialsFG=this.formBuilder.group({
   
      Name:['',Validators.compose([Validators.minLength(2),Validators.pattern('[a-zA-Z]*'),
       Validators.required ])],
    ​
      surname:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z]*'),
       Validators.required ])],
    ​
      Age:['',Validators.compose([Validators.minLength(2),Validators.required ])],
 ​
     Address:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z]*'),
     Validators.required ])],

     email:['',Validators.compose([Validators.minLength(2),Validators.pattern('[a-zA-Z]*'),
     Validators.required ])],
  ​
    company:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z]*'),
     Validators.required ])],
    ​
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
dispaly(){
  console.log(this.name, this.surname, this.age, this.address, this.email, this.cellNo, this.company, this.duration)
  
}

login(){

  this.navCtrl.push(ProfilePage);
  
  }

  logOut(){

    this.navCtrl.push(HomePage);
    
    }
  editInfo(){
    this.navCtrl.push(EditIfomationPage);
    
    }
  
}
