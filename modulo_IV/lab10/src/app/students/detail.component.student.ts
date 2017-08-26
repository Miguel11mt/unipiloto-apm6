import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: 'detail.component.student.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}