import { Component } from '@angular/core';
import { CustDaftarToko } from '../cust-daftar-toko/cust-daftar-toko';
import { CustOrder } from '../cust-order/cust-order';
import { CustKonfirm } from '../cust-konfirm/cust-konfirm';

@Component({
  templateUrl: 'tabs-customer.html'
})
export class TabsCustomer {
  tab1Root = CustDaftarToko;
  tab2Root = CustOrder;
  tab3Root = CustKonfirm;

}
