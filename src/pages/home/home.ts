import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { MortgageDetailsProvider } from '../../providers/mortgage-details/mortgage-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  term;
  loan_amount;
  constructor(public navCtrl: NavController,  public md: MortgageDetailsProvider){

  }
  

  nextButton(evt) {
  
  console.log(evt, this.term, this.loan_amount);
    this.md.setTerm(this.term);
    this.md.setLoanAmount(this.loan_amount);
  console.log(this.navCtrl);
    this.navCtrl.push(AboutPage);
    console.log(this.md.getTerm());
  }

  

  
}
