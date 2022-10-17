// Type Guard involves checking if a method or object exists before it is used.
type Admin1 = {
    name: string;
    privileges: string[];
}

type Employee1 = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee1 = Admin & Employee;

const el1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
};


type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal1 = Combinable1 & Numeric1;

// Type Guards helps when using union types
function addd (a: Combinablee, b: Combinablee) {
    if (typeof a === 'string' || typeof b === 'string') { // this is an example of type guard which allows the use union type flexibility  which ensures code runs correctly at runtime
        return a.toString() + b.toString();
    }
    return a + b
}

type UnknownEmployee = Employee1 | Admin1;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate);
    }
}

printEmployeeInformation(el1)
//creating an employee parameter on the fly
printEmployeeInformation({name: "Kunle", startDate: new Date()});

// Using the 'instance of' Type Guard
class Car {
    drive () {
        console.log("Driving a car.");
    }
}

class Truck {
    drive(){
        console.log('Driving a truck.');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);  
    }
}

type Vehicle = Car | Truck; // a union type
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
    if (vehicle instanceof Truck) { // type guard usage in typescript. classes are compiled to constructor function when used in typescript.
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);