import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIfomationPage } from './edit-ifomation';
import { ProfilePage } from './../profile/profile';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    EditIfomationPage,
    ProfilePage,
    HomePage
  
  ],
  imports: [

  IonicPageModule.forChild(EditIfomationPage),
  ],
})
export class EditIfomationPageModule {}
