import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public image: string;

  constructor(public navCtrl: NavController,private camera: Camera) {
  }
  
  




 public getPicture() {
  	const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

  	this.camera.getPicture(options).then(imageData => {
 		this.image = 'data:image/jpeg;base64,' + imageData;
		}, err => {
			console.error(err);
	});
  }

}








































