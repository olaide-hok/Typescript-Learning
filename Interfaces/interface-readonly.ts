// A 'readonly' modifier can be added which means it is set once and can't be change once the object has been initialized.
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person1 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user3: Greetable;

user3 = new Person1("Max");
// user1.name = 'Manu'; this shows that the initial value set cannot be changed due to the readonly modifier.

user3.greet("Hi there - I am");
console.log(user1);
