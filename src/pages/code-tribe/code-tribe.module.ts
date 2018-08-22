import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeTribePage } from './code-tribe';

@NgModule({
  declarations: [
    CodeTribePage,
  ],
  imports: [
    IonicPageModule.forChild(CodeTribePage),
  ],
})
export class CodeTribePageModule {}
