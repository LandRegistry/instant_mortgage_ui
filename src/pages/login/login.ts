import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import { Http,Response,HttpModule, Headers,RequestOptions} from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
success='f';responsedata;firstname;lastname;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    var data = {
      type: "Buyer",
      id: "100000008",
      user: "admin"
  } 

  let headers = new Headers({
    'Content-Type': 'application/json'
});
let options = new RequestOptions({
    headers: headers
});
let body = JSON.stringify(data); 

console.log(body);

this.http.post('https://hmlr-ds-transactionapi.eu-gb.mybluemix.net/api/get/participant', body, options).subscribe(res => {
  
 this.responsedata= res.json();
 console.log(this.responsedata);
 console.log(this.responsedata.saleParticipantFirstName);
 console.log(this.responsedata.saleParticipantLastName);
 
   this.firstname=this.responsedata.saleParticipantFirstName,
  this.lastname=this.responsedata.saleParticipantLastName

});
   
  }
next(evt){
this.success='t';
}
nexteve(eve){
  this.navCtrl.push(HomePage);
}
}
