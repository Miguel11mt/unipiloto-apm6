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

export class Student extends Person {
  level: number;
  curses: Array<number>;
  groups: Array<string>;

  constructor(id: number, age: number, name: string, lastname: string, level: number, curses: Array<number>, groups: Array<string>) {
    super(id, age, name, lastname);
    this.level = level;
    this.curses = curses;
    this.groups = groups;
  }
}