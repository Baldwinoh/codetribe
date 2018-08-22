
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
details=[];
codetribes=[];
editedProfile=[];
 codetribeInfo=[];
  constructor(){
    
    this.codetribes =
    [{name:'Baldwinoh Mahole',gender:'Gender: Male', email:'baldwinoh@gmail.com', CellNo:'Cell No:087 259 8895',password:'baldwin', age: '25', image:'boldwin.jpg'},
    {name:'Amukelani Hlungwani', gender:'Gender: Female', email:'Amukelani@gmail.com', CellNo:'Cell No:087 259 1111', password:'Amukelani',age: '25',image:'love.jpg'},
    {name:'Petunia Dzimbahe',gender:'Gender: Female', email:'Petunia@gmail.com', CellNo:'Cell No:087 259 6658',password:'Petunia',age: '25', image:'berry.jpg'}, 
    {name:'Romeo Boxahuku',gender:'Gender: Male', email:'Romeo@gmail.com', CellNo:'Cell No:087 259 2058', password:'Romeo',age: '25',image:'beauty.jpg'},
    {name:'Tshunxekani Mbhombhi',gender:'Gender: Female', email:'Mbhombhi@gmail.com', CellNo:'Cell No:087 259 6987', password:'Tshunxekani',age: '25',image:'opra.jpg'},
    {name:'Nompilo Chauke',gender:'Gender: Female', email:'Nompilo@gmail.com', CellNo:'Cell No:087 259 1000',password:'Nompilo',age: '25', image:'beautys.jpg'},
    {name:'Nkhensani Mathebula',gender:'Gender: Female', email:'Nkhensani@gmail.com', CellNo:'Cell No:087 259 2000',password:'Mathebula',age: '25',image:'zim.jpg'},
    {name:'Thully Thulani',gender:'Gender: Female', email:'Thully@gmail.com', CellNo:'Cell No:087 259 3000',password:'Thulani',age: '25',image:'yess.jpg'},
    {name:'Stembhiso Xihosana',gender:'Gender: Male', email:'Xihosana@gmail.com', CellNo:'Cell No:087 259 6321',password:'Xihosana',age: '25',image:'jobs.jpg'}];
  
  }

  addDetails(index:number){
  this.details.push(this.codetribes[index]);
  }

  getDetails(){
    return this.details;
  }

  getCodeTribers(){
    return this.codetribes;
  }

  getEditedProfile(){
    return this.editedProfile;
  }
  
  editProfile(index:number){
    this.editedProfile.push(this.codetribes[index]);
  }
}

