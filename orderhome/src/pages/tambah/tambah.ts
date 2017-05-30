import { NavController, Platform, ViewController } from 'ionic-angular';
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import {  NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '../../providers/google-maps';
import { TabsPage} from '../tabs/tabs';
import { Http } from '@angular/http';
import { UserDataProvider } from '../../providers/user-data';



@Component({
  selector: 'page-tambah',
  templateUrl: 'tambah.html'
})
export class TambahAddresPage {
  user: {username?: string,user_id?:string} = {};
  lokasi: {address_user?: string,lat?: string, lng?: string} = {};


      @ViewChild('map') mapElement: ElementRef;
      @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

      latitude: number;
      longitude: number;
      autocompleteService: any;
      placesService: any;
      query: string = '';
      places: any = [];
      searchDisabled: boolean;
      saveDisabled: boolean;
      location: any;

      constructor(public navCtrl: NavController,
                  public zone: NgZone,
                  public maps: GoogleMaps,
                  public platform: Platform,
                  public loadCtrl: LoadingController,
                  public toastCtrl: ToastController,
                  public http: Http,
                  public userDataProvider:UserDataProvider,
                  public geolocation: Geolocation,
                  public viewCtrl: ViewController) {
                  this.searchDisabled = true;
                  this.saveDisabled = true;
                }

                ionViewWillEnter() {
                     this.getID();
                 }
                 getID() {
                     this.userDataProvider.getID().then((username) => {
                       this.user.user_id = username;
                     });
                   }

      ionViewDidLoad(): void {

          let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

              this.autocompleteService = new google.maps.places.AutocompleteService();
              this.placesService = new google.maps.places.PlacesService(this.maps.map);
              this.searchDisabled = false;

          });

      }

      selectPlace(place){

          this.places = [];

          let location = {
              lat: null,
              lng: null,
              name: place.name
          };

          this.placesService.getDetails({placeId: place.place_id}, (details) => {

              this.zone.run(() => {

                  location.name = details.name;
                  location.lat = details.geometry.location.lat();
                  location.lng = details.geometry.location.lng();
                  this.saveDisabled = false;

                  this.maps.map.setCenter({lat: location.lat, lng: location.lng});

                  this.location = location;

              });

          });

      }

      searchPlace(){

          this.saveDisabled = true;

          if(this.query.length > 0 && !this.searchDisabled) {

              let config = {
                  types: ['geocode'],
                  input: this.query
              }

              this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

                  if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

                      this.places = [];

                      predictions.forEach((prediction) => {
                          this.places.push(prediction);
                      });
                  }

              });

          } else {
              this.places = [];
          }

      }

      save(){
        let input = JSON.stringify({
                   user_id:this.user.user_id,
                   addres_user: this.location.name,
                   latitude: this.location.lat,
                   longitude: this.location.lng,
                 });
                 this.http.post("http://127.0.0.1/OrderHome/BackEnd/CreateAddres.php",input).subscribe(data => {

                      let response = data.json();
                      if(response.status == 200){
                        let user=response.data;
                        //this.userDataProvider.addres(this.lokasi.address_user,this.lokasi.lat,this.lokasi.lng);
                         this.navCtrl.setRoot(TabsPage);

                      }


       });
      }
      close(){
          this.viewCtrl.dismiss();
      }



  }
