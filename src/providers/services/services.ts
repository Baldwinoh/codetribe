
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  personalDetails=['Baldwin Mahole', 'Amukelani Chauke', 'Petunia Dzimbahe', 'Tshunxekani Mbhombhi ', 'Nompilo Chauke', 'Nkhensani Mathebula', 'Thully Thulani', 'Stembhiso Chauke'];

  constructor(){
    
    console.log('Hello ServicesProvider Provider');
  }

  getDetail(){
    return this.personalDetails;
  }
}

