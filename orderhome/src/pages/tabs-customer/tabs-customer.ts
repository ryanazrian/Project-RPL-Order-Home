import { Component } from '@angular/core';
import { CustDaftarToko } from '../cust-daftar-toko/cust-daftar-toko';


@Component({
  templateUrl: 'tabs-customer.html'
})
export class TabsCustomer {
  tab1Root = CustDaftarToko;

}
