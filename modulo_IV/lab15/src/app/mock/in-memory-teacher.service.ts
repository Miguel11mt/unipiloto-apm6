import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Teacher} from "../models/teacher";

export class InMemoryTeacherService implements InMemoryDbService {
  createDb() {
    let teachers: Array<Teacher> = [
      {
        id: 1,
        age: 22,
        name: "alfredo varela",
        lastname: "jimenez"
      },
      {
        id: 2,
        age: 22,
        name: "alfredo varela",
        lastname: "jimenez"
      },
      {
        id: 3,
        age: 22,
        name: "alfredo varela",
        lastname: "jimenez"
      }
    ];

    return {teachers};
  }

}
