import { Component } from '@angular/core';
import { NavController, NavParams,Tabs } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CustKonfirm } from '../cust-konfirm/cust-konfirm';
/*
  Generated class for the CustOrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cust-order',
  templateUrl: 'cust-order.html'
})
export class CustOrder {
  tab:Tabs;
  jumlahgalon=0;
  galonharga=0;
  hargalpg=0;
  jumlahlpg=0;
  brand:string;
  price:number;
  quantity:number;
  type:string;
  shop_id:number;
  barang:any;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public http: Http){
    this.tab = this.navCtrl.parent;
  }

  galonkurang(){
    if (this.jumlahgalon > 0){
    this.jumlahgalon--;
     this.galonharga = this.galonharga - 15000;
    }
  }

  galontambah(){
    this.jumlahgalon++;
    this.galonharga = this.galonharga + 15000;
  }

  lpgkurang(){
    if (this.jumlahlpg > 0){
    this.jumlahlpg--;
     this.hargalpg = this.hargalpg - 15000;
    }
  }

  lpgtambah(){
    this.jumlahlpg++;
     this.hargalpg = this.hargalpg + 15000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlamatPage');
  }
  pindahpage(){
  this.navCtrl.push(CustKonfirm);
  }


  }
