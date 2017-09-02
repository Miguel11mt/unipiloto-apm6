import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService} from "../../service/student.service";

@Component({
  selector: 'student-list-app',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	title: string = "los estudiantes  del Año";

    selected: Student;

    students: Student[];

  constructor(private studentService: StudentService) {

  }

  getStudents() {
    this.studentService.getStudent().then(students => this.students = students);
  }

  ngOnInit(): void {
    this.getStudents();
  }


  onSelect(student: Student){
    this.selected = student;
  }

}
