import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { UserDataProvider } from '../../providers/user-data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: {username?: string,user_id?:string} = {};
  shop:{shop_id?: string,shop_name?:string}={};
  username:string;
  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public http: Http,
              public popoverCtrl: PopoverController,
              public userDataProvider: UserDataProvider) {

  }
  ionViewDidLoad() {
    this.getID();
  }
  getID() {
      this.userDataProvider.getID().then((username) => {
        this.user.user_id = username;
      });
    }
  getShop(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/getAddres.php?user="+this.user.user_id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        let shop=response.data;
        this.userDataProvider.shop(shop.shop_id,shop.shop_name);
        console.log(shop);  //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }
  ionViewWillEnter(){

  }
  presentPopover(event: Event) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({ ev: event });
    }
}
