import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	 @Input()
    product: Teacher;

}
