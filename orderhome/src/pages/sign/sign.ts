import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { PilihPage} from '../pilih/pilih';

/*
  Generated class for the SignPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html'
})
export class SignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

masuk(){
  this.navCtrl.push(PilihPage);
}
}