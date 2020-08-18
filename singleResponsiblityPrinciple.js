/*
# SOLID, What the heck SOLID means? 

The SOLID principles are useful when constructing both individual modules or larger architectures. 
SOLID stands for : 

S - Single responsiblity prnciple(SRP)
O - Open closed principle
L - Liskov substitution principle
I - Interface segrigation
D - Depandency inversion


SRP- Single responsiblity principle says that Each module, Function or class should have one and only one reason to change. Lets uderstand it with the code
below.

*/

class Employee {
  constructor(name, age, reportHours, pay) {
    this.name = name;
    this.age = age;
    this.reportHours = reportHours;
    this.pay = pay;
  }

  getEmployeeDetails() {
    const salary = new Salary(this.pay, 1000, 2);
    console.log(`
    name: ${this.name}\n
    age: ${this.age}\n
    reporting hour: ${this.reportHours}\n
    salary: ${salary.calculateSalary()} 
    `);
  }
}

class Salary {
  constructor(pay, tds, totalLeaves) {
    this.pay = pay;
    this.tds = tds;
    this.totalLeaves = totalLeaves;
  }

  calculateSalary() {
    const reduceSalaryPerLeave = this.pay / 30;
    return this.pay - this.totalLeaves * reduceSalaryPerLeave - this.tds;
  }
}

const emp1 = new Employee("Ravi Ranjan Kumar", 22, "10:00", 20000);
emp1.getEmployeeDetails();
