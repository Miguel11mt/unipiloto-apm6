import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Student} from "../models/student";

export class InMemoryStudentService implements InMemoryDbService {
  createDb() {
    let students: Array<Student> = [
      {
        id: 1,
        name: "Fernando Vargas",
        lastname: "Quintero",
        age: 43,
        group: "A",
        grade: 20
      },
      {
        id: 2,
        name: "Esteban Garcia",
        lastname: "Contreras",
        age: 43,
        group: "B",
        grade: 20
      },
      {
        id: 3,
        name: "Hernan Torres",
        lastname: "Rodriguez",
        age: 14,
        group: "C",
        grade: 20
      }
    ];

    return {students};
  }

}
