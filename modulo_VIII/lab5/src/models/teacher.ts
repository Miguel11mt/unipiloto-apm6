import { Person } from './person';

export class Teacher extends Person {

   profession: string;   


    constructor(id: number, firts_name: string, last_name: string, courses: Array<string>, profession: string) {
        super(id, firts_name, last_name, courses);
        this.profession = profession;
    }
}