// private modifier are only accessible only inside the base class that they are definded and not the inheriting class that extends the base class.

// The 'protected'  modifier unlike private allows for inheritance in extendings classes. 
class Department {
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
    
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name); // the protected modifier allows this to be possible

      //method from the base class can be overridden by the extending class.
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it = new ITDepartment('d1', ['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  const accounting = new AccountingDepartment('d2', []);
  
  accounting.addReport('Something went wrong...');
  
  accounting.addEmployee('Max');
  accounting.addEmployee('Manu');
  
  accounting.printReports();
  accounting.printEmployeeInformation();