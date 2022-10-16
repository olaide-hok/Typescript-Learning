// Optional properties and/or methods can be declared in interfaces by adding the '?' in front of the property/method name

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add3: AddFn;

add3 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named1 {
  readonly name?: string;
  outputName?: string;
}

interface Greetable3 extends Named1 {
  greet(phrase: string): void;
}

class Person5 implements Greetable3 {
  name?: string;
  age = 30;

  constructor(n?: string) {
    // a default fallback value can be provided instead of an optional property
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user6: Greetable3;

user6 = new Person5();
// user1.name = 'Manu';

user6.greet("Hi there - I am");
console.log(user6);
