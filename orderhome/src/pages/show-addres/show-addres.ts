import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular';
import { UserAddresPage } from '../tambah-addres/tambah-addres';
import { UserDataProvider } from '../../providers/user-data';
import { Http } from '@angular/http';
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
alamat: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
               public userDataProvider:UserDataProvider,
              public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAddresPage');
    this.getID();
    this.getUsername();

  }
  ionViewWillEnter() {
    this.getAlamat();
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


    add() {
      this.navCtrl.push(UserAddresPage);
    }
    getAlamat(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/getAddres.php?user=49").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.alamat= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }
}
