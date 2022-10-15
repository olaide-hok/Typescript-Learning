// Interface can be used as an alternative to a custom type definition for functions. Functions are also objects.


// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number; // an anonymous function i.e. function without a name
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person3 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user5: Greetable;

user5 = new Person3("Max");
// user5.name = 'Manu';

user5.greet("Hi there - I am");
console.log(user5);
