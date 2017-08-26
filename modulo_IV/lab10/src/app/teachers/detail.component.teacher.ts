import { Component, Input } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: 'detail.component.teacher.html'
})

export class TeacherDetComponent {
  @Input()
  teacher: Teacher;
}
