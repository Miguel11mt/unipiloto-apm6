import { Person } from './person';

export class Student extends Person {

   grade: string;

   constructor(id: number, firts_name: string, last_name: string, courses: Array<string>, grade: string) {
        super(id, firts_name, last_name, courses);
        this.grade = grade;
   }
}