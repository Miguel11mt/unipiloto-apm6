import { Component } from '@angular/core';
import {Teacher} from '../models/teacher';


const TEACHERS: Teacher[] = [
  {
    id: 65656546,
    age: 34, 
    name: "esteban",
    lastname: "garcia",
    profession: "Matematica",
    grades: [9,10,11],
    groups: ["9A","10B","11A"]
  },
  {
    id: 546456546,
    age: 34, 
    name: "german",
    lastname: "lopez",
    profession: "Fisico",
    grades: [5,7,8,9,6],
    groups: ["6B","7B","11C"]
  },
  {
    id: 456556,
    age: 34, 
    name: "hernan",
    lastname: "quintero",
    profession: "Quimico",
    grades: [4,5],
    groups: ["5A","9B"]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "Información profesores:";

  selected: Teacher;

  teachers: Teacher[] = TEACHERS;

  onSelect(teacher: Teacher) {
    this.selected = teacher;
  }
}