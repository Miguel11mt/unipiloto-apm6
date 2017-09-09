import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryStudentService } from './mock/in-memory-student.service';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { StudentService } from './service/student.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStudentService)
  ],
  providers: [StudentService, InMemoryStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
