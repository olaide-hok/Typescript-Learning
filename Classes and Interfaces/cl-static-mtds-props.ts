// Static properties and methods allows adding of properties and methods to classes which are not accessed on the instance of the class but directly on the class. are often used for utility functions that can be mapped to be used logically or globally, or constants.

//NB when static method/property is/are added to a class, it/they cannot be accessed in or by the non-static parts of the class ie. the are detached from the class.

class Department {
    // Example of static property
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  // Example of static method
  describe(this: Department): {
    console.log(`Department (${this.id}): ${this.name}`);
    
  };

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
