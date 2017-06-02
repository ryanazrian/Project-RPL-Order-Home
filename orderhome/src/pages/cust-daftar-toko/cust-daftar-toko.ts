import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data';
import { Http } from '@angular/http';
import { CustOrder } from '../cust-order/cust-order';
/*
  Generated class for the CustDaftarTokoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cust-daftar-toko',
  templateUrl: 'cust-daftar-toko.html'
})
export class CustDaftarToko {
  shop : any;
  constructor(public navCtrl: NavController, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Daftartoko');
  }
  ionViewWillEnter() {
    this.getdataToko();
   }
   getdataToko(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/HomeCustomer.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.shop = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
	}
  pesan(){
  		this.navCtrl.push(CustOrder);
  	}
}
