import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { HomePage } from './../home/home';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
  
  IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
