import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
var dateNow = new Date();

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  order : any;

  constructor(public navCtrl: NavController,public userData: UserDataProvider, public http: Http,public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.getdataPembeli();
   }

   getdataPembeli(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/getOrder.php?user=1").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.order = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  

}
