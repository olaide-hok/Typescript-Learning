// The 'private' when assigned or used means the keyword is only accessible in side the class as against the 'public' keyword. The 'public' is the default modifier.

class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting =      Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employee[2] = "Anna" is not allowed due to the private modifier added to employee property.

// Private and public method modifiers are also possible in classes.

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();
