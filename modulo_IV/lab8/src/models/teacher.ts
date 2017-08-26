export class Person {
  id: number;
  age: number;
  name: string;
  lastname: string;

  constructor(id: number, age: number, name: string, lastname: string) {
    this.id = id;
    this.age = age;
    this.name = name;
    this.lastname = lastname;
  }
}

export class Teacher extends Person {
  profession: string;
  grades: Array<number>;
  groups: Array<string>;

  constructor(id: number, age: number, name: string, lastname: string, profession: string, grades: Array<number>, groups: Array<string>) {
    super(id, age, name, lastname);
    this.profession = profession;
    this.grades = grades;
    this.groups = groups;
  }
}