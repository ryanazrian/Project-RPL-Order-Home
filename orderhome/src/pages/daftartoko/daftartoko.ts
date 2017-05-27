import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
/**
 * Generated class for the Daftartoko page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-daftartoko',
  templateUrl: 'daftartoko.html',
})
export class Daftartoko {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Daftartoko');
  }
  pesan(){
  		this.navCtrl.push(OrderPage);
  	}
}
