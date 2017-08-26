import { Component, Input } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './detail.component.html'
})

export class TecaherDetailComponent {
  @Input()
  teacher: Teacher;
}