/*2.Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().
It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.*/

class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }
  get getId() {
    return this.id;
  }

  get getPosition() {
    return this.position;
  }

  get getSalary() {
    return this.salary;
  }

  get getWorkingHours() {
    return this.workingHours;
  }

  set setPosition(newPosition) {
    this.position = newPosition;
  }

  set setSalary(newSalary) {
    this.salary = newSalary;
  }

  set setWorkingHours(newWorkingHours) {
    this.workingHours = newWorkingHours;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getAnnularSalary() {
    return 12 * this.salary;
  }

  raiseSalary(percent) {
    return (this.salary * (100 + percent)) / 100;
  }
}

const emp1 = new Employee(
  1010,
  "Lilit",
  "Nahapetyan",
  "junior developer",
  150000,
  10
);
console.log(emp1.getFullName());
console.log(emp1.raiseSalary(20));
