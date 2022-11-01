// in the tsconfig file, under the 'Experimental Options' enable the 'experimentalDecorators: true'

// A decorator is just a function applied to a class in a certain way. May start with or without an uppercase character.

// Decorators executes when the class is defined not when the class is used to instantiate an object.

function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class PersonD {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new PersonD();

console.log(pers);
