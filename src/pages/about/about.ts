import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ContactPage } from '../contact/contact';
import { MortgageDetailsProvider } from '../../providers/mortgage-details/mortgage-details';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


 checkResults = {propertyCheck: '', identityCheck: '',affordabilityCheck:'', creditCheck:'',earningsCheck:''}

  constructor(public navCtrl: NavController, public http: Http, public md: MortgageDetailsProvider ) {
      this.startChecks();
  }

    startChecks() {

    var stop = false;
      this.makePostRequest("https://instant-mortgage-fulvous-telecourse.eu-gb.mybluemix.net/checks/property",{"uprn":"79984"},function (data, context) {
      if (data.passed != true) { context.stop = true;}
      context.checkResults.propertyCheck = "Passed: " +  data.passed;
    });


     setTimeout(function(stthis) {
        stthis.makePostRequest("https://instant-mortgage-fulvous-telecourse.eu-gb.mybluemix.net/checks/identity",
            {"":""},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.identityCheck = "Passed: " +  data.passed;
            })

            },1000,this);

            console.log("TERM : ", this.md.getTerm())
         setTimeout(function(stthis) {
        stthis.makePostRequest("https://instant-mortgage-fulvous-telecourse.eu-gb.mybluemix.net/checks/affordability",
            {"uprn":"79984",
            "person_id":100000013,
            "term": stthis.md.getTerm(),
            "loan_amount":stthis.md.getLoanAmount()},
            function (data, context) {
                if (data.passed != true) { context.stop = true;}
                context.checkResults.affordabilityCheck = "Passed: " +  data.passed;
            })

            },2000,this);

           setTimeout(function(stthis) {
        stthis.makePostRequest("https://instant-mortgage-fulvous-telecourse.eu-gb.mybluemix.net/checks/credit",
            {"person_id":"100000013"},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.creditCheck = "Passed: " +  data.passed;
            })

            },3000,this);


             setTimeout(function(stthis) {
        stthis.makePostRequest("https://instant-mortgage-fulvous-telecourse.eu-gb.mybluemix.net/checks/earnings",
            {"person_id":"100000013"},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.earningsCheck = "Passed: " +  data.passed;
            })

            },4000,this);

            setTimeout(function(stthis) {
                if (!stthis.stop) {
                stthis.navCtrl.push(ContactPage);
                }
            },5000,this);

  }



  makePostRequest(url,param,callback) {
        this.http.post(url,
        param)
        .subscribe(data => {
             callback(data.json(), this);
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }

}
