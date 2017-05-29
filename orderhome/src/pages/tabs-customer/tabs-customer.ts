import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { ShopList } from '../shop-list/shop-list';
import { LocationSelect } from '../location-select/location-select';
import { OrderConfirm } from '../order-confirm/order-confirm';

/*
  Generated class for the TabsCustomerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs-customer',
  templateUrl: 'tabs-customer.html'
})
export class TabsCustomer {

  tab1Root = ShopList;
  tab2Root = OrderPage;
  tab3Root = LocationSelect;
  tab4Root = OrderConfirm;



}
