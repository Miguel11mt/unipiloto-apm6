import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginDetailPage } from './login-detail';

@NgModule({
  declarations: [
    LoginDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginDetailPage),
  ],
})
export class LoginDetailPageModule {}
