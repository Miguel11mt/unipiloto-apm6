import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any = HomePage;

  constructor(public navCtrl: NavController, device: Device) {        
    console.log('Device UUID is: ' + this.device.uuid);      
  }  


}
