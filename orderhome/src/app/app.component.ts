import { Component,ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from 'ionic-native';
import { Splashscreen } from 'ionic-native';
import { AccountPage } from '../pages/account/account';
import { ShowAddresPage } from '../pages/show-addres/show-addres';
import { TabsPage } from '../pages/tabs/tabs';

import { Login } from '../pages/login/login';
@Component({
  templateUrl: 'app.template.html'
})
export class MyApp {
  rootPage:any = Login;
 @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPageAccount(){
    this.nav.setRoot(AccountPage);
  }
  openPageAddres(){
    this.nav.setRoot(ShowAddresPage);
  }
  openPage1(){
    this.nav.setRoot(TabsPage);
  }
}
