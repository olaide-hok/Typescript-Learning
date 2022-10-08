// The 'private' when assigned or used means the keyword is only accessible in side the class as against the 'public' keyword. The 'public' is the default modifier.


class Department {
    private employees: string[] = [];

    // Shorthand initialization used here in the constructor function  
    constructor(private id: string, public name: string) {
 
    }
  
    describe(this: Department) {
      console.log("Department: " + this.name);
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
  
  const accounting = Department("Accounting");
  
  accounting.addEmployee("Max");
  accounting.addEmployee("Manu");
  
  // accounting.employee[2] = "Anna" is not allowed due to the private modifier added to employee property.
  
  // Private and public method modifiers are also possible in classes.
  
  accounting.describe();
  accounting.name = "NEW NAME";
  accounting.printEmployeeInformation();
  