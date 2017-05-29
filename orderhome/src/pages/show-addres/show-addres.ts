import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular';
import { UserAddresPage } from '../tambah-addres/tambah-addres';
import { UserDataProvider } from '../../providers/user-data';
/*
  Generated class for the ShowAddresPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-show-addres',
  templateUrl: 'show-addres.html'
})
export class ShowAddresPage {
user: {username?: string,user_id?:string} = {};
lokasi:{lat?: number, lng?: number, address_user?: string, addres_name?: string}={};


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
               public userDataProvider:UserDataProvider,
              public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAddresPage');
    this.getID();
    this.getAddresName();
    this.getUsername();
    this.getAddresUser();
  }
  ionViewWillEnter() {

   }
   getID() {
       this.userDataProvider.getID().then((username) => {
         this.user.user_id = username;
       });
     }
     getUsername() {
       this.userDataProvider.getUsername().then((username) => {
         this.user.username = username;
       });
     }
     getAddresName() {
         this.userDataProvider.getAddresName().then((username) => {
           this.lokasi.addres_name = username;
         });
       }
     getAddresUser() {
           this.userDataProvider.getAddresUser().then((username) => {
             this.lokasi.address_user = username;
           });
         }

add() {
      this.navCtrl.push(UserAddresPage);
    }

}
