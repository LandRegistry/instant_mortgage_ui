import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MortgageDetailsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MortgageDetailsProvider {

  term;
  loan_amount;
  
  constructor(public http: Http) {
    console.log('Hello MortgageDetailsProvider Provider');
  }

   getTerm () {
      console.log("Getting term", this.term);
      return this.term;
   }
   setTerm(t) {
      this.term = t;
      console.log("Setting term", this.term);
   }
   
   getLoanAmount() {
      return this.loan_amount;
   }
   setLoanAmount(amt) {
    this.loan_amount = amt;
   }

}
