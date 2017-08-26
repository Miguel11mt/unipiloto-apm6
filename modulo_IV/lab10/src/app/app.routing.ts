import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'teachers',  component: TeachersComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}