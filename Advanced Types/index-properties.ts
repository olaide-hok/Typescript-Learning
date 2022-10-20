// Index types are features that allows flexible object creation regarding the type of properties they might hold.

// Index types are defined using square brackets then any name of choice then a colon, then the value type of the property except a boolean then the value property. For example

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};

// The key above can be a number which can be compiled as a string but not vice versa.