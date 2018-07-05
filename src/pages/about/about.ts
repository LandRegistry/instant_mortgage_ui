import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ContactPage } from '../contact/contact';
import { MortgageDetailsProvider } from '../../providers/mortgage-details/mortgage-details';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    @ViewChild(Content) content: Content;
    checkResults = {propertyCheck: '', identityCheck: '',affordabilityCheck:'', creditCheck:'',earningsCheck:''}
    
    constructor(public navCtrl: NavController, public http: Http, public md: MortgageDetailsProvider ) {
        this.startChecks();
    }

    startChecks() {
        var stop = false;
        this.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/property",{"uprn":"79984"},function (data, context) {
            // this.makePostRequest("http://localhost:4000/checks/property",{"uprn":"79984"},function (data, context) {
        if (data.passed != true) { context.stop = true;}
            context.checkResults.propertyCheck = "Pass";
            context.content.resize();
        });


     setTimeout(function(stthis) {
        stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/identity",
        // stthis.makePostRequest("http://localhost:4000/checks/identity",
            {"":""},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.identityCheck = "Pass";
                context.content.resize();
            })

            },1000,this);

            console.log("TERM : ", this.md.getTerm())
         setTimeout(function(stthis) {
       stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/affordability",
    //    stthis.makePostRequest("http://localhost:4000/checks/affordability",
            {"uprn":"79984",
            "person_id":100000013,
            "term": stthis.md.getTerm(),
            "loan_amount":stthis.md.getLoanAmount()},
            function (data, context) {
                if (data.passed != true) { context.stop = true;}
                context.checkResults.affordabilityCheck = "Pass";
                context.content.resize();
            })

            },2000,this);

           setTimeout(function(stthis) {
       stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/credit",
    //    stthis.makePostRequest("http://localhost:4000/checks/credit",
            {"person_id":"100000013"},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.creditCheck = "Pass";
                context.content.resize();
            })

        },3000,this);

            setTimeout(function(stthis) {
        stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/earnings",
        // stthis.makePostRequest("http://localhost:4000/checks/earnings",
            {"person_id":"100000013"},
            function (data, context) {
            if (data.passed != true) { context.stop = true;}
                context.checkResults.earningsCheck = "Pass";
                context.content.resize();
            })
        },4000,this);


            // setTimeout(function(stthis) {
            //     if (!stthis.stop) {
            //     stthis.navCtrl.push(ContactPage);
            //     }
            // },5000,this);
  }

  loadNextPage() {
      this.navCtrl.push(ContactPage);
  }

  resizeContent () {
      this.content.resize();
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
