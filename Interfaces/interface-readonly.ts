// A 'readonly' modifier can be added which means it is set once and can't be change once the object has been initialized.

interface Greetable1 {
  readonly name1: string;

  greet(phrase: string): void;
}

class Person1 implements Greetable1 {
  name1: string;
  age = 30;

  constructor(n: string) {
    this.name1 = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name1);
  }
}

let user3: Greetable1;

user3 = new Person1("Max");
// user3.name = 'Manu'; this shows that the initial value set cannot be changed due to the readonly modifier.

user3.greet("Hi there - I am");
console.log(user3);
