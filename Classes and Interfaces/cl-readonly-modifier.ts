class Department {
    private employees: string[] = [];

    // The readonly modifier exists only in Typescript. It prevents writing to a property after initialization
    constructor(private readonly id: string, public name: string) {
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2'; this is not possible because of the readonly modifier
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const accounting = new Department('d1', 'Accounting');
  
  accounting.addEmployee('Max');
  accounting.addEmployee('Manu');
  
  accounting.employees[2] = 'Anna';
  
  accounting.describe();
  accounting.name = 'NEW NAME';
  accounting.printEmployeeInformation();
  
  const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  accountingCopy.describe();