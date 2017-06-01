import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { UserDataProvider } from '../../providers/user-data';
import { NgForm } from '@angular/forms';
/*
  Generated class for the Awal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-awal',
  templateUrl: 'awal.html'
})
export class AwalPage {
  submitted = false;
	jumlahgalon=0;
	galonharga=0;
	hargalpg=0;
	jumlahlpg=0;
  brand:string;
  price:number;
  quantity:number;
  type:string;
  shop_id:number;
  barang:any;
  temp:number;
  user
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public http: Http,  public data:UserDataProvider){
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AwalPage');
  }

ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getID().then((data) => {
      console.log(data);
      this.shop_id = data.user_id;
     
    })

    // this.temp=3;

  }
	galonkurang(){
		if (this.jumlahgalon > 0){
		this.jumlahgalon--;
		// this.galonharga = this.galonharga - 15000;
		}
	}

	galontambah(){
		this.jumlahgalon++;
		// this.galonharga = this.galonharga + 15000;
	}

	lpgkurang(){
		if (this.jumlahlpg > 0){
		this.jumlahlpg--;
		// this.hargalpg = this.hargalpg - 15000;
		}
	}

	lpgtambah(){
		this.jumlahlpg++;
		// this.hargalpg = this.hargalpg + 15000;
	}
 tambahbarang(){
    // this.submitted = true;
     
    let input = JSON.stringify({
        brand:this.brand,
        price:this.price,
        // quantity:this.quantity,
        type:this.type
        // shop_id:this.temp
      });
      console.log(input); 
     this.http.post("http://127.0.0.1/OrderHome/BackEnd/StockInsert.php?shop_id"+this.shop_id,input).subscribe(data => {
      let response = data.json();
      
      if(response.status=="200"){
        this.barang = response.data;  
      }
    });
     let alert = this.alertCtrl.create({
                title: 'Barang berhasil ditambahkan',
                subTitle: '',   
                buttons: ['OK']
              });
              alert.present();
  

 }







// tambahbarang(form: NgForm){
//     this.submitted = true;
//      if(form.valid){
//     let input = JSON.stringify({
//         brand:this.brand,
//         price:this.price,
//         quantity:this.quantity,
//         type:this.type,
//         shop_id:this.shop_id
//       });
//      this.http.post("http://127.0.0.1/OrderHome/BackEnd/StockInsert.php",input).subscribe(data => {
//       let response = data.json();
//       console.log(response);
//       if(response.status=="200"){
//         this.barang = response.data;  
//       }
//     });
//      let alert = this.alertCtrl.create({
//                 title: 'Barang berhasil ditambahkan',
//                 subTitle: '',   
//                 buttons: ['OK']
//               });
//               alert.present();
//   }

//  }






  }
