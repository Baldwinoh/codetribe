import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { EditIfomationPage } from '../edit-ifomation/edit-ifomation';
import { HomePage } from './../home/home';
@NgModule({
  declarations: [
    ProfilePage,
    EditIfomationPage,
    HomePage
  ],
  imports: [

  IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
