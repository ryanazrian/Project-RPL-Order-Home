import { Component } from '@angular/core';
import { CustReview } from '../cust-review/cust-review';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'cust-konfirm',
  templateUrl: 'cust-konfirm.html'
})
export class CustKonfirm {

  constructor(public navCtrl: NavController) {

  }

  public event = {
  	month: '2017-05-26'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  pindahReview(){
	this.navCtrl.push(CustReview);
  }

}
