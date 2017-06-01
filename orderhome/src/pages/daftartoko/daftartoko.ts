import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-daftartoko',
  templateUrl: 'daftartoko.html',
})
export class Daftartoko {
  rating : any;
  constructor(public navCtrl: NavController, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Daftartoko');
  }
   getdataPembeli(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/getRating.php?user="+3).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.rating = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    }); 
	}
}
