import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
/*
  Generated class for the ShopListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html'
})
export class ShopList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopListPagePage');
  }
  pesan(){
		this.navCtrl.push(OrderPage);
	}

}
