import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMap } from 'ionic-native';

/*
  Generated class for the OrderAddresPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google: any;
@Component({
  selector: 'page-order-addres',
  templateUrl: 'order-addres.html'
})
export class OrderAddresPage {
  @ViewChild('map') mapElement: ElementRef;
    map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillEnter() {
    console.log("rest");
    let latLng = new google.maps.LatLng(-6.560284, 106.7233045);
    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
