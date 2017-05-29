import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopList } from '../shop-list/shop-list';
/*
  Generated class for the OrderConfirmPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html'
})
export class OrderConfirm {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public event = {
  	month: '2017-05-26'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  pindahReview(){
	this.navCtrl.push(ShopList);
  }
}
