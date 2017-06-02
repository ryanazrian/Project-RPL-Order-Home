import { Component, ViewChild } from '@angular/core';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { LocationSelect } from '../pages/location-select/location-select';
import { Connectivity } from '../providers/connectivity-service';
import { GoogleMaps } from '../providers/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { Ionic2RatingModule } from 'ionic2-rating';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsCust } from '../pages/tabs-cust/tabs-cust';
import { Login } from '../pages/login/login';
import { Daftartoko } from '../pages/daftartoko/daftartoko';
import { OrderAddresPage } from '../pages/order-addres/order-addres';
import { PilihPage } from '../pages/pilih/pilih';
import { SignPage } from '../pages/sign/sign';
import { SignPageSeller } from '../pages/signup-seller/signup-seller';
import { AccountPage } from '../pages/account/account';
import { PopoverPage } from '../pages/popover/popover';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { ShowAddresPage } from '../pages/show-addres/show-addres';
import { ShopList } from '../pages/shop-list/shop-list';
import { TabsCustomer } from '../pages/tabs-customer/tabs-customer';
import { OrderConfirm } from '../pages/order-confirm/order-confirm';
import { UserAddresPage } from '../pages/tambah-addres/tambah-addres';
import { AwalPage } from '../pages/awal/awal';
import { CustDaftarToko } from '../pages/cust-daftar-toko/cust-daftar-toko';
import { CustOrder } from '../pages/cust-order/cust-order';
import { CustKonfirm } from '../pages/cust-konfirm/cust-konfirm';
import { CustReview } from '../pages/cust-review/cust-review';

import { StatusBar } from 'ionic-native';
import { Splashscreen } from 'ionic-native';
import { UserDataProvider } from '../providers/user-data';
import { Http } from '@angular/http';


@Component({
  templateUrl: 'app.template.html'
})

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Daftartoko,
    Login,
    AwalPage,
    OrderAddresPage,
    PilihPage,
    SignPage,
    SignPageSeller,
    AccountPage,
    PopoverPage,
    UpdateProfilePage,
    ShowAddresPage,
     LocationSelect,
     ShopList,
     TabsCustomer,
     OrderConfirm,
     UserAddresPage,
     CustDaftarToko,
     CustOrder,
     CustKonfirm,
     CustReview




  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Daftartoko,
    Login,
    OrderAddresPage,
    PilihPage,
    SignPage,
    SignPageSeller,
    AccountPage,
    PopoverPage,
    UpdateProfilePage,
    ShowAddresPage,
    AwalPage,
     LocationSelect,
     ShopList,
     TabsCustomer,
     OrderConfirm,
     UserAddresPage,
     CustDaftarToko,
     CustOrder,
     CustKonfirm,
     CustReview




  ],
  providers: [
    StatusBar,
    Splashscreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    Storage,
    Connectivity,
    GoogleMaps,
    Network,
    Geolocation,

  ]

})
export class AppModule {}
