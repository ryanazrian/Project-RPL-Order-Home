import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
var dateNow = new Date();

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pembeli : any;
  tanggalpesan = dateNow;
  user_id : number;
  name : string;
  phonenumber : number;
  alamat : string;

  constructor(public navCtrl: NavController,public userData: UserDataProvider, public http: Http,public alertCtrl: AlertController) {
  }

  ngAfterViewInit() {
    // this.getPenjual();
    this.getdataPembeli();
  }

  getdataPembeli(){
    this.http.get("http://127.0.0.1/OrderHome/BackEnd/getOrder.php?user="+15).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.pembeli = response.data;  
      }
    }); 
  }

  // getPenjual() {
  //   this.userData.getUsername().then((username) => {
  //     this.user_id = user_id;
  //   });
  // }
   selesai(data){
    // let id_patient = data.id_patient;
    let confirm = this.alertCtrl.create({
      title: 'Anda yakin?',
      // message: 'B pasien tidak bisa dibatalkan',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            // console.log('Agree clicked');

            // this.http.get(this.data.BASE_URL+"/delete_patient.php?patient="+id_patient).subscribe(data => {
            //     let response = data.json();
            //     console.log(response);
            //     if(response.status=="200"){
            //       this.pasien= response.data;
            //       let alert = this.alertCtrl.create({
            //         title: 'Pasien Terhapus',
            //         subTitle: '',      
            //         buttons: ['OK']
            //       });
            //       this.vibration.vibrate(1000);
            //       alert.present();
                
            //       this.ionViewWillEnter();   
            //     }
            //     else {
            //           let alert = this.alertCtrl.create({
            //         title: 'Gagal Menghapus',
            //         subTitle: '',      
            //         buttons: ['OK']
            //       });
            //       this.vibration.vibrate(1000);
            //       alert.present();
            //     }
            //   });
            }

          }
        
      ]
    });
    confirm.present();
  }

}

