import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CustReviewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cust-review',
  templateUrl: 'cust-review.html'
})
export class CustReview {

    
    bintang=0;
    constructor(public navCtrl: NavController) {
    }

    kurangbintang(){
  		if(this.bintang > 0 && this.bintang <= 5){
        this.bintang--;
      }
  	}

  	tambahbintang(){
      if(this.bintang < 5){
  		this.bintang++;
  	}
    }
  }
