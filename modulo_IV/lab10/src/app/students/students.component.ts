import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student';

const STUDENTS: Student[] = [
  {
    id: 65656546,
    age: 39, 
    name: "Armando",
    lastname: "garcia",
    
    level: 4,
    curses: [5,8,11],
    groups: ["2E","4R","6T"]
  },
  {
    id: 546456546,
    age: 37, 
    name: "Esteban",
    lastname: "lopez",
    level: 2,
    curses: [4,6,18,56],
    groups: ["23A","14B","5A"]
  },
  {
    id: 456556,
    age: 31, 
    name: "Marcelo",
    lastname: "quintero",
    level: 4,
    curses: [2,3,4],
    groups: ["9A","10B","11A"]
  }
];


@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css']
})

export class StudentsComponent implements OnInit {

   title2: string = "Información Estudiantes:";

  selected2: Student;

  students: Student[] = STUDENTS;

  onSelect2(student: Student) {
    this.selected2 = student;
  }

  constructor() { }

  ngOnInit() {
  }

}
