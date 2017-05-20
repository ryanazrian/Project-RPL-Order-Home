import { Component } from '@angular/core';
import { NavController,Tabs } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tab:Tabs;
  constructor(public navCtrl: NavController) {
    this.tab = this.navCtrl.parent;
  }

  pesan(){
    this.tab.select(2);
    //this.navCtrl.push(ContactPage);
  }

}
