import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { StudentDetailComponent } from './students/detail.component.student';
//import { TeacherDetComponent } from './teachers/detail.component.teacher';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    DriversComponent,
    VehiclesComponent,
    StudentDetailComponent
    //TeacherDetailComponent
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
