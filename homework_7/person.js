/*5.Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters. 
It should have a toString method.*/

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(newFName) {
    this._firstName = newName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newLName) {
    this._lastName = newLName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  toString() {
    return (
      "Name: " +
      this.firstName +
      " " +
      this._lastName +
      "\n" +
      "Gender: " +
      this._gender +
      "\n" +
      "Age: " +
      this._age
    );
  }
}
let passedExams = [];
class Student extends Person {
  constructor(firstName, lastName, gender, age, program = [], year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get program() {
    return this._program;
  }

  set program(newProgram) {
    this._prog = newProgram;
  }

  toString() {
    return (
      super.toString() +
      "\n" +
      "Program: " +
      this._program +
      "\n" +
      "Year: " +
      this._year +
      "\n" +
      "Fee: " +
      this._fee
    );
  }

  passExam(program, grade) {
    if (grade >= 50 && this._program.includes(program)) {
      passedExams.push(program);
    }
    if (passedExams.length == this._program.length) {
      this._year += 1;
    }
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._pay = pay;
  }
  get program() {
    return this._prog;
  }

  set program(newProgram) {
    this._program = newProgram;
  }
  get pay() {
    return this._pay;
  }
  set pay(newPay) {
    this._pay = newPay;
  }
  toString() {
    return (
      super.toString() +
      "\n" +
      "Program: " +
      this._program +
      "\n" +
      "Pay: " +
      this._pay
    );
  }
}

const person1 = new Person("Lilit", "Nahapetyan", "F", "20");
const student1 = new Student(
  "Lilit",
  "Nahapetyan",
  "F",
  "20",
  ["JS", "Algebra"],
  2019,
  500
);
student1.passExam("JS", 100);
console.log(student1._year);
student1.passExam("Algebra", 90);
console.log(student1._year);
console.log(student1.toString());
