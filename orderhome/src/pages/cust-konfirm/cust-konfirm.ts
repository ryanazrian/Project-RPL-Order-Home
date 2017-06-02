import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-konfirmasi',
  templateUrl: 'konfirmasi.html'
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
	
  }

}
