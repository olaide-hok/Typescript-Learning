// Interesection types allows for type combination

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
};

// Intersection types are used in conjuction with object types as shown above, they can be used with any type e.g.

type Combinablee = string | number;
type Numeric = number | boolean;

type Universal = Combinablee & Numeric;