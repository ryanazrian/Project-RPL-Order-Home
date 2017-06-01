import { Component } from '@angular/core';
import { NavController,Tabs } from 'ionic-angular';
import { AwalPage } from '../awal/awal';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
    templateUrl: 'about.html'
})
export class AboutPage {
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
	constructor(public navCtrl: NavController,public alertCtrl: AlertController,public http: Http){
		this.tab = this.navCtrl.parent;
	}

	galonkurang(){
		if (this.jumlahgalon > 0){
		this.jumlahgalon--;
		// this.galonharga = this.galonharga - 15000;
		}
	}

	galontambah(){
		this.jumlahgalon++;
		// this.galonharga = this.galonharga + 15000;
	}

	lpgkurang(){
		if (this.jumlahlpg > 0){
		this.jumlahlpg--;
		// this.hargalpg = this.hargalpg - 15000;
		}
	}

	lpgtambah(){
		this.jumlahlpg++;
		// this.hargalpg = this.hargalpg + 15000;
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad AlamatPage');
  }
pindahpage(){
  this.navCtrl.push(AwalPage);
} 
 
  
 }