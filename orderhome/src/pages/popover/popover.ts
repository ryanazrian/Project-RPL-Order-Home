import { Component } from '@angular/core';
import { Login } from '../login/login';
import { App, NavController, ModalController, ViewController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="logout()">Log out</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    public userData: UserDataProvider
  ) { }

  logout() {
    this.userData.logout();
    this.navCtrl.setRoot(Login);
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}
