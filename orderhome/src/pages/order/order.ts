import { Component } from '@angular/core';
import { LocationSelect } from '../location-select/location-select';
import {  NavController, NavParams, Tabs } from 'ionic-angular';

@Component({
  selector: 'order',
    templateUrl: 'order.html'
})
export class OrderPage {
  tab:Tabs;
	jumlahgalon=0;
	galonharga=0;
	hargalpg=0;
	jumlahlpg=0;
	constructor(public navCtrl: NavController){
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



	pindahAlamat(){
		this.navCtrl.push(LocationSelect);
	}
 }
