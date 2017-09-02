import { Component } from '@angular/core';
import {TeacherService} from './service/teacher.service';
import  {Teacher} from './models/teacher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title: string = "los productos del Año";

    selected: Teacher;

    teachers: Teacher[];

    constructor(private teacherService: TeacherService) {

    }

    getTeachers() {
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    }

    ngOnInit(): void {
        this.getTeachers();
    }

    onSelect(teacher: Teacher) {
        this.selected = teacher;
    }
}
